import React from 'react'
import Card from '../Card/Card'
import Pag from '../Pag/Pag';

export default function MovieList({data, getpage,pageCount}) {
    // console.log(data);
    return (
        <div className="row">
        {data.length >= 1 ? ( data.map((item) => {
            return (<Card key={item.id} item={item}/>)
        })): <h1 className='text-center'>No Movies Found</h1> }
        <Pag getpage={getpage} pageCount={pageCount}/>

    </div>
  )
}
