import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    headerWrapper: theme => ({
        backgroundColor: "transparent",
        padding: '16px 0',
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
                border: '3px solid #2E3237',
                marginRight: 10,
            },
            '&__name': {
                fontSize: 20,
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: theme.palette.primary.main,
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

        '&__nav': {
            '& a': {
                fontWeight: 400,
                fontSize: 13,
                color: theme.palette.primary.main,
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: "2px",
                '&:hover': {
                    color: theme.palette.secondary.main,
                },
            },
            '&--default': {
                display: 'inline',
                margin: '10px 14px',
                padding: '0 10px',
            },
            '&--drawer': {
                width: 360,
            }
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
