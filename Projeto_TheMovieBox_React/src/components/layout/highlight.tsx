import React from "react";

export function Highlight() {
    return (
        <section className="relative w-full bg-zinc-950 py-10 md:py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 pointer-events-none"></div>

            <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
                <img
                    src="/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg"
                    alt="Capa Filme"
                    className="w-56 md:w-64 lg:w-72 rounded-lg shadow-lg object-cover"
                />

                <div className="text-white space-y-4 md:space-y-5 flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold">Como Treinar o Seu Dragão</h2>

                    <div className="flex flex-wrap gap-2 text-sm md:text-base">
                        <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full">Fantasia</span>
                        <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full">Família</span>
                        <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full">Ação e Aventura</span>
                        <span className="text-slate-200 px-3 py-1">2h e 5m</span>
                    </div>

                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold">Sinopse</h4>
                        <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                            Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se torna amigo de um
                            dragão ferido chamado Banguela. Juntos, eles desafiam as tradições de suas tribos e descobrem que
                            dragões não são os monstros que todos acreditavam ser.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md transition">
                            Assistir
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2 rounded-md transition">
                            Detalhes
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2 rounded-md transition">
                            Adicionar à lista
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
