import { Button } from "@/components/Button";
import { Menu } from "lucide-react";

const navLinks = [
    {href: '#about', label: 'About'},
    {href: '#experience', label: 'Experience'},
    {href: '#projects', label: 'Projects'},
];


export const Navbar = () => {
    return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
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
            <button className="md:hidden p-2 rounded-full hover:bg-color-surface transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-color-highlight">
                    <Menu size={20}/>
            </button>
        </nav>
    </header>
    );
};