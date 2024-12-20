import "./styles.css";
import {useEffect, useState} from "react";

export default function App() {
    const [rows, setRows] = useState([] as any[]);
  const handleClick = () => {
    setRows( [...rows, { title: "this is a row" }] );
  };
  useEffect(() => {}, [rows]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={handleClick}>{rows.length}</button>
      <h2>Rows: {rows.length}</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td> {row.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
