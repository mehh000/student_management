import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <nav className="bg-blue-800 text-white p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto">
          <div className="text-2xl font-bold">KPI</div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="bg-white w-64 min-h-screen fixed left-0 shadow-lg transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in-out">
          <div className="p-4">
            <nav className="space-y-2">
              <Link
                href="/dashboard/home"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg"
              >
                Home
              </Link>
              <Link
                href="/dashboard/students"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg"
              >
                Students
              </Link>
              <Link
                href="/dashboard/courses"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg"
              >
                Courses
              </Link>
              <Link
                href="/dashboard/enroll-requests"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg"
              >
                Enroll Requests
              </Link>
              <Link
                href="/dashboard/attendance"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg"
              >
                Attendance
              </Link>
              <Link
                href="/dashboard/grades"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg"
              >
                Grade and Mark
              </Link>
              <Link
                href="/dashboard/notifications"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg"
              >
                Notifications
              </Link>
              <Link
                href="/dashboard/fees"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg"
              >
                Fee
              </Link>
              <Link
                href="/UserUI/login"
                className="block px-4 py-2 text-red-600 hover:bg-red-100 rounded-lg mt-8"
              >
                Log Out
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
