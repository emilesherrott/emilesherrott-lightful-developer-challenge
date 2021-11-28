import React from 'react'
import { useHistory } from 'react-router-dom'


const Search = ({ charityData, setCharities }) => {

    let search = ''
    const history = useHistory()

    const filterCharities = () => {
        const regExSearch = new RegExp(search, 'i')
        console.log('regex', regExSearch)
        setCharities(charityData.filter(charity => {
            return regExSearch.test(charity.names[0].value)
        }))
    }

    const handleTextInput = (event) => {
        search = event.target.value
        filterCharities()
        history.push('/')
    }


    return (
        <section>
            <div className="search-component">
                <label for="search" id="search-label">Search:</label>
                <input type="text" id="search" placeholder="Search" autocomplete="off" onChange={handleTextInput} />
            </div>
        </section>
    )
}

export default Search