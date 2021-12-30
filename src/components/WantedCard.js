import React from 'react'

const WantedCard = ({ wanted: { title, images, remarks } }) => {
    return (
        <div className="col">
            <div className="card">
                <img src={ images[0].thumb } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    )
}

export default WantedCard
