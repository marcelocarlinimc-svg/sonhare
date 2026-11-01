import Image from "next/image";

/** Foto que preenche o contêiner (que deve ter `relative` e uma proporção). */
export function Photo({
  src,
  alt,
  fit = "cover",
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  sizes: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={fit === "contain" ? "object-contain p-2" : "object-cover"}
    />
  );
}
