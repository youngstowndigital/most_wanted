import React,  { useContext } from 'react'
import WantedCard from '../components/WantedCard'
import { WantedContext } from '../context/WantedContext'

const WantedList = () => {
    const { wanted } = useContext(WantedContext)

    return (
        <div>
            <div className="row">
                { wanted.map(w => <WantedCard key={w.uid} wanted={w} />) }
            </div>
        </div>
    )
}

export default WantedList
