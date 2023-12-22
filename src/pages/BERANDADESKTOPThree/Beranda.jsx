import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text, Crousel, NavbarPage} from "components";
import { Menu, X } from "lucide-react";

const Program = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  }

  const navigate = useNavigate()
  return (
    <>
      <div className="bg-blue-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full mb-[10px] ">
          <div className="flex flex-col items-center justify-start w-full ">
            {/* Navbar */}
            <nav className="flex items-center justify-between w-full md:text-sm  md:items-end ">
              {/* Logo */}
              <Img
                className="object-cover h-30 w-80 md:h-20 md:w-60 sm:w-30"
                src="images/logoPilar.png"
                alt="heroimageThree"
              />
              {/* Menu */}
              <div className="sm:hidden">
              <NavbarPage />
              </div>
              <div className="mr-10 my-5 text-3xl hidden sm:block" >
              <button onClick={toggleNavbar}>{isActive ? <X /> : <Menu/>}</button>
              </div>
            </nav>
              {isActive && (
                <div className="flex  items-center basis-1">
                  <NavbarPage />
                </div>
              )}
          </div>
          {/* Content */}
          {/* // Hero Section Start */}
          <div className="min-w-full h-600 z-[10] ">
            <Img
              className="object-cover "
              src="images/img_heroimage3.png"
              alt="heroimageThree"
            />
             <div className="absolute flex flex-col items-center justify-start right-[3%] top-2/4 w-[46%]">
                  <Text
                    className="md:text-5xl text-9xl text-center text-white-A700 md:flex md:flex-col md:items-center md:justify-center md:mt-[-200px] md:w-[100%]"
                    size="txtCaveatBrushRegular128"
                  >
                    Pilar Cendekia
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl md:text-sm md:mt-5"
                    size="txtAbhayaLibreExtraBold24"
                  >
                    Dengan BIAYA MINIMAL, kita raih PRESTASI MAKSIMAL
                  </Text>
                  <div className="flex sm:flex-col flex-row font-abhayalibreextrabold gap-[52px] items-center justify-end mt-[69px] w-[69%] md:w-full md:gap-[40px] md:justify-center">
                    <Button
                      className="cursor-pointer font-extrabold leading-[normal] min-w-[200px] text-center text-xl hover:bg-yellow-600 hover:text-slate-100 md:text-sm md:min-w-[150px]"
                      shape="round"
                      color="white_A700"
                      size="xs"
                    >
                      Hubungi Kami
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[200px] text-center text-xl hover:bg-yellow-600 hover:text-slate-100 md:text-sm md:min-w-[150px]"
                      onClick={() => navigate("/daftarpilarsekarangdesktop")}
                      shape="round"
                      color="white_A700"
                      size="xs"
                    >
                      Daftar Sekarang
                    </Button>
                  </div>
                </div>

            <div className="bg-gradient flex flex-col font-abrilfatface items-center justify-start p-11 md:px-10 sm:px-5 shadow-bs w-full">
              <div className="flex flex-col items-center justify-center p-10 md:min-w-min ">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-5xl font-bold text-slate-100 md:text-4xl m-10 sm:text-2xl">
                    Tentang kami
                  </h1>
                  <p className="text-xl text-center px-10 mx-20 text-slate-100 md:text-md sm:text-[15px]">
                    Kami adalah lembaga bimbingan belajar yang berdedikasi untuk
                    membantu siswa SD, SMP, dan SMA mencapai potensi akademis
                    mereka yang maksimal. Dengan tim pengajar yang berkompeten
                    dan berpengalaman, kami siap memberikan pendampingan yang
                    personal dan berkualitas untuk setiap siswa. Dengan biaya
                    minimal, kita raih prestasi maksimal, memberikan nilai
                    tambah yang luar biasa untuk investasi pendidikan Anda!
                  </p>
                  <div className="flex flex-row font-abrilfatface sm:gap-10 items-center justify-between mt-[27px] w-[58%]">
                    <Text
                      className="text-5xl sm:text-[25px] md:text-[44px] text-center text-white-A700 "
                      size="txtAbrilFatfaceRegular48"
                    >
                      Visi
                    </Text>
                    <Text
                      className="text-5xl sm:text-[25px] md:text-[44px] text-center  text-white-A700 my-5"
                      size="txtAbrilFatfaceRegular48"
                    >
                      Misi
                    </Text>
                  </div>
                  <div className="flex md:flex-row flex-row font-inter gap-4 items-center justify-between w-full md:justify-center">
                    <div className="bg-white-A700 flex flex-col items-center justify-end md:mt-0 mt-1 ml-5 p-9 rounded-[30px] w-[654px] md:p-3 md:min-w-[50%]">
                      <Text
                        className="mt-[21px] text-2xl text-black-900 text-center sm:text-[15px]  min-w-[96%] md:text-md md:my-5"
                        size="txtInterRegular24Black900"
                      >
                        Menjadi mitra terpercaya dalam mendukung perkembangan
                        dan keberhasilan akademis siswa SD, SMP, dan SMA melalui
                        pendekatan bimbingan belajar yang inovatif dan
                        berorientasi pada hasil.
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-end mr-5 p-5 rounded-[30px] min-w-[654px] md:min-w-[50%] sm:p-1">
                      <Text
                        className="mt-[29px] text-2xl md:p-0 md:text-[22px] text-black-900 sm:text-[15px] md:min-w-[96%] md:text-md md:mt-[21px]"
                        size="txtInterRegular24Black900"
                      >
                        <>
                          Memberikan Pembelajaran Personalized
                          <br />
                          Meningkatkan Pemahaman Konsep
                          <br />
                          Mengembangkan Keterampilan Belajar
                          <br />
                          Menyediakan Lingkungan Supportif
                          <br />
                          Memotivasi dan Meningkatkan Percaya Diri
                        </>
                      </Text>
                    </div>
                  </div>

                  {/* Sosmet Section */}
                  <div className="flex flex-row items-start justify-center mt-[33px] w-[24%] md:w-full">
                    <Img
                      className="h-14 w-14 hover:cursor-pointer text-white-A700 "
                      src="images/img_mingcuteyoutubefill.svg"
                      alt="mingcuteyoutube"
                    />
                    <Img
                      className="h-[43px] ml-[17px] mt-[7px] w-[43px] hover:cursor-pointer text-white-A700"
                      src="images/img_info.svg"
                      alt="info"
                    />
                    <Img
                      className="h-12 ml-[13px] mt-0.5 w-[49px] hover:cursor-pointer text-white-A700"
                      src="images/img_riwhatsappfill.svg"
                      alt="riwhatsappfill"
                    />
                    <Img
                      className="h-[51px] ml-[17px] mt-0.5 w-[50px] hover:cursor-pointer text-white-A700"
                      src="images/img_icbaselineemail.svg"
                      alt="icbaselineemail"
                    />
                    <Img
                      className="h-[46px] ml-[17px] mt-0.5 w-[47px] hover:cursor-pointer text-white-A700"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </div>
                   {/* sosmet Section end */}
                  <div className="flex font-abrilfatface h-[602px] md:h-[631px] sm:h-[905px] justify-end mt-[31px] relative w-[98%] md:w-full">
                    <div className="flex flex-row md:gap-10 h-full items-center justify-between mb-[241px] mt-auto mx-auto w-[97%]">
                      {/* <Img
                        className="h-[34px] hover:cursor-pointer text-white-A700"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      /> */}
                      {/* <Img
                        className="h-[34px]"
                        src="images/img_overflowmenu.svg"
                        alt="overflowmenu"
                      /> */}
                    </div>

                    {/* Croousel Testimoni */}
                    <div className="border border-black-900 border-solid flex flex-col min-h-full inset-[0] items-center justify-center m-auto p-[43px] sm:p-0 sm:mr-[170px] sm:min-w-[500px] sm:h-[200px] min-w-full sm:items-center sm:justify-center ">

                      <Crousel />
                    </div>
                    {/* Crousel End */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer section */}
      <footer className="bg-gray-800 flex font-inter items-center justify-center md:px-5 w-full">
        <div className="flex  flex-row md:gap-5 items-center justify-center mb-[21px] ml-[67px] mr-[105px] mt-[26px] w-[89%]">
          <Text className="text-white-A700 text-xl sm:text-[13px]" size="txtInterRegular20">
            Copyright{" "}
          </Text>
          <Img
            className="h-5 md:ml-[0] ml-[9px] w-[21px]"
            src="images/img_clock.svg"
            alt="clock"
          />
          <Text
            className="ml-2 md:ml-[0] text-white-A700 text-xl sm:text-[13px]"
            size="txtInterRegular20"
          >
            2023 pilarcendekia. Allright reserved
          </Text>
          <Img
            className="h-[30px] md:ml-[0] ml-[624px] md:mt-0 mt-0.5 w-[30px]"
            src="images/img_group.svg"
            alt="group"
          />
          <Img
            className="h-[23px] md:ml-[0] ml-[9px]"
            src="images/img_info_white_a700.svg"
            alt="info_One"
          />
          <Img
            className="h-[25px] md:ml-[0] ml-[9px] w-[26px]"
            src="images/img_riwhatsappfill_white_a700.svg"
            alt="riwhatsappfill_One"
          />
          <Img
            className="h-[27px] md:ml-[0] ml-[9px] w-[27px]"
            src="images/img_icbaselineemail_white_a700.svg"
            alt="icbaselineemail_One"
          />
          <Img
            className="h-6 md:ml-[0] ml-[9px] w-[25px]"
            src="images/img_facebook_white_a700.svg"
            alt="facebook_One"
          />
        </div>
      </footer>
    </>
  );
};
export default Program;
