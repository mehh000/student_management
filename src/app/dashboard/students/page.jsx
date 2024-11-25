"use client";
import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye, FaSearch, FaPlus } from "react-icons/fa";

const StudentsPage = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      roll: "CSE001",
      department: "Computer Science",
      attendance: 85,
      feePaid: true,
      email: "john@example.com",
      phone: "123-456-7890",
      address: "123 College St",
    },
    {
      id: 2,
      name: "Jane Smith",
      roll: "CSE002",
      department: "Computer Science",
      attendance: 92,
      feePaid: true,
      email: "jane@example.com",
      phone: "123-456-7891",
      address: "456 University Ave",
    },
    {
      id: 3,
      name: "Mike Johnson",
      roll: "RAC001",
      department: "Robotics",
      attendance: 78,
      feePaid: false,
      email: "mike@example.com",
      phone: "123-456-7892",
      address: "789 Tech Rd",
    },
    {
      id: 4,
      name: "Sarah Williams",
      roll: "ET001",
      department: "Electronics",
      attendance: 88,
      feePaid: true,
      email: "sarah@example.com",
      phone: "123-456-7893",
      address: "321 Circuit Ave",
    },
    {
      id: 5,
      name: "James Brown",
      roll: "FT001",
      department: "Food Technology",
      attendance: 95,
      feePaid: true,
      email: "james@example.com",
      phone: "123-456-7894",
      address: "654 Food St",
    },
    {
      id: 6,
      name: "Emily Davis",
      roll: "CSE003",
      department: "Computer Science",
      attendance: 82,
      feePaid: false,
      email: "emily@example.com",
      phone: "123-456-7895",
      address: "987 Code Rd",
    },
    {
      id: 7,
      name: "David Miller",
      roll: "RAC002",
      department: "Robotics",
      attendance: 90,
      feePaid: true,
      email: "david@example.com",
      phone: "123-456-7896",
      address: "147 Robot St",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      roll: "ET002",
      department: "Electronics",
      attendance: 86,
      feePaid: true,
      email: "lisa@example.com",
      phone: "123-456-7897",
      address: "258 Electric Ave",
    },
    {
      id: 9,
      name: "Robert Wilson",
      roll: "FT002",
      department: "Food Technology",
      attendance: 75,
      feePaid: false,
      email: "robert@example.com",
      phone: "123-456-7898",
      address: "369 Kitchen Rd",
    },
    {
      id: 10,
      name: "Amy Taylor",
      roll: "CSE004",
      department: "Computer Science",
      attendance: 93,
      feePaid: true,
      email: "amy@example.com",
      phone: "123-456-7899",
      address: "741 Program St",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    roll: "",
    department: "",
    email: "",
    phone: "",
    address: "",
    attendance: 0,
    feePaid: false,
  });

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setShowEditModal(true);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleUpdate = () => {
    setStudents(
      students.map((student) =>
        student.id === selectedStudent.id ? selectedStudent : student
      )
    );
    setShowEditModal(false);
  };

  const handleAdd = () => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
    setShowAddModal(false);
    setNewStudent({
      name: "",
      roll: "",
      department: "",
      email: "",
      phone: "",
      address: "",
      attendance: 0,
      feePaid: false,
    });
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Students Management</h1>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search students..."
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
            <FaPlus /> Add Student
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Roll</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3 text-left">Attendance</th>
              <th className="px-6 py-3 text-left">Fee Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.roll}</td>
                <td className="px-6 py-4">{student.department}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      student.attendance >= 85
                        ? "bg-green-100 text-green-800"
                        : student.attendance >= 75
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {student.attendance}%
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      student.feePaid
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {student.feePaid ? "Paid" : "Due"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(student)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Student</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
                value={selectedStudent.name}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    name: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Roll"
                className="w-full p-2 border rounded"
                value={selectedStudent.roll}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    roll: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Department"
                className="w-full p-2 border rounded"
                value={selectedStudent.department}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    department: e.target.value,
                  })
                }
              />
              <input
                type="number"
                placeholder="Attendance"
                className="w-full p-2 border rounded"
                value={selectedStudent.attendance}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    attendance: parseInt(e.target.value),
                  })
                }
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedStudent.feePaid}
                  onChange={(e) =>
                    setSelectedStudent({
                      ...selectedStudent,
                      feePaid: e.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <label>Fee Paid</label>
              </div>
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

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Student</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
                value={newStudent.name}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Roll"
                className="w-full p-2 border rounded"
                value={newStudent.roll}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, roll: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Department"
                className="w-full p-2 border rounded"
                value={newStudent.department}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, department: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Attendance"
                className="w-full p-2 border rounded"
                value={newStudent.attendance}
                onChange={(e) =>
                  setNewStudent({
                    ...newStudent,
                    attendance: parseInt(e.target.value),
                  })
                }
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={newStudent.feePaid}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, feePaid: e.target.checked })
                  }
                  className="mr-2"
                />
                <label>Fee Paid</label>
              </div>
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
                  Add Student
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;
