import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'
export default function Card({item}) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6">
        <Link className={style.l} to={`/mo/${item.id}`}>
        <div className="card my-3">
            <div className="cardimg">
                <img className='card-img-top' src={`https://image.tmdb.org/t/p/w500/`+item.poster_path} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{item.original_title}</h5>
                <p>Data : {item.release_date}</p>
                <p className="card-text">{item.title}</p>
            </div>
        </div>
        </Link>
    </div>
  )
}
