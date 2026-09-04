export default function Cta() {
    return (
        <section className="mb-20 flex flex-col items-center justify-center text-center px-5 lg:mt-30">
            <div className="relative overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle,var(--color-rosa)_0%,rgba(0,0,0,0)_70%)] blur-3xl opacity-30"
                />
                <div className="relative border border-rosa rounded-3xl py-10 px-5 lg:px-15 lg:py-20 flex flex-col items-center gap-5 drop-shadow-sombra">
                    <h2 className="drop-shadow-sombra font-awe text-center text-4xl">
                        Discutons de votre projet
                    </h2>
                    <p className="font-bigS text-2xl text-center drop-shadow-sombra">
                        De la maquette à la mise en ligne, je transforme vos
                        idées en site professionnel.
                    </p>
                    <a
                        href="#contact"
                        className="mt-2 rounded-2xl bg-rosa px-8 py-2 text-vinho font-bobo text-sm md:text-2xl transition-opacity duration-150 hover:opacity-60 md:w-90  inline-block text-center drop-shadow-sombra"
                    >
                        OBTENIR UN DEVIS GRATUIT
                    </a>
                </div>
            </div>
            
        </section>
    );
}
