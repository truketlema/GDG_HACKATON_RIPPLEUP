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
    price: 150,
    details: "A rejuvenating full-day spa experience with sauna, massage, and wellness activities included.",
    features: "Full-body massage, Access to sauna & jacuzzi, Complimentary lunch, Yoga & wellness session"
  },
  {
    id: 106,
    title: "Hammam & Detox Ritual",
    description: "Traditional hammam and deep cleansing treatment.",
    goal: 9000,
    image: "https://www.spahammam.com/wp-content/uploads/2021/03/spa-hammam-paris-75007.jpg",
    category: "spa",
    price: 130,
    details: "Includes a hammam steam bath, body scrub, clay mask, and detox tea service.",
    features: "Traditional Turkish hammam, Black soap exfoliation, Rhassoul clay mask, Relaxation lounge access"
  },
  {
    id: 102,
    title: "Oceanview Hotel Deluxe",
    description: "Book a luxurious hotel room with a view.",
    goal: 15000,
    image: "https://cdn-fdpbk.nitrocdn.com/OpxqIVmSnfStFndWOiwmgKzNuvAqiwlj/assets/images/optimized/rev-84c6f7b/www.noblehousehotels.com/wp-content/uploads/2024/01/lpi-spa-dd.jpg",
    category: "hotels",
    price: 320,
    details: "Spacious king room with balcony overlooking the ocean. Breakfast included.",
    features: "Oceanview balcony, King-size bed, Free Wi-Fi, Complimentary breakfast"
  },
  {
    id: 107,
    title: "Urban Boutique Stay",
    description: "Modern boutique hotel in the heart of the city.",
    goal: 11000,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/369367222.jpg?k=b6598659bcecf958fd99a85f6971239cc13615295db19f8e32c7d24cf90cfb6e&o=&hp=1",
    category: "hotels",
    price: 180,
    details: "Includes stylish room with designer interiors and nearby nightlife access.",
    features: "Central location, Contemporary decor, Late checkout, Rooftop bar access"
  },
  {
    id: 103,
    title: "Fine Dining Experience",
    description: "Enjoy a gourmet 5-course meal in a luxury setting.",
    goal: 200000,
    image: "https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_nuit_v2-scaled.jpg",
    category: "restaurants",
    price: 95,
    details: "Includes appetizer, entrée, dessert, and sommelier wine pairings.",
    features: "5-course meal, Rooftop seating, Wine pairings, Live music entertainment"
  },
  {
    id: 108,
    title: "Chef's Table Culinary Night",
    description: "Dine directly with the chef in a private gourmet setting.",
    goal: 50000,
    image: "https://media.timeout.com/images/105900211/750/422/image.jpg",
    category: "restaurants",
    price: 160,
    details: "Private dining room, custom menu prepared by award-winning chef, and wine tasting.",
    features: "Interactive chef experience, 8-course seasonal tasting menu, Premium wine selection, Private dining suite"
  },
  {
    id: 104,
    title: "Amine Secret Retreat",
    description: "Explore a hidden gem in the mountains for peaceful recharging.",
    goal: 30000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7Za5bedjvcrzXQzje5Z5wgD-uZtXOjdAbA&s",
    category: "getaways",
    price: 280,
    details: "Includes cabin accommodation, breakfast, and guided hikes through nature trails.",
    features: "Private cabin stay, Fire pit access, Guided mountain hikes, Nature wellness sessions"
  },
  {
    id: 109,
    title: "Lakeview Eco Lodge",
    description: "Reconnect with nature at a peaceful lakeside retreat.",
    goal: 25000,
    image: "https://static.wixstatic.com/media/11062b_8be0ff3dc1844da4bb20e7c39f42a44f~mv2.jpg",
    category: "getaways",
    price: 220,
    details: "Sustainable lodge with kayaking, yoga deck, and organic meals included.",
    features: "Eco-friendly cabin, Lakeside view, Organic meals, Free canoe rental"
  },
  {
    id: 105,
    title: "Beach Resort Package",
    description: "Relax at a beachside resort with premium amenities.",
    goal: 50000,
    image: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3214,w_4821,x_0,y_0/c_limit,dpr_2.625,f_auto,fl_lossy,q_80,w_412/Press3_uhwggs.jpg",
    category: "resorts",
    price: 400,
    details: "2-night stay in an oceanfront suite with all-inclusive meals and beach activities.",
    features: "Oceanfront suite, All-inclusive meals, Snorkeling & surfing, Spa and fitness center access"
  },
  {
    id: 110,
    title: "Luxury Island Escape",
    description: "A private island stay with personalized concierge services.",
    goal: 100000,
    image: "https://www.kayak.com/rimg/himg/d2/87/e2/expediav2-3105303-450a18-700303.jpg?width=1366&height=768&crop=true",
    category: "resorts",
    price: 850,
    details: "5-star island resort with butler service, yacht transfers, and sunset dinners included.",
    features: "Private beachfront villa, Personal butler service, Infinity pool, Yacht transfer included"
  }
];
