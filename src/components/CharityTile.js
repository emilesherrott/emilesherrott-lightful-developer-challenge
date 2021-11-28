import React from 'react'
import { Link } from 'react-router-dom'

const CharityTile = ({ names, finances, id }) => {

    return (
        <div className="charity-index-tile">
            <Link className="charity-tile-link" to={`/${id}`}>
                <h4 className="charity-tile-header">{names[0].value}</h4>
                <h5 className="secondary-font">Total Income: £{finances[0].income}</h5>
            </Link>
        </div>
    )
}

export default CharityTile