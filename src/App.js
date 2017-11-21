import React, { Component } from 'react'
import Listbox from './Listbox'
import { Droppable } from 'react-drag-and-drop'

import './App.css'
export default class App extends Component {
    state = {
        leftList: ['Banana', 'Apple'],
        rightList: ['Pear','Orange', 'Stawberry']
    }

    onDrop(currentList, targetList, {item}) {
        // console.log(currentList, targetList, item)
        // const val = parseInt(item, 10)
        if(this.state[currentList].includes(item)) {
            return;
        }
        const list1 = this.state[currentList].concat(item)
        const list2 = this.state[targetList].filter((x)=> x !== item)
        // console.log(list1, list2)
        this.setState({
            [currentList]: list1,
            [targetList]: list2
        })
    }

    render() {
        const {leftList, rightList} = this.state
        return <div className="app">
             <Droppable types={['item']} onDrop={this.onDrop.bind(this, 'leftList', 'rightList')}>
                <Listbox list={leftList} />
             </Droppable>
             <Droppable types={['item']} onDrop={this.onDrop.bind(this, 'rightList', 'leftList')}>
                <Listbox list={rightList} />
             </Droppable>
        </div>
    }
}