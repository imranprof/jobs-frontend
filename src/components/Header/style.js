import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../styles/fonts";

export const useStyles = makeStyles({
    headerWrapper: theme => ({
        backgroundColor: "transparent",
        padding: '26px 40px 0 40px',
        marginBottom: 50,
        boxShadow: '0px 0px 0px',
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
                width: 70,
                height: 70,
                borderRadius: '50%',
                border: `3px solid ${theme.palette.customColor.dark}`,
                marginRight: 10,
                '& img':{
                    objectFit: "contain",
                }
            },
            '&__name': {
                fontSize: 20,
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: theme.palette.customColor.main,
                fontFamily: FONTS.primaryFont,
                '&--drawer': {
                    color: theme.palette.customColor.dark,
                    width: 285,
                    fontSize: 16,
                    margin: '20px 0',
                    lineHeight: '32px'
                }
            },
            // ========= Breakpoints =========
            [theme.breakpoints.down('sm')]: {
                '&__pic': {
                    width: 50,
                    height: 50,
                    border: `2px solid ${theme.palette.customColor.dark}`,
                },
                '&__name': {
                    fontSize: 16,
                }
            },
            [theme.breakpoints.down('xs')]: {
                '&__pic': {
                    width: 40,
                    height: 40,
                    border: `2px solid ${theme.palette.customColor.dark}`,
                },
                '&__name': {
                    fontSize: 13,
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
                opacity: .7,
                transition: "all .4s ease 0s",
                '&:hover': {
                    opacity: 1,
                    color: theme.palette.customColor.light,
                }
            },
            '&--default': {
                display: 'inline',
                padding: '0 24px',
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
                    fontSize: 30
                },
            }
        },
        '&__close-icon': {
            color: theme.palette.customColor.highContrast,
            width: 45,
            height: 45,
        },
        // ========= Breakpoints =========
        [theme.breakpoints.down('xs')]: {
            padding: '20px 25px 0 25px',
            '&__toolbar': {
                padding: 0
            }
        }
    }),
});

export function HeaderStyle(theme) {
    return useStyles(theme);
}
