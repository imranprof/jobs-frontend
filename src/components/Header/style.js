import {makeStyles} from "@material-ui/core/styles";

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
            },
            '&__name': {
                fontSize: 20,
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: theme.palette.customColor.main,
                fontFamily: "Montserrat, sans-serif",
                '&--drawer': {
                    color: theme.palette.customColor.dark,
                    width: 285,
                    fontSize: 16,
                    margin: '20px 0',
                    lineHeight: '32px'
                }
            },

        },
        '&__nav': {
            '& a': {
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: theme.palette.customColor.main,
                textDecoration: 'none',
                textTransform: 'uppercase',
                opacity: .5,
                transition: "opacity .4s ease 0s",
                '&:hover': {
                    opacity: 1,
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
            width: 375,
            height: '100vh',
            padding: '25px 40px',
            '&__icons': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            },
            '&__links': {
                height: 420,
                marginTop: 15,
            }
        },
        '&__menu': {
            color: theme.palette.customColor.highContrast,
            '&__icon': {
                fontSize: 40
            }
        },
        '&__close-icon': {
            position: 'absolute',
            color: theme.palette.customColor.highContrast,
            width: 45,
            height: 45,
            marginLeft: 260,
        }
    }),
});

export function HeaderStyle(theme) {
    return useStyles(theme);
}
