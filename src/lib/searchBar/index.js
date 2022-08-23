import {useDispatch} from "react-redux";

import {useFormik} from "formik";

import {InputAdornment, InputBase} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import {SearchBarStyle} from "./style";
import {getSearchProfiles} from "../../store/actions/searchAction";

const SearchBar = () => {
  const theme = useTheme();
  const classes = SearchBarStyle(theme);
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {searchValue: ''},
    onSubmit: values => {
      dispatch(getSearchProfiles(values.searchValue))
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
