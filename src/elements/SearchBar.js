import React, { useState, useRef } from 'react';
import SearchIcon from '../images/searchwhite.png'
import { StyledSearchBar, StyledSearchBarContent } from '../styles/StyledSearchBar'

// Searching the item function
const SearchBar = ({ callback }) => {
    const [state, setState] = useState('')
    const timeOut = useRef(null)

    const doSearch = event => {
        const { value } = event.target
        clearTimeout(timeOut.current)
        setState(value)

        timeOut.current = setTimeout(() => {
            callback(value)
        }, 1000)
    }

    return (
        <StyledSearchBar>
            <StyledSearchBarContent>
                <img src={SearchIcon} width="34" height="34" className="fa-search" />
                <input
                    type="text"
                    placeholder="Search Grocery "
                    onChange={doSearch}
                    value={state}
                />
            </StyledSearchBarContent>
        </StyledSearchBar>
    )
}

export default SearchBar