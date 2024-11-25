import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">KPI</div>
          <div className="hidden md:flex space-x-6">
            <Link href={"/UserUI/login"} className="hover:text-blue-200">
              LOGIN
            </Link>
          </div>
        </div>
      </nav>
 
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <Image
          src="/collage.jpeg"
          alt="KPI Campus"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
            <Link href={"/UserUI/enroll"}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full mb-8">
                Enroll Now
              </button>{" "}
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              Kishoreganj Polytechnic Institute
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-3xl">
              Empowering future engineers with practical knowledge and
              innovative skills. Join us in shaping tomorrow's technology
              leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Departments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Computer Science & Engineering",
                desc: "Learn modern computing technologies and software development",
              },
              {
                title: "Refrigeration & Air Conditioning",
                desc: "Master HVAC systems and thermal engineering",
              },
              {
                title: "Electronics & Technology",
                desc: "Explore electronics, circuits, and modern communication systems",
              },
              {
                title: "Food Technology",
                desc: "Study food processing, preservation, and quality control",
              },
            ].map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{dept.title}</h3>
                <p className="text-gray-600">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineers Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Future Engineers</h2>
              <p className="text-gray-600 text-lg">
                Our students are trained to become skilled engineers ready to
                tackle real-world challenges. Through hands-on experience and
                theoretical knowledge, we prepare them for successful careers in
                engineering.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
                alt="Engineering students working"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                  <p className="text-gray-600">
                    Kishoreganj Polytechnic Institute
                    <br />
                    Kishoreganj, Bangladesh
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Phone: +880 1234-567890</p>
                    <p>Email: info@kpi.edu.bd</p>
                    <p>Working Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Facebook
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Twitter
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Kishoreganj Polytechnic Institute</p>
              <p>Kishoreganj, Bangladesh</p>
              <p>Phone: +880 1234-567890</p>
              <p>Email: info@kpi.edu.bd</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#departments" className="hover:text-blue-400">
                    Departments
                  </a>
                </li>
                <li>
                  <a href="#enrollment" className="hover:text-blue-400">
                    Admission
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  Facebook
                </a>
                <a href="#" className="hover:text-blue-400">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-400">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p>
              &copy; {new Date().getFullYear()} Kishoreganj Polytechnic
              Institute. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
