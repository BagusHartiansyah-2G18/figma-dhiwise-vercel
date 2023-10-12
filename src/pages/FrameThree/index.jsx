import React from "react";

import { Img, Text } from "components";

const FrameThreePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-bebasneue h-[1024px] mx-auto relative w-full">
        <div className="absolute border-[80px] border-gray-100_af border-solid bottom-[0] h-[942px] md:px-5 right-[14%] rounded-[479px] w-[67%]"></div>
        <Img
          className="absolute h-[1024px] inset-y-[0] left-[0] my-auto object-cover w-[87%]"
          src="images/img_workword1.png"
          alt="workwordOne"
        />
        <div className="absolute bg-gray-900_7f flex flex-col h-full inset-[0] items-end justify-center m-auto p-[157px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start mb-[183px] mr-11 w-[43%] md:w-full">
            <div className="flex flex-col gap-[18px] items-center justify-start w-full">
              <Text
                className="sm:text-[41px] md:text-[47px] text-[55px] text-center text-white-A700"
                size="txtBebasNeueRegular55WhiteA700"
              >
                <span className="md:text-5xl text-indigo-900 font-bebasneue text-[80px] font-normal">
                  <>
                    enter
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-bebasneue font-normal">
                  YOUR aCCOUNT
                </span>
              </Text>
              <div className="flex flex-col font-inter items-center justify-start w-full">
                <Text
                  className="bg-blue_gray-100 border-4 border-black-900 border-solid h-[66px] justify-center pb-1.5 pt-5 sm:px-5 px-[35px] rounded-[33px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-[474px]"
                  size="txtInterRegular32"
                >
                  Kode Pimpinan
                </Text>
                <Text
                  className="bg-blue_gray-100 border-4 border-black-900 border-solid h-[66px] justify-center mt-4 pb-[9px] pt-[17px] sm:px-5 px-[35px] rounded-[33px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-[474px]"
                  size="txtInterRegular32"
                >
                  Email
                </Text>
                <Text
                  className="bg-blue_gray-100 border-4 border-black-900 border-solid h-[66px] justify-center mt-4 pb-[9px] pt-[18px] sm:px-5 px-[35px] rounded-[33px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-[474px]"
                  size="txtInterRegular32"
                >
                  Password
                </Text>
                <Text
                  className="bg-teal-300 h-[75px] justify-center mt-[45px] pb-3 pt-[23px] sm:px-5 px-[35px] rounded-[37px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-[303px]"
                  size="txtInterBold32"
                >
                  Sign in
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameThreePage;
