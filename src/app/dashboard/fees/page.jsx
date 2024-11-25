"use client";
import React, { useState } from "react";
import { FaEdit, FaCheck, FaSearch } from "react-icons/fa";

const FeesPage = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      roll: "CSE001",
      department: "Computer Science",
      monthsDue: 2,
      totalDue: 24000,
      lastPaid: "2023-08-15",
      feeStatus: "Partial",
      monthlyFee: 12000,
    },
    {
      id: 2,
      name: "Jane Smith",
      roll: "CSE002",
      department: "Computer Science",
      monthsDue: 0,
      totalDue: 0,
      lastPaid: "2023-10-05",
      feeStatus: "Paid",
      monthlyFee: 12000,
    },
    {
      id: 3,
      name: "Mike Johnson",
      roll: "RAC001",
      department: "Robotics",
      monthsDue: 3,
      totalDue: 45000,
      lastPaid: "2023-07-20",
      feeStatus: "Due",
      monthlyFee: 15000,
    },
    {
      id: 4,
      name: "Sarah Williams",
      roll: "ET001",
      department: "Electronics",
      monthsDue: 1,
      totalDue: 13000,
      lastPaid: "2023-09-10",
      feeStatus: "Partial",
      monthlyFee: 13000,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setShowEditModal(true);
  };

  const handlePaid = (studentId) => {
    setStudents(
      students.map((student) =>
        student.id === studentId
          ? {
              ...student,
              monthsDue: 0,
              totalDue: 0,
              feeStatus: "Paid",
              lastPaid: new Date().toISOString().split("T")[0],
            }
          : student
      )
    );
  };

  const handleUpdate = () => {
    setStudents(
      students.map((student) =>
        student.id === selectedStudent.id ? selectedStudent : student
      )
    );
    setShowEditModal(false);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">
          Student Fees Management
        </h1>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Roll No</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3 text-left">Months Due</th>
              <th className="px-6 py-3 text-left">Total Due</th>
              <th className="px-6 py-3 text-left">Last Paid</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{student.roll}</td>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.department}</td>
                <td className="px-6 py-4">{student.monthsDue}</td>
                <td className="px-6 py-4">Tk {student.totalDue}</td>
                <td className="px-6 py-4">{student.lastPaid}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      student.feeStatus === "Paid"
                        ? "bg-green-100 text-green-800"
                        : student.feeStatus === "Partial"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {student.feeStatus}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(student)}
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handlePaid(student.id)}
                      className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200"
                      disabled={student.feeStatus === "Paid"}
                    >
                      <FaCheck />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Fee Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Months Due
                </label>
                <input
                  type="number"
                  value={selectedStudent.monthsDue}
                  onChange={(e) =>
                    setSelectedStudent({
                      ...selectedStudent,
                      monthsDue: parseInt(e.target.value),
                      totalDue:
                        parseInt(e.target.value) * selectedStudent.monthlyFee,
                    })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Paid Date
                </label>
                <input
                  type="date"
                  value={selectedStudent.lastPaid}
                  onChange={(e) =>
                    setSelectedStudent({
                      ...selectedStudent,
                      lastPaid: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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

export default FeesPage;
