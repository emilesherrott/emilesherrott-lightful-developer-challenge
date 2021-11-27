import React from 'react'

import CharityTile from '../components/CharityTile'


const CharityIndex = ({ charities }) => {

    charities.sort((a, b) => a.names[0].value.localeCompare(b.names[0].value))

    return (
        <section className=''>
            <div className="charity-index-layout">
                {charities.map((charity) => (
                    <div>
                        <CharityTile key={charity.id} {...charity} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CharityIndex