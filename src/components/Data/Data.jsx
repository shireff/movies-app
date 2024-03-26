import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieList from '../MovieList/MovieList'
import Header from './../Header/Header'
export default function Data() {
  const [data, setData] = useState([])
  const [pageCount, setPageCount] = useState(0)
  // const getAll = async () => {
  //   const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US&page=1")
  //   const finalData = res.data.results
  //   setData(finalData)
  // }

  async function getAllData () {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US")
    const finalData = res.data.results
    setData(finalData)
    setPageCount(res.data.total_pages)
  }
  
  async function getpage (pag) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US&page=${pag}`)
    const finalData = res.data.results
    setData(finalData)
  }

  useEffect(()=> {
    getAllData()
    console.log(data);
  }, [])

  

  // const getAll = async () => {
  //   try {
  //     const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US&page=1");
  //     const results = res.data.results;
  //     setData(results);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getAll();
  // }, []);
  
  // useEffect(() => {
  //   // Log the updated state here
  //   console.log(data);
  // }, [data]);
  
  return (
    <>
    <div className="container">
      <MovieList data={data} getpage={getpage} pageCount={pageCount}/>
    </div>
    </>
  )
}
