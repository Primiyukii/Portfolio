const navLinks = [
    {href: '#about', label: 'About'},
    {href: '#experience', label: 'Experience'},
    {href: '#projects', label: 'Projects'},
    {href: '#contact', label: 'Contact'},
];

export const Navbar = () => {
    return (
    <header>
        <nav>


            <div>
                <div>
                    {navLinks.map((link, index) => (
                        <a key={link.href} key={index} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    </header>
    );
};