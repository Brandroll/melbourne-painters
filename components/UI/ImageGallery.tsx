import { AcfImage } from "@/types";
import Image from "next/image";
import React from "react";

import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";
interface Props {
  images: AcfImage[];
}

export default function ImageGallery({ images }: Props) {
  if (images.length > 0) {
    const imgs = images.map((img, i) => {
      return {
        src: img.full_image_url,
        width: 320,
        height: 174,
        // isSelected: i == 0 ? true : false,
        caption: img.title,
      };
    });
    return (
      <SlideshowLightbox className="container grid justify-center  md:grid-cols-3 gap-8 mx-auto">
        {images.map((image) => (
          <img
            alt={image.title}
            className="w-full hover:scale-110 rounded"
            src={image.full_image_url}
          />
        ))}
      </SlideshowLightbox>
    );
  }
  return null;
}
