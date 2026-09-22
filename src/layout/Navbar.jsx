import { Button } from "@/components/Button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";

const navLinks = [
    {href: '#about', label: 'About'},
    {href: '#experience', label: 'Experience'},
    {href: '#projects', label: 'Projects'},
];


export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
    <header className="fixed top-0 left-0 right-0 transistion-all duration-300 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
        <nav className="container mx-auto px-4 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-blue-500 transition-colors duration-300">My Portfolio</a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glassmorphism rounded-full px-4 py-2 flex items-center justify-center">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="py-2 px-4 hover:text-blue-500 transition-colors duration-300 ml-6 hover:bg-color-surface rounded-full">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>


            {/* Desktop Contact Button */}
            <div className="hidden md:block flex items-center gap-2">
                <Button size="small">Contact Me</Button>
            </div>


            {/* Mobile Navigation */}
            <button className="md:hidden p-2 rounded-full hover:bg-color-surface transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-color-highlight cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>

        {/* Mobile Navigation Links */}
        {isMobileMenuOpen && (
            <div className="md:hidden glass-strong animate-fade-in rounded-lg mt-2 py-4">
                <div className="container mx-auto px-4 flex flex-col items-center gap-2">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="text-lg text-muted-foreground py-2 px-4 hover:text-blue-500 transition-colors duration-300 hover:bg-color-surface rounded-full">
                            {link.label}
                        </a>
                    ))}
                    <Button size="medium" className="mt-2">Contact Me</Button>
                </div>
            </div>
        )}
    </header>
    );
};