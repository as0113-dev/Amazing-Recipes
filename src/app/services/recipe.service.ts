import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { IResponse1, IResponse2, recipeIngredient, RecipeItem, recipeRating, recipeTags } from "../models/recipe-item.interface"
import { map } from "rxjs/operators";
import { Recipe } from "../models/recipe-item.class";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RecipeService {
    constructor(private httpService: HttpService) { }

    recipesList: Subject<RecipeItem[]> = new Subject();
    currentRecipe: Subject<RecipeItem> = new Subject();

    getRecipesList(item: string): void {
        this.httpService.getRecipesList(item).pipe(
            map((respData) => {
                console.log('starting map, initial resp: ', respData);

                let resultsArr;
                const recipesList: RecipeItem[] = [];
                //handle resp version 2
                if ((respData as IResponse2)?.results[0]?.recipes) {
                    resultsArr = (respData as IResponse2).results ?? [];
                    for (const key of resultsArr) {
                        key.recipes?.map((t) => {
                            const name = t.name ?? null;
                            const description = t.description ?? null;
                            const ingredients: recipeIngredient[] | any[] | null = [];
                            t?.sections?.forEach((s) => {
                                s?.components?.forEach((el) => {
                                    ingredients.push({
                                        name: el?.ingredient?.name ?? null,
                                        raw_text: el?.raw_text ?? null,
                                        extra_comment: el?.extra_comment ?? null
                                    })
                                })
                            }) ?? null;
                            const instructions: string[] | any[] | null = t?.instructions?.map((el) => {
                                return el.display_text
                            }) ?? null;
                            const tags: recipeTags[] | null = t?.tags?.map((el) => {
                                return {
                                    nameTag: el?.name,
                                    displayName: el?.display_name
                                }
                            }) ?? null;
                            const rating: recipeRating = { positive: t?.user_ratings?.count_positive, negative: t?.user_ratings?.count_negative } ?? undefined;
                            const serving = t.num_servings;
                            const imageURL = t.thumbnail_url;
                            const videoURL = t.original_video_url;
                            let recipeItem: RecipeItem = new Recipe(name, description, ingredients,
                                instructions, tags, rating, serving, imageURL, videoURL);
                            recipesList.push(recipeItem);
                        });
                    }
                    console.log('exiting map v2: ', recipesList.length);

                    return recipesList
                }
                //handle response v1
                resultsArr = (respData as IResponse1).results ?? [];
                for (const key of resultsArr) {
                    const name = key.name ?? null;
                    const description = key.description ?? null;
                    const ingredients: recipeIngredient[] | any[] | null = [];
                    key.sections?.forEach((s) => {
                        s.components?.forEach((el) => {
                            ingredients.push({
                                name: el?.ingredient?.name ?? null,
                                raw_text: el?.raw_text ?? null,
                                extra_comment: el?.extra_comment ?? null
                            })
                        })
                    }) ?? null;
                    const instructions: string[] | null = key?.instructions?.map((el) => {
                        return el.display_text ?? 'No display text available'
                    }) ?? null;
                    const tags: recipeTags[] | null = key?.tags?.map((el) => {
                        return {
                            nameTag: el.name,
                            displayName: el.display_name
                        }
                    }) ?? null;
                    const rating: recipeRating | null = { positive: key?.user_ratings?.count_positive, negative: key?.user_ratings?.count_negative } ?? null;
                    const serving = key.num_servings ?? null;
                    const imageURL = key.thumbnail_url ?? null;
                    const videoURL = key.original_video_url ?? null;
                    let recipeItem: RecipeItem = new Recipe(name, description, ingredients,
                        instructions, tags, rating, serving, imageURL, videoURL);
                    recipesList.push(recipeItem);
                }
                console.log('exiting map v1: ', recipesList.length);
                return recipesList
            })
        ).subscribe({
            next: resp => {
                console.log('response returned', resp);
                this.recipesList.next(resp);
            },
            error: err => {
                console.log('ERROR in recipeService: ' + err);
            }
        });

    }
}