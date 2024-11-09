import React from 'react'
import "./styles.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from "react-router-dom"

function Grid({ coin }) {

    // console.log(coin)
    return (
        <Link to={`/coin/${coin.id}`} >
            <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"
                }`}>
                <div className="info-flex">
                    <img className='coin-logo' src={coin.image} alt="Coin Image" />
                    <div className="name-col">
                        <p className='coin-symbol'>{coin.symbol}</p>
                        <p className='coin-name'>{coin.name}</p>
                    </div>
                </div>
                {coin.price_change_percentage_24h > 0 ?
                    (<div className="chip-flex">
                        <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        <div className="icon-chip icon-up">
                            <TrendingUpRoundedIcon />
                        </div>
                    </div>) : (
                        <div className="chip-flex">
                            <div className='price-chip price-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                            <div className="icon-chip price-red">
                                <TrendingDownRoundedIcon />
                            </div>
                        </div>
                    )
                }
                <div className="info-container">
                    <h3 className='coin-price' style={{
                        color:
                            coin.price_change_percentage_24h < 0 ?
                                "var(--red)" : "var(--green)"
                    }}>${coin.current_price.toLocaleString()}</h3>
                    <p className="total-volume">
                        Total Volume : {coin.total_volume.toLocaleString()}
                    </p>
                    <p className="total-volume">
                        Market Cap : {coin.market_cap.toLocaleString()}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Grid