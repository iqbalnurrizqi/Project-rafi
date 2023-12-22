import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Img, NavbarPage, Text } from "components";
import { Menu, X } from "lucide-react";


const FasilitasPage = () => {
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
            
        <div className="min-w-full h-600">
          <Img
            className=" object-cover "
            src="images/img_heroimage3_1.png"
            alt="heroimageThree"
          />
          <div className="bg-yellow-50 border border-light_blue-600 border-solid flex flex-col font-secularone items-center justify-start p-[61px] md:px-10 sm:px-5 shadow-bs w-full">
          <div className="flex flex-col items-center justify-start max-w-[1248px] mx-auto w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 text-center sm:text-xl"
                size="txtSecularOneRegular24Bluegray800"
              >
                <>
                  &quot;Jangan hanya belajar, tetapi belajar dengan nyaman dan
                  bermakna!&quot;
                </>
              </Text>
              <div className="md:gap-5 gap-[83px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <Img
                  className="flex-1 h-[360px] md:h-auto object-cover w-full"
                  src="images/img_birudankuning.png"
                  alt="birudankuning"
                />
                <Img
                  className="flex-1 h-[360px] md:h-auto object-cover w-full"
                  src="images/img_11.png"
                  alt="One"
                />
                <Img
                  className="flex-1 h-[360px] md:h-auto object-cover w-full"
                  src="images/img_224.png"
                  alt="Two"
                />
                <Img
                  className="flex-1 h-[360px] md:h-auto object-cover w-full"
                  src="images/img_41.png"
                  alt="Three"
                />
                <Img
                  className="flex-1 h-[360px] md:h-auto object-cover w-full"
                  src="images/img_51.png"
                  alt="Four"
                />
                <Img
                  className="flex-1 h-[360px] md:h-auto object-cover w-full"
                  src="images/img_31.png"
                  alt="Five"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        {/* // Hero Section End */}

         {/* footer Section */}
        <footer className="bg-gray-800 flex font-inter items-center justify-center md:px-5 w-full">
          <div className="flex  flex-row md:gap-5 items-center justify-center ml-[71px] mr-[101px] my-[25px] w-[89%]">
            <Text className="text-white-A700 text-xl md:text-sm" size="txtInterRegular20">
              Copyright{" "}
            </Text>
            <Img
              className="h-5 ml-1 md:ml-[0] w-5"
              src="images/img_clock_white_a700.svg"
              alt="clock"
            />
            <Text
              className="ml-3.5 md:ml-[0] text-white-A700 text-xl md:text-sm"
              size="txtInterRegular20"
            >
              2023 pilarcendekia. Allright reserved
            </Text>
            <Img
              className="h-[30px] md:ml-[0] ml-[622px] w-[30px]"
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
    );
}

export default FasilitasPage;