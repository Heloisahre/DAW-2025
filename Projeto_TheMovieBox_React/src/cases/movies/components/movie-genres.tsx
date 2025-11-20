import { useEffect, useState, type ReactNode } from "react"
import type { MovieDTO } from "../services/movie.service"

type MovieGenresProps = {
    movie: MovieDTO;
    children: ReactNode;
};

// mapa de tradução Inglês -> Português
const genreMap: Record<string, string> = {
    Comedy: "Comédia",
    Romance: "Romance",
    Action: "Ação",
    Horror: "Terror",
    Adventure: "Aventura",
    Drama: "Drama",
};

export function MovieGenres({ movie, children }: MovieGenresProps) {
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        if (movie) {
            // separa pelos pipes: "Comedy|Romance"
            const rawGenres = movie.genres.split("|");

            // traduz cada um se existir no mapa
            const translated = rawGenres.map((g) => genreMap[g] ?? g);

            setGenres(translated);
        }
    }, [movie]);

    return (
        <div className="flex text-sm my-5 mx-0 gap-2">
            {genres.map((genre, index) => (
                <span
                    key={index}
                    className="bg-white/20 px-3 py-1 rounded-2xl"
                >
                    {genre}
                </span>
            ))}

            {children}
        </div>
    );
}