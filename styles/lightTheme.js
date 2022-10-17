import {createTheme} from "@material-ui/core/styles";
import COLORS from "./colors";

const lightTheme = createTheme({
  palette: {
    type: "light",
    background: {
      default: COLORS.white_1
    },
    customBackground: {
      main: COLORS.white,
      light: COLORS.white_1,
      dark: COLORS.white_2,
      gradiant: {
        light: COLORS.white_3,
        dark: COLORS.bluish_2,
        highContrast: COLORS.blue_1,
        cardHover: COLORS.white_3
      },
      sideBar: COLORS.white_1,
      seeMoreBtn: COLORS.white_2,
      seeMoreBtnHover: COLORS.gray_6,
      skillBackground: COLORS.blue_2,
      shareBar: COLORS.white_2,
      buttonHover: COLORS.blue_1,
      hirePaperBg: COLORS.white,
      buttonBg: COLORS.light_blue,
      buttonHoverBg: COLORS.blue_1
    },
    customColor: {
      main: COLORS.gray,
      light: COLORS.gray,
      dark: COLORS.black,
      highContrast: COLORS.blue_1,
      navLinkActive: COLORS.blue_1,
      socialLinkHover: COLORS.black_1,
      backToTop: COLORS.blue_1,
      featuresHover: COLORS.black_1,
      featureIconHover: COLORS.white,
      inputBorder: COLORS.gray_6,
      sendMessageBtn: COLORS.black_1,
      searchBtn: COLORS.blue_1,
      hourlyRate: COLORS.gray,
      shareBtn: COLORS.bluish,
      dangerColor: COLORS.danger,
      backToHomeHover: COLORS.black_1,
      avatarBgEdit: COLORS.white_5,
      success: COLORS.success,
      sendMessageText: COLORS.white_8,
      sendMessageBody: COLORS.light_purple,
      receivedMessageBody: COLORS.grey_7,
      receivedMessageText: COLORS.black_11,
      confirmButton: COLORS.light_blue,
      radioButton: COLORS.light_blue,
      jobPostBtn: COLORS.white,
      jobType: COLORS.blue_1
    },
    customShadow: {
      main: COLORS.boxShadow_2,
      light: COLORS.boxShadow_5,
      dark: COLORS.boxShadow_10,
      default: COLORS.boxShadow_6,
      backToTop: COLORS.boxShadow_10,
      themeButton: COLORS.boxShadow_10,
      paperCardShadow: COLORS.boxShadow_9,
      buttonShadow: COLORS.boxShadow_9,
      editInputShadow: COLORS.boxShadow_5
    },
    customDivider: {
      main: COLORS.gray_5,
    },
    customHoverColor: {
      main: COLORS.white,
      light: COLORS.black_1
    },
    customHoverBackground: {
      main: COLORS.blue_1,
      closeIcon: COLORS.blue_1,
      searchHover: COLORS.searchHover
    },
    beforeBackground: {
      main: COLORS.gray_5
    },
    beforeShadow: {
      main: COLORS.boxShadow_8,
    },
    afterBackground: {
      main: COLORS.white_1
    },
    customBorder: {
      beforeElement: COLORS.gray_5,
      editInputElement: COLORS.gray,
      customInputBorder: COLORS.black_1
    },
    resume: {
      navListColor: COLORS.black,
      navListShadow: COLORS.boxShadow_9,
      navListTitle: COLORS.blue_1,
      mainTitle: COLORS.black,
      subTitle: COLORS.blue_1,
      cardBeforeBG: COLORS.bluish,
      cardShadow: COLORS.boxShadow_9,
      cardTitle: COLORS.black,
      cardSubTitle: COLORS.gray,
      cardDescription: COLORS.gray,
      cardDivider: COLORS.white_7,
      hover: {
        cardTitle: COLORS.black,
        cardSubTitle: COLORS.black,
        cardDescription: COLORS.black,
        cardDivider: COLORS.blue_1,
      }
    },
    progressBar: {
      main: COLORS.white_5,
      secondary: COLORS.bluish_3,
      title: COLORS.black,
      percentText: COLORS.gray,
      boxShadow: "none",
    },
    scrollBar: {
      track: COLORS.gray_4,
      thumb: COLORS.white_6
    }
  },
});

export default lightTheme
