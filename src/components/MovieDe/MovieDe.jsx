import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import style from './MovieDe.module.css'
export default function MovieDe() {
  const params = useParams();
  console.log(params);
  const [mo, setMo] = useState([])


  async function getMoDe () {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US`)
    const finalData = res.data
    setMo(finalData)
  }

  useEffect(() =>{
    getMoDe()
  }, [])
  
  return (
    <>
    <div className="container">
      <div className='d-flex flex-column justify-content-between'>
        <div className="row my-5">
          <div className="col-xl-6 col-lg-6 d-flex flex-column justify-content-center">
            <h1 className='py-2'>{mo.original_title}</h1>
            <h5 className='py-1'>Data : {mo.release_date}</h5>
            {/* <h5 className="card-text py-1">{mo.title}</h5> */}
            <h5 className="card-text py-1">Voters : {mo.vote_count}</h5>
            <h5 className="card-text py-1">Votes : {mo.vote_average}</h5>
          </div>
          <div className={`col-xl-6 col-lg-6 ${style.col}`}>
            <img className={`w-100 h-100 ${style.img}`} src={`https://image.tmdb.org/t/p/w500/`+mo.poster_path} alt="" />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-xl-12">
            <h2>Story</h2>
            <p>{mo.overview}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <a target='_blanck' href={mo.homepage}
          className='p-2'
          >
            <button className='btn btn-info'>Watch Movie</button>
          </a>
          <Link to={"/"}
          className='p-2'
          >
            <button className='btn btn-info'>Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
