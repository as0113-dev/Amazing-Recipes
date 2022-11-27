export interface RecipeItem {
    name?: string | null;
    description?: string | null;
    ingredients?: recipeIngredient[] | null;
    instructions?: string[] | null;
    tags?: recipeTags[] | null;
    rating?: recipeRating | null;
    serving?: number | string | null;
    imageURL?: string | null;
    videoURL?: string | null;
}

export interface recipeIngredient {
    name?: string | null;
    raw_text?: string | null;
    extra_comment?: string | null;
}

export interface recipeTags {
    nameTag?: string | null;
    displayName?: string | null;
}

export interface recipeRating {
    positive?: number | string | null;
    negative?: number | string | null;
}

export interface IResponse1 {
    count: number,
    results?: [
        {
            name?: string | null,
            description?: string | null,
            sections?: [{
                components?: [
                    {
                        extra_comment?: string | null,
                        raw_text?: string | null,
                        ingredient?: {
                            name?: string | null,
                            measurements?: [
                                {
                                    unit: {
                                        name?: string | null,
                                        abbreviation?: string | null
                                    },
                                    quantity?: string | null
                                }
                            ] | null
                        } | null
                    }
                ] | null
            }] | null,
            instructions?: [
                {
                    display_text?: string | null
                }
            ] | null,
            tags?: [
                {
                    name?: string | null,
                    display_name?: string | null
                }
            ] | null,
            user_ratings?: {
                count_negative?: number | string | null,
                count_positive?: number | string | null
            },
            num_servings?: number | string | null,
            thumbnail_url?: string | null,
            original_video_url?: string | null
        }
    ]
}

export interface IResponse2 {
    count: number | null,
    results: [
        {
            recipes?: [
                {
                    name?: string | null,
                    description?: string | null,
                    sections?: [{
                        components?: [
                            {
                                extra_comment?: string | null,
                                raw_text?: string | null,
                                ingredient?: {
                                    name?: string | null,
                                    measurements?: [
                                        {
                                            unit?: {
                                                name?: string | null,
                                                abbreviation?: string | null
                                            },
                                            quantity?: string | null
                                        }
                                    ] | null
                                } | null
                            }
                        ] | null
                    }] | null,
                    instructions?: [
                        {
                            display_text?: string | null
                        }
                    ] | null,
                    tags?: [
                        {
                            name?: string | null,
                            display_name?: string | null
                        }
                    ] | null,
                    user_ratings?: {
                        count_negative?: number | string | null,
                        count_positive?: number | string | null
                    } | null,
                    num_servings?: number | string | null,
                    thumbnail_url?: string | null,
                    original_video_url?: string | null
                }
            ]
        }
    ]
}
