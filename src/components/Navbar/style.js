import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    headerWrapper: theme => ({
        backgroundColor: "transparent",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px 0',
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
                border: '3px solid #2E3237',
                marginRight: 10,
            },
            '&__name': {
                fontSize: 20,
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: theme.palette.primary.main,
            }
        },

        '&__nav-bar': {
            listStyle: 'none',
            '&__link': {
                display: 'inline-block',
                padding: '0 10px',
                margin: '10px 14px',
                '& a': {
                    fontWeight: 400,
                    fontSize: 13,
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: "2px",
                    // transition: 'all ease 0.4s',
                    // transition: theme.transitions.create(['all']),
                    // duration: theme.transitions.duration.enteringScreen,
                    // easing: theme.transitions.easing.easeOut,
                    '&:hover': {
                        color: theme.palette.secondary.main,
                    },
                },
            },
        },
        '&__menu': {
            color: "#FF014F",
            '&__icon': {
                fontSize: 40
            }
        },
        '&__close-icon': {
            color: "#FF014F",
            width: 50,
            height: 50,
            marginLeft: "auto"
        },
    }),
});

export function NavbarStyle(theme) {
    return useStyles(theme);
}
