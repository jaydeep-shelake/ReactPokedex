import React from 'react'

const Pagination = ({goToNextPage,goToPreviousPage}) => {

    return (
        <>
           { goToPreviousPage&&<button className="pre" onClick={goToPreviousPage}>Previous</button>}
           {  goToNextPage&&<button className="next" onClick={goToNextPage}>Next</button>}
        </>
    )
}

export default Pagination;
