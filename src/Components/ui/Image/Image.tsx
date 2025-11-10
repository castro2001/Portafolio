"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface ImageUIProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  rounded?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  blur?: boolean;
  lazy?: boolean;
  fallbackSrc?: string; // 👈 nueva propiedad
}

/**
 * ImageUI – Componente optimizado y reutilizable para imágenes
 * ------------------------------------------------------------
 * ✅ Lazy loading por defecto
 * ✅ Placeholder blur opcional
 * ✅ Soporte para fallback si la imagen falla
 * ✅ Control de forma, tamaño y modo de ajuste
 */
export const ImageUI: React.FC<ImageUIProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  rounded = false,
  objectFit = "cover",
  blur = false,
  lazy = true,
  fallbackSrc = "/fallback.jpg", // 👈 imagen por defecto si falla la carga
}) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src);

  return (
    <div
      className={`relative overflow-hidden ${
        rounded ? "rounded-2xl" : ""
      } ${className}`}
      style={{ width: width ?? "auto", height: height ?? "auto" }}
    >
      <Image
        src={imgSrc}
        alt={alt}
        fill={!width && !height}
        width={width}
        height={height}
        loading={lazy ? "lazy" : "eager"}
        placeholder={blur ? "blur" : "empty"}
        priority={priority}
        className={`object-${objectFit} transition-transform duration-300 hover:scale-105`}
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => {
          if (typeof src === "string" && src !== fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
        }}
      />
    </div>
  );
};
