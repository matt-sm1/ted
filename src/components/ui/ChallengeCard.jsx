import Image from "next/image";
import Link from "next/link";
import Paragraph from "@/components/ui/Paragraph";

function CardImage({ src, alt }) {
    return (
        <div className="relative h-24 w-32 shrink-0 sm:h-[210px] sm:w-[210px]">
            {src && (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="144px"
                    className="object-contain"
                />
            )}
        </div>
    );
}

export function ChallengeCard({ title, description, href, gradient, image }) {
    return (
        <article
            className={`flex flex-col justify-between rounded-lg border border-light-black bg-gradient-to-br px-5 py-8 backdrop-blur-sm ${gradient}`}
        >
            <div className="flex items-start justify-between gap-3">
                <h3 className="max-w-[7rem] text-base sm:text-[26px] font-semibold uppercase leading-tight text-white">
                    {title}
                </h3>
                <CardImage src={image} alt={`${title} illustration`} />
            </div>

            <div className="mt-4 flex flex-col gap-4">
                <Paragraph>{description}</Paragraph>
                <Link
                    href={href}
                    className="text-base font-semibold text-sky transition-opacity hover:opacity-80"
                >
                    Play Now
                </Link>
            </div>
        </article>
    );
}