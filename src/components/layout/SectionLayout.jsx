import Image from "next/image";

export default function SectionLayout({
  children,
  backgroundImage,
  imageAlt = "",
  className = "",
  containerClassName = "",
  container = true,
}) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-navy-dark py-10 sm:py-20 ${className}`}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
      )}

      {container ? (
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}