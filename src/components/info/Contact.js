import React from 'react'

const Contact = ( {charityData} ) => {
    console.log(charityData)

    return (
        <section>
        <h2 className="title">Contact Info</h2>
        <address>{charityData.contact.address.map((line => (
            <p key={line}>
                {line}
                </p>
        )))}
        </address>
        <address>{charityData.contact.postcode}</address>
        <p>{charityData.contact.phone}</p>
        <p><a href={charityData.contact.email}>{charityData.contact.email}</a></p>
        </section>

    )
}

export default Contact