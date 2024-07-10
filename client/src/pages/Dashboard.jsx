import React, { useState } from "react";
import Header from "../components/Header";
import BottomHeader from "../components/BottomHeader";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
const Dashboard = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Task 1",
      description: "This is task 1",
      author: "John",
      authoredOn: "12/12/2021",
      status: "Completed",
    },
    {
      id: 2,
      name: "Task 2",
      description: "This is task 2",
      author: "Jane",
      authoredOn: "13/12/2021",
      status: "Pending",
    },
    {
      id: 3,
      name: "Task 3",
      description: "This is task 3",
      author: "Bob",
      authoredOn: "14/12/2021",
      status: "In Progress",
    },
  ]);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = data.filter((item) => item.status.includes(filter));

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <BottomHeader />
      <div className="flex-grow px-2 py-4">
        <div className="flex justify-start items-center">
          <label htmlFor="filter" className="text-lg font-medium px-4">
            Filter by Status:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            className="bg-gray-50 border border-gray-300 text-gray-900
            sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5"
          >
            <option value="">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
        <table className="min-w-full divide-y divide-gray-300 border border-gray-300 mt-4">
          <thead className="bg-gray-100">
            <tr className="bg-slate-600">
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300 w-20"
              >
                Task ID
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
              >
                Task Name
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
              >
                Short Description
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
              >
                Author Name
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
              >
                Authored On
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
              >
                Current Status
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-slate-100 text-zinc-600">
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td className="px-4  border-r border-gray-300">{item.id}</td>
                <td className="px-4  border-r border-gray-300">{item.name}</td>
                <td className="px-4  border-r border-gray-300">{item.description}</td>
                <td className="px-4  border-r border-gray-300">{item.author}</td>
                <td className="px-4  border-r border-gray-300">{item.authoredOn}</td>
                <td className="px-4 border-r border-gray-300">{item.status}</td>
                <td className="px-4 py-1">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      margin: "0",
                      minWidth: "70px",
                    }}
                  >
                    <Tooltip title="Edit">
                      <IconButton
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          padding: "5px",
                        }}
                      >
                        <EditIcon style={{ fontSize: "15px" }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="View">
                      <IconButton
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          padding: "5px",
                        }}
                      >
                        <VisibilityIcon style={{ fontSize: "15px" }} />
                      </IconButton>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
