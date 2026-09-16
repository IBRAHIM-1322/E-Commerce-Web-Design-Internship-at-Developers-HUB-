import { useState, useRef, useEffect } from "react";
import logo from "../assets/Layout/Brand/logo-colored.png";
import { api } from "../lib/api";

const categories = ["All category", "Electronics", "Clothes", "Home", "Sports", "Toys", "Automotive"];

const currencies = [
  { label: "English, USD", value: "usd" },
  { label: "Pakistan, PKR", value: "pkr" },
  { label: "Saudi, SAR", value: "sar" },
];

const countries = [
  { value: "us", label: "🇺🇸 United States" },
  { value: "de", label: "🇩🇪 Germany" },
  { value: "fr", label: "🇫🇷 France" },
  { value: "pk", label: "🇵🇰 Pakistan" },
  { value: "ae", label: "🇦🇪 Arabic Emirates" },
  { value: "gb", label: "🇬🇧 Great Britain" },
  { value: "cn", label: "🇨🇳 China" },
  { value: "sa", label: "🇸🇦 Saudi Arabia" },
];

const navLinks = ["Hot offers", "Gift boxes", "Projects", "Menu item"];

const helpItems = ["Help Center", "Contact Us", "FAQ", "Shipping Info"];

function Header() {
  const [searchQuery, setSearchQuery]   = useState("");
  const [searchCategory, setSearchCategory] = useState("All category");
  const [currency, setCurrency]         = useState("usd");
  const [country, setCountry]           = useState("us");
  const [cartCount]                     = useState(3);
  const [showHelp, setShowHelp]         = useState(false);
  const [showAllCat, setShowAllCat]     = useState(false);
  const helpRef  = useRef(null);
  const catRef   = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (helpRef.current && !helpRef.current.contains(e.target)) setShowHelp(false);
      if (catRef.current  && !catRef.current.contains(e.target))  setShowAllCat(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = async () => {
    if (!searchQuery.trim()) { alert("Please enter a search term."); return; }
    try {
      const { products } = await api.getProducts({ search: searchQuery.trim(), category: searchCategory });
      alert(`${products.length} product${products.length === 1 ? "" : "s"} found for "${searchQuery}".`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <header className="w-full border-b bg-white">
      <div className="w-10/12 mx-auto">

        {/* ── TOP HEADER ─────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between py-3 gap-4">

          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => alert("Navigating to Home")}>
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Search bar */}
          <div className="flex items-center border rounded overflow-hidden w-1/2 focus-within:border-blue-400 transition-colors">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="px-3 py-2 w-full outline-none text-sm"
            />
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="border-l px-3 py-2 text-gray-600 outline-none text-sm bg-white"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 text-sm transition-colors"
            >
              Search
            </button>
          </div>

          {/* Icon buttons */}
          <div className="flex items-center gap-5 text-gray-600 text-xs flex-shrink-0">

            <button
              onClick={() => alert("Opening Profile")}
              className="flex flex-col items-center hover:text-blue-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
              <p>Profile</p>
            </button>

            <button
              onClick={() => alert("Opening Messages")}
              className="flex flex-col items-center hover:text-blue-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
              </svg>
              <p>Message</p>
            </button>

            <button
              onClick={() => alert("Opening Orders")}
              className="flex flex-col items-center hover:text-blue-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
              <p>Orders</p>
            </button>

            {/* Cart with badge */}
            <button
              onClick={() => alert(`You have ${cartCount} items in your cart`)}
              className="flex flex-col items-center hover:text-blue-500 transition-colors relative"
            >
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
              <p>My cart</p>
            </button>

          </div>
        </div>

        {/* ── NAVIGATION BAR ─────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-2 py-2 text-sm border-t">

          {/* Left nav */}
          <div className="flex items-center gap-6">

            {/* All category dropdown */}
            <div ref={catRef} className="relative">
              <button
                onClick={() => setShowAllCat((p) => !p)}
                className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-colors font-medium"
              >
                ☰ All category
              </button>
              {showAllCat && (
                <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded shadow-lg z-50 min-w-40">
                  {categories.slice(1).map((cat) => (
                    <p
                      key={cat}
                      onClick={() => { setSearchCategory(cat); setShowAllCat(false); }}
                      className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-700"
                    >
                      {cat}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <p
                key={link}
                onClick={() => alert(`Navigating to ${link}`)}
                className="cursor-pointer hover:text-blue-500 transition-colors"
              >
                {link}
              </p>
            ))}

            {/* Help dropdown */}
            <div ref={helpRef} className="relative">
              <button
                onClick={() => setShowHelp((p) => !p)}
                className="cursor-pointer hover:text-blue-500 transition-colors"
              >
                Help ▾
              </button>
              {showHelp && (
                <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded shadow-lg z-50 min-w-36">
                  {helpItems.map((item) => (
                    <p
                      key={item}
                      onClick={() => { alert(`Opening ${item}`); setShowHelp(false); }}
                      className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-700"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Right nav */}
          <div className="flex items-center gap-4">

            {/* Currency / language */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-xs outline-none cursor-pointer"
            >
              {currencies.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>

            {/* Shipping country */}
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-xs outline-none cursor-pointer"
            >
              {countries.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>

          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;