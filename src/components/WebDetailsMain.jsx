import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bag from "../assets/Layout/alibaba/Image/cloth/Bag.png";
import Shirt from "../assets/Layout/alibaba/Image/cloth/Shirt.png";
import Jacket from "../assets/Layout/alibaba/Image/cloth/Brown Jacket.png";
import Coat from "../assets/Layout/alibaba/Image/cloth/Coat.png";
import Shorts from "../assets/Layout/alibaba/Image/cloth/Jeans Shorts.png";
import Wallet from "../assets/Layout/alibaba/Image/cloth/Wallet.png";
import watch from "../assets/Image/tech/Watch.png";
import headset from "../assets/Image/tech/Headphones.png";
import homeAppliance from "../assets/Image/interior/Home Appliances.png";
import kettle from "../assets/Layout/alibaba/Image/tech/image 85.png";

const productImages = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&h=500&fit=crop&auto=format",
];

const relatedProducts = [
  { id: 1, name: "Xiaomi Redmi B Original", price: "$32.00 - $40.00", img: Wallet },
  { id: 2, name: "Smart Fitness Watch Sport", price: "$32.00 - $40.00", img: watch },
  { id: 3, name: "HiFi Wireless Headset", price: "$32.00 - $40.00", img: headset },
  { id: 4, name: "Men Jeans Casual Shorts", price: "$32.00 - $40.00", img: Shorts },
  { id: 5, name: "Electric Stainless Kettle", price: "$32.00 - $40.00", img: kettle },
  { id: 6, name: "Modern Home Appliance", price: "$32.00 - $40.00", img: homeAppliance },
];

const youMayLike = [
  { id: 1, name: "Men Blazers Sets Elegant Formal", price: "$7.00 - $99.50", img: Coat },
  { id: 2, name: "Men Shirt Sleeve Polo Contrast",  price: "$7.00 - $99.50", img: Shirt },
  { id: 3, name: "Men Winter Jacket Waterproof",   price: "$7.00 - $99.50", img: Jacket },
  { id: 4, name: "Basketball Crew Socks Long", price: "$7.00 - $99.50", img: Shirt },
  { id: 5, name: "New Summer Men's Travel Bag", price: "$7.00 - $99.50", img: Bag },
];

const specs = [
  { label: "Model",       value: "#8786867" },
  { label: "Style",       value: "Classic casual style" },
  { label: "Certificate", value: "ISO-698921212" },
  { label: "Size",        value: "34mm x 450mm x 19mm" },
  { label: "Material",    value: "100% Breathable Cotton" },
];

const features = [
  "Premium combed cotton fabric with high durability",
  "Reinforced double-stitched crew neck and hems",
  "Anti-shrinkage & eco-friendly color fastness treatment",
  "Custom embroidery & private label packaging available",
];

function Stars({ rating }) {
  return (
    <span className="flex gap-0.5 items-center">
      {[1,2,3,4,5].map(s => (
        <svg key={s} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
          fill={s <= Math.round(rating) ? "#f59e0b" : "#d1d5db"} className="w-3.5 h-3.5">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"/>
        </svg>
      ))}
    </span>
  );
}

