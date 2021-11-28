import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

import { apiEndPoint, apiQueryOne, apiQueryTwo, apiKey } from '../helpers/api'


import Contact from '../components/info/Contact'
import IncomeSpending from '../components/info/IncomeSpending'
import Grants from '../components/info/Grants'

const CharityShow = () => {


    const [charityData, setCharityData] = useState(null)
    const { id } = useParams()
    const history = useHistory()



    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`${apiEndPoint}?query=${apiQueryOne}${id}${apiQueryTwo}`, {
                    headers: {
                        Authorization: `Apikey ${apiKey}`
                    }
                })
                setCharityData(data.data.CHC.getCharities.list)
                setNumOfGrants(data.data.CHC.getCharities.list[0].grants.length)
                console.log(charityData)
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [id])

    const goBack = () => {
        history.push('/')
    }

    const [component, setComponent] = useState('incomeSpending')
    const renderInfo = type => {
        switch (type) {
            case 'incomeSpending':
                return <IncomeSpending charityData={charityData[0]} />
            case 'contact':
                return <Contact charityData={charityData[0]} />
            default:
                return null;
        }
    }

    const [showGrants, setShowGrants] = useState(false)
    const [numOfGrants, setNumOfGrants] = useState()
    console.log(numOfGrants)
    const toggleDisplay = () => {
        if (showGrants) {
            setShowGrants(false)
        } else setShowGrants(true)
        console.log(showGrants)
    }

    const conditionalRender = () => {
        if (numOfGrants && showGrants) {
            return 'Hide Grants'
        } else if (numOfGrants && !showGrants) {
            return 'Show Grants'
        } else return
    }



    return (
        <>
            {charityData ?
                <main className="charity-show">
                    <section className="charity-show-main">
                        <div className="charity-show-title">
                            <h1 className="charity-show-header">{charityData[0].names[0].value}</h1>
                            <ul className="cause-ul">
                                {charityData[0].causes.map((cause) => (
                                    <li key={cause.name} className="cause-li">
                                        {cause.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="charity-show-info">
                            {renderInfo(component)}
                        </div>
                    </section>
                    <div className="charity-show-footer">
                        <p className="go-back-button button" onClick={goBack}>Go Back</p>
                        <div className="charity-show-keys">
                            <p className="income-spending-button button" onClick={() => setComponent('incomeSpending')}>Income &amp; Spending</p>
                            <p className="contact-button button" onClick={() => setComponent('contact')}>Contact Info</p>
                        </div>
                    </div>
                    <section>
                        <div className="grant-button-container">
                            <p className={numOfGrants ? "grant-button" : ''} onClick={toggleDisplay}>
                                {conditionalRender()}
                                </p>
                        </div>
                        {showGrants ?
                            <Grants charityData={charityData[0]} />
                            :
                            <p></p>
                        }

                    </section>
                </main>
                :
                <>
                    <h3 className="loading">Loading</h3>
                </>
            }
        </>
    )
}

export default CharityShow