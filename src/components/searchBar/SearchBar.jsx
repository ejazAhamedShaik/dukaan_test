import { SearchIcon } from "../svg";
import { SearchBarWrapper, SearchField } from "./searchBar.styles";
import PropTypes from "prop-types";

const SearchBar = ({ placeholder, updateSearchQuery }) => {
  return (
    <SearchBarWrapper className="searchbar">
      <SearchIcon />
      <SearchField type="text" placeholder={placeholder} onChange={e => updateSearchQuery(e.target.value)} />
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  updateSearchQuery: PropTypes.func
};

export default SearchBar;