function WebDetailsMain() {
  const navigate = useNavigate();
  const [activeImg,   setActiveImg]   = useState(0);
  const [activeTab,   setActiveTab]   = useState("Description");
  const [savedLater,  setSavedLater]  = useState(false);
  const [activeTier,  setActiveTier]  = useState(0);

  const tiers = [
    { qty: "50-100 pcs",  price: "$98.00" },
    { qty: "100-700 pcs", price: "$90.00" },
    { qty: "700+ pcs",    price: "$78.00" },
  ];

  const tabs = ["Description", "Reviews", "Shipping", "About seller"];

  return (
    <div className="site-container py-4">

      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-4 flex flex-wrap gap-1 items-center">
        {["Home", "Clothings", "Men's wear", "Summer clothing"].map((c, i, arr) => (
          <span key={c} className="flex items-center gap-1">
            <span
              className={i === arr.length - 1 ? "text-gray-800 font-medium" : "cursor-pointer hover:text-blue-600"}
              onClick={() => i === 0 && navigate("/")}
            >
              {c}
            </span>
            {i < arr.length - 1 && <span className="text-gray-400">›</span>}
          </span>
        ))}
      </div>

      {/* ── TOP PRODUCT SECTION ────────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-6 bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">

        {/* Gallery Column */}
        <div className="w-full sm:w-80 lg:w-72 flex-shrink-0 flex flex-col gap-3 mx-auto lg:mx-0">
          <div className="w-full h-64 sm:h-72 border border-gray-200 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50 p-2">
            <img src={productImages[activeImg]} alt="Product preview" className="w-full h-full object-contain rounded-lg" />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {productImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-12 h-12 border-2 rounded-lg cursor-pointer overflow-hidden flex-shrink-0 transition-all ${
                  activeImg === i ? "border-blue-600 shadow-xs" : "border-gray-200 hover:border-gray-400 opacity-80"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info Column */}
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-1.5 text-green-600 bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd"/>
            </svg>
            In stock & Ready to ship
          </div>

          <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-3">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle Fit
          </h1>

          {/* Ratings & Orders */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-gray-500 mb-5 pb-3 border-b border-gray-100">
            <div className="flex items-center gap-1">
              <Stars rating={4.5} />
              <span className="font-bold text-amber-600">9.3</span>
            </div>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-gray-400">
                <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z"/>
              </svg>
              32 reviews
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-gray-400">
                <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
              </svg>
              154 sold
            </span>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 max-w-lg">
            {tiers.map((t, i) => (
              <div
                key={i}
                onClick={() => setActiveTier(i)}
                className={`p-3 rounded-lg border text-center cursor-pointer transition-all ${
                  activeTier === i
                    ? "bg-amber-50 border-amber-500 shadow-2xs"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                }`}
              >
                <p className={`text-sm sm:text-base font-bold ${activeTier === i ? "text-amber-600" : "text-gray-800"}`}>
                  {t.price}
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5">{t.qty}</p>
              </div>
            ))}
          </div>

          {/* Specs Mini Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm">
            <div className="flex gap-2"><span className="text-gray-400 w-28 flex-shrink-0">Price:</span><span className="text-gray-800 font-medium">Negotiable</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-28 flex-shrink-0">Type:</span><span className="text-gray-800 font-medium">Classic clothing</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-28 flex-shrink-0">Material:</span><span className="text-gray-800 font-medium">Cotton blend</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-28 flex-shrink-0">Design:</span><span className="text-gray-800 font-medium">Modern slim</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-28 flex-shrink-0">Customization:</span><span className="text-gray-800 font-medium">Logo & packaging</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-28 flex-shrink-0">Warranty:</span><span className="text-gray-800 font-medium">2 years warranty</span></div>
          </div>
        </div>

        {/* Supplier Sidebar Card */}
        <div className="w-full lg:w-60 flex-shrink-0 border border-gray-200 rounded-xl p-4 flex flex-col gap-3 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-base flex-shrink-0">
              G
            </div>
            <div>
              <p className="text-[11px] text-gray-400">Supplier</p>
              <p className="text-xs font-bold text-gray-900 leading-tight">Guanjoi Trading LLC</p>
            </div>
          </div>

          <div className="space-y-2 text-xs text-gray-600 pt-2 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <img src="https://flagcdn.com/w20/de.png" alt="DE" className="w-4 h-3 rounded-xs object-cover" />
              <span>Germany, Berlin</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd"/>
              </svg>
              <span>Verified Seller</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400">
                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" clipRule="evenodd"/>
              </svg>
              <span>Worldwide shipping</span>
            </div>
          </div>

          <button
            onClick={() => alert("Inquiry form opened")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors mt-1"
          >
            Send Inquiry
          </button>
          <button
            onClick={() => alert("Viewing seller profile")}
            className="w-full border border-gray-300 bg-white text-xs font-semibold text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Seller's Profile
          </button>
          <button
            onClick={() => setSavedLater(p => !p)}
            className="flex items-center justify-center gap-1.5 text-xs text-blue-600 font-medium hover:underline pt-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={savedLater ? "#ef4444" : "none"}
              stroke={savedLater ? "#ef4444" : "#2563eb"}
              strokeWidth={1.5}
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
            </svg>
            {savedLater ? "Saved to wishlist" : "Save for later"}
          </button>
        </div>

      </div>

      {/* ── TABS + YOU MAY LIKE SECTION ─────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">

        {/* Tabs container */}
        <div className="flex-1 min-w-0 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {/* Tabs bar */}
          <div className="flex border-b border-gray-200 overflow-x-auto no-scrollbar bg-gray-50/50">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3.5 text-xs sm:text-sm font-semibold transition-colors flex-shrink-0 ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600 bg-white"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-5 sm:p-6">
            {activeTab === "Description" && (
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Crafted from premium 100% breathable organic cotton, this slim fit long sleeve crew shirt offers unmatched comfort throughout the day. Designed for both casual daily wear and active lifestyles, featuring reinforced stitching and moisture-wicking technology.
                </p>

                {/* Specs table */}
                <div className="border border-gray-200 rounded-xl overflow-hidden my-4">
                  <table className="w-full text-xs sm:text-sm">
                    <tbody>
                      {specs.map((s, i) => (
                        <tr key={s.label} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-4 py-2.5 text-gray-500 font-medium w-36 sm:w-44">{s.label}</td>
                          <td className="px-4 py-2.5 text-gray-800">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Feature bullets */}
                <ul className="space-y-2 pt-2">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-500 flex-shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "Reviews" && (
              <div className="space-y-3 py-2">
                <p className="text-xs sm:text-sm text-gray-700 font-medium">Customer Reviews (32 verified ratings)</p>
                <div className="flex items-center gap-2">
                  <Stars rating={4.8} />
                  <span className="text-sm font-bold text-gray-900">4.8 out of 5 stars</span>
                </div>
              </div>
            )}
            {activeTab === "Shipping" && (
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Worldwide express and standard shipping available. Orders dispatched within 24–48 hours with door-to-door tracking.
              </p>
            )}
            {activeTab === "About seller" && (
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Guanjoi Trading LLC is a top-tier verified manufacturer headquartered in Berlin, Germany with over 10 years of export experience.
              </p>
            )}
          </div>
        </div>

        {/* You May Like Column */}
        <div className="w-full lg:w-64 flex-shrink-0 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 mb-3">You may like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {youMayLike.map(item => (
              <div
                key={item.id}
                onClick={() => alert(`Viewing ${item.name}`)}
                className="flex gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors border border-gray-100"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-lg p-1 flex items-center justify-center flex-shrink-0">
                  <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-800 line-clamp-2 leading-snug">{item.name}</p>
                  <p className="text-xs font-bold text-amber-600 mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── RELATED PRODUCTS ───────────────────────────────────────────────── */}
      <div className="mt-8 bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm">
        <h3 className="text-base font-bold text-gray-900 mb-4">Related products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {relatedProducts.map(item => (
            <div
              key={item.id}
              onClick={() => alert(`Viewing ${item.name}`)}
              className="cursor-pointer group bg-white border border-gray-200 rounded-xl p-3 hover:shadow-md transition-all"
            >
              <div className="h-28 bg-gray-50 rounded-lg p-2 flex items-center justify-center mb-2">
                <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
              </div>
              <p className="text-xs font-medium text-gray-800 line-clamp-2 leading-tight">{item.name}</p>
              <p className="text-xs font-bold text-amber-600 mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── DISCOUNT BANNER ────────────────────────────────────────────────── */}
      <div
        className="mt-8 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white shadow-md"
        style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)" }}
      >
        <div className="text-center sm:text-left">
          <p className="font-extrabold text-lg sm:text-xl">Super discount on orders over $100 USD</p>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">Direct from verified suppliers with global shipping.</p>
        </div>
        <button
          onClick={() => navigate("/grid-view")}
          className="bg-amber-500 hover:bg-amber-600 text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-lg transition-colors flex-shrink-0 shadow-sm active:scale-95"
        >
          Shop Now
        </button>
      </div>

    </div>
  );
}

export default WebDetailsMain;