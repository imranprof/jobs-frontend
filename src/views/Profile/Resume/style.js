import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../styles/fonts";

const useStyles = makeStyles({
  resumeWrapper: theme => ({
    display: "flex",
    flexWrap: "wrap",
    marginTop: 45,
    marginRight: -15,
    marginLeft: -15,
    '&__addButton-container': {
      display: "flex",
      justifyContent: "center",
      marginBottom: 20
    },
    // ========= Breakpoints =========
    [theme.breakpoints.between(960, 990)]: {
      maxWidth: "75%",
      margin: "auto"
    },
    '&__body': {
      paddingLeft: 15,
      paddingRight: 15,
      width: "100%",
      '& .MuiList-padding': {
        paddingTop: 0,
        paddingBottom: 0,
      }
    },
    '&__nav-list': {
      display: "flex",
      flexDirection: "row",
      marginTop: 16,
      borderRadius: 10,
      background: theme.palette.customBackground.gradiant.light,
      boxShadow: theme.palette.resume.navListShadow,
      // ========= Breakpoints =========
      [theme.breakpoints.down(767)]: {
        flexDirection: "column",
      },
      '& .Mui-selected': {
        background: theme.palette.customBackground.gradiant.light,
        boxShadow: theme.palette.resume.navListShadow,
        borderRadius: 10,
        '& a': {
          color: theme.palette.resume.navListTitle,
        },
        '&:hover': {
          background: theme.palette.customBackground.gradiant.light,
          boxShadow: theme.palette.resume.navListShadow,
          borderRadius: 10,
        },
      },
      '&__item': {
        padding: 0,
        height: 86,
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all .5s ease-in-out",
        // ========= Breakpoints =========
        [theme.breakpoints.down(767)]: {
          height: 64,
        },
        '&:hover': {
          background: theme.palette.customBackground.gradiant.light,
          boxShadow: theme.palette.resume.navListShadow,
          borderRadius: 10,
          '& a': {
            color: theme.palette.resume.navListTitle,
          }
        },
        '& a': {
          color: theme.palette.customColor.main,
          fontFamily: FONTS.secondaryFont,
          fontSize: 18,
          fontWeight: 500,
          textTransform: "capitalize",
          textDecoration: "none",
          borderRadius: 10,
          transition: "all .5s ease-in-out",
        }
      }
    },
    '&__nav-content': {
      marginTop: 40,
      '&__row': {
        width: "auto",
        marginRight: -15,
        marginLeft: -15,
        // ========= Breakpoints =========
        [theme.breakpoints.down(990)]: {
          '& .MuiGrid-grid-xs-6': {
            maxWidth: "100%",
            flexBasis: "100%",
          },
          '& > :last-child': {
            '& > :first-child': {
              marginTop: 0,
              '& > :first-child': {
                marginTop: 30,
              }
            },
            '& > :last-child > :last-child': {
              marginBottom: 0
            },
          },
        },
        '&__heading': {
          '& span': {
            fontFamily: FONTS.secondaryFont,
            color: theme.palette.resume.subTitle,
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: 2,
          },
          '& h4': {
            margin: 0,
            fontFamily: FONTS.primaryFont,
            color: theme.palette.resume.mainTitle,
            fontSize: 36,
            fontWeight: 700,
            textTransform: "capitalize"
          },
        },
        '&__column': {
          paddingLeft: 15,
          paddingRight: 15,
          '&__content': {
            position: "relative",
            marginTop: 50,
            paddingLeft: "5%",
            borderLeft: `5px solid ${theme.palette.customBorder.beforeElement}`,
            '&__item': {
              display: "flex",
              flexDirection: "column",
              position: "relative",
              marginBottom: 50,
              padding: "30px 40px",
              borderRadius: 6,
              zIndex: 2,
              background: theme.palette.customBackground.gradiant.light,
              boxShadow: theme.palette.resume.cardShadow,
              '&__action-buttons': {
                width: 80,
                display: "flex",
                marginLeft: "auto",
                marginBottom: 10,
                justifyContent: "space-between"
              },
              '&:last-child': {
                marginBottom: 0,
              },
              // ========= Breakpoints =========
              [theme.breakpoints.down(990)]: {
                '&:last-child': {
                  marginBottom: 45,
                },
              },
              '&::before': {
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: 6,
                top: 0,
                left: 0,
                background: theme.palette.resume.cardBeforeBG,
                opacity: 0,
                zIndex: -1,
                transition: ".4s",
              },
              '&:hover': {
                '&::before': {
                  opacity: 1,
                },
                '& h4': {
                  color: theme.palette.resume.hover.cardTitle
                },
                '& span': {
                  color: theme.palette.resume.hover.cardSubTitle
                },
                '& p': {
                  color: theme.palette.resume.hover.cardDescription
                },
              },
              '&:hover &__inner::after': {
                background: theme.palette.customColor.highContrast
              },
              '&__inner': {
                '&::before': {
                  position: "absolute",
                  content: "''",
                  background: theme.palette.beforeBackground.main,
                  width: "5%",
                  height: 5,
                  top: 63,
                  right: "100%",
                  zIndex: 0,
                  transform: "translateY(-7px)",
                },
                '&::after': {
                  position: "absolute",
                  content: "''",
                  background: theme.palette.afterBackground.main,
                  width: 20,
                  height: 20,
                  top: 55,
                  right: "104%",
                  border: `5px solid ${theme.palette.customBorder.beforeElement}`,
                  borderRadius: "100%",
                  transition: ".4s",
                  transform: "translateY(-7px)",
                },
                '&__heading': {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: `1px solid ${theme.palette.resume.cardDivider}`,
                  marginBottom: 10,
                  paddingBottom: 20,
                  fontFamily: FONTS.secondaryFont,
                  '&__title': {
                    '& h4': {
                      fontSize: 24,
                      fontWeight: 500,
                      color: theme.palette.resume.cardTitle,
                      margin: 0,
                      marginBottom: 7,
                      transition: ".4s",
                    },
                    '& span': {
                      display: "block",
                      color: theme.palette.resume.cardSubTitle,
                      fontSize: 14,
                    }
                  }
                },
                '&__description': {
                  maxHeight: 150,
                  overflowY: "auto",
                  '&::-webkit-scrollbar-track': {
                    background: theme.palette.scrollBar.track,
                  },
                  '&::-webkit-scrollbar': {
                    width: 3,
                    background: theme.palette.scrollBar.track,
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: theme.palette.scrollBar.thumb,
                  },
                  '& p': {
                    margin: 0,
                    color: theme.palette.resume.cardDescription,
                    fontFamily: FONTS.secondaryFont,
                    fontSize: 18,
                    fontWeight: 400,
                    transition: "all .3s ease-in-out",
                  }
                }
              }
            },
          },
          '&__skills': {
            display: "block",
            marginTop: 30,
            '&__wrapper': {
              marginTop: 30,
              '&:first-child': {
                marginTop: 0,
              },
              '&__title': {
                margin: 0,
                marginBottom: 10,
                color: theme.palette.progressBar.title,
                fontFamily: FONTS.primaryFont,
                fontSize: 12,
                textTransform: "uppercase",
                fontWeight: 500,
                opacity: 0.9,
              },
              '&__bar': {
                display: "flex",
                overflow: "visible",
                padding: 3,
                height: 13,
                borderRadius: 10,
                backgroundColor: theme.palette.progressBar.main,
                boxShadow: theme.palette.progressBar.boxShadow,
                '&__progress-bar': {
                  position: "relative",
                  width: 0,
                  borderRadius: 14,
                  background: theme.palette.progressBar.secondary,
                  transition: "width .6s ease",
                  '& span': {
                    position: "absolute",
                    right: 0,
                    top: -30,
                    color: theme.palette.progressBar.percentText,
                    fontFamily: FONTS.secondaryFont,
                    fontSize: 14,
                    fontWeight: 400,
                    opacity: 0.9,
                  }
                }
              }
            }
          }
        },
      },
    },
  })
});

export function ResumeStyle(theme) {
  return useStyles(theme);
}
