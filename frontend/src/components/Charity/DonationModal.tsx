import React from "react";

interface Charity {
  title: string;
  desc: string;
  img: string;
}

interface DonationModalProps {
  charity: Charity | null;
  onClose: () => void;
}

export default function DonationModal({
  charity,
  onClose,
}: DonationModalProps) {
  if (!charity) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-2 text-orange-600">
          Donate to {charity.title}
        </h2>
        <img
          src={charity.img}
          alt={charity.title}
          className="w-full h-40 object-cover rounded mb-4"
        />
        <p className="text-gray-600 text-sm mb-4">{charity.desc}</p>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="number"
            placeholder="Amount"
            className="border p-2 w-full rounded"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600"
          >
            Confirm Donation
          </button>
        </form>
      </div>
    </div>
  );
}
