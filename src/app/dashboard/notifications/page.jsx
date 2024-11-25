"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const NotificationsPage = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      roll: "CSE001",
      department: "Computer Science",
      selected: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      roll: "CSE002",
      department: "Computer Science",
      selected: false,
    },
    {
      id: 3,
      name: "Mike Johnson",
      roll: "RAC001",
      department: "Robotics",
      selected: false,
    },
    {
      id: 4,
      name: "Sarah Williams",
      roll: "ET001",
      department: "Electronics",
      selected: false,
    },
  ]);

  const [notification, setNotification] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectAll = () => {
    setStudents(students.map((student) => ({ ...student, selected: true })));
  };

  const handleUnselectAll = () => {
    setStudents(students.map((student) => ({ ...student, selected: false })));
  };

  const handleStudentSelect = (studentId) => {
    setStudents(
      students.map((student) =>
        student.id === studentId
          ? { ...student, selected: !student.selected }
          : student
      )
    );
  };

  const handleSendNotification = () => {
    const selectedStudents = students.filter((student) => student.selected);
    console.log("Sending notification:", notification);
    console.log("To students:", selectedStudents);
    // API call would go here
    setNotification("");
    handleUnselectAll();
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        <h1 className="text-2xl font-bold">Send Notifications</h1>

        {/* Notification Input */}
        <div className="w-full">
          <textarea
            className="w-full p-4 border rounded-lg resize-none h-32"
            placeholder="Write your notification here..."
            value={notification}
            onChange={(e) => setNotification(e.target.value)}
          />
        </div>

        {/* Search and Select All Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
          <div className="flex gap-2">
            <button
              onClick={handleSelectAll}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Select All
            </button>
            <button
              onClick={handleUnselectAll}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Unselect All
            </button>
          </div>
        </div>

        {/* Students List */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left">Select</th>
                <th className="px-6 py-3 text-left">Roll No</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Department</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={student.selected}
                      onChange={() => handleStudentSelect(student.id)}
                      className="w-4 h-4"
                    />
                  </td>
                  <td className="px-6 py-4">{student.roll}</td>
                  <td className="px-6 py-4">{student.name}</td>
                  <td className="px-6 py-4">{student.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Send Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSendNotification}
            disabled={!notification.trim() || !students.some((s) => s.selected)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
