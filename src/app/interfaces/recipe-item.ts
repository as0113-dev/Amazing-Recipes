export interface RecipeItem {
    name: string,
    description: string,
    ingredients: recipeIngredient[],
    instructions: recipeInstructions[],
    tags?: recipeTags,
    rating?: recipeRating,
    serving?: string,
    imageURL?: string,
    videoURL?: string
}

interface recipeInstructions{
    instructions: string;
}

interface recipeIngredient{
    name: string,
    quantity: string,
    unitName: string,
    unitAbbreviation?: string,
    extraComment?: string
}

interface recipeTags{
    nameTag: string,
    displayName: string,
}

interface recipeRating{
    positive: number,
    negative: number
}
