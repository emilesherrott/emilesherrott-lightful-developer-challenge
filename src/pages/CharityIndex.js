import React from 'react'

import CharityTile from '../components/CharityTile'


const CharityIndex = ({ charities }) => {

    charities.sort((a, b) => a.finances[0].income - b.finances[0].income)

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