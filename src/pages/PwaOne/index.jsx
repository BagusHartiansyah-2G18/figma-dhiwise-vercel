import React from "react";

import { Button, Img, Line, Text } from "components";

const PwaOnePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-bebasneue h-[1024px] items-center justify-end mx-auto p-[33px] sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_pwaone.png')" }}
      >
        <div className="flex flex-col items-center justify-start max-w-[1316px] mt-[9px] mx-auto md:px-5 w-full">
          <header className="flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="header-row ">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[2.16px]"
                  size="txtPacificoRegular36"
                >
                  Log Activities
                </Text>
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col font-poppins sm:hidden items-center justify-start md:ml-[0] ml-[527px] w-[9%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.44px]"
                  size="txtPoppinsRegular24"
                >
                  Infomasi
                </Text>
                <Line className="bg-white-A700 h-1 w-[63%]" />
              </div>
              <Text
                className="sm:hidden md:ml-[0] ml-[26px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.44px]"
                size="txtPoppinsMedium24"
              >
                Sponsor
              </Text>
              <Text
                className="sm:hidden md:ml-[0] ml-[60px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.44px]"
                size="txtPoppinsMedium24"
              >
                Tim
              </Text>
              <Text
                className="sm:hidden md:ml-[0] ml-[70px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.44px]"
                size="txtPoppinsMedium24"
              >
                Kontak
              </Text>
            </div>
          </header>
          <div className="flex md:flex-col flex-row font-notosans md:gap-10 items-center justify-between mt-[7px] w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[30%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.72px]"
                  size="txtNotoSansSemiBold24"
                >
                  Make a list of your activities
                </Text>
                <div className="md:h-[68px] h-[69px] relative w-full">
                  <div className="absolute font-poppins md:h-[68px] h-[69px] inset-[0] justify-center m-auto w-full">
                    <Text
                      className="absolute h-max inset-y-[0] my-auto right-[0] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.88px]"
                      size="txtPoppinsBold48"
                    >
                      “LA“
                    </Text>
                    <Line className="absolute bg-white-A700 bottom-[0] h-1 inset-x-[0] mx-auto w-full" />
                  </div>
                  <Text
                    className="absolute bottom-[0] left-[0] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[2.16px]"
                    size="txtPacificoRegular36"
                  >
                    Log Activities
                  </Text>
                </div>
                <div className="flex flex-row font-poppins gap-[51px] items-center justify-start mt-[37px] w-[77%] md:w-full">
                  <Button className="border border-black-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[119px] text-center text-lg tracking-[1.08px]">
                    Sig In
                  </Button>
                  <Button
                    className="border-2 border-gray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[126px] text-center text-lg tracking-[1.08px]"
                    color="lime_700"
                  >
                    Sig UP
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-[490px] relative w-[45%] md:w-full">
              <div className="absolute h-[490px] inset-y-[0] left-[8%] my-auto w-[79%] sm:w-full">
                <div className="bg-blue-400 h-[46px] ml-[130px] mt-1.5 rounded-[50%] shadow-bs1 w-[46px]"></div>
                <Img
                  className="absolute h-[490px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_saly13.png"
                  alt="salyThirteen"
                />
              </div>
              <Img
                className="absolute h-[74px] left-[0] rounded-[14px] top-[36%]"
                src="images/img_location.svg"
                alt="location"
              />
              <Img
                className="absolute h-[88px] inset-y-[0] my-auto right-[0] rounded-[14px]"
                src="images/img_location_amber_400.svg"
                alt="location_One"
              />
            </div>
          </div>
          <Text
            className="mt-80 sm:text-[41px] md:text-[47px] text-[55px] text-black-900"
            size="txtBebasNeueRegular55"
          >
            Sponsor By
          </Text>
        </div>
      </div>
    </>
  );
};

export default PwaOnePage;
