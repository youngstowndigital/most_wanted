import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { FaEye, FaRegCalendarAlt, FaGlobeAmericas, FaInfoCircle, FaBirthdayCake } from 'react-icons/fa'
import { CgGenderMale, CgGenderFemale } from 'react-icons/cg'

const WantedCard = ({ wanted: { title, uid, modified, sex, possible_countries, subjects, dates_of_birth_used, place_of_birth } }) => {
    return (
        <div className="col-lg-4 my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ title.length > 20 ? `${title.substring(0, 20)}...` : title }</h5>
                    <p className="card-text">
                        <div className="my-3">
                            <small className="mx-2">
                                <FaBirthdayCake fontSize="20px" /> { dates_of_birth_used ? dates_of_birth_used[0] : 'n/a' } ({ place_of_birth ? place_of_birth.length > 12 ? `${place_of_birth.substring(0, 12)}...` : place_of_birth : "n/a" })
                            </small>
                            |
                            <small className="mx-2">
                                { sex === "Male" ? <CgGenderMale fontSize="28px" /> : <CgGenderFemale fontSize="28px" /> }
                            </small>
                        </div>
                        <div className="my-3">
                            <small className="mx-2">
                                <FaGlobeAmericas fontSize="20px" /> { possible_countries ? possible_countries.map(c => c.toLowerCase()).join(', ') : "n/a" }
                            </small>
                            |
                            <small className="mx-2">
                                <FaInfoCircle fontSize="20px" /> { subjects.length === 0 ? 'n/a' : subjects.join(', ') }
                            </small>
                        </div>
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><FaRegCalendarAlt /> { moment(modified, "YYYYMMDD").fromNow() }</small>
                    <small  className="text-muted float-end"><Link to={ `/wanted/${uid}` }><FaEye size="28px" /></Link></small>
                </div>
            </div>
        </div>
    )
}

export default WantedCard
