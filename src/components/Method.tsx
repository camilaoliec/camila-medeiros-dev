type MethodStep = {
    id: number;
    number: number;
    title: string;
    description: string;
}
const methodDatas: MethodStep[] = [
    {
        id: 1,
        number: 1,
        title: "Échange initial",
        description: "On discute de votre projet et vos besoins",
    },
    {
        id: 2,
        number: 2,
        title: "Maquette & validation",
        description: "Je vous présente une proposition de design",
    },
    {
        id: 3,
        number: 3,
        title: "Développement",
        description: "Je construis votre site avec les meilleures pratiques",
    },
    {
        id: 4,
        number: 4,
        title: "Mise en ligne & suivi",
        description: "Livraison et accompagnement après lancement",
    },
]
export default function Method() {
    return(
        <section id="method" className="scroll-mt-10 bg-vinho mt-15 w-full p-5 flex flex-col items-center">
            <h2 className="font-awe text-center text-4xl mt-15 drop-shadow-sombra">{`De l'idée au lancement`}</h2>
            <ol className="grid grid-cols-1 p-5 gap-5  max-w-4xl items-center">
                {methodDatas.map((el) => (
                    <li key={el.id} className="border-b border-rosa last:border-b-0 flex flex-row items-center justify-center gap-5 pb-5">
                        <span aria-hidden="true" className="text-[80px] sm:text-[120px] lg:text-[150px] font-awe drop-shadow-sombra">{el.number}</span>
                        <div className="flex flex-col items-center h-30 gap-5">
                            <h3 className="font-bobo text-2xl text-center drop-shadow-sombra">{el.title}</h3>
                            <p className="text-center font-roboto text-sm drop-shadow-sombra">{el.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}