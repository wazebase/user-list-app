import React from 'react';
import {IPagination} from '../../interfaces-and-classes/IPagination';

const Pagination = ({usersPerPage,totalUsers,paginate}:IPagination) => {

    const pageNumbers = [];

    //sets up number array for the pagination links
    for(let i = 1; i<= Math.ceil(totalUsers/usersPerPage);i++) {
        pageNumbers.push(i);
    }
    
    return(
       <nav id='pagination-nav'>
           <ul className='pagination'>
               {pageNumbers.map(number=>(<li key={number} className='page-item'>
                <a onClick ={()=>paginate(number)} href='#' className="page-link">
                    {number}
                </a>
               </li>))}
           </ul>
       </nav>
    )
}

export default Pagination;