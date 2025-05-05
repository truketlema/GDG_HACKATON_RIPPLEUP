import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

// Import your assets
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import clock from "../assets/clock.png";
import facebook from "../assets/Facebook_black.png";
import x from "../assets/X.png";
import instagram from "../assets/Instagram_black.png";
import image from "../assets/Img.png";

// Import header and footer components
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage1: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the platform work?",
      answer:
        "You can browse a variety of services, book your experiences, and earn reward points. These points can be used for future bookings, donated to charity, or shared with friends.",
    },
    {
      question: "How can I earn reward points?",
      answer:
        "You earn points by completing tasks, participating in events, or referring friends to the platform.",
    },
    {
      question: "Is my personal data safe on this platform?",
      answer:
        "Yes. Your data is encrypted and stored securely. We never share it without your consent.",
    },
    {
      question: "Can businesses join the platform?",
      answer:
        "Absolutely. Businesses can join to offer services, support causes, and earn rewards for community engagement.",
    },
    {
      question: "How do I use my points for a booking?",
      answer:
        "While booking a service, you’ll have the option to pay with reward points at checkout.",
    },
  ];

  return (
    <>
      <Header />

      <section className="py-12 px-4">
        {/* Breadcrumb */}
        <div className="flex w-[154px] h-[19px] gap-[4px] justify-center items-center text-sm text-gray-500 mt-1 mb-5 mx-auto">
          <span>Home</span>
          <span>›</span>
          <span className="font-semibold text-black">Contact Us</span>
        </div>

        {/* Heading */}
        <h1 className="text-[52px] md:text-[50px] font-bold mb-6 w-full px-4 mr-[100px] text-center">
          We’d Love to Hear from You!
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 mb-6 mx-auto leading-relaxed w-[695px] h-[54px] overflow-hidden">
          Libero dictum ut purus ut vel sit egestas. Ut ac mattis senectus ac
          suspendisse vitae vel nulla eleifend. Est eros facilisi aenean nisl a.
          Vitae et fusce purus consectetur.
        </p>

        {/* Contact Grid */}
        <div className="flex max-w-[1100px] mx-auto mt-16">
          {/* Contact Info */}
          <div className="w-[360px] h-[534px] bg-black text-white p-[32px] rounded-tl-[20px] rounded-bl-[20px] flex flex-col justify-between">
            <div>
              <h3 className="text-[28px] font-bold leading-tight mb-8">
                Book, donate <br /> hope.
              </h3>
              <p className="text-sm text-gray-250">
                Ut ac mattis senectus ac suspendisse vitae vel nulla eleifend.
                Esteros facilisi aenean n...
              </p>
            </div>
            <div className="space-y-5 text-sm">
              <p className="font-bold">Address: Addis Ababa Ethiopia.</p>
              <div className="flex items-center gap-2">
                <img src={phone} alt="Phone" className="h-5 w-5" />
                <span>(251) 366-7883</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={email} alt="Email" className="h-5 w-5" />
                <span>RippleUp@email.net</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={clock} alt="Clock" className="h-5 w-5" />
                <span>24 hour service</span>
              </div>
            </div>

            <div className="flex gap-3">
              {[facebook, x, instagram].map((icon, i) => (
                <button
                  key={i}
                  className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center p-1"
                >
                  <img
                    src={icon}
                    alt={`Social Icon ${i}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form className="w-[700px] h-[534px] bg-gray-50 p-[24px] rounded-tr-[20px] rounded-br-[20px] flex flex-col justify-between gap-[16px]">
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-full h-[45px] px-[20px] py-[4px] rounded-[14px] border text-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-full h-[45px] px-[20px] py-[4px] rounded-[14px] border text-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-[45px] px-[20px] py-[4px] rounded-[14px] border text-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-[45px] px-[20px] py-[4px] rounded-[14px] border text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="w-full h-[45px] px-[20px] py-[4px] rounded-[14px] border text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="w-full h-[100px] px-[20px] py-[4px] rounded-[14px] border resize-none text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-[240px] h-[45px] px-[24px] py-[4px] bg-orange-500 hover:bg-orange-600 text-white rounded-[14px] font-semibold text-sm"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Banner Image */}
        <img
          src={image}
          alt="Descriptive Alt Text"
          className="w-[1080px] h-[380px] rounded-[20px] object-cover mt-32 mx-auto"
        />

        {/* FAQ Section */}
        <div className="max-w-[1440px] mx-auto pt-[120px] px-[72px] pb-[120px] space-y-[40px]">
          <div className="flex flex-col md:flex-row gap-[40px]">
            <div className="w-full md:max-w-[416px] h-[288px]">
              <h3 className="text-3xl font-bold leading-snug">
                <span className="block">Frequently</span>
                <span className="block">Asked</span>
                <span className="block">Questions</span>
              </h3>
              <p className="text-sm mt-10 max-w-[220px]">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
              </p>
            </div>

            <div className="flex flex-col gap-[40px] w-full md:max-w-[800px]">
              {faqs.map((faq, idx) => (
                <div key={idx}>
                  {idx === openIndex ? (
                    <div className="bg-gray-100 rounded-[16px] p-6 border border-gray-200">
                      <div
                        className="flex justify-between items-start cursor-pointer"
                        onClick={() => setOpenIndex(null)}
                      >
                        <h4 className="text-lg font-semibold leading-6 max-w-[80%]">
                          {faq.question}
                        </h4>
                        <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
                          <FiX className="text-orange-500 text-base" />
                        </div>
                      </div>
                      <p className="text-sm mt-4 text-black leading-6">
                        {faq.answer}
                      </p>
                    </div>
                  ) : (
                    <div
                      className="flex justify-between items-start pb-6 border-b border-gray-200 cursor-pointer"
                      onClick={() => setOpenIndex(idx)}
                    >
                      <h4 className="text-lg font-semibold leading-6 max-w-[80%]">
                        {faq.question}
                      </h4>
                      <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
                        <FiPlus className="text-black text-base" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage1;
