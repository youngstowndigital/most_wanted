import React,  { useContext } from 'react'
import WantedCard from '../components/WantedCard'
import { WantedContext } from '../context/WantedContext'

const WantedList = () => {
    const { wantedList, selectedWanted, selectWanted } = useContext(WantedContext)

    return (
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
