import React, {useContext} from 'react';

import {useFormik} from "formik";

import {InputAdornment, InputBase} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import ThemeContextProvider from "../../contexts/themeContext";
import {SearchBarStyle} from "./style";

const SearchBar = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = SearchBarStyle(customTheme);

    const formik = useFormik({
        initialValues: {searchValue: ''},
        onSubmit: values => {
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <InputBase
                name="searchValue"
                type="text"
                placeholder="Search..."
                value={formik.values.searchValue}
                onChange={formik.handleChange}
                className={`${classes.searchBarWrapper}__search`}
                endAdornment={
                    <InputAdornment position="end">
                        <button type="submit" className={`${classes.searchBarWrapper}__search__icon`}>
                            <SearchIcon/>
                        </button>
                    </InputAdornment>
                }
            />
        </form>
    );
};

export default SearchBar;
