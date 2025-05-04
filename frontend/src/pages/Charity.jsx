import { useState, useCallback } from "react";
import Header from "../components/Charity/Header";
import Sidebar from "../components/Charity/Sidebar";
import CharityCard from "../components/Charity/CharityCard";
import FooterIcons from "../components/Charity/FooterIcons";
import hunger from "../assets/hunger.jpg";
import education from "../assets/education.jpg";
import water from "../assets/water.jpg";
import DonationModal from "../components/Charity/DonationModal";

const charities = [
  {
    title: "End Hunger",
    desc: "Millions of people around the world go to bed hungry every night. This fund supports sustainable solutions to food insecurity, including food distribution programs, agricultural training, and community gardens to help families access nutritious meals every day.",
    img: hunger,
    category: "Ending Hunger",
  },
  {
    title: "Improve Education",
    desc: "Education is a fundamental right and a powerful tool for breaking the cycle of poverty. Your donation helps provide school supplies, build classrooms, train teachers, and ensure that children in underserved communities receive quality education and a chance for a brighter future.",
    img: education,
    category: "Education",
  },
  {
    title: "Clean Water Initiative",
    desc: "Access to clean water is essential for health, dignity, and development. This fund builds wells, provides water filtration systems, and educates communities about hygiene practices, improving the lives of thousands affected by water scarcity and contaminated sources.",
    img: water,
    category: "Clean Water",
  },
];

function Charity() {
  const [charity, setCharity] = useState(charities);
  const [inputValue, setInputValue] = useState("");
  const [selectedCharity, setSelectedCharity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filterCharities = useCallback((search, category) => {
    let filtered = charities;

    if (search) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    setCharity(filtered);
    setSelectedCharity(null);
  }, []);

  const handleCharitySearch = useCallback(
    (e) => {
      const searchTerm = e.target.value.toLowerCase();
      setInputValue(searchTerm);
      filterCharities(searchTerm, selectedCategory);
    },
    [filterCharities, selectedCategory]
  );

  const handleCategoryFilter = useCallback(
    (category) => {
      if (category === "all") {
        setSelectedCategory(null);
        filterCharities(inputValue, null);
      } else {
        setSelectedCategory(category);
        filterCharities(inputValue, category);
      }
    },
    [filterCharities, inputValue]
  );

  const handleCharityClick = (title) => {
    setSelectedCharity(title);
  };

  const handleDonate = () => {
    if (selectedCharity) {
      setShowModal(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Header />
      <div className="flex flex-col md:flex-row mt-4">
        <aside className="md:w-1/3">
          <Sidebar
            onCategorySelect={handleCategoryFilter}
            charities={charities}
          />
        </aside>
        <main className="md:w-2/3 p-4">
          <input
            onChange={handleCharitySearch}
            type="text"
            value={inputValue}
            placeholder="Search for charity"
            className="border p-2 w-full rounded mb-4"
          />
          <h2 className="font-semibold mb-4">Select a charity</h2>
          {charity.length > 0 ? (
            charity.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCharityClick(item.title)}
                className={`cursor-pointer mb-4 rounded border-2 transition-all ${
                  selectedCharity === item.title
                    ? "border-orange-500"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                <CharityCard {...item} />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
          <button
            onClick={handleDonate}
            className={`px-4 py-2 mt-4 rounded text-white transition ${
              selectedCharity
                ? "bg-orange-500 hover:bg-orange-600 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!selectedCharity}
          >
            DONATE NOW
          </button>
        </main>
      </div>
      <FooterIcons />

      {showModal && (
        <DonationModal
          charity={charities.find((c) => c.title === selectedCharity)}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default Charity;
