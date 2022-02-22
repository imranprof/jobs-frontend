import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../styles/fonts";

export const useStyles = makeStyles({
    headerWrapper: theme => ({
        backgroundColor: "transparent",
        padding: "28px 50px",
        marginBottom: 50,
        boxShadow: theme.palette.customShadow.light,
        position: "static",
        '&.isSticky': {
            position: "fixed",
            width: "100%",
            backgroundColor: `${theme.palette.customBackground.light}de`,
            boxShadow: theme.palette.customShadow.main,
            backdropFilter: "blur(15px)",
            transition: "ease 0.3s, fadein .3s",
            padding: '14px 25px'
        },
        '&__toolbar': {
            width: '100%',
            justifyContent: 'space-between'
        },
        '&__profile': {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '&__pic': {
                backgroundColor: theme.palette.customColor.main,
                width: 65,
                height: 65,
                borderRadius: '50%',
                border: `3px solid ${theme.palette.customColor.dark}`,
                marginRight: 10,
                '& img': {
                    objectFit: "contain",
                }
            },
            '&__name': {
                fontSize: 18,
                fontWeight: '600',
                textTransform: 'uppercase',
                color: theme.palette.customColor.main,
                fontFamily: FONTS.primaryFont,
                '&--drawer': {
                    color: theme.palette.customColor.dark,
                    width: 285,
                    fontSize: 17,
                    margin: '20px 0',
                    lineHeight: '32px'
                }
            },
            // ========= Breakpoints =========
            [theme.breakpoints.down('md')]: {
                '&__pic': {
                    width: 60,
                    height: 60,
                },
                '&__name': {
                    fontSize: 17,
                }
            },
            [theme.breakpoints.down('sm')]: {
                '&__pic': {
                    width: 55,
                    height: 55,
                },
                '&__name': {
                    fontSize: 15,
                }
            },
            [theme.breakpoints.down('xs')]: {
                '&__pic': {
                    width: 50.,
                    height: 50,
                    border: `2px solid ${theme.palette.customColor.dark}`,
                },
                '&__name': {
                    fontSize: 14,
                }
            }
        },
        '&__nav': {
            '& a': {
                fontFamily: FONTS.primaryFont,
                fontWeight: 500,
                fontSize: 13,
                color: theme.palette.customColor.main,
                textDecoration: 'none',
                textTransform: 'uppercase',
                cursor: "pointer",
                opacity: .8,
                transition: "all .4s ease 0s",
                '&:hover': {
                    opacity: 1,
                    color: theme.palette.customColor.light,
                },
            },
            '& .active': {
                opacity: 1,
                color: theme.palette.customColor.light,
            },
            '&--default': {
                display: 'inline',
                padding: '0 15px',
            },
            '&--drawer': {
                width: "auto",
                paddingLeft: 0,
                margin: "8px 0",
                '& a': {
                    opacity: .8,
                    fontWeight: 500,
                    fontSize: 14,
                }
            }
        },
        '&__side-bar': {
            background: theme.palette.customBackground.sideBar,
            padding: '25px 25px 50px 25px',
            height: "100vh",
            '&__icons': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            },
            '&__links': {
                height: 420,
                marginTop: 15,
            },
            [theme.breakpoints.down('xs')]: {
                width: 300,
                padding: "25px 25px 50px 25px",
                overflowX: "hidden"
            }
        },
        '&__menu': {
            color: theme.palette.customColor.highContrast,
            padding: 0,
            '&__icon': {
                fontSize: 40
            },
            // ========= Breakpoints =========
            [theme.breakpoints.down('sm')]: {
                '&__icon': {
                    fontSize: 36
                },
            },
            [theme.breakpoints.down('xs')]: {
                '&__icon': {
                    fontSize: 32
                },
            }
        },
        '&__close-icon': {
            color: theme.palette.customColor.highContrast,
            width: 45,
            height: 45,
        },
        // ========= Breakpoints =========
        [theme.breakpoints.between('xs',"sm")]: {
            padding: "15px 25px",
            '&.isSticky': {
                padding: '10px 18px',
            },
            '&__toolbar': {
                padding: 0
            },
        },
        [theme.breakpoints.between('sm',"md") ]: {
            padding: "20px 40px",
            '&.isSticky': {
                padding: '12px 32px',
            },
        }
    }),
});

export function HeaderStyle(theme) {
    return useStyles(theme);
}
