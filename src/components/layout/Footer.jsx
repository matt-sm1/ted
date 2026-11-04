import Image from "next/image";
import Link from "next/link";
import NewsLetterForm from "@/components/sections/HomeSection/NewsLetterForm";
import { BACKGROUND_IMAGE_FOOTER, BACKGROUND_IMAGE_NEWSLETTER, BRAND_DESCRIPTION, CONTACT, LEGAL_LINKS, LINK_COLUMNS, LOGO_IMAGE, SOCIAL_LINKS } from "@/constants/footer";
import Paragraph from "@/components/ui/Paragraph";
import { NavLinkItem } from "@/components/ui/NavLinkItem";



function NewsletterBanner() {
  return (
    <div className="relative isolate overflow-hidden rounded-xl bg-navy-light">
      <Image
        src={BACKGROUND_IMAGE_NEWSLETTER}
        alt=""
        fill
        sizes="(min-width: 1280px) 72rem, 100vw"
        className="-z-10 object-cover object-right"
      />

      <div className="flex flex-col items-start justify-between gap-8  lg:flex-row lg:items-center p-[15px] md:p-[80px]">
        <h2 className="max-w-md text-2xl font-medium leading-snug text-white sm:text-[33px]">
          Subscribe To Our Newsletter For The Latest Updates
        </h2>
        <NewsLetterForm />
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <ul className="flex gap-3">
      {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-sky/70 text-sky transition-colors hover:bg-sky hover:text-navy-dark"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

function BrandColumn() {
  return (
    <div className="flex flex-col gap-6">
      <Link href="/" aria-label="Investing Wars home" className="w-fit">
        <Image src={LOGO_IMAGE} alt="Investing Wars" width={140} height={36} />
      </Link>
      <Paragraph>
        {BRAND_DESCRIPTION}
      </Paragraph>
      <SocialLinks />
    </div>
  );
}

function LinkColumn({ title, links }) {

  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <NavLinkItem
              link={link}
              className="text-sm text-gray-400 hover:text-sky"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactColumn() {
  return (
    <div>
      <h3 className="text-lg font-medium text-white">Get In Touch</h3>
      <ul className="mt-5 flex flex-col gap-3 text-xs text-white">
        <li>
          <a href={CONTACT.phoneHref} className="text-base transition-colors hover:text-sky">
            {CONTACT.phone}
          </a>
        </li>
        <li>
          <a
            href={`mailto:${CONTACT.email}`}
            className=" text-base transition-colors hover:text-sky"
          >
            {CONTACT.email}
          </a>
        </li>
      </ul>
    </div>
  );
}

function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white md:flex-row">
      <p className="text-base">
        Copyright © {year} <span className="text-yellow">Investing Wars</span>.
        All Rights Reserved.
      </p>

      <ul className="flex flex-wrap items-center justify-center divide-x divide-white/30">
        {LEGAL_LINKS.map(({ label, href }) => (
          <li key={label} className="px-4 last:pr-0">
            <Link href={href} className="transition-colors hover:text-sky">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-navy-dark pb-8 pt-12">
      <Image
        src={BACKGROUND_IMAGE_FOOTER}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NewsletterBanner />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <BrandColumn />
          {LINK_COLUMNS.map((column, index) => (
            <LinkColumn key={`${column.title}-${index}`} {...column} />
          ))}
          <ContactColumn />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}