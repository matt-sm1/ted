import Link from "next/link";


export const NavLinkItem = ({ link, isActive, onClick, className = "" }) => {
    return (
        <Link
            href={link.href}
            onClick={onClick}
            aria-current={isActive ? "page" : undefined}
            className={`text-base font-medium leading-4 tracking-[0.5px] capitalize transition-colors hover:text-sky ${isActive ? "text-sky" : "text-white"
                } ${className}`}
        >
            {link.label}
        </Link>
    );
}