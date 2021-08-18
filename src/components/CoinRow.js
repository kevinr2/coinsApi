import React from 'react';
import './assets/CoinRow.css'

const CoinRow = ({coin,index})=>{
    return(
        <tr >
            <td>{index}</td>
            <td>
                <img src={coin.image} className="imgs img-fluid" alt={coin.name}/>
                <span>
                     {coin.name}
                </span>
                <span className="ms-2 text-uppercase text-muted"> {coin.symbol} </span>
            </td>
            <td >{coin.current_price}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>{coin.price_change_percentage_24h}</td>
            <td >{coin.total_volume}</td>
        </tr>
    )

}

export default CoinRow;