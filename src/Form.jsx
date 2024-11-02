import { useState } from "react"

function Form({ usdVal, setUsdVal }) {
    const [tempUSD, setTempUSD] = useState(usdVal)

    const changeValue = (e) => {
        e.preventDefault()
        setUsdVal(tempUSD)
    }
    return (
        <form className="d-flex gap-1">
            <div className="input-group">
            <div className="input-group-text ">Nilai USD</div>
                <input type="number" className="form-control" id="autoSizingInputGroup" placeholder="USD Value" value={tempUSD} onChange={(e) => setTempUSD((Number(e.target.value) > 0 ? Number(e.target.value) : Number(1)))} min={1}/>
            </div>
            <button className="btn btn-primary" onClick={changeValue} >Cek</button>
        </form>
    )
}

export default Form