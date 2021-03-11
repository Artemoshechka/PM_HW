import React from "react";
import debounce from 'lodash.debounce';

const TodoSearch = ({onSearch}) => {

    const handleChange = (event) => {
        debounce(() => {
            onSearch(event.target.value.trim())
        }, 0)()
    }

    return <div className='Search'>
        <input type="text" placeholder='Search...' onChange={handleChange}/>
        <button className='button_search'>Search</button>
    </div>
}

export default TodoSearch