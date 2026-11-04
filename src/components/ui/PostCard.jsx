import Image from "next/image";
import Link from "next/link";

export function PostCard({ title, comments, href, image, className = "" }) {
  const commentLabel = `${String(comments).padStart(2, "0")} Comments`;

  return (
    <article className={className}>
      <div className="relative aspect-square w-full overflow-hidden bg-light-black">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
            className="object-cover"
          />
        )}
      </div>

<div className="relative z-10 -mt-14 mx-3 flex h-[130px] flex-col">
    <h3 className="flex flex-1 items-center bg-navy-light px-4 py-3 text-base font-medium leading-snug text-white">
        {title}
    </h3>

    <div className="grid shrink-0 grid-cols-2 border-t border-white/10 bg-navy-light/90 text-xs">
        <span className="px-4 py-3 text-center text-white">
            {commentLabel}
        </span>

        <Link
            href={href}
            className="border-l border-white/10 px-4 py-3 text-center font-medium text-sky transition-opacity hover:opacity-80"
        >
            Read More
        </Link>
    </div>
</div>
    </article>
  );
}