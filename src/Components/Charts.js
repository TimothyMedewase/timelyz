import React from 'react';
import styles from './Charts.css';

const Charts = () => {
  const tableData =[
  ['Row 1', 'Column 1', 'Column 2'],
  ['Row 2', 'Column 1', 'Column 2'],
  ['Row 3', 'Column 1', 'Column 2'],
  ['Row 4', 'Column 1', 'Column 2'],
  ['Row 5', 'Column 1', 'Column 2'],
  ['Row 6', 'Column 1', 'Column 2'],
  ['Row 7', 'Column 1', 'Column 2'],
  ['Row 8', 'Column 1', 'Column 2'],
  ['Row 9', 'Column 1', 'Column 2'],
  ['Row 10', 'Column 1','Column 2'],
]
  return (
    <div >
      <h2 style={{fontWeight:"bold", fontFamily:"serif", fontSize:25, color:"black"}}>Your Top 10 Songs:</h2>

    <div style={{ border: '5px solid black', display: "flex", backgroundColor:"#FFFFFF"}}>
        <table className = "inside-bordered-table">
          <thead>
            <tr>
              <th> Header 1</th>
              <th> Header 2</th>
              <th> Header 3</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                {rowData.map((cellData, columnIndex) => (
                  <td key={columnIndex}>{cellData}</td>
                ))}
              </tr>
      ))}
          </tbody>
        </table>
    </div>
  </div>
  );
}

export default Charts;



 