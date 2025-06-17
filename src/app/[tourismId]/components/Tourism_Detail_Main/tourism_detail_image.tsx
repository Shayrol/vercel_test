"use client";

import Image from "next/image";
import { DetailTourismItemImage } from "../../types/DetailTourismImagesTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { DetailTourismItem } from "../../types/DetailTourismTypes";

export default function TourismDetailImage({
  images,
  item,
}: {
  images: DetailTourismItemImage[];
  item?: DetailTourismItem;
}) {
  const [swiperIndex, setSwiperIndex] = useState(0); // -> 페이지네이션용
  // const [swiper, setSwiper] = useState<SwiperClass>();

  // const handlePrev = () => {
  //   swiper?.slidePrev();
  // };
  // const handleNext = () => {
  //   swiper?.slideNext();
  // };

  const sliderLength = images.length;

  return (
    <article
      className="relative flex flex-col w-full shadow-md rounded-[8px]
      border bg-[var(--bg-content)] text-[var(--text-main)] border-[var(--border-main)]
      "
    >
      <Swiper
        rewind={true}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
        // onSwiper={(swiper) => setSwiper(swiper)}
        className="w-full aspect-[16/9]"
        // pagination={{
        //   type: "fraction",
        // }}
      >
        {sliderLength !== 0 ? (
          images.map((el, index) => (
            <SwiperSlide key={el.serialnum}>
              <Image
                src={el.originimgurl}
                alt="detail image"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-[8px]"
                sizes="(max-width: 640px) 100vw, 800px" // 반응형 최적화
                priority={index === 0}
                quality={85}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <Image
              src={item?.firstimage || "/not_image/not_image.svg"}
              alt="detail image"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-[8px]"
              sizes="(max-width: 640px) 100vw, 800px" // 반응형 최적화
              priority={true}
              quality={85}
            />
          </SwiperSlide>
        )}
      </Swiper>

      <div className="absolute flex justify-center items-center gap-1 z-30 bottom-2/100 right-1/100 px-3 rounded-full text-sm font-semibold bg-black/50 text-gray-300">
        <span>{swiperIndex + 1}</span>
        <span>{"/"}</span>
        <span>{sliderLength !== 0 ? sliderLength : 1}</span>
      </div>
      {/* <div className="border border-red-500">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div> */}
    </article>
  );
}
