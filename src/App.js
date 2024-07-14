import React,{useState} from 'react'
import axios from 'axios'

function App() {

    const baseUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_WkYmvH5vuLRHESrLyNnWNIPVUC41dVwK8kyOQIge&base_currency=`

    const [fromCurrency,setFromCurrency] = useState("USD");
    const [toCurrency,setToCurrency] = useState("TRY");
    const [fromAmount,setFromAmount] = useState(0)
    const [toAmount,setAmount] = useState(0)

    const exchange = async() => {
      const response =await axios.get(`${baseUrl}${fromCurrency}`)
      const toAmount = (response.data.data[toCurrency] * fromAmount).toFixed(2)
      setAmount(toAmount)

    }



  return (
    <React.Fragment>
      <div className='bg-doviz-pattern w-screen h-screen bg-cover pt-20'>
        <div className='w-[650px] max-h-full border-2 border-black mx-auto '>
          <div className='bg-black flex justify-center items-center h-20'>
            <h1 className='text-white font-bold text-3xl'>DÖVİZ KURU UYGULAMASI</h1>
          </div>
          <div className='flex  flex-col justify-center items-center gap-4 mt-4 h-48'>
            <div className='flex justify-center items-center gap-6'>
              <input 
              type='number' 
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}/>
              <select onChange={(e) => setFromCurrency(e.target.value)}>
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
              </select>

              <select onChange={(e) =>setToCurrency(e.target.value)} >
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
              </select>

              <input 
              value={toAmount}
              type='number'
              onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <button className='bg-rose-500 w-24 h-10 rounded text-white ' onClick={exchange}>Çevir</button>
          </div>
        </div>


      </div>
    </React.Fragment>
  );
}

export default App;
