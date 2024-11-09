import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './styles.css'

export default function PaginationComponent({ page, handleChange }) {


    return (
        <div className='pagination-component'>
            <Pagination count={10} page={page} onChange={(e, v) => handleChange(e, v)}
                sx={{
                    color: "var(--white)",
                    "& .Mui-selected ": {
                        backgroundColor: "var(--blue) !important",
                        color: "#fff !important",
                        borderColor: "var(--blue) !important",
                    },
                    "& .MuiPaginationItem-ellipsis": {
                        border: "0px solid var(--grey) !important",
                    },
                    "& .MuiPaginationItem-text": {
                        color: "var(--white)",
                        border: "1px solid var(--grey)",
                    },
                }}
            />
        </div>
    );
}

// 0 - inclusive 10 - exclusive
// page1 : [0,10]
// page2 : [10,20]
// page3 : [20,30]
// .....
// page10 : [90, 100]