import { tab } from '@testing-library/user-event/dist/tab';
import React, { Component, useState } from 'react';

function Counter({cities, onSelectedItem}) {
    const [state, setState] = useState({
        count: 0,
    });
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const style = {
        fontSize: 50
    }
    const GetBadgeClassesMethod=()=> {
        let classes = "badge m-2 text-bg-";
        classes += state.count === 0 ? "warning" : "primary";
        return classes;
    }
    
    const formatCount = ()=> {
        const { count } = state
        return count === 0 ? <h1>Zero</h1> : count;
    }
    const renderTags = ()=> {
        if (cities.name.length === 0) return (<p>There is no tags!</p>)

        return (
            <ul className='list-group'>
                {cities.name.map((tab, index) => <li key={tab} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={() => { onSelectedItem(tab); setSelectedIndex(index) }}>{tab}</li>)}
            </ul>
        )
    }
        return (
            <>
                <span className={GetBadgeClassesMethod()} style={{fontSize: style.fontSize}}>{formatCount()}</span>
                <button className='btn btn-primary btn-sm'>Increment</button>
                {cities.name.length === 0 && <h1>Please create a new tag!</h1>}
                {renderTags()}
            </>
        );
}

export default Counter