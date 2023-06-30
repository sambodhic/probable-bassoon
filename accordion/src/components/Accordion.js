import React, { useState } from 'react'

export const Accordion = (props) => {

    const [expand, setExpand] = useState(true);
    const toggleExpand = () => {
        setExpand(!expand);
    }

    return (
        <div>
            <button onClick={toggleExpand}>{expand? 'Collapse': 'Expand'}</button>
            {expand && <div>{props.content}</div>}
        </div>
    )
}
