import React from 'react'

const Contact = ( {charityData} ) => {
    console.log(charityData)

    return (
        <article>
        <h2>Contact Info</h2>
        <address>{charityData.contact.address.map((line => (
            <p key={line}>
                {line}
                </p>
        )))}
        </address>
        <address>{charityData.contact.postcode}</address>
        <p><a href={charityData.contact.email}>{charityData.contact.email}</a></p>
        <p>{charityData.contact.phone}</p>
        </article>

    )
}

export default Contact