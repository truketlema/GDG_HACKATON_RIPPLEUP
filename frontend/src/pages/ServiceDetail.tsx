import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { packagesData } from "../services/packagesApi";
import Header from "../components/Header";
import {
  FiArrowLeft,
  FiCheck,
  FiStar,
  FiClock,
  FiCalendar,
  FiCreditCard,
  FiDollarSign,
  FiUser,
  FiMail,
  FiPhone,
  FiChevronDown,
} from "react-icons/fi";
import Footer from "../components/Footer";

const PackageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pkg = packagesData.find((p) => p.id === Number(id));
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    startDate: "",
    paymentMethod: "credit",
    fullName: "",
    email: "",
    phone: "",
    specialRequests: "",
    // Credit Card Fields
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvc: "",
    // Bank Transfer Fields
    bankName: "",
    accountNumber: "",
    routingNumber: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsBookingModalOpen(false);
      }
    };

    if (isBookingModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBookingModalOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Format credit card number with spaces every 4 digits
    if (name === "cardNumber") {
      const formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
      setFormData({
        ...formData,
        [name]: formattedValue,
      });
      return;
    }
    
    // Format expiry date with slash
    if (name === "cardExpiry") {
      const formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .substring(0, 5);
      setFormData({
        ...formData,
        [name]: formattedValue,
      });
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const selectPaymentMethod = (method: string) => {
    setFormData({
      ...formData,
      paymentMethod: method,
    });
    setShowPaymentDropdown(false);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Basic info validation
    if (!formData.startDate) {
      newErrors.startDate = "Start date is required";
    } else {
      const selectedDate = new Date(formData.startDate);
      if (selectedDate < today) {
        newErrors.startDate = "Start date cannot be in the past";
      }
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    // Payment method specific validation
    if (formData.paymentMethod === "credit") {
      if (!formData.cardNumber.replace(/\s/g, "")) {
        newErrors.cardNumber = "Card number is required";
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
        newErrors.cardNumber = "Invalid card number (16 digits required)";
      }

      if (!formData.cardName.trim()) {
        newErrors.cardName = "Name on card is required";
      }

      if (!formData.cardExpiry) {
        newErrors.cardExpiry = "Expiry date is required";
      } else if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
        newErrors.cardExpiry = "Invalid expiry date (MM/YY)";
      }

      if (!formData.cardCvc) {
        newErrors.cardCvc = "CVC is required";
      } else if (!/^\d{3,4}$/.test(formData.cardCvc)) {
        newErrors.cardCvc = "Invalid CVC (3-4 digits)";
      }
    } else if (formData.paymentMethod === "bank") {
      if (!formData.bankName.trim()) {
        newErrors.bankName = "Bank name is required";
      }

      if (!formData.accountNumber) {
        newErrors.accountNumber = "Account number is required";
      }

      if (!formData.routingNumber) {
        newErrors.routingNumber = "Routing number is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log("Booking submitted:", formData);
      // For demo purposes, we'll just close the modal and show an alert
      setIsBookingModalOpen(false);
      alert("Booking submitted successfully! We'll contact you shortly.");
      setFormData({
        startDate: "",
        paymentMethod: "credit",
        fullName: "",
        email: "",
        phone: "",
        specialRequests: "",
        cardNumber: "",
        cardName: "",
        cardExpiry: "",
        cardCvc: "",
        bankName: "",
        accountNumber: "",
        routingNumber: "",
      });
    }
  };

  if (!pkg) {
    return (
      <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen animate-fadeIn">
        <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Package Not Found
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            ← Return to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-orange-500 text-lg mb-8 transition-all duration-300 hover:-translate-x-1"
          >
            <FiArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image + Price */}
            <div className="relative group">
              <div className="overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[0.98]">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xl font-bold px-6 py-3 rounded-full shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300">
                ${pkg.price}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col space-y-6">
              <div className="transition-opacity duration-500">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                  {pkg.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Package Details Card */}
              <div className="bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                  Package Details
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {pkg.details}
                </p>
              </div>

              {/* What's Included */}
              <div className="bg-white p-8 rounded-3xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                  What's Included
                </h3>
                <ul className="space-y-4">
                  {pkg.features.split(",").map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start text-lg text-gray-700 animate-fadeIn"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>{f.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Button */}
              <div className="pt-4">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Book This Package</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Book {pkg.title}
                </h2>
                <button
                  onClick={() => setIsBookingModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FiUser className="mr-2 text-orange-500" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border ${
                              errors.fullName ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                            placeholder="John Doe"
                          />
                          {errors.fullName && (
                            <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border ${
                              errors.email ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                            placeholder="john@example.com"
                          />
                          <FiMail className="absolute right-3 top-3.5 text-gray-400" />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border ${
                              errors.phone ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                            placeholder="+1 (123) 456-7890"
                          />
                          <FiPhone className="absolute right-3 top-3.5 text-gray-400" />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FiCalendar className="mr-2 text-orange-500" />
                      Booking Details
                    </h3>
                    <div>
                      <label
                        htmlFor="startDate"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Start Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="startDate"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border ${
                            errors.startDate ? "border-red-500" : "border-gray-300"
                          } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                          min={new Date().toISOString().split("T")[0]}
                        />
                        {errors.startDate && (
                          <p className="mt-1 text-sm text-red-500">{errors.startDate}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Payment Method Dropdown */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <FiCreditCard className="mr-2 text-orange-500" />
                      Payment Method
                    </h3>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowPaymentDropdown(!showPaymentDropdown)}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <div className="flex items-center">
                          {formData.paymentMethod === "credit" && (
                            <>
                              <FiCreditCard className="text-gray-700 mr-2" />
                              <span>Credit Card</span>
                            </>
                          )}
                          {formData.paymentMethod === "paypal" && (
                            <>
                              <FiDollarSign className="text-gray-700 mr-2" />
                              <span>PayPal</span>
                            </>
                          )}
                          {formData.paymentMethod === "bank" && (
                            <>
                              <FiDollarSign className="text-gray-700 mr-2" />
                              <span>Bank Transfer</span>
                            </>
                          )}
                        </div>
                        <FiChevronDown className={`transition-transform ${showPaymentDropdown ? "transform rotate-180" : ""}`} />
                      </button>
                      
                      {showPaymentDropdown && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                          <ul>
                            <li>
                              <button
                                type="button"
                                onClick={() => selectPaymentMethod("credit")}
                                className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center"
                              >
                                <FiCreditCard className="text-gray-700 mr-2" />
                                <span>Credit Card</span>
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                onClick={() => selectPaymentMethod("paypal")}
                                className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center"
                              >
                                <FiDollarSign className="text-gray-700 mr-2" />
                                <span>PayPal</span>
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                onClick={() => selectPaymentMethod("bank")}
                                className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center"
                              >
                                <FiDollarSign className="text-gray-700 mr-2" />
                                <span>Bank Transfer</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Payment Details - Conditionally Rendered */}
                  {formData.paymentMethod === "credit" && (
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <FiCreditCard className="mr-2 text-orange-500" />
                        Credit Card Details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="cardNumber"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Card Number
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border ${
                              errors.cardNumber ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                          {errors.cardNumber && (
                            <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="cardName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Name on Card
                          </label>
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border ${
                              errors.cardName ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                            placeholder="John Doe"
                          />
                          {errors.cardName && (
                            <p className="mt-1 text-sm text-red-500">{errors.cardName}</p>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="cardExpiry"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              id="cardExpiry"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-3 border ${
                                errors.cardExpiry ? "border-red-500" : "border-gray-300"
                              } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                              placeholder="MM/YY"
                              maxLength={5}
                            />
                            {errors.cardExpiry && (
                              <p className="mt-1 text-sm text-red-500">{errors.cardExpiry}</p>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="cardCvc"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              CVC
                            </label>
                            <input
                              type="text"
                              id="cardCvc"
                              name="cardCvc"
                              value={formData.cardCvc}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-3 border ${
                                errors.cardCvc ? "border-red-500" : "border-gray-300"
                              } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                              placeholder="123"
                              maxLength={4}
                            />
                            {errors.cardCvc && (
                              <p className="mt-1 text-sm text-red-500">{errors.cardCvc}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === "bank" && (
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <FiDollarSign className="mr-2 text-orange-500" />
                        Bank Transfer Details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="bankName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Bank Name
                          </label>
                          <input
                            type="text"
                            id="bankName"
                            name="bankName"
                            value={formData.bankName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border ${
                              errors.bankName ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                            placeholder="e.g. Chase, Bank of America"
                          />
                          {errors.bankName && (
                            <p className="mt-1 text-sm text-red-500">{errors.bankName}</p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="accountNumber"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Account Number
                          </label>
                          <input
                            type="text"
                            id="accountNumber"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border ${
                              errors.accountNumber ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                            placeholder="Your account number"
                          />
                          {errors.accountNumber && (
                            <p className="mt-1 text-sm text-red-500">{errors.accountNumber}</p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="routingNumber"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Routing Number
                          </label>
                          <input
                            type="text"
                            id="routingNumber"
                            name="routingNumber"
                            value={formData.routingNumber}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border ${
                              errors.routingNumber ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
                            placeholder="9-digit routing number"
                          />
                          {errors.routingNumber && (
                            <p className="mt-1 text-sm text-red-500">{errors.routingNumber}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === "paypal" && (
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <div className="flex items-center">
                        <FiDollarSign className="text-blue-500 mr-2 text-xl" />
                        <h3 className="text-xl font-semibold text-blue-800">
                          PayPal Payment
                        </h3>
                      </div>
                      <p className="mt-2 text-blue-700">
                        You'll be redirected to PayPal to complete your payment after submitting this form.
                      </p>
                    </div>
                  )}

                  {/* Special Requests */}
                  <div>
                    <label
                      htmlFor="specialRequests"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                      placeholder="Any special requirements or notes..."
                    ></textarea>
                  </div>

                  {/* Summary */}
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <h3 className="text-xl font-semibold mb-4 text-orange-800">
                      Booking Summary
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Package:</span>
                        <span className="font-medium">{pkg.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Price:</span>
                        <span className="font-bold text-orange-600">${pkg.price}</span>
                      </div>
                      {formData.startDate && (
                        <div className="flex justify-between">
                          <span className="text-gray-700">Start Date:</span>
                          <span className="font-medium">
                            {new Date(formData.startDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-700">Payment Method:</span>
                        <span className="font-medium capitalize">
                          {formData.paymentMethod === "credit" && "Credit Card"}
                          {formData.paymentMethod === "paypal" && "PayPal"}
                          {formData.paymentMethod === "bank" && "Bank Transfer"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center"
                    >
                      <span>Confirm Booking</span>
                      <FiCheck className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default PackageDetail;