import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    socialLinksWrapper: theme => ({
        '&__title': {
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: 2,
            fontWeight: 300,
            color: theme.palette.customColor.main,
            display: "inline-block",
            marginBottom: 20
        },
        '&__social-links': {
            display: "flex",
            '& a': {
                textDecoration: "none",
                transition: "transform .4s ease",
                '&:hover': {
                    transform: "translateY(-3px)",
                },
            },
            '&__paper': {
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                background: theme.palette.customBackground.gradiant.light,
                boxShadow: theme.palette.customShadow.main,
                width: 60,
                height: 60,
                marginRight: 25,
                transition: "background .4s ease",
                '&--icon': {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    color: theme.palette.customColor.main,
                    transition: "color .4s ease",
                    '&:hover': {
                        color: theme.palette.customColor.socialLinkHover
                    }
                },
                '&--img': {
                    maxHeight: 34,
                },
                '&:hover': {
                    background: theme.palette.customBackground.gradiant.dark,
                },
                [theme.breakpoints.down('xs')]: {
                    '&--icon': {
                        fontSize: 20
                    },
                },
                [theme.breakpoints.down('sm')]: {
                    width: 60,
                    height: 60,
                    marginRight: 25,
                },
                [theme.breakpoints.down('md')]: {
                    width: 50,
                    height: 50,
                    marginRight: 20,
                },
            },
        },
        [theme.breakpoints.down('xs')]: {
            '&__title': {
                fontSize: 13,
                marginBottom: 14
            }
        }
    })
});

export function SocialLinkStyle(theme) {
    return useStyles(theme);
}
