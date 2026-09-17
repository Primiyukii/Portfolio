export const Button = ({className, size="default", children}) => {
    const baseClasses = "bg-color-highlight text-color-surface font-semibold rounded-full transition-colors duration-300 hover:bg-color-highlight/80 focus:outline-none focus:ring-1 focus:ring-offset-1focus:ring-color-highlight";
    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };
    
    
    const classes = baseClasses;
    return (
        <button className={`${classes} ${className} ${sizeClasses[size] || sizeClasses.default}`}>
            <span className="relative flex items-center justify-center gap-2">{children}</span>
        </button>
    );
};