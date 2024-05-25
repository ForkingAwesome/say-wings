"use client";

import React, { useState } from "react";
import MarketDropDown from "~~/components/dropdown/MarketDropDown";
import TokenDropDown from "~~/components/dropdown/TokenDropDown";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

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

  return (
    <div className="p-32">
      <div className="p-8 bg-white rounded-lg">
        <div className="mb-2 text-black/60 text-sm">Select Token</div>
        <div className="relative border-2 border-black p-2 flex justify-between">
          <TokenDropDown />
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="inset-0 bg-transparent w-full text-right px-4 py-2 text-xl font-medium focus:outline-none"
            placeholder="Enter Amount"
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
                  className="inset-0 bg-transparent w-full text-right px-4 py-2 text-xl font-medium focus:outline-none"
                  placeholder="Enter Amount"
                />
              </div>
            </>
          )}
          <button onClick={toggleAdvancedSettings} className="text-black/60 mt-6 flex items-center gap-2">
            Advanced Settings {isAdvancedOpen ? <IoMdArrowDropup className="text-xl" />  : <IoMdArrowDropdown className="text-xl" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
