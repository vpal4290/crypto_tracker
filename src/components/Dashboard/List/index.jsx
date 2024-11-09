import React from 'react'
import "./styles.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material'
import { convertNumbers } from '../../../functions/convertNumbers';
import { Link } from "react-router-dom"

function List({ coin }) {
    return (
        <Link to={`/coin/${coin.id}`} >
            <tr className='list-row'>
                <Tooltip title="Coin Logo">
                    <td className="td-image">
                        <img className='coin-logo' src={coin.image} alt="Coin Image" />
                    </td>
                </Tooltip>
                <td>
                    <Tooltip title="coin-info">
                        <div className="name-col">
                            <p className='coin-symbol'>{coin.symbol}</p>
                            <p className='coin-name'>{coin.name}</p>
                        </div>
                    </Tooltip>
                </td>
                <Tooltip title="price change in 24Hr">
                    {coin.price_change_percentage_24h > 0 ?
                        (<td className="chip-flex">
                            <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                            <div className="icon-chip icon-up td-icon">
                                <TrendingUpRoundedIcon />
                            </div>
                        </td>) : (
                            <td className="chip-flex">
                                <div className='price-chip price-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                                <div className="icon-chip price-red td-icon">
                                    <TrendingDownRoundedIcon />
                                </div>
                            </td>
                        )
                    }
                </Tooltip>
                <Tooltip title="current price" >
                    <td>
                        <h3 className='coin-price td-center-align' style={{
                            color:
                                coin.price_change_percentage_24h < 0 ?
                                    "var(--red)" : "var(--green)"
                        }}>${coin.current_price.toLocaleString()}</h3>
                    </td>
                </Tooltip>
                <Tooltip title="total volume" placement='bottom'>
                    <td>
                        <p className="total-volume td-right-align td-total-volume">
                            {coin.total_volume.toLocaleString()}
                        </p>
                    </td>
                </Tooltip>

                <Tooltip title="market cap" placement='bottom-end'>
                    <td className='desktop-td'>
                        <p className="total-volume td-right-align">
                            {coin.market_cap.toLocaleString()}
                        </p>
                    </td>
                </Tooltip>
                <Tooltip title="market cap" placement='bottom-end'>
                    <td className='mobile-td'>
                        <p className="total-volume td-right-align">
                            {convertNumbers(coin.market_cap)}
                        </p>
                    </td>
                </Tooltip>
            </tr>
        </Link>
    )
}

export default List