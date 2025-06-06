"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import your images from the assets folder
import orphanImage from "../assets/orphan.jpg";
// Import service images
import spaImage from "../assets/spa.jpg";
import hotelImage from "../assets/hotel.jpg";
import diningImage from "../assets/dining.jpg";
import adventureImage from "../assets/adventure.jpg";
import fitnessImage from "../assets/fitness.jpg";
import eventImage from "../assets/event.jpg";
// Import news images
import charityEventImage from "../assets/charity-event.jpg";
import partnersImage from "../assets/partners.jpg";
import reportImage from "../assets/report.jpg";
// Import about image
import aboutImage from "../assets/about.jpg";

// Custom hook for scroll animations

interface Service {
  title: string;
  description: string;
  goal: string;
  raised: string;
  percentage: string;
  donations: string;
  link: string;
  image: string;
}

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white rounded-lg shadow-md overflow-hidden"
      style={{
        transform: isInView ? "scale(1)" : "scale(0.95)",
        opacity: isInView ? 1 : 0.8,
        transition: `all 1000ms ease-out ${index * 150}ms`,
      }}
    >
      {/* Replace the placeholder div with an actual image */}
      <div className="h-48 relative">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/384x192?text=Service+Image";
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">
              Goal: ETB {service.goal}
            </span>
            <span className="text-sm font-medium">
              Raised: ETB {service.raised}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#fd7e14] h-2 rounded-full"
              style={{ width: `${service.percentage}%` }}
            ></div>
          </div>
          <div className="mt-1 text-sm text-gray-500">
            {service.donations} donations
          </div>
        </div>
        <Link
          to={service.link}
          className="block text-center bg-black hover:bg-[#262222] text-white py-2 rounded-md transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

interface News {
  title: string;
  description: string;
  image: string;
}

const NewsCard = ({ news }: { news: News }) => {
  const [, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Replace the placeholder div with an actual image */}
      <div className="h-48 relative">
        <img
          src={news.image || "/placeholder.svg"}
          alt={news.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/384x192?text=News+Image";
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
        <p className="text-gray-600 mb-4">{news.description}</p>
        <button className="text-orange-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
          READ MORE
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const storedUserData = localStorage.getItem("userData");

    if (authToken && storedUserData) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // First row of services with images
  const firstRowServices = [
    {
      title: "Luxury Spa Retreat",
      description: "Relax and rejuvenate with our premium spa treatments",
      goal: "120,000",
      raised: "8,000",
      percentage: "7",
      donations: "14",
      link: "/services/spa",
      image: spaImage,
    },
    {
      title: "5-Star Hotel Experience",
      description: "Enjoy a luxurious stay with world-class amenities",
      goal: "150,000",
      raised: "12,000",
      percentage: "8",
      donations: "25",
      link: "/services/hotels",
      image: hotelImage,
    },
    {
      title: "Fine Dining Experience",
      description: "Embark on an exciting journey through scenic landscapes",
      goal: "200,000",
      raised: "80,000",
      percentage: "40",
      donations: "6",
      link: "/services/restaurants",
      image: diningImage,
    },
  ];

  // Second row of services with images
  const secondRowServices = [
    {
      title: "Adventure Tour Package",
      description: "Embark on an exciting journey through scenic landscapes",
      goal: "60,000",
      raised: "32,000",
      percentage: "53",
      donations: "12",
      link: "/services/getaways",
      image: adventureImage,
    },
    {
      title: "Personalized Fitness Package",
      description:
        "Achieve your fitness goals with tailor-made workout plans and personal training sessions.",
      goal: "220,000",
      raised: "60,000",
      percentage: "27",
      donations: "24",
      link: "/services/fitness-package",
      image: fitnessImage,
    },
    {
      title: "Exclusive Event Hosting",
      description:
        "Plan your dream event with our event hosting services. From weddings to corporate meetings, we provide venues, catering, and event management tailored to your needs.",
      goal: "120,000",
      raised: "80,000",
      percentage: "67",
      donations: "8",
      link: "/services/event-hosting",
      image: eventImage,
    },
  ];

  // News items with images
  const newsItems = [
    {
      title: "Latest Charity Event",
      description:
        "Ut id velit tempor eu amet nunc. Vestibulum iaculis cras sed odio. A dolor vitae ultrices at maecenas massa urna massa erat.",
      image: charityEventImage,
    },
    {
      title: "New Service Partners",
      description:
        "Enim in lacus pretium phasellus nulla posuere sagittis aliquam maecenas. Tristique amet scelerisque magnis nulla egestas eu magna.",
      image: partnersImage,
    },
    {
      title: "Impact Report 2025",
      description:
        "Placerat volutpat sit sit amet odio sapien volutpat id. Imperdiet pharetra sapien odio dictumst quis mi nunc blandit.",
      image: reportImage,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
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
              {!isLoggedIn && (
                <Link
                  to="/signup"
                  className="bg-white text-[#3e3b78] hover:bg-blue-100 px-6 py-3 rounded-full font-medium transition duration-300"
                >
                  Sign Up
                </Link>
              )}
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

      {/* Donation Process Section */}
      <section className="py-16 bg-gray-50 flex flex-col md:flex-row items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-bold mb-4 md:text-2xl lg:text-3xl">
                Donate Points. Change Lives.
              </h2>
              <p className="text-lg md:text-sm lg:text-lg text-gray-600">
                Turn your reward points into a force for good. Donate them to
                charity and help make a real difference in someone's life.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 bg-[#fd7e14] text-white rounded-full flex items-center justify-center text-lg lg:text-xl font-bold flex-shrink-0">
                  1
                </div>
                <h3 className="font-semibold">Sign up on our website</h3>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 bg-[#fd7e14] text-white rounded-full flex items-center justify-center  text-lg lg:text-xl font-bold flex-shrink-0">
                  2
                </div>
                <h3 className="font-semibold">Choose where to donate</h3>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 bg-[#fd7e14] text-white rounded-full flex items-center justify-center text-lg lg:text-xl font-bold flex-shrink-0">
                  3
                </div>
                <h3 className="font-semibold  ">Donate the amount you like</h3>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 bg-[#fd7e14] text-white rounded-full flex items-center justify-center text-lg lg:text-xl font-bold flex-shrink-0">
                  4
                </div>
                <h3 className="font-semibold">Stay tuned</h3>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-full">
            <img
              src={orphanImage || "/placeholder.svg"}
              alt="Children being helped"
              className="rounded-xl w-full h-[60vh] object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/600x400?text=Children+Being+Helped";
              }}
            />
          </div>
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
              <button className="text-orange-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                READ MORE
                <span>→</span>
              </button>
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
              <button className="text-orange-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                READ MORE
                <span>→</span>
              </button>
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
              <button className="text-orange-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                READ MORE
                <span>→</span>
              </button>
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

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {firstRowServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {secondRowServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index + 3} />
            ))}
          </div>

          <div className="text-center items-center flex justify-center">
            <Link
              to="/services"
              className="block text-center text-black py-2 rounded-md hover:text-white w-64 border-[1px] hover:bg-[#fd7e14] border-[#fd7e14] duration-300 transition transform"
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
            <div className="h-80 rounded-lg overflow-hidden">
              <img
                src={aboutImage || "/placeholder.svg"}
                alt="About RippleUP"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/600x320?text=About+Us";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* More News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">More News</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <NewsCard key={index} news={news} />
            ))}
          </div>
        </div>
      </section>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
