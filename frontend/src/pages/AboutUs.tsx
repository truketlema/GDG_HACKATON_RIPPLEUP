import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="px-6 md:px-20 py-10 space-y-16 bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
            Where Every Booking{" "}
            <span className="block">Fuels Joy and Charity.</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We're revolutionizing the way people book services by turning every
            transaction into an opportunity to give back. Our platform connects
            your needs with meaningful impact.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                ),
                title: "Book",
                desc: "Discover amazing services",
                color: "text-blue-500",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v14"></path>
                    <path d="M5 10l7 7 7-7"></path>
                    <circle cx="12" cy="21" r="1"></circle>
                  </svg>
                ),
                title: "Earn",
                desc: "Get rewards for booking",
                color: "text-green-500",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                  </svg>
                ),
                title: "Donate",
                desc: "Support causes you care about",
                color: "text-orange-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-1/4 text-center group"
              >
                <div
                  className={`${item.color} mb-4 w-16 h-16 mx-auto group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="flex gap-16 max-auto items-center max-w-6xl">
          <div className="space-y-8">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 text-orange-500">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                Our Mission
              </h3>
              <p className="text-gray-600">
                To create a seamless ecosystem where every booking transaction
                generates value for both consumers and businesses while making a
                tangible impact on global charities.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 text-blue-500">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                Our Vision
              </h3>
              <p className="text-gray-600">
                A world where commerce and compassion intersect, creating a
                self-sustaining cycle of generosity that elevates businesses,
                delights customers, and transforms communities.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 text-green-500">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                Our Values
              </h3>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  "Empathy",
                  "Integrity",
                  "Innovation",
                  "Impact",
                  "Inclusion",
                  "Joy",
                ].map((value, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex h-full gap-4">
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Team working together"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Happy customers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Donators Section */}
        <section className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Impact Champions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            These extraordinary individuals and organizations have made
            significant contributions to our cause.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-96">
            {[
              {
                name: "Brycen Gregory",
                role: "Top Contributor",
                img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Aisha Johnson",
                role: "Community Leader",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1",
              },
              {
                name: "Marcus Chen",
                role: "Corporate Partner",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1",
              },
            ].map((person, id) => (
              <div
                key={id}
                className="bg-white h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-full
                 overflow-hidden">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full object-cover object-top"
                  />
                </div>
                <div className="p-6 h-20">
                  <h4 className="font-bold text-xl">{person.name}</h4>
                  <p className="text-orange-500 mb-4">{person.role}</p>
                  <div className="flex justify-center gap-4 text-gray-400">
                    <div className="flex justify-center gap-4">
                      {/* Facebook Icon */}
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>

                      {/* Twitter/X Icon */}
                      <a
                        href="#"
                        className="text-gray-400 hover:text-black transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                      </a>

                      {/* Instagram Icon */}
                      <a
                        href="#"
                        className="text-gray-400 hover:text-pink-600 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                        </svg>
                      </a>

                      {/* LinkedIn Icon (optional addition) */}
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-700 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold">Latest Stories</h2>
            <button className="px-6 py-2 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
              VIEW ALL NEWS
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: "March 30, 2025",
                title: "Redefining Customer Service Excellence",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
              },
              {
                date: "April 24, 2025",
                title: "Spotlight on Our Partner Charities",
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
              },
              {
                date: "March 24, 2025",
                title: "Addressing the Childcare Crisis",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1",
              },
            ].map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">📅 {post.date}</p>
                  <h4 className="font-bold text-xl mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Discover how we're making a difference through innovative
                    solutions and community partnerships.
                  </p>
                  <button className="text-orange-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    READ MORE
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUsPage;
