import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { Button, Img, Line, Text } from "components";

const Products = [
  {
    id: 1,
    name: "Andini, siswi SMP",
    image: "images/img_sma1.png",
    description:
      "Sebagai siswa SMP, saya awalnya merasa kesulitan dengan beberapa mata pelajaran. Setelah mengikuti bimbingan belajar di sini, saya lebih memahami konsep-konsep yang sulit dan dapat mengatasi soal-soal ujian dengan lebih baik. Guru-guru sangat ramah dan selalu siap membantu.",
  },
  {
    id: 2,
    name: "Sarah, Siswi SMA",
    image: "images/img_sma1.png",
    description:
    "Bimbingan belajar di Pilar Cendekia sangat membantu saya persiapkan ujian nasional. Materi dijelaskan dengan baik, dan saya mendapatkan banyak latihan soal untuk memastikan pemahaman saya. Saya merasa lebih siap dan percaya diri menghadapi ujian. Terima kasih, Pilar Cendekia!",
  },
  {
    id: 3,
    name: "rahmat, anak Sma",
    image: "images/img_sma1.png",
    description:
    "Saya senang sekali ikut bimbingan belajar di Pilar Cendekia Guru-guru di sini baik banget, mereka selalu sabar menjelaskan pelajaran. Saya jadi lebih paham matematika dan bahasa Indonesia. Belajar jadi lebih seru, terutama saat main permainan edukatif bareng teman-teman!",
  },
];

export const Crousel = () => {

  return (
    <Carousel>
      {Products.map((item) => (
        <>
          <div
          id={item.id}
            className="flex flex-col gap-[27px]  sm:items-center items-start justify-start mb-1.5 min-w-[83%]  md:w-full md:text-sm sm:gap-[5]">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center sm:items-center"
              size="txtAbrilFatfaceRegular48Black900">
              Testimoni
            </Text>
            <div className="flex sm:flex-col flex-row font-secularone sm:gap-10 sm:items-center items-start justify-between md:ml-[0] ml-[3px] w-full">
              <Img
                className="h-[416px] md:h-[250px] object-cover"
                src={item.image}
                alt="smaOne"
              />
              <Text
                className="sm:mt-0 mt-[82px] md:mt-0 text-2xl md:text-[22px] sm:text-center text-black-900 sm:text-xl m-10"
                size="txtSecularOneRegular24"
              >
                <span className="text-black-900 font-secularone  text-left font-normal">
                  <>
                    {item.name}

                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter sm:text-center text-left sm:text-[15px] sm:mx-0 font-normal">
                  <p>{item.description}</p>
                </span>
              </Text>
            </div>
          </div>
        </>
      ))}
    </Carousel>
  );
};
