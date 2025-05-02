import React from "react";
import { Link } from "react-router-dom";
import book from "../assets/book.png";
import earn from "../assets/earn.png";
import donate from "../assets/donate.png";
import Header from "../components/Header";
import listen from "../assets/listen.png";
import orphange from "../assets/orphange.jpg";
const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-[#3e3b78] text-white py-20 h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center ">
          <div className="max-w-3xl">
            <h1 className="text-[8vw] sm:text-[6vw] md:text-[6vw] lg:text-[5vw] xl:text-[5vw] font-bold mb-6  leading-tight">
              Book. Earn. Share. <br />
              Make an Impact
            </h1>
            <p className=" text-sm lg:text-xl md:text-lg mb-8 opacity-40">
              Discover a seamless way to book your favorite services, earn
              rewards, share with others, and make a meaningful impact through
              charity. Your actions have the power to create a better world.
            </p>
            <div className="container  px-4 pb-8">
              <div className="flex flex-wrap  gap-4 ">
                <div className="text-center flex flex-row items-center gap-2">
                  <p className="text-3xl md:text-2xl font-bold text-[#fd7e14]">
                    $1,284,528
                  </p>
                  <p className="">Donation</p>
                </div>
                <div className="text-center flex flex-row items-center gap-2">
                  <p className="text-3xl md:text-2xl font-bold text-[#fd7e14]">
                    12,460
                  </p>
                  <p className="">People Helped</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="bg-white text-[#3e3b78] hover:bg-blue-100 px-6 py-3 rounded-full font-medium transition duration-300"
              >
                Sign Up
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#3e3b78] px-6 py-3 rounded-full font-medium transition duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center max-w-xs">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <img src={book} alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book</h3>
              <p className="text-gray-600">
                Book your favorite services with ease
              </p>
            </div>
            <div className="text-center max-w-xs">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <img src={earn} alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn</h3>
              <p className="text-gray-600">Earn rewards with every booking</p>
            </div>
            <div className="text-center max-w-xs">
              <div className="w-16 h-16  text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <img src={donate} alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Donate</h3>
              <p className="text-gray-600">
                Donate points to make a difference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Process Section */}
      <section className="py-16 bg-gray-50 flex flex-row h-screen">
        <div className="container px-4 w-1/2">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Donate Points. Change Lives.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Turn your reward points into a force for good. Donate them to
              charity and help make a real difference in someone's life.
            </p>
          </div>

          <div className=" gap-6">
            <div className="flex flex-row ">
              <div>
                <div className="bg-white p-6 rounded-lg flex flex-row text-center items-center gap-2">
                  <p className="w-8 h-8 bg-[#fd7e14] text-white rounded-full flex items-center justify-center text-xl font-bold  ">
                    1
                  </p>
                  <h3 className="font-semibold mb-2 items-center text-center">
                    Sign up on our website
                  </h3>
                </div>
                <div className="bg-white p-6 rounded-lg text-center  flex flex-row items-center gap-2">
                  <div className="w-8 h-8 bg-[#fd7e14] text-white rounded-full flex items-center justify-center text-xl font-bold ">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">
                    {" "}
                    Choose Where to donate
                  </h3>
                </div>
              </div>
              <div>
                {" "}
                <div className="bg-white p-6 rounded-lg text-center  flex flex-row items-center gap-2">
                  <div className="w-8 h-8 bg-[#fd7e14] text-white rounded-full flex items-center justify-center text-xl font-bold ">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">
                    Donate the amount you like
                  </h3>
                </div>
                <div className="bg-white p-6 rounded-lg  text-center flex flex-row items-center gap-2">
                  <div className="w-8 h-8  bg-[#fd7e14] text-white rounded-full flex items-center justify-center text-xl font-bold ">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Stay tuned</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 ">
          <img src={orphange} alt="" className="rounded-xl" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="w-8 h-8 bg-[#fd7e14] text-white rounded-full flex items-center justify-center text-xl font-bold  "></p>
              <h3 className="text-xl font-semibold mb-3 mt-3">
                Seamless Booking Experience
              </h3>
              <p className="text-gray-600 mb-4">
                Every booking earns you points you can redeem, share, or donate
                to meaningful causes that change lives.
              </p>
              <Link
                to="/services"
                className="text-black font-medium hover:underline"
              >
                Read more
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="w-8 h-8 bg-[#fd7e14] text-white rounded-full flex items-center justify-center text-xl font-bold  "></p>

              <h3 className="text-xl font-semibold mb-3 mt-3">
                Earn Rewards & Give Back
              </h3>
              <p className="text-gray-600 mb-4">
                Every booking earns you points you can redeem, share, or donate
                to meaningful causes that change lives.
              </p>
              <Link
                to="/rewards"
                className="text-black font-medium hover:underline"
              >
                Read more
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="w-8 h-8 bg-[#fd7e14] text-white rounded-full flex items-center justify-center text-xl font-bold  "></p>

              <h3 className="text-xl font-semibold mb-3 mt-3">
                Smart AI Recommendations
              </h3>
              <p className="text-gray-600 mb-4">
                Our AI tracks your preferences and booking history to suggest
                experiences you'll love — tailored just for you.
              </p>
              <Link
                to="/recommendations"
                className="text-black font-medium hover:underline"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular experiences and services loved by our
              community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Luxury Spa Retreat
                </h3>
                <p className="text-gray-600 mb-4">
                  Relax and rejuvenate with our premium spa treatments
                </p>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Goal: ETB 120,000
                    </span>
                    <span className="text-sm font-medium">
                      Raised: ETB 8,000
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#fd7e14] h-2 rounded-full"
                      style={{ width: "7%" }}
                    ></div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">14 donations</div>
                </div>
                <Link
                  to="/services/spa-retreat"
                  className="block text-center bg-black hover:bg-[#262222] text-white py-2 rounded-md transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  5-Star Hotel Experience
                </h3>
                <p className="text-gray-600 mb-4">
                  Enjoy a luxurious stay with world-class amenities
                </p>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Goal: ETB 150,000
                    </span>
                    <span className="text-sm font-medium">
                      Raised: ETB 12,000
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#fd7e14] h-2 rounded-full"
                      style={{ width: "8%" }}
                    ></div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">25 donations</div>
                </div>
                <Link
                  to="/services/hotel-experience"
                  className="block text-center bg-black hover:bg-[#262222] text-white py-2 rounded-md transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Fine Dining Experience
                </h3>
                <p className="text-gray-600 mb-4">
                  Embark on an exciting journey through scenic landscapes
                </p>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Goal: ETB 200,000
                    </span>
                    <span className="text-sm font-medium">
                      Raised: ETB 80,000
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#fd7e14] h-2 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">6 donations</div>
                </div>
                <Link
                  to="/services/dining-experience"
                  className="block text-center bg-black hover:bg-[#262222] text-white py-2 rounded-md transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Adventure Tour Package
                </h3>
                <p className="text-gray-600 mb-4">
                  Embark on an exciting journey through scenic landscapes
                </p>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Goal: ETB 60,000
                    </span>
                    <span className="text-sm font-medium">
                      Raised: ETB 32,000
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#fd7e14]  h-2 rounded-full"
                      style={{ width: "53%" }}
                    ></div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">12 donations</div>
                </div>
                <Link
                  to="/services/adventure-tour"
                  className="block text-center bg-black hover:bg-[#262222] text-white py-2 rounded-md transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Personalized Fitness Package
                </h3>
                <p className="text-gray-600 mb-4">
                  Achieve your fitness goals with tailor-made workout plans and
                  personal training sessions.
                </p>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Goal: ETB 220,000
                    </span>
                    <span className="text-sm font-medium">
                      Raised: ETB 60,000
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#fd7e14]  h-2 rounded-full"
                      style={{ width: "27%" }}
                    ></div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">24 donations</div>
                </div>
                <Link
                  to="/services/fitness-package"
                  className="block text-center bg-black hover:bg-[#262222] text-white py-2 rounded-md transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Exclusive Event Hosting
                </h3>
                <p className="text-gray-600 mb-4">
                  Plan your dream event with our event hosting services. From
                  weddings to corporate meetings, we provide venues, catering,
                  and event management tailored to your needs.
                </p>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Goal: ETB 120,000
                    </span>
                    <span className="text-sm font-medium">
                      Raised: ETB 80,000
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#fd7e14]  h-2 rounded-full"
                      style={{ width: "67%" }}
                    ></div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">8 donations</div>
                </div>
                <Link
                  to="/services/event-hosting"
                  className="block text-center bg-black hover:bg-[#262222] text-white py-2 rounded-md transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center items-center  flex  justify-center">
            <Link
              to="/services"
              className="block text-center text-black py-2 rounded-md hover:text-white w-64 border-[1px] hover:bg-[#fd7e14]  border-[#fd7e14] duration-300 transition transform "
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">RippleUP</h2>
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-600 mb-6">
                Tincidunt luctus porta amet lectus at ultricies nec sed non. Sed
                sit egestas enim consectetur donec faucibus. Ornare ac dolor
                porta tellus viverra arcu a ridiculus. Nisl nunc rhoncus ut
                elementum magna id et suscipit. Consequat porta nascetur sed
                ipsum nunc sodales iaculis enim. Pharetra enim auctor mauris
                diam non tellus. Proin convallis netus massa turpis a proin dis.
                Amet amet amet purus euismod ac ornare erat condimentum. Amet
                adipiscing cum vitae felis neque neque.
              </p>
              <Link
                to="/about"
                className="text-blue-600 font-medium hover:underline"
              >
                Learn more about us
              </Link>
            </div>
            <div className="bg-gray-300 h-80 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* More News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">More News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Latest Charity Event
                </h3>
                <p className="text-gray-600 mb-4">
                  Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed
                  odio. A dolor vitae ultrices at maecenas massa urna massa
                  erat.
                </p>
                <Link
                  to="/news/charity-event"
                  className="text-black font-medium hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  New Service Partners
                </h3>
                <p className="text-gray-600 mb-4">
                  Enim in lacus pretium phasellus nulla posuere sagittis aliquam
                  maecenas. Tristique amet scelerisque magnis nulla egestas eu
                  magna.
                </p>
                <Link
                  to="/news/service-partners"
                  className="text-black font-medium hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Impact Report 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Placerat volutpat sit sit amet odio sapien volutpat id.
                  Imperdiet pharetra sapien odio dictumst quis mi nunc blandit.
                </p>
                <Link
                  to="/news/impact-report"
                  className="text-black font-medium hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
