import React, { useState } from 'react';
import './styles.css'

function CoinInfo({ heading, desc }) {

    // By default show less description on screen
    const shortDesc = desc.slice(0, 350) + "<p style='color:var(--gray)'> Read More...</p>";

    // Onclicking on Read More... show whole description
    const longDesc = desc + "<span style='color:var(--gray)'> Read Less...</span>";

    const [flag, setFlag] = useState(false);

    return (
        <div className='grey-wrapper' style={{ padding: "0 1rem" }}>
            <h2 className='coin-info-heading'>{heading}</h2>
            {desc.length > 350 ? (
                <p onClick={() => setFlag(!flag)} className='coin-info-desc' dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}></p>
            ) : (
                <p className='coin-info-desc' dangerouslySetInnerHTML={{ __html: desc }}></p>
            )}
        </div>
    )
}

export default CoinInfo