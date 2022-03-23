import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { WantedContext } from '../context/WantedContext'

const WantedPage = () => {
    const { 
        selectWanted, 
        deselectWanted, 
        selectedWanted,
    } = useContext(WantedContext)
    
    const params = useParams()

    useEffect(() => {
        deselectWanted()
        selectWanted(params.id)
    }, [selectWanted, deselectWanted, params.id])

    if (!selectedWanted)
        return <div>Not Found</div>

    return (
        <div className="row">
            <div className="col-md-4">
                <h2>{ selectedWanted.title }</h2>
                <img src={selectedWanted.images[0].original} />
                <ul className="list-group">
                    <li className="list-group-item"><strong>Sex:</strong> { selectedWanted.sex ?? 'Unknown' }</li>
                    <li className="list-group-item"><strong>Age (min-max):</strong> { selectedWanted.age_min ?? 'Unknown' } - { selectedWanted.age_max ?? 'Unknown'  }</li>
                    <li className="list-group-item"><strong>Race:</strong> { selectedWanted.race_raw ?? 'Unknown'  }</li>
                    <li className="list-group-item"><strong>Weight (min-max):</strong> { selectedWanted.weight_min ?? 'Unknown' } - { selectedWanted.weight_max ?? 'Unknown'  }</li>
                </ul>
            </div>
            {
                selectedWanted.caution ?
                <div className="col-md-8">
                    <h2>Caution:</h2>
                    { selectedWanted.caution && <div dangerouslySetInnerHTML={{ __html: selectedWanted.caution.replace(/\s+/g, ' ').trim() }}></div> }
                    <h2>Description:</h2>
                    { selectedWanted.description && <div dangerouslySetInnerHTML={{ __html: selectedWanted.description.replace(/\s+/g, ' ').trim() }}></div> }
                    <h2>Remarks:</h2>
                    { selectedWanted.remarks && <div dangerouslySetInnerHTML={{ __html: selectedWanted.remarks.replace(/\s+/g, ' ').trim() }}></div> }
                </div>
                :
                <div className="col-md-8">
                    <h2>Details:</h2>
                    { selectedWanted.details && <div dangerouslySetInnerHTML={{ __html: selectedWanted.details.replace(/\s+/g, ' ').trim() }}></div> }
                    <h2>Description:</h2>
                    { selectedWanted.description && <div dangerouslySetInnerHTML={{ __html: selectedWanted.description.replace(/\s+/g, ' ').trim() }}></div> }
                </div>
            }
        </div>
    )
}

export default WantedPage
