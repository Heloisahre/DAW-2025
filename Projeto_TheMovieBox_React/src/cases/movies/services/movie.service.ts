import { api } from "../../../lib/axios";

export type MovieDTO = {
    title: string;
    year: number;
    image: string;
};

const _ENDPOINT = '/movie?key=475e6490';

export const MovieService = {
    async list(): Promise<MovieDTO[]> {
        const result = await api.get(_ENDPOINT);
        console.log(result)
        return result.data;
    },
};