//slider component
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderImage {
  src: string;
  alt: string;
  width?: {
    mobile?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

interface SliderProps {
  images: SliderImage[];
  title?: string;
  titleClassName?: string;
  className?: string;
  defaultWidth?: {
    mobile?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  settings?: {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: {
        slidesToShow?: number;
        slidesToScroll?: number;
        dots?: boolean;
        arrows?: boolean;
        [key: string]: unknown;
      };
    }>;
    [key: string]: unknown;
  };
}

export default function CustomSlider({
  images,
  title,
  titleClassName,
  className,
  defaultWidth,
  settings,
}: SliderProps) {
  // Calculate image dimensions - default 349px width, 435px height
  const getImageDimensions = (imageWidth?: SliderImage["width"]) => {
    // Use custom width if provided, otherwise use default 349px
    const width =
      imageWidth?.lg ||
      imageWidth?.md ||
      imageWidth?.sm ||
      imageWidth?.mobile ||
      defaultWidth?.lg ||
      defaultWidth?.md ||
      defaultWidth?.sm ||
      defaultWidth?.mobile ||
      "349px";
    const height = "350px";
    return { width, height };
  };

  // Default slider settings
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...settings,
  };

  return (
    <div
      className={cn(
        "w-full h-full relative z-10 overflow-hidden pb-6 sm:pb-8 md:pb-10",
        className
      )}
    >
      {title && (
        <h1
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center font-['Oswald'] py-6 sm:py-8 md:py-10 text-black px-4",
            titleClassName
          )}
        >
          {title}
        </h1>
      )}

      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-full">
          <Slider {...defaultSettings}>
            {images.map((image, index) => {
              const { width, height } = getImageDimensions(image.width);

              return (
                <div
                  key={`${image.src}-${index}`}
                  className="flex items-center justify-center h-[435px]"
                >
                  <div
                    className="relative overflow-hidden rounded-[12px] shrink-0"
                    style={{
                      width: width,
                      height: height,
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="250px"
                      className="object-cover transition-transform duration-500 hover:scale-[1.05] rounded-[12px]"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
