import React from "react";

const Search = (props) => {
  return (
    <div className='row mb-4'>
      <div className='col-md-3'>
        <input
          type='text'
          className='form-control'
          id='exampleFormControlInput1'
          placeholder='Search'
          value={props.search}
          onChange={(e) => props.searchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
