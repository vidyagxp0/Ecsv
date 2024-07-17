// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import BottomHeader from "../components/BottomHeader";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { IconButton, Tooltip } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import { useSelector } from "react-redux";
// const Dashboard = () => {
//   const forms = useSelector((state) => state.form.forms);
//   useEffect(() => {
//     console.log(forms);
//   }, [forms]);
//   const [data, setData] = useState([
//     {
//       id: 1,
//       name: "Task 1",
//       description: "This is task 1",
//       author: "John",
//       authoredOn: "12/12/2021",
//       status: "Completed",
//     },
//     {
//       id: 2,
//       name: "Task 2",
//       description: "This is task 2",
//       author: "Jane",
//       authoredOn: "13/12/2021",
//       status: "Pending",
//     },
//     {
//       id: 3,
//       name: "Task 3",
//       description: "This is task 3",
//       author: "Bob",
//       authoredOn: "14/12/2021",
//       status: "In Progress",
//     },
//   ]);
//   const [filter, setFilter] = useState("");

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const filteredData = data.filter((item) => item.status.includes(filter));

//   return (
//     <div className="h-screen flex flex-col">
//       <Header />
//       <BottomHeader />
//       <div className="flex-grow px-2 py-4">
//         <div className="flex justify-start items-center">
//           <label htmlFor="filter" className="text-lg font-medium px-4">
//             Filter by Status:
//           </label>
//           <select
//             id="filter"
//             value={filter}
//             onChange={handleFilterChange}
//             className="bg-gray-50 border border-gray-300 text-gray-900
//             sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5"
//           >
//             <option value="">All</option>
//             <option value="Completed">Completed</option>
//             <option value="Pending">Pending</option>
//             <option value="In Progress">In Progress</option>
//           </select>
//         </div>
//         <table className="min-w-full divide-y divide-gray-300 border border-gray-300 mt-4">
//           <thead className="bg-gray-100">
//             <tr className="bg-slate-600">
//               <th
//                 scope="col"
//                 className="px-2 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300 w-20"
//               >
//                 Task ID
//               </th>
//               <th
//                 scope="col"
//                 className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
//               >
//                 Task Name
//               </th>
//               <th
//                 scope="col"
//                 className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
//               >
//                 Short Description
//               </th>
//               <th
//                 scope="col"
//                 className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
//               >
//                 Author Name
//               </th>
//               <th
//                 scope="col"
//                 className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
//               >
//                 Authored On
//               </th>
//               <th
//                 scope="col"
//                 className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300"
//               >
//                 Current Status
//               </th>
//               <th
//                 scope="col"
//                 className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider"
//               >
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200 bg-slate-100 text-zinc-600">
//             {filteredData.map((item) => (
//               <tr key={item.id}>
//                 <td className="px-4  border-r border-gray-300">{item.id}</td>
//                 <td className="px-4  border-r border-gray-300">{item.name}</td>
//                 <td className="px-4  border-r border-gray-300">{item.description}</td>
//                 <td className="px-4  border-r border-gray-300">{item.author}</td>
//                 <td className="px-4  border-r border-gray-300">{item.authoredOn}</td>
//                 <td className="px-4 border-r border-gray-300">{item.status}</td>
//                 <td className="px-4 py-1">
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-evenly",
//                       alignItems: "center",
//                       margin: "0",
//                       minWidth: "70px",
//                     }}
//                   >
//                     <Tooltip title="Edit">
//                       <IconButton
//                         style={{
//                           backgroundColor: "green",
//                           color: "white",
//                           padding: "5px",
//                         }}
//                       >
//                         <EditIcon style={{ fontSize: "15px" }} />
//                       </IconButton>
//                     </Tooltip>
//                     <Tooltip title="View">
//                       <IconButton
//                         style={{
//                           backgroundColor: "blue",
//                           color: "white",
//                           padding: "5px",
//                         }}
//                       >
//                         <VisibilityIcon style={{ fontSize: "15px" }} />
//                       </IconButton>
//                     </Tooltip>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BottomHeader from "../components/BottomHeader";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [error, setError] = useState(null);

  // Assuming forms are stored in Redux state
  const forms = useSelector((state) => {
    try {
      return state.form.forms;
    } catch (err) {
      setError("Failed to fetch forms data.");
      return [];
    }
  });

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handleOpenform = (id, Cstatus) => {
    switch (Cstatus) {
      case "Initiate":
        // navigate("/initiate-task");
        navigate(`/initiate/${id}`);
        break;
      case "Review":
        navigate(`/review/${id}`);
        break;
      case "Draft":
        navigate(`/draft/${id}`);
        break;
      case "Execute":
        navigate(`/execute/${id}`);
        break;
      case "Approve":
        navigate(`/approve/${id}`);
        break;
      case "Approved":
        navigate(`/approve/${id}`);
        break;
      default:
        break;
    }
  };

  // Commented out filteredForms logic
  // const filteredForms = forms.filter((form) =>
  //   form.status.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <BottomHeader />
      <div className="flex-grow px-2 py-4">
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
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
              <th className="px-2 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300 w-20">
                Task ID
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300">
                Task Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300">
                Short Description
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300">
                Author Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300">
                Authored On
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider border-r border-gray-300">
                Current Status
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-zinc-50 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-slate-100 text-zinc-600">
            {forms.length > 0 ? (
              forms.map((form) => (
                <tr key={form.id}>
                  <td className="px-4 border-r border-gray-300 " x>
                    {/* <td
                    className="px-4 border-r border-gray-300 hover:cursor-pointer hover:text-blue-500"
                    onClick={() => handleOpenform(form.id, form.currentStatus)}
                  > */}
                    {form.id}{" "}
                  </td>
                  <td className="px-4 border-r border-gray-300">{form.taskName}</td>
                  <td className="px-4 border-r border-gray-300">{form.shortDescription}</td>
                  <td className="px-4 border-r border-gray-300">{form.initiatorName}</td>
                  <td className="px-4 border-r border-gray-300">{form.initiationDate}</td>
                  <td className="px-4 border-r border-gray-300">{form.currentStatus}</td>
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
                          style={{ backgroundColor: "green", color: "white", padding: "5px" }}
                          // onMouseEnter={style}
                          onClick={() => handleOpenform(form.id, form.currentStatus)}
                        >
                          <EditIcon style={{ fontSize: "15px" }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="View">
                        <IconButton
                          style={{ backgroundColor: "blue", color: "white", padding: "5px" }}
                          onClick={() => handleOpenform(form.id, form.currentStatus)}
                        >
                          <VisibilityIcon style={{ fontSize: "15px" }} />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No tasks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
