import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const WantedCard = ({ wanted: { title, images, uid, modified } }) => {
    return (
        <div className="col-md-3 my-3">
            <div className="card">
                <img src={ images[0].original } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text"></p>
                    <Link to={ `/${uid}` } className="btn btn-primary">View</Link>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Updated: { moment(modified, "YYYYMMDD").fromNow() }</small>
                </div>
            </div>
        </div>
    )
}

export default WantedCard
