import React from 'react'
import "./styles.css"


function Toggle({ outlined, onClick }) {


    return (
        <>
            {outlined ?
                true : false
            }
        </>
    )
}

export default Toggle