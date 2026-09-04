"use client"

import { AnimatePresence, motion} from "framer-motion";
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react";

const navLinks = [
    { id: 1, href: "#services", label: "Services" },
    { id: 2, href: "#method", label: "Méthode" },
    { id: 3, href: "#a-propos", label: "A propos" },
    { id: 4, href: "#contact", label: "Contactez-moi" },
];
export default function Header(){
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false)
    
    useEffect(() => {
        function handleScroll(){
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        }
    }, [menuOpen]);
    return(
        <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-vinho shadow-md" : "bg-transparent"}`}>
            <div className="flex items-center justify-between px-6 md:px-15 py-4 max-w-6xl mx-auto">
                <a href="#" className="font-awe text-3xl text-rosa pt-3">Camila Medeiros</a>
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((links) => (
                        <a 
                            key={links.id}
                            href={links.href}
                            className="font-bobo text-lg hover:opacity-70"
                        >
                            {links.label}
                        </a>
                    ))}
                </nav>                
                <button
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden text-rosa"
                    aria-label="Ouvrir le menu"
                >
                    <Menu size={28} />
                </button>
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-vinho z-50 flex flex-col items-center justify-center gap-5 md:hidden"
                    >
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-6 right-6 text-rosa"
                            aria-label="Fermer le menu"
                        >
                            <X size={32} />
                        </button>
                        {navLinks.map((link, index) => (
                            <div key={link.id} className="flex flex-col items-center">
                            <motion.a
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="font-bobo text-3xl text-rosa"
                            >
                            {link.label}
                            </motion.a>
                            {index < navLinks.length - 1 && (
                            <span aria-hidden="true" className="font-bobo font-bold text-3xl text-rosa">
                                .
                            </span>
                            )}
                        </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}