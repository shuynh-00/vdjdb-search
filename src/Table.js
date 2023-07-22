import React from 'react';
import './Table.css';

const Table = ({ dataString }) => {

    console.log(`testing ${dataString}`)
    let data;
    try {
        data = JSON.parse(dataString);
    } catch (e) {
        console.error('Error parsing JSON:', e);
    }
    console.log(typeof data);


    // Return a message if dataString is null
    if (dataString === 'null' || typeof data.rows === "undefined" || data.rows.length === 0) {
        console.log("No searches for now")
        return <p>Enter your sequence</p>
    }
    // else {
    //     console.log('hi')
    //     const data = JSON.parse(dataString);
    //     console.log(data.rows.length)
    //     return <p>It works</p>
    // }

    // Parse the stringified JSON data


    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        {/* Update here based on your table headers */}
                        <th>Result</th>
                        <th>Gene</th>
                        <th>CDR3</th>
                        <th>V</th>
                        <th>J</th>
                        <th>Species</th>
                        <th>MHCA</th>
                        <th>MHCB</th>
                        <th>MHC Class</th>
                        <th>Epitope</th>
                        <th>Epitope gene</th>
                        <th>Epitope species</th>
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, i) => (
                        <tr key={i}>
                            <td style={{ border: '1px solid black' }}>{i + 1}</td>
                            {row.entries.slice(0, 11).map((entry, j) => (
                                <td key={j}>{entry}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        // <>{console.log(data)}</>
        // <div style={{ display: 'flex', justifyContent: 'center' }}>
        //     <table style={{ border: '1px solid black', textAlign: 'center' }}>
        //         <tbody>
        //             {data.rows.map((row, index) => {
        //                 if (index >= 11) return null;
        //                 return (
        //                     <tr key={index}>
        //                         <td style={{ border: '1px solid black' }}>{index + 1}</td>
        //                         {row.entries.map((entry, i) => (
        //                             <td key={i} style={{ border: '1px solid black' }}>
        //                                 {entry}
        //                             </td>
        //                         ))}
        //                     </tr>
        //                 );
        //             })}
        //         </tbody>
        //     </table>
        // </div>
    );
};

export default Table;
