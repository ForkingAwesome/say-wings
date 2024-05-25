"use client";

import React, { useState, useEffect } from "react";
import MarketDropDown from "~~/components/dropdown/MarketDropDown";
import TokenDropDown from "~~/components/dropdown/TokenDropDown";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [amount, setAmount] = useState("");
  const [amountNew, setAmountNew] = useState("");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const handleAmountChange = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setAmount(value);
  };

  const handleAmountChangeNew = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setAmount(value);
  };

  const toggleAdvancedSettings = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  useEffect(() => {
    toast.success("Contract is verified using ChainGPT", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return (
    <div className="px-[400px] py-32">
            <ToastContainer />
      <div className="p-8 bg-white rounded-lg">
        <div className="mb-2 text-black/60 text-sm  uppercase">Select Token</div>
        <div className="relative border-2 border-black p-2 flex justify-between">
          <TokenDropDown />
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="inset-0 bg-transparent w-full text-right px-4 py-2 text-lg font-medium focus:outline-none"
            placeholder="0.00"
          />
        </div>
        <div className="mt-8">
          {isAdvancedOpen && (
            <>
              <div className="mb-4">
                <div className="text-black/60 text-sm mb-4">Select Markets</div>
                <div className="border-2 border-black p-4">
                  <MarketDropDown />
                </div>
              </div>
              <div className="relative border-2 border-black p-2 flex justify-between">
                <div className="text-black/60 w-[20rem] flex items-center">Minimum Yield Rate</div>
                <input
                  type="text"
                  value={amountNew}
                  onChange={handleAmountChangeNew}
                  className="inset-0 bg-transparent w-full text-right px-4 py-2 text-lg font-medium focus:outline-none"
                  placeholder="0.00"
                />
              </div>
            </>
          )}
          <button onClick={toggleAdvancedSettings} className="text-black/60 my-6 flex items-center gap-2 uppercase">
            Advanced Settings {isAdvancedOpen ? <IoMdArrowDropup className="text-xl" />  : <IoMdArrowDropdown className="text-xl" />}
          </button>
        </div>
        <div className="bg-black text-white py-3 flex items-center gap-3 justify-center">Deposit</div>
      </div>
      <div className="text-[18px] font-semibold items-center gap-2 flex justify-center mt-10 text-green-800"><IoShieldCheckmark />The smart contracts at SayWings are <span className="underline">verified</span> by ChainGPT's Audit API and SDK.</div>
    </div>
  );
};

export default Page;
