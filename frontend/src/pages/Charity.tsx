import React, { useState } from "react";
import Header from "../components/Header"

const categories = [
  { name: "All", icon: "🌍" },
  { name: "Clean Water", icon: "💧" },
  { name: "Education", icon: "📚" },
  { name: "Ecology", icon: "🌱" },
  { name: "Ending Hunger", icon: "🍲" },
  { name: "Health Care", icon: "🏥" },
  { name: "Orphan Children", icon: "🧒" },
];

const charities = [
  {
    id: 1,
    name: "Clean Water Initiative",
    description: "Providing access to clean drinking water in developing countries.",
    category: "Clean Water",
    logo: "https://images.unsplash.com/photo-1500581276021-a4bbcd0050c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    impact: "500K+ people served",
  },
  {
    id: 2,
    name: "Education for All",
    description: "Building schools and providing educational materials worldwide.",
    category: "Education",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    impact: "250+ schools built",
  },
  {
    id: 3,
    name: "Food Relief Foundation",
    description: "Fighting hunger by distributing meals to those in need.",
    category: "Ending Hunger",
    logo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    impact: "1.2M+ meals served",
  },
  {
    id: 4,
    name: "Green Earth Alliance",
    description: "Protecting ecosystems and promoting sustainable practices.",
    category: "Ecology",
    logo: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    impact: "100+ protected areas",
  },
  {
    id: 5,
    name: "Health for Everyone",
    description: "Providing medical care to underserved communities.",
    category: "Health Care",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    impact: "50K+ patients treated",
  },
  {
    id: 6,
    name: "Children's Hope",
    description: "Supporting orphaned children with shelter and education.",
    category: "Orphan Children",
    logo: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    impact: "1K+ children supported",
  },
];

const CharityPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCharity, setSelectedCharity] = useState<number | null>(null);
  const [donationAmount, setDonationAmount] = useState(100);
  const [userPoints, setUserPoints] = useState(2500);
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);

  // Filter charities based on search and category
  const filteredCharities = charities.filter(charity => {
    const matchesSearch = charity.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || charity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDonateClick = (charityId: number) => {
    setSelectedCharity(charityId);
    setShowDonationModal(true);
    setDonationAmount(100); // Reset to minimum donation amount
  };

  const handleDonate = () => {
    if (selectedCharity && donationAmount >= 100 && donationAmount <= userPoints) {
      // In a real app, you would handle the donation transaction here
      setTimeout(() => {
        setUserPoints(userPoints - donationAmount);
        setDonationSuccess(true);
        setShowDonationModal(false);
        
        // Hide success message after 3 seconds
        setTimeout(() => setDonationSuccess(false), 3000);
      }, 1000);
    }
  };

  return (
    <>
    <Header/>
    <div className="px-6 md:px-20 py-10 space-y-10 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 flex items-center space-x-2">
        <span className="hover:text-orange-500 cursor-pointer">Home</span>
        <span>&gt;</span>
        <span className="text-gray-500">Charity</span>
      </div>

      {/* Hero Section */}
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Donate Your Points, <span className="text-orange-500">Make a Difference!</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your accumulated points can change lives. Select a charity and donate your points to support their cause.
        </p>
      </div>

      {/* User Points Display */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-gray-500 text-sm">YOUR AVAILABLE POINTS</h3>
            <p className="text-3xl font-bold text-gray-800">{userPoints.toLocaleString()}</p>
          </div>
          <div className="w-1/2">
            <div className="text-right text-sm text-gray-500 mb-1">
              {Math.round((userPoints / 5000) * 100)}% of monthly goal
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-orange-500 h-3 rounded-full" 
                style={{ width: `${Math.min(100, (userPoints / 5000) * 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="grid md:grid-cols-4 gap-6">
        {/* Categories */}
        <div className="bg-white p-6 rounded-xl shadow-md md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li 
                key={cat.name}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${selectedCategory === cat.name ? 'bg-orange-50 text-orange-500' : 'hover:bg-gray-50'}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{cat.icon}</span>
                  <span>{cat.name}</span>
                </div>
                {cat.name !== "All" && (
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                    {charities.filter(c => c.category === cat.name).length}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Charity List */}
        <div className="md:col-span-3 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for charities..."
              className="border w-full p-4 pl-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg 
              className="absolute left-4 top-4 h-5 w-5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Charity Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredCharities.length > 0 ? (
              filteredCharities.map((charity) => (
                <div
                  key={charity.id}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <img 
                      src={charity.logo} 
                      alt={charity.name} 
                      className="w-16 h-16 rounded-lg object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/80?text=Charity";
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold">{charity.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{charity.description}</p>
                      <div className="mt-3">
                        <span className="text-sm text-gray-500">Impact: {charity.impact}</span>
                      </div>
                      <button
                        onClick={() => handleDonateClick(charity.id)}
                        className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                      >
                        Donate Points
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="md:col-span-2 text-center py-10">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No charities found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {showDonationModal && selectedCharity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Donate to {charities.find(c => c.id === selectedCharity)?.name}
              </h2>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowDonationModal(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How many points would you like to donate?
                </label>
                <input
                  type="number"
                  min="100"
                  max={userPoints}
                  step="100"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(Math.min(userPoints, Math.max(100, Number(e.target.value))))}
                  className="border w-full p-3 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Minimum: 100 points</span>
                  <span>Your balance: {userPoints} points</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Donation amount:</span>
                  <span className="font-medium">{donationAmount} points</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Remaining balance:</span>
                  <span className="font-medium">{userPoints - donationAmount} points</span>
                </div>
              </div>
              
              <div className="pt-4 space-y-2">
                <button
                  onClick={handleDonate}
                  disabled={donationAmount < 100 || donationAmount > userPoints}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-white ${donationAmount >= 100 && donationAmount <= userPoints ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400 cursor-not-allowed'}`}
                >
                  Confirm Donation
                </button>
                <button
                  onClick={() => setShowDonationModal(false)}
                  className="w-full py-3 px-4 rounded-lg font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Donation Success Message */}
      {donationSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Your donation of {donationAmount} points was successful! Thank you.</span>
        </div>
      )}

      {/* Partner Logos */}
      <div className="py-10 border-t border-gray-200">
        <h2 className="text-center text-gray-500 text-sm uppercase tracking-wider mb-6">Our Trusted Partners</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "WaterAid", icon: "💧" },
            { name: "UNESCO", icon: "📚" },
            { name: "WWF", icon: "🌍" },
            { name: "Red Cross", icon: "➕" },
            { name: "UNICEF", icon: "🧒" }
          ].map((partner, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md text-3xl">
                {partner.icon}
              </div>
              <span className="mt-2 text-sm text-gray-600">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default CharityPage;