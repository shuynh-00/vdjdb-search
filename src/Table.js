import React from 'react';
import './Table.css';

const Table = ({ dataString, hasSearched }) => {

    console.log(`testing ${dataString}`)
    let data;
    try {
        data = JSON.parse(dataString);
    } catch (e) {
        console.error('Error parsing JSON:', e);
    }
    console.log(typeof data);


    // Return a message if dataString is null
    if (dataString === 'null') {
        return <p>Enter your sequence</p>
    }

    // Check if there are no records found
    if (data.recordsFound === 0) {
        return <p>No results found</p>;
    }

    const combineRows = (data) => {
        let combinedRows = [];
        let previousRow = null;

        data.rows.forEach((row) => {
            if (row.entries[0] === "TRA" && previousRow) {
                previousRow.entries = [...previousRow.entries, ...row.entries];
            } else {
                if (previousRow) {
                    combinedRows.push(previousRow);
                }
                previousRow = { ...row }; // Make a shallow copy of the row
            }
        });

        if (previousRow) {
            combinedRows.push(previousRow);
        }

        return {
            ...data,
            rows: combinedRows,
        };
    };


    const combinedData = combineRows(data);
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
                    {combinedData.rows.map((row, i) => (
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
    );
};

export default Table;
