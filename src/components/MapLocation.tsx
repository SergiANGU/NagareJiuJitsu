import React from "react";


interface MapLocationProps {
    title: string;
    src: string;
  }
  
  export function MapLocation({ title, src }: MapLocationProps) {
    return (
      <div className="mb-10">
        <h5 className="text-2xl font-bold mb-4">{title}</h5>
        <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-md">
          <iframe
            src={src}
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  }
  