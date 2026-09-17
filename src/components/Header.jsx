import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("All category");
  const [currency, setCurrency] = useState("usd");
  const [country, setCountry] = useState("us");
  const [cartCount] = useState(3);
  const [showHelp, setShowHelp] = useState(false);
  const [showAllCat, setShowAllCat] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const helpRef = useRef(null);
  const catRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (helpRef.current && !helpRef.current.contains(e.target)) setShowHelp(false);
      if (catRef.current && !catRef.current.contains(e.target)) setShowAllCat(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      alert("Please enter a search term.");
      return;
    }
    try {
      const { products } = await api.getProducts({ search: searchQuery.trim(), category: searchCategory });
      alert(`${products.length} product${products.length === 1 ? "" : "s"} found for "${searchQuery}".`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <header className="w-full border-b bg-white sticky top-0 z-40 shadow-sm">
      <div className="site-container">

        {/* ── TOP BAR: LOGO, SEARCH, ICONS ─────────────────────────────────────── */}
        <div className="flex items-center justify-between py-3 gap-2 sm:gap-4">

          {/* Left: Mobile hamburger + Logo */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Hamburger button (Mobile only) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-1.5 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <div className="cursor-pointer flex items-center" onClick={() => navigate("/")}>
              <img src={logo} alt="Brand Logo" className="h-7 sm:h-8 w-auto object-contain" />
            </div>
          </div>

          {/* Center: Search bar (Desktop & Tablet) */}
          <div className="hidden md:flex items-center border-2 border-blue-500 rounded-lg overflow-hidden flex-1 max-w-xl mx-4">
            <input
              type="text"
              placeholder="Search products, brands and categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="px-3.5 py-2 w-full outline-none text-sm text-gray-700"
            />
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="border-l border-gray-200 px-3 py-2 text-gray-600 outline-none text-sm bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <button
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm font-medium transition-colors"
            >
              Search
            </button>
          </div>

          {/* Right: Icon Buttons */}
          <div className="flex items-center gap-3 sm:gap-5 text-gray-600 text-xs flex-shrink-0">

            <button
              onClick={() => alert("Opening Profile")}
              className="hidden sm:flex flex-col items-center hover:text-blue-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
              <span className="text-[11px] mt-0.5">Profile</span>
            </button>

            <button
              onClick={() => alert("Opening Messages")}
              className="hidden lg:flex flex-col items-center hover:text-blue-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
              </svg>
              <span className="text-[11px] mt-0.5">Message</span>
            </button>

            <button
              onClick={() => alert("Opening Orders")}
              className="hidden sm:flex flex-col items-center hover:text-blue-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
              <span className="text-[11px] mt-0.5">Orders</span>
            </button>

            {/* Cart with count badge */}
            <button
              onClick={() => navigate("/cart")}
              className="flex flex-col items-center hover:text-blue-600 transition-colors relative p-1"
            >
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-0.5">My cart</span>
            </button>

          </div>
        </div>

        {/* ── MOBILE SEARCH ROW (Mobile Only) ─────────────────────────────────── */}
        <div className="md:hidden pb-3 pt-1">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50 focus-within:border-blue-500 focus-within:bg-white transition-all">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="px-3 py-2 w-full outline-none text-sm bg-transparent text-gray-700"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Compact mobile search keeps the most important action reachable without
            forcing the desktop navigation to overflow on small screens. */}
        <div className="md:hidden pb-3">
          <div className="flex items-center border border-blue-500 rounded-lg overflow-hidden">
            <input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="min-w-0 flex-1 px-3 py-2 text-sm outline-none"
              aria-label="Search products"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-3 py-2"
              aria-label="Submit search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── DESKTOP NAVIGATION ROW (Desktop & Tablet) ───────────────────────── */}
        <div className="hidden md:flex items-center justify-between py-2.5 text-sm border-t border-gray-100">

          {/* Left nav links */}
          <div className="flex items-center gap-6">

            {/* All category dropdown */}
            <div ref={catRef} className="relative">
              <button
                onClick={() => setShowAllCat((p) => !p)}
                className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600 transition-colors font-medium text-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-500">
                  <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
                <span>All category</span>
              </button>
              {showAllCat && (
                <div className="absolute top-9 left-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-48 py-1">
                  {categories.slice(1).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setSearchCategory(cat); setShowAllCat(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600 text-sm text-gray-700 transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => alert(`Navigating to ${link}`)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-normal"
              >
                {link}
              </button>
            ))}

            {/* Help dropdown */}
            <div ref={helpRef} className="relative">
              <button
                onClick={() => setShowHelp((p) => !p)}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Help
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-gray-400">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
              {showHelp && (
                <div className="absolute top-9 left-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-44 py-1">
                  {helpItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => { alert(`Opening ${item}`); setShowHelp(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600 text-sm text-gray-700 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Right nav selectors */}
          <div className="flex items-center gap-3">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-700 outline-none cursor-pointer hover:border-gray-300"
            >
              {currencies.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>

            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-700 outline-none cursor-pointer hover:border-gray-300"
            >
              {countries.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>

        </div>

      </div>

      {/* ── MOBILE SLIDE-OUT DRAWER ─────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer header */}
              <div className="p-4 border-b flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    U
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Hi, User</p>
                    <p className="text-xs text-gray-500">Welcome back</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-gray-500 hover:bg-gray-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation links in drawer */}
              <div className="p-4 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Categories</h4>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setSearchCategory(cat); setMobileMenuOpen(false); }}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          searchCategory === cat ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-3">
                  <h4 className="text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Quick Links</h4>
                  <div className="space-y-1">
                    {navLinks.map((link) => (
                      <button
                        key={link}
                        onClick={() => { alert(`Navigating to ${link}`); setMobileMenuOpen(false); }}
                        className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {link}
                      </button>
                    ))}
                    {helpItems.map((item) => (
                      <button
                        key={item}
                        onClick={() => { alert(`Opening ${item}`); setMobileMenuOpen(false); }}
                        className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer footer settings */}
            <div className="p-4 border-t bg-gray-50 space-y-3">
              <div>
                <label className="text-xs text-gray-500 block mb-1">Currency & Language</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded px-2.5 py-1.5 text-xs text-gray-700 outline-none"
                >
                  {currencies.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500 block mb-1">Shipping Location</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded px-2.5 py-1.5 text-xs text-gray-700 outline-none"
                >
                  {countries.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}

export default Header;