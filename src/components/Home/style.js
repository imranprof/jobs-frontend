import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../styles/fonts";

export const useStyles = makeStyles({
    homeWrapper: theme => ({
        width: "100%",
        display: "flex",
        flexWrap: "wrap-reverse",
        // homeWrapper left side
        '&__left': {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            '&-top': {
                marginBottom: 142,
                '&__headline': {
                    fontSize: 14,
                    fontFamily: FONTS.primaryFont,
                    color: theme.palette.customColor.main,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    fontWeight: 500,
                    display: "block",
                    marginBottom: 20,
                    // ========= Breakpoints =========
                    [theme.breakpoints.down('xs')]: {
                        letterSpacing: 1
                    }
                },
                '&__title': {
                    color: theme.palette.customColor.light,
                    fontSize: 60,
                    fontWeight: 700,
                    fontFamily: FONTS.primaryFont,
                    lineHeight: "75px",
                    marginTop: 0,
                    marginBottom: 22,
                    '&__name': {
                        color: theme.palette.customColor.highContrast
                    },
                    '&__expertise': {
                        display: "flex",
                        alignItems: "center",
                        fontSize: 48,
                        fontWeight: 700,
                        height: 58,
                    },
                    '&__cursor': {
                        borderRight: `2px solid ${theme.palette.customColor.main}`,
                        padding: 3,
                        height: 50,
                        opacity: 0.5
                    },
                    // ========= Breakpoints =========
                    [theme.breakpoints.down('md')]: {
                        fontSize: 50,
                        '&__expertise': {
                            fontSize: 40
                        }
                    },
                    [theme.breakpoints.down('xs')]: {
                        fontSize: 30,
                        lineHeight: "35px",
                        '&__expertise': {
                            fontSize: 24
                        }
                    }
                },
                '&__bio': {
                    fontSize: 16,
                    fontFamily: FONTS.secondaryFont,
                    lineHeight: "30px",
                    color: theme.palette.customColor.main,
                    paddingRight: "16%",
                    opacity: 0.9,
                    // ========= Breakpoints =========
                    [theme.breakpoints.down('sm')]: {
                        paddingRight: 0
                    }
                },
            },
            '&-bottom': {
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                // ========= Breakpoints =========
                [theme.breakpoints.down('sm')]: {
                    width: "100%",
                },
                [theme.breakpoints.down('xs')]: {
                    width: "90%",
                    flexDirection: "column",
                    '& > div:nth-of-type(1)': {
                        marginBottom: 30
                    }
                }
            },
            // ========= Breakpoints =========
            [theme.breakpoints.down('md')]: {
                justifyContent: "end",
                '&-top': {
                    marginBottom: 42,
                },
            }
        },

        // homeWrapper right side
        '&__thumbnail': {
            position: "relative",
            zIndex: 2,
            '&--img': {
                width: "100%"
            },
            '&::before': {
                content: '""',
                position: "absolute",
                zIndex: -1,
                width: "100%",
                height: "calc(100% - 130px)",
                left: "50%",
                bottom: 0,
                transform: "translateX(-50%)",
                background: theme.palette.customBackground.gradiant.light,
                boxShadow: theme.palette.customShadow.main,
                borderRadius: 6
            },
            // ========= Breakpoints =========
            [theme.breakpoints.down('sm')]: {
                marginBottom: 50
            }
        },
        [theme.breakpoints.down('xs')]: {
            padding: "0px 16px"
        }
    })
});

export function HomeStyle(theme) {
    return useStyles(theme);
}
