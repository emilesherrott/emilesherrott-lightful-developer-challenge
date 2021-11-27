import React from 'react'

const CauseComponent = ({ name }) => {

    return (
        <li key={name} className="cause-li">
            {name}
        </li>
    )
}

export default CauseComponent