import Image from "next/image";

export default function About() {
    return (
        <section className="px-7 md:px-15 max-w-3xl mx-auto mb-150 flex flex-col items-center">
            <h2 className="drop-shadow-sombra font-awe text-center text-4xl mt-25 mb-10">
                A propos de moi
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                <div className="relative flex items-center justify-center w-70 h-70 lg:w-170 lg:h-80">
                    {/* Degradê no lugar do fundo vermelho sólido */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--color-rosa)_0%,var(--color-rosa)_30%,rgba(0,0,0,0)_70%)] blur-3xl opacity-60"
                    />

                    <Image
                        src="/images/shak.png"
                        width={280}
                        height={280}
                        alt="Camila Medeiros, développeuse front-end"
                        className="relative z-10 h-70 w-60 lg:h-89 lg:w-70 rounded-full overflow-hidden object-top object-cover drop-shadow-sombra"
                    />
                </div>
                <div className="flex flex-col gap-5 max-w-4xl text-center lg:text-left">
                    <p className="drop-shadow-sombra font-roboto text-lg text-center lg:text-left">
                        {`Je m'appelle Camila, développeuse front-end passionnée par la création d'interfaces modernes, rapides et intuitives.`}
                    </p>
                    <p className="drop-shadow-sombra font-roboto text-lg text-center lg:text-left">
                        {`Formée aux dernières technologies (`}
                        <strong>React, Next.js</strong>
                        {`), je combine rigueur technique et sens du détail pour donner vie à vos projets web. `}
                    </p>
                    <p className="drop-shadow-sombra font-roboto text-lg text-center lg:text-left">
                        {`Chaque site que je développe est pensé pour offrir une expérience fluide à vos visiteurs — et de vrais résultats pour votre activité.`}
                    </p>
                </div>
            </div>
        </section>
    );
}
