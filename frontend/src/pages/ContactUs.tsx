import React from "react";
import {FiPhone, FiMail, FiClock } from "react-icons/fi";
import Header from "../components/Header";

const ContactUs: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb & Title */}
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 mb-2">Home {">"} Contact Us</p>
        <h1 className="text-4xl font-bold mb-4">We’d Love to Hear from You!</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet et ulla egestas. Ut ac mattis sem et
          suspendisse vitae vel nulla eleifend.
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-md p-8">
        {/* Contact Info Block */}
        <div className="bg-black text-white rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Book, donate hope.</h2>
            <p className="text-gray-400 mb-6">
              Ut ac mattis sem et suspendisse vitae vel nulla eleifend.
            </p>

            <div className="mb-4">
              <p className="font-semibold">Address: Addis Ababa, Ethiopia</p>
            </div>

            <div className="flex items-center mb-2 gap-2">
              <FiPhone className="text-orange-500" />
              <span>(251) 960-7983</span>
            </div>

            <div className="flex items-center mb-2 gap-2">
              <FiMail className="text-orange-500" />
              <span>RippleUp@email.net</span>
            </div>

            <div className="flex items-center mb-6 gap-2">
              <FiClock className="text-orange-500" />
              <span>24 hour service</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            required
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Optional Map or Visual */}
      <div className="h-48 md:h-64 mt-12 rounded-xl overflow-hidden shadow-lg">
  <img
    src="https://i.ytimg.com/vi/ZLEjCAovEkk/sddefault.jpg"
    alt="Contact us visual"
    className="w-full h-full object-cover"
  />
</div>
    </div>
    </>
  );
};

export default ContactUs;
