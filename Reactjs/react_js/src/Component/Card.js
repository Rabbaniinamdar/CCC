import React from 'react'
import './css/style.css'
import './css/bootstrap-grid.css'
import './css/bootstrap-grid.css'
function Card(props) {
    return (
        <React.Fragment>
            <div className='main'>
                <div className="container mx-auto mt-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={props.thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title mb-4">{props.title}</h5>
                                    <h6 className="card-subtitle mb-2" style={{ color: "green" }}>Rating:{props.rating}</h6>
                                    <p className="card-text">{props.description}</p>
                                    <a href={props.trailer} className="btn mr-2">Watch Trailer</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Card;