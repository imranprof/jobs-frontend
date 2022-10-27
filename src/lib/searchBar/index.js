import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useFormik} from "formik";

import {InputAdornment, InputBase} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import {SearchBarStyle} from "./style";
import {
  getSearchJobs,
  getSearchProfiles,
  getSearchType,
  setSearchType,
  setSearchValue
} from "../../store/actions/searchAction";
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
    if (values.selectType.value === 'Talents') {
      setSearchType('Talents')
      dispatch(getSearchProfiles(values.searchValue))
      router.push("/search/talents")
    } else {
      setSearchType('Jobs')
      setSearchValue(values.searchValue)
      let value = {
        job: {
          search_value: values.searchValue
        }
      }
      dispatch(getSearchJobs(value))
      router.push("/search/jobs")
    }
  }

  const formik = useFormik({
    initialValues: {
      searchValue: '',
      selectType: getSearchType() ? {value: getSearchType(), label: getSearchType()} : {value: 'Jobs', label: 'Jobs'}
    },
    enableReinitialize: true,
    onSubmit: handleSearchSubmit

  })

  let inputPlaceHolder = 'Jobs'
  if (formik.values.selectType.label) {
    inputPlaceHolder = formik.values.selectType.label;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputBase
        name="searchValue"
        type="text"
        placeholder={`Search ${inputPlaceHolder}`}
        value={formik.values.searchValue}
        onChange={formik.handleChange}
        className={`${classes.searchBarWrapper}__search`}
        autoComplete='off'
        endAdornment={
          <InputAdornment position="end">
            <Select
              options={options}
              name="selectType"
              defaultValue={formik.values.selectType}
              onChange={selectType => formik.setFieldValue("selectType", selectType)}
              styles={selectStyles}
              getOptionLabel={e => (
                <div className={`${classes.searchBarWrapper}__select-menu`}>
                        <span className={`${classes.searchBarWrapper}__select-menu__icon`}>
                          <i className={e.icon}/>
                        </span>
                  <div className={`${classes.searchBarWrapper}__select-menu__list`}>
                    <span className={`${classes.searchBarWrapper}__select-menu__list__label`}>{e.label}</span>
                    <span className={`${classes.searchBarWrapper}__select-menu__list__text`}>{e.text}</span>
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
