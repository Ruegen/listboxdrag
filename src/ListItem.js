import React from 'react'
import { Draggable } from 'react-drag-and-drop'

import './ListItem.css'

export default ({children}) => {
    return <Draggable type="item" data={children}>
        <li className="list-item">{children}</li>
    </Draggable>
}