import React from 'react';
import CoinRow from './CoinRow';
 
const titles =['#','Coins','Price', 'Price Change', '24h Volume']

const Table = ({coins,search}) =>{

    const filterCoins= coins.filter((coin) =>
     coin.name.toLowerCase().includes(search.toLowerCase())
     ||
     coin.symbol.toLowerCase().includes(search.toLowerCase())
     );

    return(
        <table className="table table-dark mt-4 table-hover">
            <thead>
            <tr>
                {titles.map(title =>(
                    <td key={title}>{title}</td>
                ))
                }
            </tr>
            </thead>
            <tbody>
            {filterCoins.map((coin, index) =>(
                <CoinRow coin={coin} key={index} index={index + 1}/>
              ))}
            </tbody>
        </table>
    )
}

export default Table;