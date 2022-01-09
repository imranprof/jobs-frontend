import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    headerWrapper: theme => ({
        backgroundColor: "transparent",
        padding: '16px 0',
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
                fontFamily: "Montserrat, sans-serif"
            },
            [theme.breakpoints.down('xs')]: {
                '&__pic': {
                    width: 55,
                    height: 55,
                },
                '&__name': {
                    fontSize: 16,
                },
            },
        },

        '&__nav-bar': {
            listStyle: 'none',
            '&__link': {
                display: 'inline-block',
                padding: '0 10px',
                margin: '10px 5px',
                '& a': {
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 400,
                    fontSize: 13,
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    opacity: .5,
                    transition: "opacity .4s ease 0s",
                    '&:hover': {
                        opacity: 1
                    },
                },
            },
        },
        '&__menu': {
            color: "#FF014F",
            '&__icon': {
                fontSize: 40
            },
            [theme.breakpoints.down('xs')]: {
                '&__icon': {
                    fontSize: 35
                }
            },
        },
        '&__close-icon': {
            color: "#FF014F",
            width: 50,
            height: 50,
            marginLeft: "auto"
        },
        [theme.breakpoints.down('xs')]: {
            padding: "12px 0",
        },
    }),
});

export function NavbarStyle(theme) {
    return useStyles(theme);
}
