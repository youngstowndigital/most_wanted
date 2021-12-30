import React,  { useContext } from 'react'
import WantedCard from '../components/WantedCard'
import { WantedContext } from '../context/WantedContext'

const WantedList = () => {
    const { wanted } = useContext(WantedContext)

    return (
        <div>
            <h1>Most Wanted</h1>
            { wanted.map(w => <WantedCard wanted={w} />) }
        </div>
    )
}

export default WantedList
