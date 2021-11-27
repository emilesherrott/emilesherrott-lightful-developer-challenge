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
                console.log(charityData)
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [id])

    console.log(charityData)

    const goBack = () => {
        history.push('/')
    }

    const [component, setComponent] = useState()
    const renderInfo = type => {
        switch (type) {
          case 'incomeSpending':
            return <IncomeSpending charityData={charityData} />
          case 'grants':
            return <Grants charityData={charityData} />
          case 'contact':
            return <Contact charityData={charityData[0]} />
          default:
            return null;
        }
      }




    return (
        <>
            {charityData ?
                <main className="charity-show">
                    <section className="charity-show-main">
                        <div className="charity-show-title">
                            <h1>{charityData[0].names[0].value}</h1>
                            <ul className="cause-ul">
                                {charityData[0].causes.map((cause) => (
                                    <li key={cause.name} className="cause-li">
                                        {cause.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {renderInfo(component)}
                        </div>
                    </section>
                    <div className="charity-show-footer">
                        <p onClick={goBack}>go back</p>
                        <div className="charity-show-keys">
                            <p className="info-button" onClick={() => setComponent('incomeSpending')}>Income &amp; Spending</p>
                            <p className="info-button" onClick={() => setComponent('grants')}>Grants</p>
                            <p className="info-button" onClick={() => setComponent('contact')}>Contact Info</p>
                        </div>
                    </div>
                </main>
                :
                <>
                    <h3>Loading</h3>
                </>
            }
        </>
    )
}

export default CharityShow