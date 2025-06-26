"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { DetailTourismItemImage } from "../../api/types/DetailTourismImagesTypes";
import { DetailTourismItem } from "../../api/types/DetailTourismTypes";

export default function TourismDetailImage({
  images,
  item,
}: {
  images: DetailTourismItemImage[];
  item?: DetailTourismItem;
}) {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [openLightbox, setOpenLightbox] = useState(false);

  const sliderLength = images.length;

  // Lightbox에 전달할 이미지 배열 구성
  const slides =
    sliderLength !== 0
      ? images.map((el) => ({ src: el.originimgurl }))
      : [{ src: item?.firstimage || "/not_image/not_image.svg" }];

  return (
    <article
      className="relative flex flex-col w-full shadow-md rounded-[8px]
      border bg-[var(--bg-content)] text-[var(--text-main)] border-[var(--border-main)]"
    >
      <Swiper
        rewind={true}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
        className="w-full aspect-[16/9]"
      >
        {slides.map((el, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full cursor-zoom-in"
              onClick={() => {
                setSwiperIndex(index);
                setOpenLightbox(true);
              }}
            >
              <Image
                src={el.src}
                alt="detail image"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-[8px]"
                sizes="(max-width: 640px) 100vw, 800px"
                priority={index === 0}
                quality={85}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 페이지 인덱스 표시 */}
      <div className="absolute flex justify-center items-center gap-1 z-30 bottom-2/100 right-1/100 px-3 rounded-full text-sm font-semibold bg-black/50 text-gray-300">
        <span>{swiperIndex + 1}</span>
        <span>/</span>
        <span>{sliderLength !== 0 ? sliderLength : 1}</span>
      </div>

      {/* 확대 보기 Lightbox */}
      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        index={swiperIndex}
        slides={slides}
        animation={{ swipe: 300 }}
      />
    </article>
  );
}
