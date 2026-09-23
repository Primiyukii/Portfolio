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
    <header className="fixed top-0 left-0 right-0 transistion-all duration-500 glass-strong py-3 bg transparent py-5">
        <nav className="container mx-auto px-4 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">Portfolio</a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glassmorphism rounded-full px-2 py-1 flex items-center justify-center">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>


            {/* Desktop Contact Button */}
            <div className="hidden md:block">
                <Button size="small">Contact Me</Button>
            </div>


            {/* Mobile Navigation */}
            <button className="md:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>

        {/* Mobile Navigation Links */}
        {isMobileMenuOpen && (
            <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="text-lg text-muted-foregrounf hover:text-foreground py-2">
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