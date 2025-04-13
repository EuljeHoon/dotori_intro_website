"use client"

import { useState } from "react";

interface ImageModalProps {
  src: string;
  alt: string;
  objectPosition?: string;
}

export default function ImageModal({ src, alt, objectPosition = "center" }: ImageModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="w-60 h-60 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-md cursor-pointer"
        style={{ objectPosition }}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full rounded-xl shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          />
        </div>
      )}
    </>
  );
}