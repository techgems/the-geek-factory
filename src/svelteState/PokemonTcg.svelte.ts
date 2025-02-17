export type PokemonTcgImage = {
    name: string,
    image: string
};

export const wishlistState = $state<PokemonTcgImage[]>([]);