import React, { useState } from "react";
import { Button, CheckBox, Img, Input, NavbarPage, Text } from "components";
import { Menu, X } from "lucide-react";


const DaftarPage = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
      setIsActive(!isActive);
    }
  
  return (
    <div id="DaftarPage" className="bg-blue-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
      <div className="flex flex-col items-center justify-start min-w-full mb-[10px] ">
        <div className="flex flex-col items-center justify-start w-full ">
          {/* Navbar */}
          <nav className="flex items-center justify-between w-full">
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
        <div className="min-w-full h-600 z-[10]">
          <Img
            className=" object-cover "
            src="images/img_heroimage3_1.png"
            alt="heroimageThree"
          />
          <div className="h-[1290px] md:px-5 relative w-full">
            <div className="bg-yellow-50 border border-light_blue-600 border-solid flex flex-col font-secularone items-center justify-start mb-[-6px] mx-auto p-[31px] sm:px-5 shadow-bs w-full z-[1]">
              <div className="flex flex-col items-center justify-start mb-[33px] w-[96%] md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-[43px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[47%] md:w-full">
                    <Text
                      className="md:text-5xl text-6xl text-black-900"
                      size="txtSecularOneRegular60"
                    >
                      Daftar Pilar Sekarang
                    </Text>
                    <div className="flex font-inter h-[881px] justify-end relative w-full">
                      <Text
                        className="absolute bottom-[36%] right-[12%] text-base text-white-A700"
                        size="txtInterBold16"
                      >
                        Sejarah
                      </Text>
                      <Img
                        className="h-4 mb-[93px] ml-[100px] mt-auto"
                        src="images/img_clock_white_a700.svg"
                        alt="clock"
                      />
                      <Img
                        className="absolute h-[881px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_image8.png"
                        alt="imageEight"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col font-inter items-start justify-start md:mt-0 mt-[113px] w-[51%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-[76%] md:w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Nama Depan Siswa{" "}
                      </Text>
                      <Text
                        className="text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Nama Depan Siswa{" "}
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[73px] items-center justify-start mt-2 w-[96%] md:w-full">
                      <Input
                        name="rectangle125"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="border border-blue_gray-100 border-solid flex h-[55px] w-[45%] md:w-full"
                      ></Input>
                      <Input
                        name="rectangle126"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="border border-blue_gray-100 border-solid flex h-[55px] w-[45%] md:w-full"
                      ></Input>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-[29px] w-3/5 md:w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Nomor Telepon
                      </Text>
                      <Text
                        className="text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        Email
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[73px] items-center justify-start mt-2 w-[96%] md:w-full">
                      <Input
                        name="rectangle127"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="border border-blue_gray-100 border-solid flex h-[55px] w-[45%] md:w-full"
                      ></Input>
                      <Input
                        name="rectangle128"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="border border-blue_gray-100 border-solid flex h-[55px] w-[45%] md:w-full"
                      ></Input>
                    </div>
                    <Text
                      className="mt-[29px] text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      Alamat
                    </Text>
                    <Input
                      name="rectangle134"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-blue_gray-100 border-solid flex h-[55px] mt-[11px] w-[43%]"
                    ></Input>
                    <div className="md:h-12 h-5 mt-7 relative w-[22%]">
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-base text-black-900 w-max"
                        size="txtInterRegular16"
                      >
                        Subjek Pertanyaan
                      </Text>
                    </div>
                    <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-2 text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                      name="pendaftaran"
                      id="pendaftaran"
                      label="Pendaftaran"
                    ></CheckBox>
                    <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-2 text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                    ></CheckBox>
                    <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-2 text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                      name="matapelajaran"
                      id="matapelajaran"
                      label="Mata Pelajaran"
                    ></CheckBox>
                    <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-2 text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                      name="biaya-biaya"
                      id="biaya-biaya"
                      label="Biaya-Biaya"
                    ></CheckBox>
                    <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-2 text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                    ></CheckBox>

                    <Text
                      className="mt-[22px] text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      Lainnya:
                    </Text>
                    <Input
                      name="rectangle135"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-blue_gray-100 border-solid flex h-[55px] md:ml-[0] ml-[3px] mt-3 w-[96%]"
                    ></Input>
                    <Text
                      className="mt-7 text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      Darimana Anda mendapatkan info tentang Pilar Cendekia?
                    </Text>
                    <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[3px] mt-2.5 w-[14%] md:w-full">
                     
                    </div>
                    <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-[3px] text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                      name="spanduk"
                      id="spanduk"
                      label="Spanduk"
                    ></CheckBox>
                    <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-[3px] text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                      name="brosur"
                      id="brosur"
                      label="Brosur"
                    ></CheckBox>
                    <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-1 text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                      name="website"
                      id="website"
                      label="Website"
                    ></CheckBox>
                    <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-[5px] text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                      name="medsos"
                      id="medsos"
                      label="Medsos"
                    ></CheckBox>
                    <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-[5px] text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                      name="teman"
                      id="teman"
                      label="Teman"
                    ></CheckBox>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-1.5 w-full">
                      <CheckBox
                        className="leading-[normal] text-base text-left"
                        inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                        name="lainnya_One"
                        id="lainnya_One"
                        label="Lainnya"
                      ></CheckBox>
                      <CheckBox
                        className="leading-[normal] mt-[5px] text-base text-left"
                        inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                        name="iklaninstagram"
                        id="iklaninstagram"
                        label="Iklan Instagram"
                      ></CheckBox>
                      <Text
                        className="mt-[33px] text-base text-black-900"
                        size="txtInterRegular16"
                      >
                        <>
                          Saya menyetujui penggunaan data pribadi saya untuk
                          tujuan berikut (Bimbingan Siswa, <br />
                          Operasional Kelas, Pembaruan pada produk/layanan baru)
                        </>
                      </Text>
                      <CheckBox
                        className="leading-[normal] mt-[7px] text-base text-left"
                        inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                        name="yasayasetuju"
                        id="yasayasetuju"
                        label="Ya, Saya setuju"
                      ></CheckBox>
                    </div>
                    <div className=" flex flex-col items-center justify-end md:ml-[0] ml-[3px] mt-[43px] p-[9px] rounded-[3px] w-[17%] md:w-full">
                      <div className="h-[17px] relative w-[56%]">
                        <Button
                          className="cursor-pointer px-4 py-2 font-bold bg-orange-700 text-sm rounded-sm text-slate-100 hover:bg-black-900 hover:text-slate-100"
                          size="txtInterBold14"
                        >
                          Submit
                        </Button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="bg-gray-800 flex items-center justify-center mt-auto mx-auto w-full">
              <div className="flex flex-row md:gap-5 items-center justify-center ml-[73px] mr-[85px] my-[25px] w-[90%]">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterRegular20"
                >
                  Copyright{" "}
                </Text>
                <Text
                  className="md:ml-[0] ml-[38px] text-white-A700 text-xl"
                  size="txtInterRegular20"
                >
                  2023 pilarcendekia. Allright reserved
                </Text>
                <Img
                  className="h-[30px] md:ml-[0] ml-[638px] w-[30px]"
                  src="images/img_group.svg"
                  alt="group"
                />
                <Img
                  className="h-[22px] md:ml-[0] ml-[9px] w-[21px]"
                  src="images/img_info_white_a700.svg"
                  alt="info"
                />
                <Img
                  className="h-[25px] md:ml-[0] ml-[9px] w-[26px]"
                  src="images/img_riwhatsappfill_white_a700.svg"
                  alt="riwhatsappfill"
                />
                <Img
                  className="h-[27px] md:ml-[0] ml-[9px] w-[27px]"
                  src="images/img_icbaselineemail_white_a700.svg"
                  alt="icbaselineemail"
                />
                <Img
                  className="h-[23px] md:ml-[0] ml-[9px]"
                  src="images/img_facebook_white_a700.svg"
                  alt="facebook"
                />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarPage;
