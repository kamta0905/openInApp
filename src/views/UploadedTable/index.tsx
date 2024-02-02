import React, { useState } from "react";
import "./uploadedTable.css";
import closeMark from "../../assets/closeMark.svg";
import drop from "../../assets/dropdownImg.svg";
const UpLoadedTable = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [tableData, setTableData] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedValue1, setSelectedValue1] = useState<string>("");
  const [tableData1, setTableData1] = useState<string[]>([]);
  const [showDropdown1, setShowDropdown1] = useState<boolean>(false);

  const options: string[] = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7", "Tag 8", "Tag 9", "Tag 10"];
  const options1: string[] = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"];
  const handleOptionClick = (value: string) => {
    setTableData([...tableData, value]);
    setSelectedValue("");
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleOptionClick1 = (value: string) => {
    setTableData1([...tableData1, value]);
    setSelectedValue1("");
    setShowDropdown1(false);
  };

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  return (
    <div className="table_container">
      <h1>Upload</h1>
      <div className="overflow-x-auto table_bg">
        <table className="border-separate table-auto min-w-full">
          <thead>
            <tr>
              <th className="border-slate-300">Sl No.</th>
              <th className="border-slate-300">Links</th>
              <th className="border-slate-300">Prefix</th>
              <th className="border-slate-300" style={{ width: "100%", minWidth: "200px" }}>
                Add Tags
              </th>
              <th className="border-slate-300">Selected Tags</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  www.google.com
                </a>
              </td>
              <td>Prefixsample</td>
              <td>
                <div className="relative">
                  <button
                    className="bg-white-500 text-dark border px-4 py-2 rounded cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    {selectedValue || "Select an option"} <img src={drop} alt="drop" />
                  </button>
                  {showDropdown && (
                    <div className="absolute dropdown_list top-0 left-0 mt-2 bg-white border rounded shadow-md">
                      <ul className="list-none p-2">
                        {options.map(
                          (option) =>
                            !tableData.includes(option) && (
                              <li
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                className="cursor-pointer p-2 font-medium rounded-lg hover:bg-slate-100 hover:text-slate-700"
                              >
                                {option}
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </td>
              <td>
                <ul className="table_list">
                  {tableData.map((value, index) => (
                    <li className="p-1" key={index}>
                      {value} <img src={closeMark} alt={index + "option"} />
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  www.google.com
                </a>
              </td>
              <td>Prefixsample</td>
              <td>
                <div className="relative">
                  <button
                    className="bg-white-500 text-dark border px-4 py-2 rounded cursor-pointer"
                    onClick={toggleDropdown1}
                  >
                    {selectedValue1 || "Select an option"} <img src={drop} alt="drop" />
                  </button>
                  {showDropdown1 && (
                    <div className="absolute dropdown_list top-0 left-0 mt-2 bg-white border rounded shadow-md">
                      <ul className="list-none p-2">
                        {options1.map(
                          (option) =>
                            !tableData1.includes(option) && (
                              <li
                                key={option}
                                onClick={() => handleOptionClick1(option)}
                                className="cursor-pointer p-2 font-medium rounded-lg hover:bg-slate-100 hover:text-slate-700"
                              >
                                {option}
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </td>
              <td>
                <ul className="table_list">
                  {tableData1.map((value, index) => (
                    <li className="p-1" key={index}>
                      {value} <img src={closeMark} alt={index + "option"} />
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  www.google.com
                </a>
              </td>
              <td>Prefixsample</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  www.google.com
                </a>
              </td>
              <td>Prefixsample</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                  www.google.com
                </a>
              </td>
              <td>Prefixsample</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpLoadedTable;
