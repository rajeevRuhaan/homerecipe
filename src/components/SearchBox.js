import React from "react";

const SearchBox = ({ search }) => {
  return (
    <div className="searchbox">
      <input type="test" onChange={search} placeholder="Type recipe name" />
    </div>
  );
};

export default SearchBox;
