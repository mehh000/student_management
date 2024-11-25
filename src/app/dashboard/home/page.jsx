"use client";
import React from "react";
import {
  FaUserGraduate,
  FaBook,
  FaUserCheck,
  FaMoneyBillWave,
  FaChartLine,
  FaExclamationTriangle,
  FaCalendarCheck,
  FaFileAlt,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"; 

const DashboardHome = () => {
  // Sample data for charts
  const attendanceData = [
    { name: "Week 1", present: 85, absent: 15 },
    { name: "Week 2", present: 82, absent: 18 },
    { name: "Week 3", present: 88, absent: 12 },
    { name: "Week 4", present: 85, absent: 15 },
  ];

  const performanceData = [
    { name: "CSE", high: 25, low: 5 },
    { name: "RAC", high: 20, low: 8 },
    { name: "ET", high: 22, low: 6 },
    { name: "FT", high: 18, low: 7 },
  ];

  const feesData = [
    { name: "Paid", value: 75 },
    { name: "Due", value: 25 },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className="container mx-auto px-4">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <FaUserGraduate className="text-blue-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500">Total Students</p>
            <h3 className="text-2xl font-bold">1,234</h3>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <FaBook className="text-green-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500">Total Courses</p>
            <h3 className="text-2xl font-bold">48</h3>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="rounded-full bg-yellow-100 p-3 mr-4">
            <FaUserCheck className="text-yellow-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500">Today's Attendance</p>
            <h3 className="text-2xl font-bold">85%</h3>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="rounded-full bg-purple-100 p-3 mr-4">
            <FaMoneyBillWave className="text-purple-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500">Fees Collection</p>
            <h3 className="text-2xl font-bold">৳ 450K</h3>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Attendance Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Monthly Attendance</h3>
          <div className="h-80">
            <LineChart width={500} height={300} data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="present" stroke="#8884d8" />
              <Line type="monotone" dataKey="absent" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Department Performance</h3>
          <div className="h-80">
            <BarChart width={500} height={300} data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="high" fill="#8884d8" />
              <Bar dataKey="low" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Fees Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Fees Overview</h3>
          <div className="h-64">
            <PieChart width={250} height={250}>
              <Pie
                data={feesData}
                cx={120}
                cy={120}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {feesData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <FaChartLine className="text-blue-600 text-2xl mx-auto mb-2" />
              <span className="text-sm">View Reports</span>
            </button>
            <button className="p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <FaExclamationTriangle className="text-red-600 text-2xl mx-auto mb-2" />
              <span className="text-sm">Low Attendance</span>
            </button>
            <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <FaCalendarCheck className="text-green-600 text-2xl mx-auto mb-2" />
              <span className="text-sm">Mark Attendance</span>
            </button>
            <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <FaFileAlt className="text-purple-600 text-2xl mx-auto mb-2" />
              <span className="text-sm">Generate Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
