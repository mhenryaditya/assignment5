function Table({ data, usdVal }) {
    const percentFive = (value) => {
        return Number(value) * (5/100)
    }

    const timesUSD = (value, usdVal) => {
        return usdVal * value
    }

    return (
        <table className="table table-warning table-striped">
            <thead>
                <tr>
                    <th scope="col">Currency</th>
                    <th scope="col">We Buy</th>
                    <th scope="col">Exchange Rate</th>
                    <th scope="col">We Sell</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(data.rates).map((key, val) => (
                    <tr key={val}>
                        <td>{ key[0] }</td>
                        <td>{ timesUSD((percentFive(key[1])) + Number(key[1]), usdVal) }</td>
                        <td>{ timesUSD(Number(key[1]), usdVal) }</td>
                        <td>{ timesUSD(Number(key[1]) - (percentFive(key[1])), usdVal) }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table