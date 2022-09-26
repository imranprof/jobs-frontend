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
        dark: COLORS.pink,
        highContrast: COLORS.pink_1,
        cardHover: COLORS.white_3
      },
      sideBar: COLORS.white_1,
      seeMoreBtn: COLORS.white_2,
      seeMoreBtnHover: COLORS.gray_6,
      skillBackground: COLORS.white_6,
      shareBar: COLORS.white_2
    },
    customColor: {
      main: COLORS.gray,
      light: COLORS.gray,
      dark: COLORS.black,
      highContrast: COLORS.pink,
      navLinkActive: COLORS.pink,
      socialLinkHover: COLORS.white,
      backToTop: COLORS.pink,
      featuresHover: COLORS.white,
      featureIconHover: COLORS.white,
      inputBorder: COLORS.gray_6,
      sendMessageBtn: COLORS.white,
      searchBtn: COLORS.pink,
      hourlyRate: COLORS.gray,
      shareBtn: COLORS.pink,
      dangerColor: COLORS.danger,
      backToHomeHover: COLORS.black_1,
      avatarBgEdit: COLORS.white_5,
      success: COLORS.success,
      sendMessageText: COLORS.white_8,
      sendMessageBody: COLORS.light_blue,
      receivedMessageBody: COLORS.grey_7,
      receivedMessageText: COLORS.black_11
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
      light: COLORS.white
    },
    customHoverBackground: {
      main: COLORS.pink_1,
      closeIcon: COLORS.pink_1,
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
      navListTitle: COLORS.pink,
      mainTitle: COLORS.black,
      subTitle: COLORS.pink_2,
      cardBeforeBG: COLORS.pink_1,
      cardShadow: COLORS.boxShadow_9,
      cardTitle: COLORS.black,
      cardSubTitle: COLORS.gray,
      cardDescription: COLORS.gray,
      cardDivider: COLORS.white_7,
      hover: {
        cardTitle: COLORS.black,
        cardSubTitle: COLORS.white,
        cardDescription: COLORS.white,
        cardDivider: COLORS.pink_4,
      }
    },
    progressBar: {
      main: COLORS.white_5,
      secondary: COLORS.pink_3,
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
