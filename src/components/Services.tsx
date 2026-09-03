"use client"
import { LayoutTemplate, LucideIcon, Rocket, ShoppingCart, UserRound } from "lucide-react"
import { motion, type Variants } from "framer-motion"

type Service = {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    text: string;
}

const services: Service[] = [
    {
        id: 1,
        icon: LayoutTemplate,
        title: "Création de site vitrine",
        description: "Un site professionnel qui présente votre activité, vos services et vos coordonnées",
        text: "pensé pour donner confiance à vos visiteurs dès la première visite."
    },
    {
        id: 2,
        icon: Rocket,
        title: "Landing page",
        description: "Une page unique, optimisée pour convertir :",
        text: "idéale pour le lancement d'un produit, une offre spéciale ou une campagne marketing."
    },
    {
        id: 3,
        icon: UserRound,
        title: "Portfolio / site personnel",
        description: "Vous êtes indépendant, créatif ou professionnel ?",
        text: "Un site personnel met en valeur votre travail et votre parcours, pour donner une image professionnelle dès le premier regard."
    },
    {
        id: 4,
        icon: ShoppingCart,
        title: "E-commerce",
        description: "Une boutique en ligne fonctionnelle et sécurisée, pensée pour transformer vos visiteurs en clients",
        text: "de la présentation des produits jusqu'au paiement."
    }
]

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.40,
        },
    },
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity:1, y:0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Services() {
    return(
        <section 
            className="border-t border-rosa w-auto mx-5 md:mx-10 mt-10">
            <h2 className="font-awe text-center text-4xl mt-25 mb-10">Services</h2>
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {services.map((service) => {
                    const Icon = service.icon
                    return (
                        <motion.article 
                            key={service.id} 
                            className="border border-rosa flex flex-col items-center gap-5 rounded-4xl p-5 min-h-100 "
                            variants={cardVariants}
                        >
                            <div className="w-20 h-20 bg-vermelho rounded-full flex items-center justify-center drop-shadow-sombra">
                                <Icon size={32} strokeWidth={1.5} aria-hidden="true" className="text-rosa"/>
                            </div>
                            <h3 className="font-bobo text-3xl text-center drop-shadow-sombra">{service.title}</h3>
                            <p className="font-bigS text-2xl text-center drop-shadow-sombra">{service.description}</p>
                            <p className="font-roboto text-sm text-center drop-shadow-sombra italic">{service.text}</p>
                        </motion.article>
                    )

                })}

            </motion.div>
        </section>
    )
}