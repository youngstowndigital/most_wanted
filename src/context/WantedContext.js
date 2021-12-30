import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'

export const WantedContext = createContext();

const WantedProvider = ({ children }) => {
    const [wanted, setWanted] = useState([])

    const fetchWanted = async () => {
        const res = await axios.get('https://api.fbi.gov/wanted/v1/list?field_offices=miami')
        setWanted(res.data.items)
    }

    useEffect(() => {
        fetchWanted()
    }, [])

    return (
        <WantedContext.Provider value={{ wanted }}>
            { children }
        </WantedContext.Provider>
    )
}

export default WantedProvider
