import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'

export const WantedContext = createContext();

const WantedProvider = ({ children }) => {
    const [wantedList, setWantedList] = useState([])
    const [selectedWanted, setSelectedWanted] = useState({})

    const fetchWanted = async () => {
        const res = await axios.get('https://api.fbi.gov/wanted/v1/list?field_offices=miami')
        setWantedList(res.data.items)
    }

    const selectWanted = (uid) => {
        const wanted = wantedList.filter(w => w.uid === uid)[0]
        setSelectedWanted(wanted);
    }

    useEffect(() => {
        fetchWanted()
    }, [])

    return (
        <WantedContext.Provider value={{ wantedList, selectedWanted, selectWanted }}>
            { children }
        </WantedContext.Provider>
    )
}

export default WantedProvider
