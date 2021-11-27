import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Search from './components/Search'
import CharityShow from './pages/CharityShow'
import CharityIndex from './pages/CharityIndex'
import DataError from './pages/DataError'

import { apiEndPoint, apiQuery, apiKey } from './helpers/api'



const App = () => {
    const [charityData, setCharityData] = useState([])
    const [charities, setCharities] = useState()

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`${apiEndPoint}?query=${apiQuery}`, {
                    headers: {
                        Authorization: `Apikey ${apiKey}`
                    }
                })
                setCharityData(data.data.CHC.getCharities.list)
                setCharities(charityData)
                console.log(charityData)
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [])


    return (
        <Router>
            <Search charityData={charityData} setCharities={setCharities}/>
            <Switch>
                <Route path='/:id' component={CharityShow} />
                { charities ?
                <>
                <Route path='/' component={() => <CharityIndex charities={charities} />} />
                </>
                :
                <Route path='/' component={DataError} />
                }
            </Switch>
        </Router>
    )
}

export default App;
