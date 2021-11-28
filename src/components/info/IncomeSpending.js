import React from 'react'

const IncomeSpending = ({ charityData }) => {

    const grantMoney = charityData.grants.length ? Math.round(charityData.grants.reduce((acc, item) => {
        const totalReceived = acc + item.amountAwarded
        return totalReceived
    }, 0))
        :
        0


    const grantsReceived = charityData.grants.length
    const income = charityData.finances[0].income
    const spending = charityData.finances[0].spending
    const percentageGrantGenerated = parseFloat((grantMoney / income) * 100).toFixed(3)





    return (
        <section>
            <h2 className="title">Income &amp; Spending</h2>
            <p><span className="data-header">Total income:</span> £{income}</p>
            <p><span className="data-header">Total spend:</span> £{spending}</p>
            {grantsReceived ?
                <p><span className="data-header">Total grants:</span> £{grantMoney}</p>
                :
                'No income generated through grants'
            }
            {grantsReceived ?
                <p>{percentageGrantGenerated}% of income raised through grants</p>
                :
                <p>No money raised through grants</p>}
        </section>
    )
}

export default IncomeSpending