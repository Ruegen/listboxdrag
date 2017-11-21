import React from 'react'
import ListItem from './ListItem'

import './Listbox.css'

export default ({list}) => {
        return <ul>
        {list.map((val, index) => {
            return (
                <ListItem key={index}  children={val} />
            )
        })}
    </ul>
}



