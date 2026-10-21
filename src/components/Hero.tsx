// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Hero() {
//     return (
//         <section className="flex flex-col lg:flex-row items-center lg:justify-between gap-15 lg:gap-16 pt-25 pb-6 py-10 text-center lg:text-left max-w-6xl mx-auto">
//             <div className="order-2 flex flex-col gap-5 items-center">
//                 <motion.h1
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//                     className="p-5 md:p-0 max-w-xl text-3xl font-bigS md:text-4xl drop-shadow-sombra text-center"
//                 >
//                     Je crée des sites web modernes et performants pour votre
//                     entreprise
//                 </motion.h1>

//                 <motion.a
//                     href="#contact"
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
//                     whileHover={{ scale: 0.96 }}
//                     className="mt-2 rounded-2xl bg-rosa px-8 py-2 text-vinho font-bobo text-sm md:text-2xl md:w-90 inline-block text-center drop-shadow-sombra hover:bg-rosa/60 transition-colors duration-150"
//                 >
//                     OBTENIR UN DEVIS GRATUIT
//                 </motion.a>
//             </div>
//             <div className="order-1 relative flex h-60 w-60 items-center justify-center md:h-96 md:w-96">
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 2.0, delay: 1.5, ease: "easeOut" }}
//                     aria-hidden
//                     className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--color-rosa)_0%,var(--color-rosa)_40%,rgba(0,0,0,0)_70%)] blur-3xl opacity-60"
//                 />
//                 <Image
//                     src={"/images/shak.png"}
//                     fill
//                     sizes="(max-width: 768px) 240px, 384px"
//                     alt="Photo de la developpeuse Camila Medeiros"
//                     className="relative z-10 object-cover object-top"
//                     priority
//                 />
//                 <motion.span
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
//                     className="absolute font-bobo left-0 z-20 -translate-x-1/3 text-5xl md:text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
//                 >
//                     Front
//                 </motion.span>
//                 <motion.span
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//                     className="absolute font-bobo right-0 z-20 translate-x-1/3 text-5xl md:text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
//                 >
//                     End
//                 </motion.span>
//                 <motion.h2
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
//                     className="absolute left-1/2 top-full z-20 -translate-x-1/2 -translate-y-1/4 font-awe text-6xl md:text-7xl lg:text-8xl whitespace-nowrap drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
//                 >
//                     Developpeuse
//                 </motion.h2>
//             </div>
//         </section>
//     );
// }
"use client";
import { motion } from "framer-motion";

const letters = "Front-End".split("");

export default function Hero() {
    return (
        <section className="flex flex-col lg:flex-row items-center lg:justify-center gap-15 lg:gap-10 pt-25 pb-6 py-10 text-center lg:text-left max-w-6xl mx-auto overflow-x-visible">
            <div className="order-2 flex flex-col gap-5 items-center">
                <motion.h1
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="p-5 md:p-0 max-w-xl text-3xl font-bigS md:text-4xl drop-shadow-sombra text-center"
                >
                    Je crée des sites web modernes et performants pour votre entreprise
                </motion.h1>

                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                    whileHover={{ scale: 0.96 }}
                    className="mt-2 rounded-2xl bg-rosa px-8 py-2 text-vinho font-bobo text-sm md:text-2xl md:w-90 inline-block text-center drop-shadow-sombra hover:bg-rosa/60 transition-colors duration-150"
                >
                    OBTENIR UN DEVIS GRATUIT
                </motion.a>
            </div>
            <div className="order-1 relative flex h-60 w-60 items-center justify-center md:h-96 md:w-96 lg:mb-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 2.0, delay: 1.5, ease: "easeOut" }}
                aria-hidden
                className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 h-72 w-72 md:h-120 md:w-120 lg:w-100 rounded-full bg-[radial-gradient(circle,var(--color-rosa)_0%,var(--color-rosa)_40%,rgba(0,0,0,0)_70%)] blur-3xl opacity-60"
            />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.08,
                        },
                    },
                }}
                className="absolute font-bobo z-20 text-5xl md:text-6xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] flex whitespace-nowrap"
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.2 },
                            },
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                className="absolute left-1/2 top-[70%] md:top-[65%] z-20 -translate-x-1/2 -translate-y-1/4 font-awe text-7xl md:text-7xl lg:text-7xl whitespace-nowrap drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            >
                Developpeuse
            </motion.h2>
            </div>
        </section>
    );
}
