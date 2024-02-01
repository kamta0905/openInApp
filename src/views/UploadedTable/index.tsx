import React from "react";
import "./uploadedTable.css";
const UpLoadedTable = () => {
  return (
    <div className="table_container">
      <h1>Upload</h1>
      <div className="overflow-x-auto table_bg">
        <table className="border-separate table-auto min-w-full">
          <thead>
            <tr>
              <th className="border-slate-300">State</th>
              <th className="border-slate-300">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Indiana</td>
              <td>ndianapolis</td>
            </tr>
            <tr>
              <td>Indiana</td>
              <td>ndianapolis</td>
            </tr>
            <tr>
              <td>Indiana</td>
              <td>ndianapolis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpLoadedTable;
