interface UserData {
    id: string;
    name: string;
    country: string;
    role: string;
    userType: "customer" | "business";
    profilePic: string;
    bannerImage: string;
    points: number; // 👈 Add this
  }
  
  export async function getUserById(id: string): Promise<UserData> {
    return new Promise((resolve, reject) => {
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
            points: 0, // 👈 Add points
          });
        } else if (id === "user001") {
          resolve({
            id: "user001",
            name: "Liam Ford",
            country: "Australia",
            role: "Traveler",
            userType: "customer",
            profilePic: "https://sdmntpritalynorth.oaiusercontent.com/files/00000000-b1d4-6246-b4e2-6db52f146f14/raw?se=2025-05-04T15%3A39%3A19Z&sp=r&sv=2024-08-04&sr=b&scid=6fe19b46-fc8c-5992-8c2e-b9439eb3e7e1&skoid=59d06260-d7df-416c-92f4-051f0b47c607&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-04T09%3A08%3A07Z&ske=2025-05-05T09%3A08%3A07Z&sks=b&skv=2024-08-04&sig=IsN/y8zOQUDj5nDnvO8iQjwLQ6afQMjFMOj09WHe2Ts%3D",
            bannerImage: "https://img.freepik.com/free-vector/half-tone-blue-abstract-background-with-text-space_1017-41428.jpg?semt=ais_hybrid&w=740",
            points: 1250, // 👈 Add points
          });
        } else {
          reject(new Error("User not found"));
        }
      }, 500);
    });
  }
  