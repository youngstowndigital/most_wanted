import React from 'react'
import { Link } from 'react-router-dom'
import fbi_logo from '../fbi_logo.png'

const HomePage = () => {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <img src={fbi_logo} className="d-block mx-auto mb-4" />
            <h1>FBI  Most Wanted</h1>
            <div className="col-lg mx-auto">
                <p className="lead mb-4">
                    Notice: The official FBI Ten Most Wanted Fugitives list is maintained on the FBI website. This information may be copied and distributed, however, any unauthorized alteration of any portion of the FBI's Ten Most Wanted Fugitives posters is a violation of federal law (18 U.S.C., Section 709). Persons who make or reproduce these alterations are subject to prosecution and, if convicted, shall be fined or imprisoned for not more than one year, or both.
                </p>
            </div>
            <div className="d-grid gap-2-d-sm-flex justify-content-sm-center">
                <Link to="/wanted" className="btn btn-primary brn-lg px-4 gap-3">
                    Wanted List
                </Link>
            </div>
        </div>
    )
}

export default HomePage

