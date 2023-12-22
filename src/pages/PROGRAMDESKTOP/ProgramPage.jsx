import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CheckBox, Img, List, NavbarPage, Text } from "components";
import { Menu, X } from "lucide-react";

const ProgramPage = () => {
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
          <div className="flex flex-col md:px-5 relative w-full">
          <div className="bg-yellow-50 border border-light_blue-600 border-solid flex flex-col items-center justify-start m-auto p-[22px] sm:px-5 shadow-bs w-full">
            <div className="flex flex-col items-center justify-start mb-[35px] w-[93%] md:w-full">
              <div className="font-caveatbrush h-[81px] relative w-[26%]">
                <Text
                  className="m-auto md:text-5xl text-[64px] text-blue_gray-800 text-center"
                  size="txtCaveatBrushRegular64"
                >
                  Pilar Cendekia
                </Text>
                
              </div>
              <Text
                className="mt-[3px] text-2xl md:text-[22px] text-blue_gray-800 text-center sm:text-xl md:mt-[10px]"
                size="txtInterRegular24Bluegray800"
              >
                Menyediakan Program SD, SMP, SMA
              </Text>
              <div className="flex flex-col font-secularone md:gap-10 gap-[66px] justify-start mt-[33px] w-full">
                <List
                  className="flex flex-col gap-[85px] items-center w-full"
                  orientation="vertical"
                >
                  {/* section Sd 1 */}    
                  <div className="sm:h-[1000px] md:h-[1107px] h-[905px] my-0 relative w-full">
                    <div className="flex flex-col md:gap-50 gap-[90px] mb-10 h-full justify-start ml-7 mt-[25px] w-[34%]">
                      <h2
                        className="text-5xl sm:text-[30px] md:text-[35px] text-blue_gray-800 text-left md:text-3xl"
                        size="txtSecularOneRegular48"
                      >
                        Program Bimbel SD
                      </h2>
                      <div className="flex flex-col items-center justify-start ml-[380px] w-[6%] md:ml-[250px] sm:ml-[0px] sm:mt-[100px]">
                        <Img
                          className="h-8 mt-[60px] md:mt-[60px] md:w-[200] sm:mt-[100px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                        <Img
                          className="h-8 mt-[55px] md:mt-[95px] sm:mt-[65px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_One"
                        />
                        <Img
                          className="h-8 mt-[60px] md:mt-[95px] sm:mt-[65px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Two"
                        />
                        <Img
                          className="h-8 mt-[90px] md:mt-[120px] sm:mt-[95px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Three"
                        />
                      </div>
                    </div>
                    <div className="absolute border border-black-900 border-solid flex flex-col font-inter h-full inset-[0] items-center justify-center m-auto p-8 sm:px-5 rounded-[30px] shadow-bs1 w-full ms:flex-row ">
                      <div className="flex flex-col gap-[50px] items-center justify-start mt-[58px] w-[98%] md:w-full md:ml-3 md:mt-0 ms:fle- sm:mt-[50]">
                        <div className="flex md:flex-row flex-row sm:flex-row sm:flex-wrap md:gap-[49px] sm:gap-[0] items-start justify-between w-full ">
                          <Img
                            className="h-[250px] ms:flex-wrap md:h-auto object-cover w-[323px] md:w-[200px] md:mt-10 sm:w-[150px] ms:h-auto ms:mt-0 sm:mt-[80px]"
                            src="images/img_programsd1.png"
                            alt="programsdOne"
                          />
                          <div className="flex flex-col ms:flex-row sm:mx-0 sm:p-0 gap-5 items-center mx-10 px-10 justify-start md:m-0 md:px-0">
                            <Text
                              className="text-xl md:text-[20px] text-black-900 sm:text-[13px] w-full sm:mt-5"
                              size="txtInterRegular24Black900"
                            >
                              Program Bimbingan Belajar (Bimbel) untuk siswa SD
                              dirancang untuk memberikan dukungan tambahan dalam
                              memahami materi pelajaran dan mengembangkan
                              keterampilan belajar
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-[20px] items-start justify-start w-full md:gap-[10px]">
                              {/* <Img
                                className="h-7 sm:mt-0 mt-24"
                                src="images/img_checkmark.svg"
                                alt="checkmark_Four"
                              /> */}
                              <Text
                                className="text-2xl md:text-[15px] mx-20 text-black-900 sm:ml-[30px] sm:text-[13px] sm:mx-0 md:mx-10"
                                size="txtInterRegular24Black900"
                              >
                                <>
                                    Guru memberikan penjelasan mendalam tentang
                                  konsep-konsep yang sulit dan memberikan contoh
                                  yang relevan.
                                  <br />
                                  <br />
                                  Guru membantu siswa dalam mengerjakan tugas
                                  sekolah mereka dan memberikan klarifikasi
                                  terkait materi pelajaran.
                                  <br />
                                  <br />
                                  Siswa diberikan latihan soal sebagai bentuk
                                  pemantapan materi. Ini dapat melibatkan
                                  berbagai tingkat kesulitan untuk memastikan
                                  pemahaman yang mendalam.
                                  <br />
                                  <br />
                                  Siswa diajarkan teknik-teknik belajar efektif,
                                  seperti pembuatan catatan, peta konsep, dan
                                  metode-metode belajar kreatif.
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[200px] md:h-auto object-cover w-100"
                          src="images/img_image3.png"
                          alt="imageThree"
                        />
                      </div>
                    </div>
                  </div>
                  {/* section SMP 2 */}
                  <div className=" sm:h-[1200px] md:h-[1277px] h-[950px] my-0 relative w-full">
                    <div className="flex flex-col sm:flex-row md:gap-10 gap-[90px] mb-10 h-full justify-start ml-7 mt-[25px] w-[34%] sm:gap-[50px]">
                      <h2
                        className="text-4xl sm:text-[30px] md:text-[35px] text-blue_gray-800 text-left "
                        size="txtSecularOneRegular48"
                      >
                        Program Bimbel SMP
                      </h2>
                      <div className="flex flex-col items-center justify-start md:mt-[50px] ml-[380px] w-[6%] md:ml-[250px]">
                        <Img
                          className="h-8 mt-[40px] md:mt-[100px] "
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                        <Img
                          className="h-8 mt-[60px] md:mt-[95px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_One"
                        />
                        <Img
                          className="h-8 mt-[60px] md:mt-[95px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Two"
                        />
                        <Img
                          className="h-8 mt-[70px] md:mt-[100px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Three"
                        />
                        <Img
                          className="h-8 mt-[60px] md:mt-[90px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Three"
                        />
                      </div>
                    </div>
                    <div className="absolute border border-black-900 border-solid flex flex-col font-inter h-full inset-[0] items-center justify-center m-auto p-8 sm:px-5 rounded-[30px] shadow-bs1 w-full">
                      <div className="flex flex-col sm:flex-wrap sm:flex-row gap-[50px] items-center justify-start mt-[58px] w-[98%] md:w-full">
                        <div className="flex flex-row sm:flex-row sm:flex-wrap sm:mt-[0px] md:gap-[0px] items-start justify-between w-full">
                          <Img
                            className="h-[250px] sm:h-auto md:h-auto object-cover w-[323px] md:mt-[90px] md:w-[200px] sm:w-[150px] sm:mt-[10px]"
                            src="images/img_programsmp1.png"
                            alt="programsdOne"
                          />
                          <div className="flex flex-col gap-5 items-center mx-10 px-10 justify-start sm:mt-[20px]  md:mx-0 md:mt-[90px] sm:px-0">
                            <Text
                              className="text-xl md:text-[20px] text-black-900 sm:text-[13px] w-full"
                              size="txtInterRegular24Black900"
                            >
                              Program Bimbingan Belajar (Bimbel) untuk siswa SMP dirancang untuk memberikan pendampingan yang terarah dalam memahami materi pelajaran, mempersiapkan ujian, dan mengembangkan keterampilan belajar
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-[20px] items-start justify-start w-full">
                              {/* <Img
                                className="h-7 sm:mt-0 mt-24"
                                src="images/img_checkmark.svg"
                                alt="checkmark_Four"
                              /> */}
                              <Text
                                className="text-2xl ms:text-[8px] ms:flex-row sm:ml-[30px] md:text-[15px] mx-20  text-black-900 sm:text-[13px] md:ml-10 md:mx-0 "
                                size="txtInterRegular24Black900"
                              >
                                 <>
                                  Guru membimbing siswa dalam mengerjakan tugas
                                  sekolah dan proyek-proyek yang memerlukan
                                  pemahaman lebih mendalam.
                                  <br />
                                  <br />
                                  Memberikan latihan soal dengan tingkat
                                  kesulitan yang bervariasi untuk memastikan
                                  pemahaman menyeluruh.
                                  <br />
                                  <br />
                                  Mendorong siswa untuk berpartisipasi dalam
                                  diskusi kelompok untuk mengembangkan kemampuan
                                  berpikir kritis dan analisis.
                                  <br />
                                  <br />
                                  Siswa diajarkan teknik-teknik belajar efektif,
                                  seperti pembuatan catatan, peta konsep, dan
                                  metode-metode belajar kreatif.
                                  <br />
                                  <br />
                                  Memberikan informasi tentang berbagai pilihan
                                  karir dan jalur pendidikan yang dapat diambil
                                  siswa di tingkat SMP.
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[200px] md:h-auto object-cover w-100 md:mt-0"
                          src="images/img_image5.png"
                          alt="imageThree"
                        />
                      </div>
                    </div>
                  </div>
                  {/* section Sd 3*/}
                  <div className="sm:h-[1400px] md:h-[1277px] h-[1100px] my-0 relative w-full">
                    <div className="flex flex-col md:gap-10 gap-[90px] mb-10 h-full justify-start ml-7 mt-[25px] w-[34%]">
                      <h2
                        className="text-4xl sm:text-[30px] md:text-[35px] text-blue_gray-800 text-left "
                        size="txtSecularOneRegular48"
                      >
                        Program Bimbel SMA
                      </h2>
                      <div className="flex flex-col items-center justify-start ml-[380px] w-[6%] md:ml-[250px] md:mt-[65px] sm:ml-0 sm:mt-[200px]">
                        <Img
                          className="h-8 mt-[110px] sm:mt-[155px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                        <Img
                          className="h-8 mt-[100px] md:mt-[130px] sm:mt-[105px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_One"
                        />
                        <Img
                          className="h-8 mt-[70px] md:mt-[100px] sm:mt-[80px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Two"
                        />
                        <Img
                          className="h-8 mt-[60px] md:mt-[60px] sm:mt-[55px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Three"
                        />
                        <Img
                          className="h-8 mt-[90px] md:mt-[95px] sm:mt-[80px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Three"
                        />
                      </div>
                    </div>
                    <div className="absolute border border-black-900 border-solid flex flex-col font-inter h-full inset-[0] items-center justify-center m-auto p-8 sm:px-5 rounded-[30px] shadow-bs1 w-full">
                      <div className="flex flex-col gap-[50px] items-center justify-start mt-[58px] w-[98%] md:w-full">
                        <div className="flex flex-row md:gap-[49px] sm:flex-row sm:flex-wrap items-start justify-between w-full">
                          <Img
                            className="h-[250px] sm:h-auto md:h-auto object-cover w-[323px] md:mt-[90px] md:w-[200px] sm:w-[150px] sm:mt-[20px]"
                            src="images/img_programsma1.png"
                            alt="programsdOne"
                          />
                          <div className="flex flex-col gap-5 items-center mx-10 px-10 justify-start md:mx-0 md:px-0">
                            <Text
                              className="text-2xl md:text-[20px] mx-10 mt-5  text-black-900 sm:text-[15px] w-full md:mx-0 md:mt-[20px] sm:mt-0"
                              size="txtInterRegular24Black900"
                            >
                              Program Bimbingan Belajar (Bimbel) untuk siswa SMA
                              dirancang untuk memberikan pendampingan yang
                              mendalam dalam mempersiapkan siswa untuk ujian
                              nasional, ujian sekolah, serta meningkatkan
                              pemahaman konsep dan keterampilan belajar.
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-[20px] items-start justify-start w-full">
                              {/* <Img
                                className="h-7 sm:mt-0 mt-24"
                                src="images/img_checkmark.svg"
                                alt="checkmark_Four"
                              /> */}
                              <Text
                                className="text-2xl md:text-[15px] mx-20 sm:text-[15px] text-black-900 sm:text-xl md:mx-0 md:ml-10"
                                size="txtInterRegular24Black900"
                              >
                                <>
                                  Menyelenggarakan ujian simulasi yang mirip
                                  dengan ujian nasional dan ujian sekolah untuk
                                  membiasakan siswa dengan format ujian dan
                                  meningkatkan kesiapan mereka.
                                  <br />
                                  <br />
                                  Membantu siswa dalam mengembangkan
                                  keterampilan menulis yang baik untuk esai,
                                  makalah, dan tugas-tugas lainnya.
                                  <br />
                                  <br />
                                  Mengajarkan teknik belajar yang efektif dan
                                  memaksimalkan penggunaan waktu studi.
                                  <br />
                                  <br />
                                  Menyelenggarakan ujian kemajuan berkala untuk
                                  mengukur pemahaman siswa dan mengidentifikasi
                                  area yang perlu ditingkatkan.
                                  <br />
                                  <br />
                                  Menyelenggarakan ujian simulasi yang mirip
                                  dengan ujian nasional dan ujian sekolah untuk
                                  membiasakan siswa dengan format ujian dan
                                  meningkatkan kesiapan mereka.
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[200px] md:h-auto object-cover w-100"
                          src="images/img_image5.png"
                          alt="imageThree"
                        />
                      </div>
                    </div>
                  </div>
                  
                  
                </List>
                <Img
                  className="h-[19px] md:ml-[0] ml-[98px]"
                  src="images/img_clock.svg"
                  alt="clock"
                />
              </div>
            </div>
          </div>
          <footer className="bg-gray-800 flex items-center justify-center mt-[-5px] mx-auto w-full z-[1]">
            <div className="flex flex-row md:gap-5 items-center justify-center mb-[21px] ml-[67px] mr-[105px] mt-[26px] w-[89%]">
              <Text
                className="text-white-A700 text-xl sm:text-[15px]"
                size="txtInterRegular20"
              >
                Copyright{" "}
              </Text>
              <Text
                className="md:ml-[0] ml-[38px] text-white-A700 text-xl sm:text-[15px]"
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

export default ProgramPage;