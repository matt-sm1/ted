"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkItem } from "@/components/ui/NavLinkItem";
import { NAV_LINKS, SIGN_IN_HREF, LOGIN_HREF, LOGO } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { FiMenu, FiX } from "react-icons/fi";


function MenuToggle({ isOpen, onToggle }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
        >
            {isOpen ? (
                <FiX size={24} />
            ) : (
                <FiMenu size={24} />
            )}
        </button>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (href) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    const closeMenu = () => setIsMenuOpen(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <header className="sticky top-0 z-50 w-full bg-navy-dark text-white">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex h-[99px] max-w-7xl items-center justify-between px-4 sm:px-6 "
            >
                <Link href="/" onClick={closeMenu} aria-label="Investing Wars home">
                    <Image
                        src={LOGO}
                        alt="Investing Wars"
                        width={160}
                        height={32}
                        priority
                    />
                </Link>

                <ul className="hidden items-center gap-10 md:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.label}>
                            <NavLinkItem link={link} isActive={isActive(link.href)} />
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3 hidden md:flex">
                    <Button href={SIGN_IN_HREF} variant="primary">Sign In</Button>
                    <Button href={LOGIN_HREF} variant="secondary">Log In</Button>
                </div>

                <MenuToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
            </nav>

            {isMenuOpen && (
                <div
                    id="mobile-menu"
                    className="border-t border-navy-light bg-navy-dark px-4 pb-6 pt-4 md:hidden"
                >
                    <ul className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <NavLinkItem
                                    link={link}
                                    isActive={isActive(link.href)}
                                    onClick={closeMenu}
                                    className="block py-1"
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-3  mt-6">
                        <Button href={SIGN_IN_HREF} variant="primary">Sign In</Button>
                        <Button href={LOGIN_HREF} variant="secondary">Log In</Button>
                    </div>
                </div>
            )}
        </header>
    );
}