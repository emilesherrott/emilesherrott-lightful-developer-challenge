import React from 'react'
import { Link } from 'react-router-dom'

const CharityTile = ({ names, id }) => {

    return (
        <div className="charity-index-tile">
            <Link className="charity-tile-link" to={`/${id}`}>
                <h4 className="charity-tile-header">{names[0].value}</h4>
                <h4>{id}</h4>
            </Link>
        </div>
    )
}

export default CharityTile