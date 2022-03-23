import axios from 'axios'
import React, { createContext, useState } from 'react'

export const WantedContext = createContext()

const WantedProvider = ({ children }) => {
    const [wantedList, setWantedList] = useState([])
    const [wantedListLoading, setWantedListLoading] = useState(false);
    const [selectedWanted, setSelectedWanted] = useState(null)

    const fetchWanted = async () => {
        try {
            setWantedListLoading(true)
            const res = await axios.get('https://api.fbi.gov/wanted/v1/list?field_offices=miami')
            setWantedList(res.data.items)
            setWantedListLoading(false)   
        } catch (error) {
            setWantedListLoading(false)
        }
    }

    const selectWanted = (uid) => {
        const wanted = wantedList.filter(w => w.uid === uid)[0]
        setSelectedWanted(wanted)
    }

    const deselectWanted = () => {
        setSelectedWanted(null)
    }

    return (
        <WantedContext.Provider value={{ wantedList, selectedWanted, wantedListLoading, selectWanted, deselectWanted, fetchWanted, selectedWanted }}>
            { children }
        </WantedContext.Provider>
    )
}

export default WantedProvider
