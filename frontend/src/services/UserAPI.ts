// services/userService.ts

interface UserData {
    id: string;
    name: string;
    country: string;
    role: string;
    userType: "customer" | "business";
    profilePic: string;
    bannerImage: string;
  }
  
  export async function getUserById(id: string): Promise<UserData> {
    // simulate an API call with dummy data
    return new Promise((resolve) => {
      setTimeout(() => {
        if (id === "business123") {
          resolve({
            id: "business123",
            name: "Skyline Travels",
            country: "USA",
            role: "Business Company",
            userType: "business",
            profilePic: "/images/business-profile.jpg",
            bannerImage: "/images/business-banner.jpg",
          });
        } else {
          resolve({
            id: "user001",
            name: "Liam Ford",
            country: "Australia",
            role: "Traveler",
            userType: "customer",
            profilePic: "/images/profile.jpg",
            bannerImage: "/images/banner.jpg",
          });
        }
      }, 500);
    });
  }
  