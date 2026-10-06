export const Button = ({ className, size = "default", children, href, ...props }) => {
  const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 inline-flex items-center justify-center";
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
    lg: "px-8 py-6 text-base",
  };

  const Component = href ? "a" : "button";
  const classes = `${baseClasses} ${className} ${sizeClasses[size] || sizeClasses.default}`;

  return (
    <Component href={href} className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};