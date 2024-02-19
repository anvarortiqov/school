import React from 'react';

function Pagination({ currentPage, totalEmployees, onPageChange }) {
    // Sahifalarni hisoblash
    const totalPages = Math.ceil(totalEmployees / 10);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <nav className="pagination">
            <ul className="flex">
                <li>
                    <button className='font-bold py-2 px-4 rounded'>⏮️</button> 
                </li>
                {pages.map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => onPageChange(page)}
                            className={`${
                                currentPage === page
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
                            } font-bold py-2 px-4 rounded`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                 <li>
                    <button className='font-bold py-2 px-4 rounded'>⏭️</button> 
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
