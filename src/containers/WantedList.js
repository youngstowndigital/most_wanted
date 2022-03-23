import React,  { useContext, useEffect } from 'react'
import PageLoader from '../components/PageLoader'
import WantedCard from '../components/WantedCard'
import { WantedContext } from '../context/WantedContext'

const WantedList = () => {
    const { wantedList, selectWanted, wantedListLoading, fetchWanted } = useContext(WantedContext)

    useEffect(() => {
        if (wantedList.length == 0)
            fetchWanted()
    }, [])

    return (
        wantedListLoading ?
        <PageLoader />
        :
        <div>
            <div className="row">
                { 
                    wantedList.map(w => 
                        <WantedCard 
                            key={w.uid} 
                            wanted={w}
                            selectWanted={selectWanted} 
                            />
                    ) 
                }
            </div>
        </div>
    )
}

export default WantedList
