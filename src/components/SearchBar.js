import React, { useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
