import React, { useEffect, useState } from "react";
import { getUserById } from "../services/UserAPI";
import { FiEdit2 } from "react-icons/fi";

interface UserProfileProps {
  id: string;
}

interface UserData {
  id: string;
  name: string;
  country: string;
  role: string;
  userType: "customer" | "business";
  profilePic: string;
  bannerImage: string;
}

export default function UserProfile({ id }: UserProfileProps) {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    getUserById(id).then(setUser);
  }, [id]);

  if (!user) return <div className="text-white p-10">Loading...</div>;

  const handleProfilePicChange = () => {
    alert("Change profile pic clicked");
  };

  return (
    <div className="bg-[#2d297a] min-h-screen text-white">
      {/* Banner */}
      <div className="relative">
        <img src={user.bannerImage} alt="Banner" className="w-full h-60 object-cover" />
        <div className="absolute left-10 bottom-[-40px] flex items-center gap-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white cursor-pointer">
            <img src={user.profilePic} alt="Profile" className="w-full h-full object-cover" />
            <button
              onClick={handleProfilePicChange}
              className="absolute bottom-1 right-1 bg-white p-1 rounded-full text-black text-xs"
            >
              <FiEdit2 />
            </button>
          </div>
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p>{user.role}</p>
            <p className="text-sm text-gray-300">{user.country}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="pt-16 px-10">
        <div className="flex gap-6 border-b border-gray-600 pb-2 mb-6 text-sm">
          {user.userType === "customer" ? (
            <>
              <button>Destinations</button>
              <button>Wishlist</button>
              <button>Booking History</button>
              <button>Reward Points</button>
            </>
          ) : (
            <>
              <button>My Services</button>
              <button>Add Package</button>
              <button>Customer Bookings</button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <BookingCard
            title="Kyoto, Japan"
            description="Beautiful temples and tradition"
            image="/images/kyoto.jpg"
          />
          <BookingCard
            title="Barcelona, Spain"
            description="Historical sights and beaches"
            image="/images/barcelona.jpg"
          />
        </div>

        {/* Customer-Only Recommendations */}
        {user.userType === "customer" && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-3">Recommendations</h3>
            <div className="space-y-4">
              <BookingCard title="Paris, France" description="Eiffel Tower and romance" image="/images/paris.jpg" />
              <BookingCard title="Rome, Italy" description="Ancient ruins and beauty" image="/images/rome.jpg" />
            </div>
            <button className="mt-4 px-6 py-2 bg-orange-500 rounded-full font-bold text-sm hover:bg-orange-600">
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function BookingCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="bg-black rounded-xl overflow-hidden flex">
      <img src={image} alt={title} className="w-40 h-32 object-cover" />
      <div className="p-4 flex-1">
        <h4 className="text-lg font-bold mb-1">{title}</h4>
        <p className="text-sm text-gray-300">{description}</p>
        <div className="mt-2 text-yellow-400 text-sm">⭐⭐⭐⭐☆</div>
      </div>
    </div>
  );
}
