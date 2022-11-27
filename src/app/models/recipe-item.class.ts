import { recipeIngredient, recipeRating, recipeTags } from "./recipe-item.interface";

export class Recipe {
    name: string | null;
    description: string | null;
    ingredients: recipeIngredient[] | null;
    instructions: string[] | null;
    tags?: recipeTags[] | null;
    rating?: recipeRating | null;
    serving?: number | string | null;
    imageURL?: string | null;
    videoURL?: string | null;

    constructor(recipeName: string | null, description: string | null, ingredients: recipeIngredient[] | null,
        instructions: string[] | null, tags?: recipeTags[] | null, rating?: recipeRating | null, serving?: number | string | null,
        imageURL?: string | null, videoURL?: string | null) {
        this.name = recipeName;
        this.description = description;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.tags = tags;
        this.rating = rating;
        this.serving = serving;
        this.imageURL = imageURL;
        this.videoURL = videoURL;
    }
}