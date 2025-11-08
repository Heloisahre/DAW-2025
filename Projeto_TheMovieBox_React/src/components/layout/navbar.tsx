const categories = [
    { label: "Most Watched", active: true, link: "/mais-assistidos" },
    { label: "Top Rated", active: false, link: "/mais-votados" },
    { label: "New Releases", active: false, link: "/novidades" },
    { label: "Top 10", active: false, link: "/top10" },
    { label: "Genres", active: false, link: "/generos" },
];

export function Navbar() {
    return (
        <nav className="flex bg-[#1c1c1c] border-b border-b-[#333] max-w-6xl mx-auto">
            <ol className="flex gap-8 list-none py-6">
                {categories.map((c) => (
                    <li>
                        <a
                            href={c.link}
                            className={`text-sm ${c.active
                                    ? "text-[#e50914] border-b-2 border-[#e50914] hover:text-[#e50914]"
                                    : "text-[#ccc] hover:text-white"
                                } `}
                        >
                            {c.label}
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}