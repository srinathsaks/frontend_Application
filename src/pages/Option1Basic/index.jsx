import React,{useState} from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

const Option1BasicPage = () => {

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-[254px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
              <Text
                className="ml-[23px] mr-[75px] sm:text-[19.91px] md:text-[21.91px] text-[23.91px] text-white-A700 mt-[50px]"
                size="txtPoppinsExtraBold2391"
              >
                DASHBOARD
              </Text>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    flexDirection: "column",
                    paddingLeft: "55px",
                    paddingRight: "55px",
                    [`&:hover, &.ps-active`]: {
                      color: "#888c9f",
                      fontWeight: "400 !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-start mb-[773px] mt-[55px] w-full"
              >
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-4 items-center justify-start md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-white-A700 flex flex-col justify-end pr-2.5 py-2.5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[813px] mr-[18px] mt-0.5 w-[30%] md:w-full">
                    <Img
                      className="h-[23px] md:mt-0 mt-1"
                      src="images/img_icons.svg"
                      alt="icons"
                    />
                    <Text
                      className="ml-9 md:ml-[0] md:mt-0 mt-[7px] text-[8.77px] text-blue_gray-300"
                      size="txtPoppinsMedium877"
                    >
                      Nick Thomas
                    </Text>
                    <Button
                      className="cursor-pointer h-[33px] leading-[normal] md:ml-[0] ml-[23px] text-[13.55px] text-center w-[34px]"
                      shape="round"
                      color="teal_50"
                    >
                      N
                    </Button>
                  </div>
                  <Line className="bg-blue_gray-50_01 h-px mr-[190px] mt-1 w-[84%]" />
                </div>
                <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-2 shadow-bs w-full">
                  <div className="flex sm:flex-1 flex-row items-end justify-between mb-[3px] ml-5 sm:ml-[0] w-[19%] sm:w-full">
                    <Text
                      className="my-1.5 text-[10.36px] text-gray-800"
                      size="txtPoppinsMedium1036"
                    >
                      Dashboard
                    </Text>
                    <Line className="bg-blue_gray-50_02 h-[21px] mb-0.5 mt-1.5 w-px" />
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[75px] text-[10.36px] text-center"
                      shape="round"
                      color="orange_50"
                    >
                      Add New
                    </Button>
                  </div>
                  <div className="flex sm:flex-1 flex-row items-start justify-between mr-[15px] w-[29%] sm:w-full">
                    <div className="h-[26px] relative w-[17%]">
                      <Text
                        className="ml-2 my-auto text-[10.36px] text-blue_gray-300"
                        size="txtPoppinsMedium1036Bluegray300"
                      >
                        Today
                      </Text>
                      <Button
                        className="absolute cursor-pointer font-medium h-full inset-[0] justify-center leading-[normal] m-auto min-w-[56px] text-[10.36px] text-center"
                        shape="round"
                      >
                        Today
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[5px]">
                      <Text
                        className="text-[10.36px] text-blue_gray-300"
                        size="txtPoppinsMedium1036Bluegray300"
                      >
                        Month{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-1.5">
                      <Text
                        className="text-[10.36px] text-blue_gray-300"
                        size="txtPoppinsMedium1036Bluegray300"
                      >
                        Year
                      </Text>
                    </div>
                    <Button
                      className="!text-blue_gray-300_01 cursor-pointer font-medium leading-[normal] min-w-[74px] text-[10.36px] text-center"
                      shape="round"
                    >
                      Actions
                    </Button>
                    <Img
                      className="h-7 w-7"
                      src="images/img_floatingicon.svg"
                      alt="floatingicon"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[22px] pr-[17px] w-[91%] md:w-full">
                  <div className="bg-white-A700 border border-blue_gray-50_03 border-solid flex flex-col items-center justify-start p-3.5 rounded-[9px] w-[16%] md:w-full">
                    <div className="flex flex-col gap-3 items-center justify-start mb-[15px] w-[62%] md:w-full">
                      <Img
                        className="h-16"
                        src="images/img_thumbsup_blue_gray_200.svg"
                        alt="thumbsup_One"
                      />
                      <Text
                        className="leading-[15.00px] text-[14.34px] text-blue_gray-200 text-center"
                        size="txtPoppinsSemiBold1434"
                      >
                        <>
                          SaaS
                          <br />
                          Application
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50_03 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[47px] p-[11px] rounded-[9px] w-[16%] md:w-full">
                    <div className="flex flex-col gap-3 items-center justify-start mb-[25px] w-[63%] md:w-full">
                      <Img
                        className="h-16"
                        src="images/img_grid_blue_gray_200.svg"
                        alt="grid_One"
                      />
                      <Text
                        className="leading-[15.00px] text-[15.94px] text-blue_gray-200 text-center"
                        size="txtPoppinsSemiBold1594"
                      >
                        <>
                          Main
                          <br />
                          Categories
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-teal-300 flex flex-col items-center justify-end md:ml-[0] ml-[72px] p-[19px] rounded-[9px] w-[16%] md:w-full">
                    <div className="flex flex-col gap-[18px] justify-start w-[66%] md:w-full">
                      <Img
                        className="h-14 mr-1.5"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="leading-[15.00px] ml-3.5 md:ml-[0] text-[15.94px] text-center text-white-A700"
                        size="txtPoppinsSemiBold1594WhiteA700"
                      >
                        <>
                          Video
                          <br />
                          Tutorials
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50_03 border-solid flex flex-col items-end justify-start md:ml-[0] ml-[52px] p-4 rounded-[9px] w-[16%] md:w-full">
                    <div className="flex flex-col gap-2 justify-start mb-[7px] mr-[11px] w-[72%] md:w-full">
                      <Img
                        className="h-[68px] md:ml-[0] ml-[7px]"
                        src="images/img_equalizer.svg"
                        alt="equalizer"
                      />
                      <Text
                        className="leading-[15.00px] text-[15.94px] text-blue_gray-200 text-center"
                        size="txtPoppinsSemiBold1594"
                      >
                        <>
                          Sales
                          <br />
                          Statistics
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50_03 border-solid flex flex-col items-center justify-end md:ml-[0] ml-[43px] p-[26px] sm:px-5 rounded-[9px] w-[16%] md:w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[66%] md:w-full">
                      <Img
                        className="h-[59px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="leading-[15.00px] text-[15.94px] text-blue_gray-200 text-center"
                        size="txtPoppinsSemiBold1594"
                      >
                        <>
                          ARC
                          <br />
                          Security
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[27px] w-[89%] md:w-full">
                  <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between w-full">
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start pb-[79px] rounded-[9px] w-[48%] md:w-full">
                        <div className="bg-red-A200 flex flex-col items-center justify-start pt-[17px] rounded-[9px] w-full">
                          <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-[91%] md:w-full">
                              <Text
                                className="mt-[3px] text-[13.55px] text-white-A700"
                                size="txtPoppinsSemiBold1355"
                              >
                                Categories
                              </Text>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[67px] rounded"
                                rightIcon={
                                  <div className="mt-1 mb-[7px] ml-2.5 outline-white-A700 outline-[0.5px] outline">
                                    <Img
                                      src="images/img_arrow.svg"
                                      alt="Arrow"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="white_A700_65"
                              >
                                <div className="font-semibold leading-[normal] text-[8.77px] text-left">
                                  Export
                                </div>
                              </Button>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-28 items-center justify-start py-1 w-full"
                              style={{
                                backgroundImage: "url('images/img_group8.svg')",
                              }}
                            >
                              <Img
                                className="h-[52px] mb-[51px]"
                                src="images/img_vector6.svg"
                                alt="vectorSix"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col gap-4 items-start justify-end p-[15px] rounded-[9px] w-[51%] md:w-full">
                        <div className="flex flex-row items-center justify-between md:ml-[0] ml-[7px] mt-[3px] w-[97%] md:w-full">
                          <Text
                            className="text-[13.55px] text-gray-900_02"
                            size="txtPoppinsSemiBold1355Gray90002"
                          >
                            Sales Progress
                          </Text>
                          <Img
                            className="h-1"
                            src="images/img_dots.svg"
                            alt="dots"
                          />
                        </div>
                        <List
                          className="flex flex-col gap-[23px] md:ml-[0] ml-[7px] w-[33%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3 items-start justify-between w-full">
                              <Button
                                className="flex h-[31px] items-center justify-center rounded-[9px] w-[31px]"
                                color="deep_purple_50"
                              >
                                <Img
                                  className="h-[15px]"
                                  src="images/img_thumbsup_deep_purple_a200.svg"
                                  alt="thumbsup"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[10.36px] text-black-900"
                                  size="txtPoppinsMedium1036Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-[9.56px] text-blue_gray-200"
                                  size="txtPoppinsMedium956"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3 items-start justify-between w-full">
                              <Button
                                className="flex h-[31px] items-center justify-center rounded-[9px] w-[31px]"
                                color="orange_50"
                              >
                                <Img
                                  className="h-[15px]"
                                  src="images/img_menu.svg"
                                  alt="menu"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[10.36px] text-black-900"
                                  size="txtPoppinsMedium1036Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-[9.56px] text-blue_gray-200"
                                  size="txtPoppinsMedium956"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3 items-start justify-between w-full">
                              <Button
                                className="flex h-[31px] items-center justify-center rounded-[9px] w-[31px]"
                                color="cyan_50"
                              >
                                <Img
                                  className="h-[15px]"
                                  src="images/img_maximize.svg"
                                  alt="maximize"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[10.36px] text-black-900"
                                  size="txtPoppinsMedium1036Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-[9.56px] text-blue_gray-200"
                                  size="txtPoppinsMedium956"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3 items-start justify-between w-full">
                              <Button
                                className="flex h-[31px] items-center justify-center rounded-[9px] w-[31px]"
                                color="pink_50"
                              >
                                <Img
                                  className="h-[15px]"
                                  src="images/img_settings.svg"
                                  alt="settings"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[10.36px] text-black-900"
                                  size="txtPoppinsMedium1036Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-[9.56px] text-blue_gray-200"
                                  size="txtPoppinsMedium956"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-[22px] items-center justify-start p-[18px] rounded-[9px] w-[89%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start">
                      <Text
                        className="text-[14.34px] text-gray-900_02"
                        size="txtPoppinsMedium1434"
                      >
                        Recent Stats
                      </Text>
                      <Text
                        className="text-[9.56px] text-blue_gray-400_01"
                        size="txtPoppinsMedium956Bluegray40001"
                      >
                        More than 400+ new members
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between w-[14%]">
                      <Text
                        className="mt-[5px] text-[9.56px] text-blue_gray-200"
                        size="txtPoppinsSemiBold956"
                      >
                        Month
                      </Text>
                      <Text
                        className="mt-[5px] text-[9.56px] text-blue_gray-200"
                        size="txtPoppinsSemiBold956"
                      >
                        Week
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[42px] rounded-[9px] text-[9.56px] text-center"
                        color="blue_gray_700_02"
                      >
                        Day
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mb-0.5 w-[92%] md:w-full">
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-[43px] items-center justify-between w-full">
                      <div className="flex flex-col gap-8 items-start justify-start">
                        <Text
                          className="h-[15px] text-[9.56px] text-blue_gray-200"
                          size="txtPoppinsMedium956"
                        >
                          150
                        </Text>
                        <Text
                          className="h-[15px] text-[9.56px] text-blue_gray-200"
                          size="txtPoppinsMedium956"
                        >
                          120
                        </Text>
                        <Text
                          className="text-[9.56px] text-blue_gray-200"
                          size="txtPoppinsMedium956"
                        >
                          90
                        </Text>
                        <Text
                          className="text-[9.56px] text-blue_gray-200"
                          size="txtPoppinsMedium956"
                        >
                          60
                        </Text>
                        <Text
                          className="text-[9.56px] text-blue_gray-200"
                          size="txtPoppinsMedium956"
                        >
                          30
                        </Text>
                        <Text
                          className="text-[9.56px] text-blue_gray-200"
                          size="txtPoppinsMedium956"
                        >
                          0
                        </Text>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[239px] items-center justify-start pt-2.5 px-2.5 w-[94%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group9.svg')",
                        }}
                      >
                        <Img
                          className="h-[228px]"
                          src="images/img_columns.svg"
                          alt="columns"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[90px] mt-[3px] w-4/5 md:w-full">
                      <Text
                        className="text-[9.56px] text-blue_gray-200 text-center"
                        size="txtPoppinsMedium956"
                      >
                        1 Aug
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[114px] text-[9.56px] text-blue_gray-200 text-center"
                        size="txtPoppinsMedium956"
                      >
                        8 Aug
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[109px] text-[9.56px] text-blue_gray-200 text-center"
                        size="txtPoppinsMedium956"
                      >
                        151 Aug
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[107px] text-[9.56px] text-blue_gray-200 text-center"
                        size="txtPoppinsMedium956"
                      >
                        22 Aug
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[108px] text-[9.56px] text-blue_gray-200 text-center"
                        size="txtPoppinsMedium956"
                      >
                        29 Aug
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[109px] text-[9.56px] text-blue_gray-200 text-center"
                        size="txtPoppinsMedium956"
                      >
                        5 Sep
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Option1BasicPage;
