import axios from 'axios'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import InnerContent from './InnerContent'
import Loading from './Loading'

function App() {
  const [usdVal, setUsdVal] = useState(1)
  const [dataAPI, setData] = useState(null)
  const [isFetch, setIsFetch] = useState(false)
  const [currency, setCurrency] = useState(['CAD', 'IDR', 'JPY', 'CHF', 'EUR', 'GBP'])
  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    let url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${process.env.API_KEY}&symbols=`
    currency.forEach((val, i) => {
      url += val
      if (i < currency.length - 1) url += ','
    })
    axios.get(url)
      .then(value => {
        setData(value.data)
        setIsFetch(true)
        setIsLoad(false)        
      }).catch(err => {
        setIsLoad(false)
        Swal.fire({
          title: 'Kesalahan',
          icon: 'error',
          text: 'Terjadi kesalahan fetch data API, mohon coba kembali',
        }).then(res => {
          if (res.isConfirmed) {
            window.location.reload()
          }
        })
    })
    
  }, [usdVal, isFetch, currency])

  return (
    <div className='bg-warning '>
      <div className="container d-flex flex-column justify-content-center" style={{height: '100vh'}}>
        {isLoad ? (
          <Loading />
        ) : (
          <InnerContent data={dataAPI} usdVal={usdVal} setUsdVal={setUsdVal} />
        )}
      </div>
    </div>
  )
}

export default App
