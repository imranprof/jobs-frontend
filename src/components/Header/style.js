import {makeStyles} from "@material-ui/core/styles";
import COLORS from "../../../styles/colors";
import FONTS from "../../../styles/fonts";

export const useStyles = makeStyles({
    headerWrapper: theme => ({
        backgroundColor: COLORS.transparent,
        padding: '26px 56px',
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
                backgroundColor: theme.palette.primary.main,
                width: 70,
                height: 70,
                borderRadius: '50%',
                border: `3px solid ${COLORS.gray_1}`,
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
                color: theme.palette.primary.main,
                fontFamily: FONTS.primaryFont
            },
            '&__title': {
                color: COLORS.gray_2,
                width: 285,
                fontSize: 16,
                margin: '20px 0',
                lineHeight: '32px'
            }
        },
        '&__nav': {
            '& a': {
                fontFamily: FONTS.primaryFont,
                fontWeight: 400,
                fontSize: 13,
                color: theme.palette.primary.main,
                textDecoration: 'none',
                textTransform: 'uppercase',
                opacity: .8,
                transition: "opacity .4s ease 0s",
                '&:hover': {
                    opacity: 1,
                    fontWeight: 500,
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
            backgroundColor: theme.palette.sideBar.background,
            width: 375,
            height: '100%',
            padding: '25px 40px',
            '&__icons': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            },
            '&__links': {
                height: '49.5%',
                marginTop: 15,

            }
        },
        '&__menu': {
            color: COLORS.pink,
            '&__icon': {
                fontSize: 40
            }
        },
        '&__close-icon': {
            position: 'absolute',
            color: COLORS.pink,
            width: 45,
            height: 45,
            marginLeft: '260px',
        }
    }),
});

export function HeaderStyle(theme) {
    return useStyles(theme);
}
