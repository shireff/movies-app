import React from 'react'
import ReactPaginate from 'react-paginate';

export default function Pag({getpage , pageCount}) {
    function handlePageClick (data){
        console.log(data.selected + 1)
        getpage(data.selected + 1)
    }
    // function pageCount () {

    // }

    // const pageCount = 30
  return (
    
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName='pagination justify-content-center p-3'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        nextClassName='page-item'
        previousLinkClassName='page-link'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
      />
  )
}
