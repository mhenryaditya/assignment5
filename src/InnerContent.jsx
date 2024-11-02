import Form from "./Form"
import Table from "./Table"

function InnerContent({data, usdVal, setUsdVal}) {

    return (
        <>
            <div className="align-self-center d-flex flex-column gap-3">
                <Form usdVal={usdVal} setUsdVal={setUsdVal} />
                <Table data={data} usdVal={usdVal} />
            </div>
            <div className="text-center">
                <span>Rates are based from {usdVal} {data.base}</span>
                <span className="text-center d-block">This application uses API from https://currencyfreaks.com</span>
            </div>
        </>
    )
}

// InnerContent.prototype = {
//     data: PropTypes.string,

// }

export default InnerContent