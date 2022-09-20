import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

import {useFormik} from "formik";

import {InputAdornment, InputBase} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import {SearchBarStyle} from "./style";
import {getSearchJobs, getSearchProfiles} from "../../store/actions/searchAction";
import Select from "react-select";
import FontAwesomeIcons from "../../../styles/FontAwesomeIcons";
import {selectStyles} from './style'

const SearchBar = () => {
  const theme = useTheme();
  const classes = SearchBarStyle(theme);
  const dispatch = useDispatch()
  const router = useRouter()

  const options = [
    {value: 'Jobs', label: 'Jobs', text: 'Apply to jobs posted by clients', icon: FontAwesomeIcons.briefcase},
    {value: 'Talents', label: 'Talents', text: 'Hire professionals', icon: FontAwesomeIcons.users}
  ]

  const handleSearchSubmit = (values) => {
    if (values.selectType.value ==='Talents'){
      dispatch(getSearchProfiles(values.searchValue))
      router.push("/search/talents")
    }
    else {
      dispatch(getSearchJobs(values.searchValue))
      router.push("/search/jobs")
    }
  }

  const formik = useFormik({
    initialValues: {
      searchValue: '',
      selectType: {value: 'Jobs', label: 'Jobs'}
    },
    onSubmit: handleSearchSubmit

  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputBase
        name="searchValue"
        type="text"
        placeholder={`Search ${formik.values.selectType.label}`}
        value={formik.values.searchValue}
        onChange={formik.handleChange}
        className={`${classes.searchBarWrapper}__search`}
        endAdornment={
          <InputAdornment position="end">
            <Select
              options={options}
              name = "selectType"
              defaultValue={formik.values.selectType}
              onChange = {selectType => formik.setFieldValue("selectType", selectType)}
              styles={selectStyles}
              getOptionLabel={e => (
                <div style={{display: 'flex', alignItems: 'center'}}>
                        <span style={{marginRight: 10}}>
                          <i className={e.icon}/>
                        </span>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <span style={{marginLeft: 5}}>{e.label}</span>
                    <span style={{marginLeft: 5, fontSize: 11}}>{e.text}</span>
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
