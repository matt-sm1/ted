import { STAR_COUNT } from "@/constants/data";
import { StarIcon } from "@/components/ui/StarIcon";
import Image from "next/image";


function StarRating() {
  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: STAR_COUNT }, (_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
}

function Avatar({ src, name }) {
  return (
    <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white/20">
      {src && (
        <Image
          src={src}
          alt={`${name} avatar`}
          fill
          sizes="40px"
          className="object-cover"
        />
      )}
    </span>
  );
}

export function TestimonialCard({ date, quote, name, role, avatar }) {
  return (
    <article className="flex flex-col rounded-lg border border-light-black bg-light-black p-5">
      <StarRating />
      <time className="mt-3 text-[11px] text-white/70">{date}</time>

      <blockquote className="mt-4 flex-1 text-xs leading-relaxed text-white/90">
        “{quote}”
      </blockquote>

      <footer className="mt-6 flex items-center gap-3">
        <Avatar src={avatar} name={name} />
        <div>
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-[11px] text-white">{role}</p>
        </div>
      </footer>
    </article>
  );
}