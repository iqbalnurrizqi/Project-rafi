import React, { useState } from "react";
import { Button, CheckBox, Img, Text, NavbarPage, } from "components";
import { useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react";

const Recruiter = () => {
    const navigate = useNavigate()
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
            
        <div className="min-w-full h-600 ">
          <Img
            className=" object-cover "
            src="images/img_heroimage3_1.png"
            alt="heroimageThree"
          />
          <div className="flex flex-col md:px-5 relative w-full">
          
          <div className="bg-yellow-50 border border-light_blue-600 border-solid md:h-[734px] sm:h-[878px] h-[919px] p-[31px] md:px-5 relative shadow-bs w-full">
          <div className="absolute md:h-[634px] sm:h-[678px] h-[788px] inset-x-[0] mx-auto top-[3%] w-[91%] md:w-full">
            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[84px] justify-start right-[0] w-[52%]">
              <Img
                className="h-[556px] sm:h-auto md:ml-[0] ml-[57px] object-cover w-[92%] md:w-[300px] md:h-[400px"
                src="images/img_rectangle110.png"
                alt="rectangle110"
              />
              <Button
                className="border border-orange-300 border-solid cursor-pointer font-bold leading-[normal] min-w-[106px] mr-[565px] rounded-[3px] text-center text-sm"
                color="deep_orange_800"
                size="xs"
              >
                Submit
              </Button>
            </div>
           
              <Text
                className="md:text-5xl text-6xl text-black-900"
                size="txtSecularOneRegular60"
              >
                Informasi Pembimbing
              </Text>
              <Text
                className="md:ml-[0] ml-[7px] text-base text-black-900"
                size="txtInterRegular16"
              >
                Hubungi kami dengan menggunakan formulir online
              </Text>
            </div>
            <div className="absolute flex flex-col items-start justify-start left-[1%] top-[17%] w-[47%]">
              <Text
                className="ml-1 md:ml-[0] text-base text-black-900"
                size="txtInterRegular16Black900"
              >
                Bagian yang wajib diisi.
              </Text>
              <div className="flex flex-row items-start justify-between mt-0.5 w-[76%] md:w-full md:ml-5">
                <Text
                  className="text-base text-black-900"
                  size="txtInterRegular16"
                >
                  Nama
                </Text>
                <div className="bg-gray-100 border border-blue_gray-100 border-solid h-[45px] mt-[3px] rounded-[5px] w-[61%]"></div>
              </div>
              <div className="flex flex-row items-start justify-between mt-[33px] w-[76%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtInterRegular16"
                >
                  Usia
                </Text>
                <div className="bg-gray-100 border border-blue_gray-100 border-solid h-[45px] rounded-[5px] w-[62%]"></div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[67px] items-start justify-start mt-[37px] w-[76%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtInterRegular16"
                >
                  Nomor telepon
                </Text>
                <div className="bg-gray-100 border border-blue_gray-100 border-solid h-[45px] rounded-[5px] w-[61%]"></div>
              </div>
              <div className="flex flex-row items-start justify-between mt-9 w-[76%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtInterRegular16"
                >
                  Email
                </Text>
                <div className="bg-gray-100 border border-blue_gray-100 border-solid h-[45px] rounded-[5px] w-[61%]"></div>
              </div>
              <Img
                className="h-[13px] md:ml-[0] ml-[93px] mt-3"
                src="images/img_clock_white_a700.svg"
                alt="clock"
              />
              <div className="flex flex-row items-start justify-between mt-2.5 w-[76%] md:w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtInterRegular16"
                >
                  Alamat
                </Text>
                <div className="bg-gray-100 border border-blue_gray-100 border-solid h-[45px] rounded-[5px] w-[61%]"></div>
              </div>
              <Text
                className="mt-[37px] text-base text-black-900"
                size="txtInterRegular16"
              >
                Saya menyetujui penggunaan data pribadi saya untuk tujuan
                berikut
              </Text>
              <div className='flex flex-row gap-6'>
              <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-[3px] text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                      name="Bimbingan"
                      id="Bimbingan"
                      label="Bimbingan Siswa"
                    ></CheckBox>
                    <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-[3px] text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                      name="Oprasional"
                      id="Oprasional"
                      label="Oprasional Kelas"
                    ></CheckBox>
                    <CheckBox
                      className="leading-[normal] md:ml-[0] ml-[3px] mt-1 text-base text-left"
                      inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] w-[13px]"
                      name="Informasi"
                      id="Informasi"
                      label="Informasi Produk/layanan baru"
                    ></CheckBox>
              </div>
                    
          </div>
        </div>
          <footer className="bg-gray-800 flex items-center justify-center mt-[-5px] mx-auto w-full z-[1]">
            <div className="flex flex-row md:gap-5 items-center justify-center mb-[21px] ml-[67px] mr-[105px] mt-[26px] w-[89%]">
              <Text
                className="text-white-A700 text-xl sm:text-[13px]"
                size="txtInterRegular20"
              >
                Copyright{" "}
              </Text>
              <Text
                className="md:ml-[0] ml-[38px] text-white-A700 text-xl sm:text-[13px]"
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
}

export default Recruiter;