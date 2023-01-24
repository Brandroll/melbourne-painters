import { AcfImage } from "@/types";
import Image from "next/image";
import React from "react";
interface Props {
  images: AcfImage[];
}

export default function ImageGallery({ images }: Props) {
  if (images.length > 0) {
    return (
      <div className="grid grid-cols-4 gap-8 ">
        {images.map((image) => (
          <div key={image.id}>
            <Image
              src={image.full_image_url}
              width={400}
              height={300}
              alt={image.title}
            />
          </div>
        ))}
      </div>
    );
  }
  return null;
}
