import React from 'react';

const SearchBox = ({searchflied, searchChange}) => {
    return (
        <div className="pa2">
            <input 
              className="pa3 ba b--green bg-lightest-blue"
              type="search" 
              placeholder="Search robots"
              onChange={searchChange}
              style={{width: '400px'}}
            />
        </div>
    )
}

export default SearchBox;