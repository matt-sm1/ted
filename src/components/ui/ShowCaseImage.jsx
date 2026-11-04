import Image from "next/image";


export function ShowCaseImage({ image, alt }) {
    return (
        <div className="relative mx-auto aspect-square w-full max-w-lg">
            {image && (
                <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 32rem, 90vw"
                    className="object-contain"
                />
            )}
        </div>
    );
}