import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../../styles/fonts";
import COLORS from "../../../../../styles/colors";

const useStyles = makeStyles({
  portfolioAddWrapper: theme => ({
    '&__body': {
      position: "fixed",
      display: "block",
      background: theme.palette.customBackground.light,
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      overflowX: "hidden",
      overflowY: "auto",
      outline: 0,
      padding: "60px 15px",
      zIndex: 99999999,
    },
    '&__dialog': {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "28px auto",
      width: "100%",
      maxWidth: 1230,
      minHeight: "calc(100% - 56px)",
    },
    '&__modal-content': {
      position: "relative",
      padding: 45,
      marginTop: -70,
      border: "none",
      borderRadius: 10,
      overflowX: "hidden",
      overflowY: "auto",
      background: theme.palette.customBackground.gradiant.light,
      boxShadow: theme.palette.customShadow.paperCardShadow,
      transition: ".2s linear",
      // ========= Breakpoints =========
      [theme.breakpoints.down(767)]: {
        padding: 30,
      },
      [theme.breakpoints.down(479)]: {
        padding: "40px 15px 25px 15px",
      },
      '& .MuiGrid-container': {
        width: "auto",
        padding: 9,
        marginLeft: -15,
        marginRight: -15,
        // ========= Breakpoints =========
        [theme.breakpoints.down(767)]: {
          paddingTop: 19,
        },
        [theme.breakpoints.down(479)]: {
          paddingTop: 12,
        },
      },
      '& .MuiGrid-item': {
        paddingLeft: 15,
        paddingRight: 15,
        // ========= Breakpoints =========
        [theme.breakpoints.up(960)]: {
          '&:nth-child(2)': {
            paddingLeft: 35,
          },
        },
        [theme.breakpoints.down(960)]: {
          '&:nth-child(2)': {
            marginTop: 30,
          },
        }
      },
      '&--visible': {
        marginTop: 0,
      },
      '&__close-icon': {
        position: "absolute",
        top: 5,
        right: 6,
        background: theme.palette.customBackground.gradiant.light,
        color: theme.palette.customColor.dark,
        transition: ".3s ease",
        [theme.breakpoints.down(767)]: {
          top: 2,
          right: 9,
        },
        '&:hover': {
          background: theme.palette.customHoverBackground.closeIcon,
          color: theme.palette.customHoverColor.main,
        }
      },
      '&__image-container': {
        display: "flex",
        alignItems: "center",
        '&__image': {
          borderRadius: 10,
          height: "auto",
          width: "100%",
        },
      },
      '&__text-content': {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        '&__categoryWrapper': {
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
          '&__categories': {
            display: "flex",
            flexWrap: "wrap",
          }
        },
        '&__category': {
          color: theme.palette.customColor.dark,
          fontFamily: FONTS.primaryFont,
          marginTop: 9,
          width: "100%",
          // =========== override react-select ==========
          '& .css-1s2u09g-control, & .css-1pahdxg-control': {
            backgroundColor: "transparent",
          },
          '& #react-select-2-listbox, & .css-26l3qy-menu': {
            backgroundColor: theme.palette.customBackground.light,
          },
          '& .css-1rhbuit-multiValue, & .css-1n7v3ny-option': {
            backgroundColor: theme.palette.customBackground.skillBackground,
          },
          '& .css-12jo7m5, & .css-1pndypt-Input, & .css-qc6sy-singleValue': {
            color: theme.palette.customColor.light,
          },
          // =========== End override react-select =========

          '&__text': {
            marginRight: 10,
            color: theme.palette.customColor.dark,
            fontFamily: FONTS.primaryFont,
            fontSize: 16,
            fontWeight: 500,
            [theme.breakpoints.down('xs')]: {
              fontSize: 15
            }
          }
        },
        '&__title': {
          marginTop: 0,
          marginBottom: 21,
          color: theme.palette.customColor.main,
          fontFamily: FONTS.primaryFont,
          fontSize: 34,
          fontWeight: 700,
          [theme.breakpoints.down('xs')]: {
            fontSize: 24,
            fontWeight: 600,
          },
          '&__input': {
            width: "100%",
            marginTop: 14,
            '& label.Mui-focused': {
              color: theme.palette.customBorder.customInputBorder
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: theme.palette.customBorder.customInputBorder
            },
            '& .MuiFilledInput-underline:after': {
              borderBottomColor: theme.palette.customBorder.customInputBorder
            },
            '& .MuiOutlinedInput-input': {
              padding: 12
            },
            '& .MuiOutlinedInput-inputMultiline': {
              padding: 0
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: theme.palette.customBorder.customInputBorder,
              }
            },
            '& input': {
              color: theme.palette.customColor.main,
              background: "transparent",
              fontSize: 34,
              [theme.breakpoints.down('xs')]: {
                fontSize: 16,
              },
            }
          }
        },
        '&__description': {
          marginRight: 10,
          '& p': {
            color: theme.palette.customColor.dark,
            fontFamily: FONTS.secondaryFont,
            fontSize: 18,
            fontWeight: 400,
            marginRight: 30,
            marginBottom: 30,
            [theme.breakpoints.down('xs')]: {
              fontSize: 14,
              marginRight: 8,
              marginBottom: 8,
            },
            marginTop: 0,
            '&:last-child': {
              marginBottom: 0,
            },
          },
          '&__input': {
            width: "100%",
            background: "transparent",
            border: `1px solid ${theme.palette.customBorder.editInputElement}`,
            overflowY: "auto",
            borderRadius: 4,
            marginTop: 14,
            '& div': {
              fontSize: 18,
              fontWeight: 400,
              color: theme.palette.customColor.main,
              padding: "8px",
              [theme.breakpoints.down('xs')]: {
                fontSize: 14,
                marginRight: 8,
                marginBottom: 8,
              },
            }
          }
        },
        '&__link-button-wrapper': {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          height: "100%",
          marginTop: 20,
          // ========= Breakpoints =========
          [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            alignItems: "flex-start",
            '&__link-button': {
              margin: "15px 15px 15px 0",
            }
          },
          '&__link-button': {
            background: theme.palette.customBackground.gradiant.light,
            boxShadow: theme.palette.customShadow.paperCardShadow,
            color: theme.palette.customColor.highContrast,
            cursor: "pointer",
            textDecoration: "none",
            transition: "all .4s ease",
            fontFamily: FONTS.secondaryFont,
            fontSize: 14,
            fontWeight: 500,
            padding: "15px 35px",
            borderRadius: 6,
            // ========= Breakpoints =========
            [theme.breakpoints.between(960, 967)]: {
              fontSize: 13,
            },
            [theme.breakpoints.down('xs')]: {
              padding: "10px 15px",
              margin: "10px 10px 10px 0px",
              fontSize: 12
            },
            '&:nth-child(1)': {
              marginRight: 15,
            },
            '&:nth-child(2)': {
              marginLeft: 15,
              // ========= Breakpoints =========
              [theme.breakpoints.down(600)]: {
                marginLeft: 0,
              },
            },
            '&:hover': {
              color: theme.palette.customHoverColor.main,
              background: theme.palette.customHoverBackground.main,
              transform: "translateY(-5px)",
            },
            '&__thumbs-up-icon': {
              fontSize: 16,
              marginLeft: 5,
            },
            '&__right-angular-icon': {
              display: "inline",
              fontSize: 14,
              marginLeft: 10,
            }
          },
        },
      },
    },
  })
});

export function PortfolioAddStyle(theme) {
  return useStyles(theme);
}
