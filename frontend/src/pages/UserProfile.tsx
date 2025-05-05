import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FiStar,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiChevronRight,
  FiGift,
  FiHeart,
  FiDollarSign,
  FiEdit,
  FiLogOut,
  FiAlertCircle,
} from "react-icons/fi";
import { packagesData } from "../services/packagesApi";

// Define types
interface UserData {
  id: string;
  email: string;
  role: "customer" | "business";
  fullName: string;
  token?: string;
  points?: number;
  businessName?: string;
  website?: string;
  profileImage?: string;
  bio?: string;
  location?: string;
  phone?: string;
  totalDonated?: number;
}

interface BookingType {
  id: number;
  packageId: number;
  packageTitle: string;
  packageImage: string;
  date: string;
  status: "upcoming" | "completed" | "cancelled";
  paymentMethod: string;
  totalAmount: number;
  specialRequests?: string;
  rating?: number;
  review?: string;
  reviewDate?: string;
  createdAt: string;
}

interface DonationHistory {
  id: number;
  charityId: number;
  charityName: string;
  amount: number;
  date: string;
}

const UserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<UserData | null>(null);
  const [bookings, setBookings] = useState<BookingType[]>([]);
  const [donationHistory, setDonationHistory] = useState<DonationHistory[]>([]);
  const [activeTab, setActiveTab] = useState<
    "bookings" | "wishlist" | "donations" | "rewards"
  >("bookings");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<any[]>([]);

  // Fetch user data and bookings from localStorage
  useEffect(() => {
    const fetchUserData = () => {
      setIsLoading(true);
      setError("");

      try {
        // Check if we have auth token
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          throw new Error("Not authenticated");
        }

        // Get user data from localStorage
        const storedUserData = localStorage.getItem("userData");
        if (!storedUserData) {
          throw new Error("User data not found");
        }

        const userData = JSON.parse(storedUserData);
        setUser(userData);

        // Get bookings from localStorage
        const storedBookings = localStorage.getItem("userBookings");
        if (storedBookings) {
          setBookings(JSON.parse(storedBookings));
        } else {
          setBookings([]);
        }

        // Get donation history from localStorage
        const storedDonations = localStorage.getItem("donationHistory");
        if (storedDonations) {
          setDonationHistory(JSON.parse(storedDonations));
        } else {
          setDonationHistory([]);
        }

        // Get wishlist from localStorage
        const storedWishlist = localStorage.getItem("userWishlist");
        if (storedWishlist) {
          setWishlist(JSON.parse(storedWishlist));
        } else {
          setWishlist([]);
        }
      } catch (err: any) {
        console.error("Error fetching user data:", err);
        setError(err.message || "Failed to load profile");

        // If not authenticated, redirect to login
        if (err.message === "Not authenticated") {
          navigate("/login");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();

    // Check if we just added a new booking (from location state)
    if (location.state?.newBooking) {
      // Show a welcome back message or highlight the new booking
      // This could be implemented with a toast notification or a highlighted section
    }
  }, [userId, navigate, location.state]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  // Handle edit profile
  const handleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  // Handle save profile changes
  const handleSaveProfile = (updatedData: Partial<UserData>) => {
    try {
      // Get existing user data from localStorage
      const storedUserData = localStorage.getItem("userData");
      if (!storedUserData) return;

      const userData = JSON.parse(storedUserData);

      // Add profile image if it exists
      if (imagePreview) {
        updatedData.profileImage = imagePreview;
      }

      // Update user data with new values
      const newUserData = { ...userData, ...updatedData };

      // Save updated user data back to localStorage
      localStorage.setItem("userData", JSON.stringify(newUserData));

      // Update state to reflect changes
      setUser(newUserData);

      // Reset image preview
      setImagePreview(null);

      // Close the modal
      setIsEditModalOpen(false);

      // Show success message
      alert("Profile updated successfully");
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile. Please try again.");
    }
  };

  // Handle image selection
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Get package details for a booking
  const getPackageDetails = (packageId: number) => {
    return (
      packagesData.find((pkg) => pkg.id === packageId) || {
        id: 0,
        title: "Unknown Package",
        description: "Package details not found",
        price: 0,
        image: "/placeholder.svg?height=400&width=600",
        category: "unknown",
      }
    );
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Calculate time since for reviews
  const getTimeSince = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 7) {
      return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} month${months !== 1 ? "s" : ""} ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} year${years !== 1 ? "s" : ""} ago`;
    }
  };

  // Calculate total donations
  const getTotalDonations = () => {
    return donationHistory.reduce(
      (total, donation) => total + donation.amount,
      0
    );
  };

  // Cancel a booking
  const handleCancelBooking = (bookingId: number) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      try {
        // Get existing bookings from localStorage
        const storedBookings = localStorage.getItem("userBookings");
        if (!storedBookings) return;

        const existingBookings = JSON.parse(storedBookings);

        // Update the status of the booking to "cancelled"
        const updatedBookings = existingBookings.map((booking: BookingType) =>
          booking.id === bookingId
            ? { ...booking, status: "cancelled" }
            : booking
        );

        // Save updated bookings back to localStorage
        localStorage.setItem("userBookings", JSON.stringify(updatedBookings));

        // Update state to reflect changes
        setBookings(updatedBookings);

        // Show success message
        alert("Booking cancelled successfully");
      } catch (err) {
        console.error("Error cancelling booking:", err);
        alert("Failed to cancel booking. Please try again.");
      }
    }
  };

  // Submit a review
  const handleSubmitReview = (
    bookingId: number,
    rating: number,
    review: string
  ) => {
    try {
      // Get existing bookings from localStorage
      const storedBookings = localStorage.getItem("userBookings");
      if (!storedBookings) return;

      const existingBookings = JSON.parse(storedBookings);

      // Update the booking with review data
      const updatedBookings = existingBookings.map((booking: BookingType) =>
        booking.id === bookingId
          ? {
              ...booking,
              rating,
              review,
              reviewDate: new Date().toISOString(),
            }
          : booking
      );

      // Save updated bookings back to localStorage
      localStorage.setItem("userBookings", JSON.stringify(updatedBookings));

      // Update state to reflect changes
      setBookings(updatedBookings);

      // Show success message
      alert("Review submitted successfully");
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review. Please try again.");
    }
  };

  // Get recommended packages based on user's booking history
  const getRecommendations = () => {
    // In a real app, this would be a more sophisticated algorithm or API call
    // Here we're just filtering packages that the user hasn't booked yet
    const bookedPackageIds = bookings.map((booking) => booking.packageId);
    return packagesData
      .filter((pkg) => !bookedPackageIds.includes(pkg.id))
      .slice(0, 3); // Just take the first 3 recommendations
  };

  // Render empty state for when no bookings are present
  const renderEmptyBookings = () => (
    <div className="bg-white p-8 rounded-lg shadow text-center">
      <div className="mb-4 text-[#fd7e14]">
        <FiCalendar size={48} className="mx-auto" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No Bookings Yet</h3>
      <p className="text-gray-500 mb-4">
        You haven't made any bookings yet. Explore our services and book your
        first experience!
      </p>
      <button
        onClick={() => navigate("/services")}
        className="px-6 py-2 bg-[#fd7e14] text-white rounded-md hover:bg-[#e06c12] transition-colors"
      >
        Explore Services
      </button>
    </div>
  );

  // Remove item from wishlist
  const handleRemoveFromWishlist = (itemId: number) => {
    try {
      // Get existing wishlist from localStorage
      const storedWishlist = localStorage.getItem("userWishlist");
      if (!storedWishlist) return;

      const existingWishlist = JSON.parse(storedWishlist);

      // Filter out the item to remove
      const updatedWishlist = existingWishlist.filter(
        (item: any) => item.id !== itemId
      );

      // Save updated wishlist to localStorage
      localStorage.setItem("userWishlist", JSON.stringify(updatedWishlist));

      // Update state
      setWishlist(updatedWishlist);

      // Show success message
      alert("Item removed from wishlist");
    } catch (err) {
      console.error("Error removing from wishlist:", err);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#fd7e14] mb-4"></div>
            <p className="text-gray-600">Loading profile...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <div className="text-red-500 mb-4">
              <FiAlertCircle size={48} className="mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Error Loading Profile</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 bg-[#fd7e14] text-white rounded-md hover:bg-[#e06c12] transition-colors"
            >
              Return to Login
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // If user is not found
  if (!user) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-2">User Not Found</h2>
            <p className="text-gray-600 mb-6">
              The requested profile could not be found.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-[#fd7e14] text-white rounded-md hover:bg-[#e06c12] transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "bookings":
        if (bookings.length === 0) {
          return renderEmptyBookings();
        }

        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Your Bookings</h2>

            {/* Upcoming Bookings */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FiCalendar className="mr-2 text-[#fd7e14]" />
                Upcoming Trips
              </h3>

              {bookings.filter((booking) => booking.status === "upcoming")
                .length === 0 ? (
                <p className="text-gray-500 italic">No upcoming bookings</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bookings
                    .filter((booking) => booking.status === "upcoming")
                    .map((booking) => (
                      <div
                        key={booking.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                      >
                        <div className="h-48 bg-gray-200 relative overflow-hidden">
                          <img
                            src={
                              booking.packageImage ||
                              "/placeholder.svg?height=400&width=600" ||
                              "/placeholder.svg"
                            }
                            alt={booking.packageTitle}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-0 right-0 bg-[#fd7e14] text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                            Upcoming
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-2">
                            {booking.packageTitle}
                          </h3>
                          <div className="flex items-center text-gray-500 mb-3">
                            <FiCalendar className="mr-1" />
                            <span>{formatDate(booking.date)}</span>
                          </div>
                          <div className="flex items-center text-gray-500 mb-3">
                            <FiDollarSign className="mr-1" />
                            <span>
                              {booking.totalAmount} Birr •{" "}
                              {booking.paymentMethod}
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <button
                              onClick={() =>
                                navigate(
                                  `/services/category/${booking.packageId}`
                                )
                              }
                              className="text-[#fd7e14] hover:underline flex items-center"
                            >
                              View Details
                              <FiChevronRight className="ml-1" />
                            </button>
                            <button
                              onClick={() => handleCancelBooking(booking.id)}
                              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Past Bookings with Reviews */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FiClock className="mr-2 text-[#fd7e14]" />
                Past Trips
              </h3>

              {bookings.filter(
                (b) => b.status === "completed" || b.status === "cancelled"
              ).length === 0 ? (
                <p className="text-gray-500 italic">No past bookings</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bookings
                    .filter(
                      (booking) =>
                        booking.status === "completed" ||
                        booking.status === "cancelled"
                    )
                    .map((booking) => (
                      <div
                        key={booking.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <div className="h-48 bg-gray-200 relative overflow-hidden">
                          <img
                            src={
                              booking.packageImage ||
                              "/placeholder.svg?height=400&width=600" ||
                              "/placeholder.svg"
                            }
                            alt={booking.packageTitle}
                            className="w-full h-full object-cover"
                          />
                          {booking.status === "cancelled" && (
                            <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                              Cancelled
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold">
                              {booking.packageTitle}
                            </h3>
                            {booking.rating && (
                              <div className="flex items-center">
                                <span className="text-[#fd7e14] font-medium mr-1">
                                  {booking.rating}
                                </span>
                                <FiStar className="text-[#fd7e14]" />
                              </div>
                            )}
                          </div>
                          <p className="text-gray-500 text-sm mb-2">
                            {booking.reviewDate
                              ? getTimeSince(booking.reviewDate)
                              : formatDate(booking.date)}
                          </p>
                          {booking.status !== "cancelled" && (
                            <>
                              {booking.review ? (
                                <>
                                  <p className="text-gray-600">
                                    {booking.review.length > 100
                                      ? `${booking.review.substring(0, 100)}...`
                                      : booking.review}
                                  </p>
                                  {booking.review.length > 100 && (
                                    <button className="text-[#fd7e14] text-sm mt-1 hover:underline">
                                      Read more
                                    </button>
                                  )}
                                </>
                              ) : (
                                <div className="mt-2">
                                  <button
                                    onClick={() => {
                                      const rating = prompt(
                                        "Rate this experience (1-5):"
                                      );
                                      const review =
                                        prompt("Write your review:");
                                      if (rating && review) {
                                        handleSubmitReview(
                                          booking.id,
                                          Number.parseInt(rating),
                                          review
                                        );
                                      }
                                    }}
                                    className="px-4 py-2 bg-[#fd7e14] text-white rounded-md hover:bg-[#e06c12] transition-colors text-sm"
                                  >
                                    Write a Review
                                  </button>
                                </div>
                              )}
                            </>
                          )}
                          {booking.status === "cancelled" && (
                            <p className="text-gray-500 italic">
                              This booking was cancelled
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </>
        );

      case "wishlist":
        return (
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FiHeart className="mr-2 text-[#fd7e14]" />
              Your Wishlist
            </h2>

            {wishlist.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                      <img
                        src={
                          item.packageImage ||
                          "/placeholder.svg?height=400&width=600"
                        }
                        alt={item.packageTitle}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleRemoveFromWishlist(item.id)}
                        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors"
                      >
                        <FiHeart
                          className="text-red-500 fill-red-500"
                          size={18}
                        />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">
                        {item.packageTitle}
                      </h3>
                      <div className="flex items-center text-gray-500 mb-3">
                        <FiDollarSign className="mr-1" />
                        <span>{item.packagePrice} Birr</span>
                      </div>
                      <div className="flex items-center text-gray-500 mb-3">
                        <FiCalendar className="mr-1" />
                        <span>Added on {formatDate(item.addedAt)}</span>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <button
                          onClick={() =>
                            navigate(`/services/category/${item.packageId}`)
                          }
                          className="text-[#fd7e14] hover:underline flex items-center"
                        >
                          View Details
                          <FiChevronRight className="ml-1" />
                        </button>
                        <button
                          onClick={() => {
                            navigate(`/services/category/${item.packageId}`);
                          }}
                          className="px-3 py-1 bg-[#fd7e14] text-white rounded-md hover:bg-[#e06c12] transition-colors text-sm"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="mb-4 text-gray-400">
                  <FiHeart size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Your Wishlist is Empty
                </h3>
                <p className="text-gray-500 mb-4">
                  You haven't added any services to your wishlist yet.
                </p>
                <button
                  onClick={() => navigate("/services")}
                  className="px-6 py-2 bg-[#fd7e14] text-white rounded-md hover:bg-[#e06c12] transition-colors"
                >
                  Explore Services
                </button>
              </div>
            )}
          </div>
        );

      case "donations":
        return (
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FiGift className="mr-2 text-[#fd7e14]" />
              Your Donations
            </h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Total Donations
                    </h3>
                    <p className="text-gray-500">
                      Thank you for your generosity!
                    </p>
                  </div>
                  <div className="text-3xl font-bold text-[#fd7e14]">
                    {getTotalDonations()} points
                    <span className="block text-sm font-normal text-gray-500">
                      Worth {getTotalDonations() * 10} Birr
                    </span>
                  </div>
                </div>

                {donationHistory.length > 0 ? (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-4">Donation History</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Charity
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Points
                            </th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Value
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {donationHistory.map((donation) => (
                            <tr key={donation.id}>
                              <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-500">
                                {formatDate(donation.date)}
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {donation.charityName}
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-500">
                                {donation.amount} points
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-500">
                                {donation.amount * 10} Birr
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-6">
                    <p className="text-gray-500 mb-4">
                      You haven't made any donations yet. Make a difference
                      today!
                    </p>
                    <button
                      onClick={() => navigate("/charity")}
                      className="px-6 py-2 bg-[#fd7e14] text-white rounded-md hover:bg-[#e06c12] transition-colors"
                    >
                      Make a New Donation
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case "rewards":
        return (
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FiGift className="mr-2 text-[#fd7e14]" />
              Your Reward Points
            </h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Available Points
                    </h3>
                    <p className="text-gray-500">
                      Use your points for discounts or donate them
                    </p>
                  </div>
                  <div className="text-3xl font-bold text-[#fd7e14]">
                    {user.points || 0}
                    <span className="block text-sm font-normal text-gray-500">
                      Worth {(user.points || 0) * 10} Birr
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">How to use your points</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>
                      100 points = 1,000 Birr discount on your next booking
                    </li>
                    <li>
                      200 points = 2,000 Birr discount on your next booking
                    </li>
                    <li>
                      500 points = 5,000 Birr discount on your next booking
                    </li>
                    <li>Donate your points to charity (1 point = 10 Birr)</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className={`flex-1 px-4 py-2 rounded-md transition-colors ${
                      (user.points || 0) > 0
                        ? "bg-[#fd7e14] text-white hover:bg-[#e06c12]"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={(user.points || 0) === 0}
                  >
                    Redeem Points
                  </button>
                  <button
                    onClick={() => navigate("/charity")}
                    className={`flex-1 px-4 py-2 rounded-md transition-colors ${
                      (user.points || 0) > 0
                        ? "border border-[#fd7e14] text-[#fd7e14] hover:bg-[#fff8f3]"
                        : "border border-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={(user.points || 0) === 0}
                  >
                    Donate Points
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Business-specific content
  const renderBusinessContent = () => {
    return (
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-6">Business Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Bookings</h3>
            <p className="text-3xl font-bold text-[#fd7e14]">0</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-[#fd7e14]">0 Birr</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Average Rating</h3>
            <p className="text-3xl font-bold text-[#fd7e14]">N/A</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Services</h3>
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">
              You haven't added any services yet.
            </p>
            <button className="px-6 py-2 bg-[#fd7e14] text-white rounded-md hover:bg-[#e06c12] transition-colors">
              Add New Service
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Bookings</h3>
          <div className="text-center py-8">
            <p className="text-gray-500">No bookings yet.</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Profile Header */}
        <section className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
                <img
                  src={
                    user.profileImage || "/placeholder.svg?height=200&width=200"
                  }
                  alt={user.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold">{user.fullName}</h1>
                {user.role === "business" && (
                  <p className="text-[#fd7e14] font-medium">
                    {user.businessName}
                  </p>
                )}
                <p className="text-gray-600 mt-1">{user.bio || "No bio yet"}</p>
                <div className="flex items-center text-gray-500 mt-2">
                  <FiMapPin className="mr-1" />
                  <span>{user.location || "Location not specified"}</span>
                </div>

                {user.role === "customer" && (
                  <div className="flex flex-wrap gap-6 mt-4">
                    <div>
                      <span className="text-xl font-bold text-[#fd7e14]">
                        {getTotalDonations() * 10} Birr
                      </span>
                      <p className="text-sm text-gray-500">Donation</p>
                    </div>
                    <div>
                      <span className="text-xl font-bold text-[#fd7e14]">
                        {user.points || 0}
                      </span>
                      <p className="text-sm text-gray-500">Reward points</p>
                    </div>
                    <div>
                      <span className="text-xl font-bold text-gray-700">
                        {
                          bookings.filter((b) => b.status === "completed")
                            .length
                        }
                      </span>
                      <p className="text-sm text-gray-500">Trips</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="md:text-right flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
                <button
                  onClick={handleEditProfile}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <FiEdit className="mr-2" />
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition-colors flex items-center justify-center"
                >
                  <FiLogOut className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs - Only show for customers */}
        {user.role === "customer" && (
          <section className="border-b sticky top-0 bg-white z-10 shadow-sm">
            <div className="container mx-auto px-4">
              <div className="flex overflow-x-auto space-x-8 py-4">
                <button
                  onClick={() => setActiveTab("bookings")}
                  className={`whitespace-nowrap pb-2 transition-colors ${
                    activeTab === "bookings"
                      ? "text-[#fd7e14] font-medium border-b-2 border-[#fd7e14]"
                      : "text-gray-600 hover:text-[#fd7e14]"
                  }`}
                >
                  Booking History
                </button>
                <button
                  onClick={() => setActiveTab("wishlist")}
                  className={`whitespace-nowrap pb-2 transition-colors ${
                    activeTab === "wishlist"
                      ? "text-[#fd7e14] font-medium border-b-2 border-[#fd7e14]"
                      : "text-gray-600 hover:text-[#fd7e14]"
                  }`}
                >
                  Wishlist
                </button>
                <button
                  onClick={() => setActiveTab("donations")}
                  className={`whitespace-nowrap pb-2 transition-colors ${
                    activeTab === "donations"
                      ? "text-[#fd7e14] font-medium border-b-2 border-[#fd7e14]"
                      : "text-gray-600 hover:text-[#fd7e14]"
                  }`}
                >
                  Donation
                </button>
                <button
                  onClick={() => setActiveTab("rewards")}
                  className={`whitespace-nowrap pb-2 transition-colors ${
                    activeTab === "rewards"
                      ? "text-[#fd7e14] font-medium border-b-2 border-[#fd7e14]"
                      : "text-gray-600 hover:text-[#fd7e14]"
                  }`}
                >
                  Reward points
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Tab Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {user.role === "customer"
              ? renderTabContent()
              : renderBusinessContent()}
          </div>
        </section>

        {/* Recommendations - Always show for customers with bookings */}
        {user.role === "customer" &&
          bookings.length > 0 &&
          activeTab === "bookings" && (
            <section className="py-8 bg-gray-100">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getRecommendations().map((pkg) => (
                    <div
                      key={pkg.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img
                          src={
                            pkg.image || "/placeholder.svg?height=400&width=600"
                          }
                          alt={pkg.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">
                          {pkg.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2 mb-3">
                          {pkg.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#fd7e14]">
                            {pkg.price} Birr
                          </span>
                          <button
                            onClick={() =>
                              navigate(`/services/${pkg.category}/${pkg.id}`)
                            }
                            className="px-4 py-1.5 bg-[#fd7e14] text-white rounded-md hover:bg-[#e06c12] transition-colors text-sm"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <button
                    onClick={() => navigate("/services")}
                    className="inline-block text-[#fd7e14] border border-[#fd7e14] px-6 py-2 rounded hover:bg-[#fd7e14] hover:text-white transition-colors"
                  >
                    View more
                  </button>
                </div>
              </div>
            </section>
          )}
      </main>

      <Footer />

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const updatedData: Partial<UserData> = {
                    fullName: formData.get("fullName") as string,
                    bio: formData.get("bio") as string,
                    location: formData.get("location") as string,
                    phone: formData.get("phone") as string,
                  };

                  if (user?.role === "business") {
                    updatedData.businessName = formData.get(
                      "businessName"
                    ) as string;
                    updatedData.website = formData.get("website") as string;
                  }

                  handleSaveProfile(updatedData);
                }}
              >
                <div className="space-y-4">
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Picture
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
                        <img
                          src={
                            imagePreview ||
                            user?.profileImage ||
                            "/placeholder.svg?height=200&width=200"
                          }
                          alt="Profile preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <input
                          type="file"
                          id="profileImage"
                          name="profileImage"
                          accept="image/*"
                          onChange={handleImageSelect}
                          className="hidden"
                        />
                        <label
                          htmlFor="profileImage"
                          className="cursor-pointer px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors inline-block"
                        >
                          Choose Image
                        </label>
                        {imagePreview && (
                          <button
                            type="button"
                            onClick={() => setImagePreview(null)}
                            className="ml-2 text-red-500 text-sm hover:underline"
                          >
                            Remove
                          </button>
                        )}
                        <p className="text-xs text-gray-500 mt-1">
                          JPG, PNG or GIF (max. 2MB)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      defaultValue={user?.fullName || ""}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fd7e14]"
                      required
                    />
                  </div>

                  {user?.role === "business" && (
                    <>
                      <div>
                        <label
                          htmlFor="businessName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Business Name
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          defaultValue={user?.businessName || ""}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fd7e14]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="website"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Website
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          defaultValue={user?.website || ""}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fd7e14]"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label
                      htmlFor="bio"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      defaultValue={user?.bio || ""}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fd7e14]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      defaultValue={user?.location || ""}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fd7e14]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      defaultValue={user?.phone || ""}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fd7e14]"
                    />
                  </div>

                  <div className="pt-4 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsEditModalOpen(false)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#fd7e14] text-white rounded-md hover:bg-[#e06c12] transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
