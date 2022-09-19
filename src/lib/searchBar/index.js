import {useDispatch} from "react-redux";

import {useFormik} from "formik";

import {InputAdornment, InputBase} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import {SearchBarStyle} from "./style";
import {getSearchProfiles} from "../../store/actions/searchAction";
import Select from "react-select";
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";
import {selectStyles} from './style'

const SearchBar = () => {
  const theme = useTheme();
  const classes = SearchBarStyle(theme);
  const dispatch = useDispatch()

  const options = [
    {value: 'Jobs', label: 'Jobs', text: 'Apply to jobs posted by clients', icon: FontAwesomeIcons.briefcase},
    {value: 'Talents', label: 'Talents', text: 'Hire professionals', icon: FontAwesomeIcons.users}
  ]
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
            <Select options={options}
                    styles={selectStyles}
                    getOptionLabel={e => (
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <i className={e.icon}/>
                        <div style={{display: "flex", flexDirection: "column"}}>
                          <span style={{marginLeft: 5}}>{e.label}</span>
                          <span style={{marginLeft: 5, fontSize: 12}}>{e.text}</span>
                        </div>
                      </div>
                    )}
            />
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
