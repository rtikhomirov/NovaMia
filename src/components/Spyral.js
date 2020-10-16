import React, {useEffect, useState} from 'react';
import spyralStyle from './Spyral.css';

const Spyral = () => {
    const [rows, setRows] = useState(2);
    const [matrix, setMatrix] = useState([]);

    useEffect(() => {
        matrixTable(rows);
    }, [rows]);

    const matrixTable = (n) => {
        const results = [];
        for (let i = 0; i < n; i++) {
            results.push([]);
        }
        let counter = 1;
        let startColumn = 0;
        let endColumn = n - 1;
        let startRow = 0;
        let endRow = n - 1;
        while (startColumn <= endColumn && startRow <= endRow) {
            // Top row
            for (let i = startColumn; i <= endColumn; i++) {
                results[startRow][i] = counter;
                counter++;
            }
            startRow++;
            // Right column
            for (let i = startRow; i <= endRow; i++) {
                results[i][endColumn] = counter;
                counter++;
            }
            endColumn--;
            // Bottom row
            for (let i = endColumn; i >= startColumn; i--) {
                results[endRow][i] = counter;
                counter++;
            }
            endRow--;
            // start column
            for (let i = endRow; i >= startRow; i--) {
                results[i][startColumn] = counter;
                counter++;
            }
            startColumn++;
        }
        return setMatrix(results);
    };

    const selects = Array(21).fill(null).map((u, i) => {
        if(i > 1) {
            return <option key={i}>{i}</option>
        } else {
            return null;
        }
    });

    const matrixtable = matrix.map((item, index) => {
        let td = item.map((someTD, i) => {
            return <td
                key={i}
            >{item[i]}</td>
        });

        return <tr
            key={index}
        >{td}</tr>
    });

    return (
        <div className='container'>
            <div className="row ml-0">
                <div className="col-6 mx-auto">
                    <label>Select number of rows</label>
                    <select className="form-control" onChange={(e) => setRows(e.target.value)}>
                        {selects}
                    </select>
                </div>
            </div>

            <table className='mx-auto mt-5'><tbody>{matrixtable}</tbody></table>
        </div>
    );
};
export default Spyral;