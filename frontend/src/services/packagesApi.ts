export interface PackageItem {
  id: number;
  title: string;
  description: string;
  goal: number;
  image: string;
  category: string;
  price: number;
  details: string;
  features: string; // Now a comma-separated string
}

export const packagesData: PackageItem[] = [
  {
    id: 101,
    title: "Luxury Spa Day",
    description: "Discover premium spa experiences for relaxation.",
    goal: 12000,
    image: "https://calista.com.tr/media/532bmoz2/spa-nedir.jpg?rmode=max&width=500&height=265",
    category: "spa",
    price: 15000,
    details: "A rejuvenating full-day spa experience with sauna, massage, and wellness activities included.",
    features: "Full-body massage, Access to sauna & jacuzzi, Complimentary lunch, Yoga & wellness session"
  },
  {
    id: 106,
    title: "Hammam & Detox Ritual",
    description: "Traditional hammam and deep cleansing treatment.",
    goal: 9000,
    image: "https://www.palaceresorts.com/jacuzzi_spa_palace_resorts_5f9b16e722.webp",
    category: "spa",
    price: 13000,
    details: "Includes a hammam steam bath, body scrub, clay mask, and detox tea service.",
    features: "Traditional Turkish hammam, Black soap exfoliation, Rhassoul clay mask, Relaxation lounge access"
  },
  {
    id: 102,
    title: "Oceanview Hotel Deluxe",
    description: "Book a luxurious hotel room with a view.",
    goal: 15000,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/2f/a9/18/97/best-western-plus-addis.jpg",
    category: "hotels",
    price: 20000,
    details: "Spacious king room with balcony overlooking the ocean. Breakfast included.",
    features: "Oceanview balcony, King-size bed, Free Wi-Fi, Complimentary breakfast"
  },
  {
    id: 107,
    title: "Urban Boutique Stay",
    description: "Modern boutique hotel in the heart of the city.",
    goal: 11000,
    image: "https://borkena.com/wp-content/uploads/2019/01/Ethiopian-Skylight-Five-Hotel_-airlines.jpg",
    category: "hotels",
    price: 1800,
    details: "Includes stylish room with designer interiors and nearby nightlife access.",
    features: "Central location, Contemporary decor, Late checkout, Rooftop bar access"
  },
  {
    id: 103,
    title: "Fine Dining Experience",
    description: "Enjoy a gourmet 5-course meal in a luxury setting.",
    goal: 200000,
    image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/10/03224459/Megumi-1.jpg",
    category: "restaurants",
    price: 9000,
    details: "Includes appetizer, entrée, dessert, and sommelier wine pairings.",
    features: "5-course meal, Rooftop seating, Wine pairings, Live music entertainment"
  },
  {
    id: 108,
    title: "Chef's Table Culinary Night",
    description: "Dine directly with the chef in a private gourmet setting.",
    goal: 50000,
    image: "https://a.storyblok.com/f/116532/2000x1333/45c62b1026/panorama-sky-bar-warsaw-rooftop-bar.webp",
    category: "restaurants",
    price: 16000,
    details: "Private dining room, custom menu prepared by award-winning chef, and wine tasting.",
    features: "Interactive chef experience, 8-course seasonal tasting menu, Premium wine selection, Private dining suite"
  },
  {
    id: 104,
    title: "Amine Secret Retreat",
    description: "Explore a hidden gem in the mountains for peaceful recharging.",
    goal: 30000,
    image: "https://selamta.ethiopianairlines.com/wp-content/uploads/2022/07/Africas-incredible-beaches_Anse-Source-dArgent.jpg",
    category: "getaways",
    price: 2800,
    details: "Includes cabin accommodation, breakfast, and guided hikes through nature trails.",
    features: "Private cabin stay, Fire pit access, Guided mountain hikes, Nature wellness sessions"
  },
  {
    id: 109,
    title: "Lakeview Eco Lodge",
    description: "Reconnect with nature at a peaceful lakeside retreat.",
    goal: 25000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8d_4DpLz9BdT4V4MPbgn48sScsrlt3lqAGg&s",
    category: "getaways",
    price: 22000,
    details: "Sustainable lodge with kayaking, yoga deck, and organic meals included.",
    features: "Eco-friendly cabin, Lakeside view, Organic meals, Free canoe rental"
  },
  {
    id: 105,
    title: "Beach Resort Package",
    description: "Relax at a beachside resort with premium amenities.",
    goal: 50000,
    image: "https://www.hilton.com/im/en/MLEONWA/16775979/mleonwa-f-b-nava.jpg?impolicy=crop&cw=4500&ch=3000&gravity=NorthWest&xposition=250&yposition=0&rw=1280&rh=856",
    category: "resorts",
    price: 4000,
    details: "2-night stay in an oceanfront suite with all-inclusive meals and beach activities.",
    features: "Oceanfront suite, All-inclusive meals, Snorkeling & surfing, Spa and fitness center access"
  },
  {
    id: 110,
    title: "Luxury Island Escape",
    description: "A private island stay with personalized concierge services.",
    goal: 100000,
    image: "https://a4adc62bfbeb9287c6cc-44a9442b068bb36d5792597640a019e7.ssl.cf1.rackcdn.com/u/_destination/xpm/riviera-maya-resort-sunrise.jpg",
    category: "resorts",
    price: 8500,
    details: "5-star island resort with butler service, yacht transfers, and sunset dinners included.",
    features: "Private beachfront villa, Personal butler service, Infinity pool, Yacht transfer included"
  }
];
