import React from "react";

import { Img, Text } from "components";

const PwaThreePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-bebasneue h-[1024px] items-start justify-start mx-auto p-[45px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_pwathree.png')" }}
      >
        <div className="flex md:flex-col flex-row gap-6 items-end justify-start mb-3 md:ml-[0] ml-[69px] w-[85%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[95px] justify-start w-[62%] md:w-full">
            <Text
              className="md:ml-[0] ml-[512px] sm:text-[41px] md:text-[47px] text-[55px] text-black-900 text-center"
              size="txtBebasNeueRegular55"
            >
              <>
                Team
                <br />
                Developer
              </>
            </Text>
            <div className="flex flex-col font-poppins items-center justify-start mr-[138px] w-[81%] md:w-full">
              <div className="sm:gap-5 gap-[98px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-6 sm:px-5 rounded-[32px] w-full">
                  <Img
                    className="h-36 mt-10 w-36"
                    src="images/img_accountbalance.svg"
                    alt="accountbalance"
                  />
                  <Text
                    className="mt-[26px] text-black-900 text-lg"
                    size="txtPoppinsSemiBold18"
                  >
                    M Software Center
                  </Text>
                  <Text
                    className="mt-[9px] text-black-900_90 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    IT Consultant
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-6 sm:px-5 rounded-[32px] w-full">
                  <Img
                    className="h-36 mt-10 w-36"
                    src="images/img_accountbalance.svg"
                    alt="accountbalance"
                  />
                  <Text
                    className="mt-[26px] text-black-900 text-lg"
                    size="txtPoppinsSemiBold18"
                  >
                    M Software Center
                  </Text>
                  <Text
                    className="mt-[9px] text-black-900_90 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    IT Consultant
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-6 sm:px-5 rounded-[32px] w-full">
                  <Img
                    className="h-36 mt-10 w-36"
                    src="images/img_accountbalance.svg"
                    alt="accountbalance"
                  />
                  <Text
                    className="mt-[26px] text-black-900 text-lg"
                    size="txtPoppinsSemiBold18"
                  >
                    M Software Center
                  </Text>
                  <Text
                    className="mt-[9px] text-black-900_90 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    IT Consultant
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-6 sm:px-5 rounded-[32px] w-full">
                  <Img
                    className="h-36 mt-10 w-36"
                    src="images/img_accountbalance.svg"
                    alt="accountbalance"
                  />
                  <Text
                    className="mt-[26px] text-black-900 text-lg"
                    size="txtPoppinsSemiBold18"
                  >
                    M Software Center
                  </Text>
                  <Text
                    className="mt-[9px] text-black-900_90 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    IT Consultant
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-400 flex flex-col items-center justify-start md:mt-0 mt-[231px] rounded-[10px] w-[37%] md:w-full">
            <div className="bg-gradient  h-[307px] rounded-[10px] w-full"></div>
            <Text
              className="mt-[42px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtPoppinsSemiBold25"
            >
              M Software Center
            </Text>
            <Text
              className="mb-[153px] mt-16 sm:text-[21px] md:text-[23px] text-[25px] text-black-900_01 text-justify w-[83%] sm:w-full"
              size="txtPontanoSansRegular25"
            >
              Seorang pengembang sistem mobile apps, telah berpengalaman
              mengatasi permasalah dibeberapa bidang industri
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default PwaThreePage;
