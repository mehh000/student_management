"use client";
import React, { useState } from "react";
import { FaSearch, FaCheck } from "react-icons/fa";

const AttendancePage = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      roll: "CSE001",
      department: "Computer Science",
      attendanceRate: 85,
      todayAttendance: null,
      totalAttendance: 170,
      totalClasses: 200,
    },
    {
      id: 2,
      name: "Jane Smith",
      roll: "CSE002",
      department: "Computer Science",
      attendanceRate: 92,
      todayAttendance: null,
      totalAttendance: 184,
      totalClasses: 200,
    },
    {
      id: 3,
      name: "Mike Johnson",
      roll: "RAC001",
      department: "Robotics",
      attendanceRate: 78,
      todayAttendance: null,
      totalAttendance: 156,
      totalClasses: 200,
    },
    {
      id: 4,
      name: "Sarah Williams",
      roll: "ET001",
      department: "Electronics",
      attendanceRate: 88,
      todayAttendance: null,
      totalAttendance: 176,
      totalClasses: 200,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAttendanceChange = (studentId, status) => {
    setStudents(
      students.map((student) =>
        student.id === studentId
          ? { ...student, todayAttendance: status }
          : student
      )
    );
  };

  const markAllPresent = () => {
    setStudents(
      students.map((student) => ({ ...student, todayAttendance: "present" }))
    );
  };

  const markAllAbsent = () => {
    setStudents(
      students.map((student) => ({ ...student, todayAttendance: "absent" }))
    );
  };

  const handleSaveAttendance = () => {
    setStudents(
      students.map((student) => {
        if (student.todayAttendance === "present") {
          const newTotalAttendance = student.totalAttendance + 1;
          const newTotalClasses = student.totalClasses + 1;
          const newRate = Math.round(
            (newTotalAttendance / newTotalClasses) * 100
          );
          return {
            ...student,
            totalAttendance: newTotalAttendance,
            totalClasses: newTotalClasses,
            attendanceRate: newRate,
            todayAttendance: null,
          };
        } else if (student.todayAttendance === "absent") {
          const newTotalClasses = student.totalClasses + 1;
          const newRate = Math.round(
            (student.totalAttendance / newTotalClasses) * 100
          );
          return {
            ...student,
            totalClasses: newTotalClasses,
            attendanceRate: newRate,
            todayAttendance: null,
          };
        }
        return student;
      })
    );
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Daily Attendance</h1>
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
          <div className="flex gap-2">
            <button
              onClick={markAllPresent}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Mark All Present
            </button>
            <button
              onClick={markAllAbsent}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Mark All Absent
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Roll No</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3 text-left">Attendance Rate</th>
              <th className="px-6 py-3 text-left">Total Attendance</th>
              <th className="px-6 py-3 text-left">Today's Attendance</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{student.roll}</td>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.department}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          student.attendanceRate >= 85
                            ? "bg-green-600"
                            : student.attendanceRate >= 75
                            ? "bg-yellow-400"
                            : "bg-red-600"
                        }`}
                        style={{ width: `${student.attendanceRate}%` }}
                      ></div>
                    </div>
                    <span className="ml-2">{student.attendanceRate}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {student.totalAttendance}/{student.totalClasses}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`attendance-${student.id}`}
                        checked={student.todayAttendance === "present"}
                        onChange={() =>
                          handleAttendanceChange(student.id, "present")
                        }
                        className="mr-2"
                      />
                      Present
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`attendance-${student.id}`}
                        checked={student.todayAttendance === "absent"}
                        onChange={() =>
                          handleAttendanceChange(student.id, "absent")
                        }
                        className="mr-2"
                      />
                      Absent
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSaveAttendance}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Save Attendance
        </button>
      </div>
    </div>
  );
};

export default AttendancePage;
