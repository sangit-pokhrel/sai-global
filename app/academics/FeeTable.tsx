import React from 'react'

const FeeTable = () => {
  return (
    <div className="container mx-auto px-4 py-10">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-1">Fee Structure</h2>

    <p className="text-left text-xl text-gray-600 mb-5">The following is the fee structure of the primary level for each grade the following is the fee structure of the primary level for each grade the following is the fee structure of the primary level for each grade</p>

    <table className="table-auto w-full max-w-[70%] m-auto text-center border-collapse pt-10" style={{border:"1px solid #222"}}>
        <thead>
            <tr className="bg-[#1B263B] text-white">
                <th className="py-4 px-6">CLASS</th>
                <th className="py-4 px-6">MONTHLY FEE (NRS)</th>
                <th className="py-4 px-6">ADMISSION (NRS)</th>
            </tr>
        </thead>
        <tbody>
            <tr className="table-row hover:bg-gray-100" style={{borderBottom: "1px solid #222"}}>
                <td className="py-4 px-6">PG</td>
                <td className="py-4 px-6">YYYYYYY</td>
                <td className="py-4 px-6">ZZZZZZZ</td>
            </tr>
            <tr className="table-row hover:bg-gray-100" style={{borderBottom: "1px solid #222"}}>
                <td className="py-4 px-6">NURSERY</td>
                <td className="py-4 px-6">YYYYYYY</td>
                <td className="py-4 px-6">ZZZZZZZ</td>
            </tr>
            <tr className="table-row hover:bg-gray-100" style={{borderBottom: "1px solid #222"}}>
                <td className="py-4 px-6">LKG</td>
                <td className="py-4 px-6">YYYYYYY</td>
                <td className="py-4 px-6">ZZZZZZZ</td>
            </tr>
            <tr className="table-row hover:bg-gray-100" style={{borderBottom: "1px solid #222"}}>
                <td className="py-4 px-6">UKG</td>
                <td className="py-4 px-6">YYYYYYY</td>
                <td className="py-4 px-6">ZZZZZZZ</td>
            </tr>
        </tbody>
    </table>

    <p className="text-center text-gray-500 mt-8 text-sm">* The charges mentioned above are subjected to changes. The parent/guardian will be pre-notified.</p>
</div>
  )
}

export default FeeTable