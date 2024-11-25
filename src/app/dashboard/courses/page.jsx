"use client";
import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaUserGraduate } from "react-icons/fa";

const CoursesPage = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Computer Science Engineering",
      code: "CSE",
      students: 450,
      duration: "4 years",
      description: "Study of computer systems and programming",
    },
    {
      id: 2,
      name: "Electronics Engineering",
      code: "ENT",
      students: 380,
      duration: "4 years",
      description: "Study of electronic systems and circuits",
    },
    {
      id: 3,
      name: "Robotics and Automation",
      code: "RAC",
      students: 320,
      duration: "4 years",
      description: "Study of robotics and automation systems",
    },
    {
      id: 4,
      name: "Food Technology",
      code: "FOOD",
      students: 290,
      duration: "4 years",
      description: "Study of food processing and preservation",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: "",
    code: "",
    duration: "",
    description: "",
  });

  const handleAdd = () => {
    setCourses([
      ...courses,
      {
        id: courses.length + 1,
        ...newCourse,
        students: 0,
      },
    ]);
    setShowAddModal(false);
    setNewCourse({
      name: "",
      code: "",
      duration: "",
      description: "",
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Courses Management</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
        >
          <FaPlus /> Add Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{course.name}</h3>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">Code: {course.code}</p>
              <p className="text-gray-600">Duration: {course.duration}</p>
              <div className="flex items-center gap-2 text-gray-600">
                <FaUserGraduate />
                <span>{course.students} Students</span>
              </div>
              <p className="text-gray-600">{course.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Course</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Course Name"
                className="w-full p-2 border rounded"
                value={newCourse.name}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Course Code"
                className="w-full p-2 border rounded"
                value={newCourse.code}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, code: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Duration"
                className="w-full p-2 border rounded"
                value={newCourse.duration}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, duration: e.target.value })
                }
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 border rounded"
                value={newCourse.description}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, description: e.target.value })
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
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
