"use client";
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

interface Token {
  name: string;
  logo: string;
}

const tokens: Token[] = [
  { name: 'Bitcoin', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { name: 'Ripple', logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
  { name: 'USD Coin', logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png' },
  { name: 'Dai', logo: 'https://cryptologos.cc/logos/dai-dai-logo.png' },
  { name: 'Binance Coin', logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png' },
  { name: 'Litecoin', logo: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png' },
  { name: 'Chainlink', logo: 'https://cryptologos.cc/logos/chainlink-link-logo.png' },
  { name: 'Cardano', logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
  { name: 'Stellar', logo: 'https://cryptologos.cc/logos/stellar-xlm-logo.png' },
  { name: 'Polkadot', logo: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png' },
  { name: 'Bitcoin Cash', logo: 'https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png' },
  { name: 'Wrapped Bitcoin', logo: 'https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png' },
  { name: 'Ethereum Classic', logo: 'https://cryptologos.cc/logos/ethereum-classic-etc-logo.png' },
  { name: 'Cosmos', logo: 'https://cryptologos.cc/logos/cosmos-atom-logo.png' },
  { name: 'Dogecoin', logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
  { name: 'Filecoin', logo: 'https://cryptologos.cc/logos/filecoin-fil-logo.png' },
  { name: 'Aave', logo: 'https://cryptologos.cc/logos/aave-aave-logo.png' },
  { name: 'Uniswap', logo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png' },
  { name: 'Synthetix', logo: 'https://cryptologos.cc/logos/synthetix-network-token-snx-logo.png' }
];

const TokenDropdown: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredTokens = tokens.filter(token =>
    token.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className="relative inline-block text-left w-48">
      <div>
        <button
          type="button"
          className="inline-flex bg-black text-white items-center gap-2 justify-center w-full rounded-md border border-gray-300 shadow-sm p-3 text-sm font-medium hover:bg-black/70 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          Select Token
          <IoIosArrowDown />
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black text-white ring-1 ring-black ring-opacity-5 overflow-y-auto max-h-60">
          <div className="py-1 px-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-white text-xl text-black border border-gray-300 rounded-md focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={handleInputClick}
            />
            {filteredTokens.map((token) => (
              <a
                key={token.name}
                href="#"
                className="flex items-center px-4 py-2 text-sm text-white hover:bg-black/70"
                role="menuitem"
              >
                <img src={token.logo} alt={token.name} className="w-5 h-5 mr-2" />
                {token.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenDropdown;