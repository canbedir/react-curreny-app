import React, { useState } from 'react'
import "./Curreny.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_oYt2nMxzem7pBGzWk3FZJ0Gxy3TwaR2N3R9aC3Fc"

const Curreny = () => {

    const [amount, setAmount] = useState ();
    const [fromCurreny, setFromCurreny] = useState('USD');
    const [toCurreny, setToCurreny] = useState('TRY');
    const [result, setResult] = useState(0);


    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_curreny=${fromCurreny}`)
        const result = (response.data.data[toCurreny]*amount).toFixed(2)
        setResult(result)
    }


  return (
    <div className="curreny-wrapper">

        <div className="title">
            <h3>DÖVİZ KURU UYGULAMASI</h3>
        </div>

        <div className="curreny">
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount' />
            <select onChange={(e) => setFromCurreny(e.target.value)}>
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>  

            <div className="right-arrow">
                <FaLongArrowAltRight />
            </div>

            <select onChange={(e) => setToCurreny(e.target.value)} className="to-curreny-option">
                <option>TRY</option>
                <option>USD</option>
                <option>EUR</option>
            </select>
            <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />
        </div>

        <div className="button">
            <button onClick={exchange} >Çevir</button>

        </div>
    </div>
  )
}

export default Curreny