import Link from "next/link";

export const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
}) => {
  const baseStyles = "text-base font-semibold leading-6 tracking-[0.8px] capitalize rounded-[30px] border-[0.8px] px-6 py-[10px]"

  const variants = {
    primary:
      "border border-sky bg-sky text-navy-dark hover:opacity-90",

    secondary:
      "border border-sky text-sky hover:bg-sky hover:text-navy-dark",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;