import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const PaymentHistory = () => {
  const [search, setSearch] = useState("");
   const navigate = useNavigate();

  const payments = [
    { type: "Yearly", plan: "Basic", card: "xxxx xxxx xxx 3456", transaction: "Debit", date: "10th/11/2024 10:15 AM", amount: "₦15,000.00" },
    { type: "Yearly", plan: "Premium", card: "xxxx xxxx xxx 3456", transaction: "Debit", date: "10th/11/2024 10:15 AM", amount: "₦15,000.00" },
    { type: "Yearly", plan: "Basic", card: "xxxx xxxx xxx 3456", transaction: "Debit", date: "10th/11/2024 10:15 AM", amount: "₦15,000.00" },
    { type: "Yearly", plan: "Enterprise", card: "xxxx xxxx xxx 3456", transaction: "Debit", date: "10th/11/2024 10:15 AM", amount: "₦15,000.00" },
    { type: "Yearly", plan: "Basic", card: "xxxx xxxx xxx 3456", transaction: "Debit", date: "10th/11/2024 10:15 AM", amount: "₦15,000.00" },
  ];

  return (
    <div >
        <Header/>
        <div className="p-14 mb-14">

        <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-8 mb-10 md:mr-[200px]">
          <button
            className="text-lg font-medium focus focus:border focus:border-[#B89D63] focus:text-[#B89D63] focus:p-2 focus:rounded-xl"
            onClick={() => navigate("/subscription")}
          >
            Subscribe
          </button>
          <button
            className="text-lg font-medium focus focus:border focus:border-[#B89D63] focus:text-[#B89D63] focus:p-2 focus:rounded-xl"
            onClick={() => navigate("/payment")}
          >
            Payment
          </button>
          <button className="text-lg font-medium focus focus:border focus:border-[#B89D63] focus:text-[#B89D63] focus:p-2 focus:rounded-xl"
             onClick={() => navigate("/payment-history")}
             >
            Payment history
          </button>
        </div>
        
      <div className="flex justify-between items-center">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search history with subscription type / plan"
            className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
        </div>
        <select className="border p-2 rounded-lg">
          <option>From 15th Oct - 30th Oct</option>
        </select>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-4">Payment history</h2>

      <div className="overflow-x-auto bg-gray-100 rounded-lg p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Subscription type</th>
              <th className="p-3">Subscription plan</th>
              <th className="p-3">Card number</th>
              <th className="p-3">Transaction type</th>
              <th className="p-3">Date/Time</th>
              <th className="p-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="bg-red-100">
                <td className="p-3">{payment.type}</td>
                <td className="p-3">{payment.plan}</td>
                <td className="p-3">{payment.card}</td>
                <td className="p-3">{payment.transaction}</td>
                <td className="p-3">{payment.date}</td>
                <td className="p-3 font-bold">{payment.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PaymentHistory;

