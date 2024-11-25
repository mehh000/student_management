"use client";
import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye, FaSearch, FaPlus, FaCheck } from "react-icons/fa";

const EnrollRequestsPage = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "John Smith", 
      email: "john.smith@email.com",
      phone: "123-456-7890",
      department: "Computer Science",
      status: "Pending",
      previousEducation: "High School",
      gpa: "3.8",
      dateApplied: "2023-09-01",
    },
    {
      id: 2,
      name: "Emma Wilson",
      email: "emma.w@email.com", 
      phone: "123-456-7891",
      department: "Electronics",
      status: "Pending",
      previousEducation: "High School",
      gpa: "3.9",
      dateApplied: "2023-09-02",
    },
    // ... 18 more sample requests with similar structure but different data
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [newRequest, setNewRequest] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    previousEducation: "",
    gpa: "",
  });

  const handleView = (request) => {
    // View logic
    console.log("Viewing request:", request);
  };

  const handleEdit = (request) => {
    setSelectedRequest(request);
    setShowEditModal(true);
  };

  const handleDelete = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  const handleAccept = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "Approved" } : request
      )
    );
  };

  const handleAdd = () => {
    setRequests([
      ...requests,
      {
        ...newRequest,
        id: requests.length + 1,
        status: "Pending",
        dateApplied: new Date().toISOString().split("T")[0],
      },
    ]);
    setShowAddModal(false);
    setNewRequest({
      name: "",
      email: "",
      phone: "",
      department: "",
      previousEducation: "",
      gpa: "",
    });
  };

  const handleUpdate = () => {
    setRequests(
      requests.map((request) =>
        request.id === selectedRequest.id ? selectedRequest : request
      )
    );
    setShowEditModal(false);
  };

  const filteredRequests = requests.filter(
    (request) =>
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Enrollment Requests</h1>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search requests..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
          >
            <FaPlus /> Add Request
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Date Applied</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr key={request.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{request.name}</td>
                <td className="px-6 py-4">{request.department}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4">{request.dateApplied}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleView(request)}
                      className="text-green-600 hover:text-green-800"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => handleEdit(request)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(request.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                    {request.status === "Pending" && (
                      <button
                        onClick={() => handleAccept(request.id)}
                        className="text-green-600 hover:text-green-800"
                      >
                        <FaCheck />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Request</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
                value={newRequest.name}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={newRequest.email}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-2 border rounded"
                value={newRequest.phone}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, phone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Department"
                className="w-full p-2 border rounded"
                value={newRequest.department}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, department: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Previous Education"
                className="w-full p-2 border rounded"
                value={newRequest.previousEducation}
                onChange={(e) =>
                  setNewRequest({
                    ...newRequest,
                    previousEducation: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="GPA"
                className="w-full p-2 border rounded"
                value={newRequest.gpa}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, gpa: e.target.value })
                }
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAdd}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Request</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
                value={selectedRequest.name}
                onChange={(e) =>
                  setSelectedRequest({
                    ...selectedRequest,
                    name: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Department"
                className="w-full p-2 border rounded"
                value={selectedRequest.department}
                onChange={(e) =>
                  setSelectedRequest({
                    ...selectedRequest,
                    department: e.target.value,
                  })
                }
              />
              <select
                className="w-full p-2 border rounded"
                value={selectedRequest.status}
                onChange={(e) =>
                  setSelectedRequest({
                    ...selectedRequest,
                    status: e.target.value,
                  })
                }
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollRequestsPage;
