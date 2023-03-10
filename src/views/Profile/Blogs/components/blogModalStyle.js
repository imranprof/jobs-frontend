import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../../styles/fonts";
import COLORS from "../../../../../styles/colors";

const useStyles = makeStyles({
    blogModalWrapper: theme => ({
        '&__body': {
            position: "fixed",
            display: "block",
            background: theme.palette.customBackground.light,
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            overflowX: "hidden",
            overflowY: "auto",
            outline: 0,
            padding: "60px 15px",
            zIndex: 99999999,
        },
        '&__dialog': {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "14px auto",
            width: "100%",
            maxWidth: 1000,
            minHeight: "calc(100% - 3.5rem)",
        },
        '&__modal-content': {
            position: "relative",
            padding: 45,
            marginTop: -70,
            border: "none",
            borderRadius: 10,
            fontFamily: FONTS.secondaryFont,
            background: theme.palette.customBackground.gradiant.light,
            boxShadow: theme.palette.customShadow.paperCardShadow,
            transition: ".2s linear",
            // ========= Breakpoints =========
            [theme.breakpoints.down(767)]: {
                padding: 30,
            },
            [theme.breakpoints.down(479)]: {
                padding: "40px 15px 25px 15px",
            },
            '&--visible': {
                marginTop: 0,
            },
            '&__close-icon': {
                position: "absolute",
                top: 5,
                right: 6,
                background: theme.palette.customBackground.gradiant.light,
                color: theme.palette.customColor.dark,
                transition: ".3s ease",
                [theme.breakpoints.down(767)]: {
                    top: 2,
                    right: 9,
                },
                '&:hover': {
                    background: theme.palette.customHoverBackground.closeIcon,
                    color: theme.palette.customHoverColor.main,
                }
            },
            '& .MuiGrid-container': {
                padding: 10,
            },
            '&__image-container': {
                display: "flex",
                alignItems: "center",
                width: "100%",
                '& img': {
                    borderRadius: 10,
                    height: "550px",
                    marginBottom: 30,
                    objectFit: "contain",
                    [theme.breakpoints.down('xs')]: {
                        height: "250px",
                        marginBottom: 10,
                        width: "100%"
                    }
                },
            },
            '&__title': {
                marginBottom: "40px",
                fontFamily: FONTS.primaryFont,
                fontSize: 32,
                fontWeight: 700,
                marginRight: 20,
                color: theme.palette.customColor.main,
                '&__edit': {
                    width: "100%",
                    marginTop: "10px",
                    marginBottom: "10px"
                },
                '&__editButton': {
                    display: "flex",
                    width: "100%",
                    zIndex: 0
                },
                '&__input': {
                    width: "100%"
                },
                [theme.breakpoints.down('xs')]: {
                    fontSize: 20,
                    marginRight: 10
                }

            },
            '&__categories-wrapper': {
                width: "100%",
                display: "flex",
                marginBottom: 20,
                alignItems: "center",
                marginTop: 10,
                flexWrap: "wrap"

            },
            '&__category': {
                marginRight: 15,
                fontFamily: FONTS.primaryFont,
                fontSize: 12,
                fontWeight: 500,
                color: theme.palette.customColor.highContrast,
                textTransform: 'uppercase'
            },
            '&__categories-edit': {
                height: "75%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
                // =========== override react-select ==========
                '& .css-1s2u09g-control, & .css-1pahdxg-control': {
                    backgroundColor: "transparent",
                },
                '& #react-select-2-listbox, & .css-26l3qy-menu': {
                    backgroundColor: theme.palette.customBackground.light,
                },
                '& .css-1rhbuit-multiValue, & .css-1n7v3ny-option': {
                    backgroundColor: theme.palette.customBackground.skillBackground,
                },
                '& .css-12jo7m5, & .css-1pndypt-Input, & .css-qc6sy-singleValue': {
                    color: theme.palette.customColor.light,
                },
                // =========== End override react-select =========
            },
            '&__description': {
                width: "100%",
                '&__edit-button': {
                    display: "flex",
                    justifyContent: "flex-end"
                },
               '&__editor': {
                   borderStyle: "solid",
                   borderWidth: ".5px",
                   height: 400,
                   padding: 10,
                   borderColor: theme.palette.customColor.inputBorder
               },
                '&__toolbar': {
                    '& .rdw-dropdownoption-default': {
                        color: COLORS.gray
                    }
                },
                '&__toolbar-editor-wrapper': {
                    maxHeight: 800,
                    width: "100%"
                }
            },
            '&__text-content': {
                '& span': {
                    display: "block",
                    marginBottom: 9,
                    fontFamily: FONTS.primaryFont,
                    fontSize: 14,
                    fontWeight: 500,
                    color: theme.palette.customColor.main
                },
                '& h2': {
                    marginTop: 20,
                    marginBottom: 40,
                    fontFamily: FONTS.primaryFont,
                    fontSize: 32,
                    fontWeight: 700,
                    color: theme.palette.customColor.main,
                    [theme.breakpoints.down('xs')]: {
                        fontSize: 20
                    }
                },
                '& h4': {
                    marginBottom: 20,
                    fontFamily: FONTS.primaryFont,
                    fontSize: 30,
                    fontWeight: 700,
                    color: theme.palette.customColor.main,
                    [theme.breakpoints.down('xs')]: {
                        fontSize: 18
                    }
                },
                '& p': {
                    marginBottom: 40,
                    fontSize: 16,
                    fontWeight: 400,
                    color: theme.palette.customColor.dark,
                    '&:last-child': {
                        marginBottom: 0,
                    }
                }
            }
        }
    })
});

export function BlogModalStyle(theme) {
    return useStyles(theme);
}
