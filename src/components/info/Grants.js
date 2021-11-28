import React from 'react'

const Grants = ({ charityData }) => {

    const numOfGrants = charityData.grants.length
    let grants = charityData.grants
    grants = grants.sort((a, b) => a.amountAwarded - b.amountAwarded)


    const orderDate = (initialDate) => {
        const awardDate = initialDate
        const dateDay = awardDate.slice(8)
        const dateMonth = awardDate.slice(5,7)
        const dateYear = awardDate.slice(0,4)
        const newDate = `${dateDay} ${dateMonth} ${dateYear}`
        return newDate
    }


    return (
        <section>
            <h2 className="grant-title">Number of grants: {numOfGrants}</h2>
            <div className="grant-container">
            { grants.map((grant) => (
                <div className="grant-tile">
                    <p><span className="data-header">Grant Title:</span> {grant.title}</p>
                    <p><span className="data-header">Grant Description:</span> {grant.description}</p>
                    <p><span className="data-header">Funder Name:</span> {grant.funder.name}</p>
                    <p><span className="data-header">Amount Awarded:</span> {grant.amountAwarded}</p>
                    <p><span className="data-header">Date Awarded:</span> {orderDate(grant.awardDate)}</p>
                </div>
            )) }
            </div>
        </section>
        
    )
}

export default Grants