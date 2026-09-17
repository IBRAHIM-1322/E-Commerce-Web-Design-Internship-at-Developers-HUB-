/* FilterControls intentionally closes over this page's filter state. */
/* eslint-disable react-hooks/static-components */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import watch from "../assets/Image/tech/Watch.png";
import laptop from "../assets/Image/tech/Laptop.png";
import headset from "../assets/Image/tech/Headphones 2.png";
import camera from "../assets/Image/tech/Camera.png";
import phone from "../assets/Image/tech/Phone.png";
import phone2 from "../assets/Image/tech/Phone2.png";
import Ipad from "../assets/Image/tech/Ipad.png";

const allProducts = [
  { id: 1,  name: "GoPro HERO6 4K Action Camera - Black", price: 99.50,  oldPrice: 1128.00, rating: 7.5, orders: 154, shipping: "Free Shipping", verified: true,  brand: "Samsung",  feature: "Metallic",      img: phone2, desc: "GoPro HERO6 Black transforms your adventures into incredible QuikStories right on your phone." },
  { id: 2,  name: "GoPro HERO6 4K Action Camera - Black", price: 99.50,  oldPrice: 1128.00, rating: 5.0, orders: 154, shipping: "Free Shipping", verified: true,  brand: "Apple",    feature: "Metallic",      img: phone, desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." },
  { id: 3,  name: "GoPro HERO6 4K Action Camera - Black", price: 99.50,  oldPrice: null,    rating: 7.5, orders: 154, shipping: "Free Shipping", verified: false, brand: "Huawei",   feature: "Plastic cover", img: phone2, desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat." },
  { id: 4,  name: "GoPro HERO6 4K Action Camera - Black", price: 99.50,  oldPrice: 1028.00, rating: 7.5, orders: 154, shipping: "Free Shipping", verified: true,  brand: "Samsung",  feature: "8GB Ram",       img: Ipad, desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque." },
  { id: 5,  name: "GoPro HERO6 4K Action Camera - Black", price: 99.50,  oldPrice: 1128.00, rating: 7.5, orders: 154, shipping: "Free Shipping", verified: true,  brand: "Apple",    feature: "Metallic",      img: camera, desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit." },
  { id: 6,  name: "GoPro HERO6 4K Action Camera - Black", price: 99.50,  oldPrice: null,    rating: 7.5, orders: 154, shipping: "Free Shipping", verified: false, brand: "Pocco",    feature: "Metallic",      img: phone, desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium." },
  { id: 7,  name: "GoPro HERO6 4K Action Camera - Black", price: 99.50,  oldPrice: 1028.00, rating: 7.5, orders: 154, shipping: "Free Shipping", verified: true,  brand: "Samsung",  feature: "Large Memory",  img: laptop, desc: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet." },
  { id: 8,  name: "GoPro HERO6 4K Action Camera - Black", price: 99.50,  oldPrice: 1128.00, rating: 7.5, orders: 154, shipping: "Free Shipping", verified: true,  brand: "Apple",    feature: "Super power",   img: watch, desc: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores." },
  { id: 9,  name: "GoPro HERO6 4K Action Camera - Black", price: 99.50,  oldPrice: 1128.00, rating: 7.5, orders: 154, shipping: "Free Shipping", verified: true,  brand: "Samsung",  feature: "Metallic",      img: phone2, desc: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore." },
  { id: 10, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50,  oldPrice: null,    rating: 7.5, orders: 154, shipping: "Free Shipping", verified: false, brand: "Lenovo",   feature: "8GB Ram",       img: headset, desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit." },
  { id: 11, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50,  oldPrice: 1128.00, rating: 7.5, orders: 154, shipping: "Free Shipping", verified: true,  brand: "Apple",    feature: "Metallic",      img: Ipad, desc: "Omnis voluptas assumenda est, omnis dolor repellendus temporibus autem quibusdam." },
  { id: 12, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50,  oldPrice: 1028.00, rating: 7.5, orders: 154, shipping: "Free Shipping", verified: true,  brand: "Samsung",  feature: "Plastic cover", img: laptop, desc: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus." },
];

const categoryOptions = ["Mobile accessory", "Electronics", "Smartphones", "Modern tech"];
const brandOptions    = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
const featureOptions  = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"];
const ratingOptions   = [5, 4, 3, 2];
const conditionOptions= ["Any", "Refurbished", "Brand new", "Old items"];

function Stars({ rating }) {
  const full = Math.floor(rating / 2);
  return (
    <span className="flex gap-0.5 items-center">
      {[1,2,3,4,5].map(s => (
        <svg key={s} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
          fill={s <= full ? "#f59e0b" : "#d1d5db"} className="w-3.5 h-3.5">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"/>
        </svg>
      ))}
    </span>
  );
}

function FilterCheckboxGroup({ options, selected, onChange }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? options : options.slice(0, 4);
  return (
    <div className="space-y-2">
      {visible.map(opt => (
        <label key={opt} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer hover:text-gray-900 select-none">
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => onChange(opt)}
            className="accent-blue-600 w-3.5 h-3.5 rounded"
          />
          <span>{opt}</span>
        </label>
      ))}
      {options.length > 4 && (
        <button onClick={() => setShowAll(p => !p)} className="text-blue-600 text-xs font-medium hover:underline pt-0.5">
          {showAll ? "Show less" : "See all"}
        </button>
      )}
    </div>
  );
}

function SidebarSection({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-100 pb-3 mb-3">
      <button className="flex justify-between items-center w-full mb-2" onClick={() => setOpen(p => !p)}>
        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider">{title}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
          className={`w-4 h-4 text-gray-400 transition-transform ${open ? "" : "rotate-180"}`}>
          <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd"/>
        </svg>
      </button>
      {open && children}
    </div>
  );
}

function WebGridViewMain() {
  const navigate = useNavigate();
  const [selBrands,    setSelBrands]    = useState(["Samsung", "Apple", "Pocco"]);
  const [selFeatures,  setSelFeatures]  = useState(["Metallic"]);
  const [selRatings,   setSelRatings]   = useState([4, 3]);
  const [selCategories,setSelCategories]= useState([]);
  const [condition,    setCondition]    = useState("Any");
  const [minPrice,     setMinPrice]     = useState("");
  const [maxPrice,     setMaxPrice]     = useState("");
  const [minApplied,   setMinApplied]   = useState(null);
  const [maxApplied,   setMaxApplied]   = useState(null);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy,       setSortBy]       = useState("Featured");
  const [viewMode,     setViewMode]     = useState("grid");
  const [page,         setPage]         = useState(1);
  const [wishlist,     setWishlist]     = useState([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const perPage = 9;

  useEffect(() => {
    document.body.style.overflow = mobileFilterOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileFilterOpen]);

  const toggle = (setter, getter, val) =>
    setter(getter.includes(val) ? getter.filter(v => v !== val) : [...getter, val]);

  // Active filter tags
  const activeTags = [
    ...selBrands.map(b  => ({ label: b,           type: "brand"   })),
    ...selFeatures.map(f => ({ label: f,           type: "feature" })),
    ...selRatings.map(r  => ({ label: `${r} star`, type: "rating"  })),
    ...selCategories.map(c => ({ label: c,         type: "category"})),
  ];

  const removeTag = (tag) => {
    if (tag.type === "brand")    setSelBrands(selBrands.filter(b => b !== tag.label));
    if (tag.type === "feature")  setSelFeatures(selFeatures.filter(f => f !== tag.label));
    if (tag.type === "rating")   setSelRatings(selRatings.filter(r => `${r} star` !== tag.label));
    if (tag.type === "category") setSelCategories(selCategories.filter(c => c !== tag.label));
  };

  const clearAll = () => {
    setSelBrands([]);
    setSelFeatures([]);
    setSelRatings([]);
    setSelCategories([]);
    setMinApplied(null);
    setMaxApplied(null);
    setMinPrice("");
    setMaxPrice("");
    setCondition("Any");
  };

  const filtered = allProducts.filter(p => {
    if (verifiedOnly && !p.verified) return false;
    if (selBrands.length && !selBrands.includes(p.brand)) return false;
    if (selFeatures.length && !selFeatures.includes(p.feature)) return false;
    if (minApplied !== null && p.price < minApplied) return false;
    if (maxApplied !== null && p.price > maxApplied) return false;
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated  = filtered.slice((page - 1) * perPage, page * perPage);

  const toggleWishlist = (id) =>
    setWishlist(w => w.includes(id) ? w.filter(x => x !== id) : [...w, id]);

  const FilterControls = () => (
    <>
      <SidebarSection title="Category">
        <FilterCheckboxGroup options={categoryOptions} selected={selCategories}
          onChange={v => toggle(setSelCategories, selCategories, v)} />
      </SidebarSection>

      <SidebarSection title="Brands">
        <FilterCheckboxGroup options={brandOptions} selected={selBrands}
          onChange={v => { toggle(setSelBrands, selBrands, v); setPage(1); }} />
      </SidebarSection>

      <SidebarSection title="Features">
        <FilterCheckboxGroup options={featureOptions} selected={selFeatures}
          onChange={v => { toggle(setSelFeatures, selFeatures, v); setPage(1); }} />
      </SidebarSection>

      <SidebarSection title="Price range">
        <div className="flex gap-2 mt-1">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
            className="w-full border border-gray-300 rounded px-2.5 py-1 text-xs outline-none focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            className="w-full border border-gray-300 rounded px-2.5 py-1 text-xs outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={() => { setMinApplied(minPrice ? +minPrice : null); setMaxApplied(maxPrice ? +maxPrice : null); setPage(1); setMobileFilterOpen(false); }}
          className="mt-2.5 w-full bg-blue-50 border border-blue-500 text-blue-600 font-semibold text-xs py-1.5 rounded hover:bg-blue-100 transition-colors"
        >
          Apply Price
        </button>
      </SidebarSection>

      <SidebarSection title="Condition">
        <div className="space-y-2">
          {conditionOptions.map(opt => (
            <label key={opt} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer select-none">
              <input
                type="radio"
                name="condition"
                checked={condition === opt}
                onChange={() => setCondition(opt)}
                className="accent-blue-600 w-3.5 h-3.5"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </SidebarSection>

      <SidebarSection title="Ratings">
        <div className="space-y-2">
          {ratingOptions.map(r => (
            <label key={r} className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={selRatings.includes(r)}
                onChange={() => { toggle(setSelRatings, selRatings, r); setPage(1); }}
                className="accent-blue-600 w-3.5 h-3.5"
              />
              <Stars rating={r * 2} />
            </label>
          ))}
        </div>
      </SidebarSection>
    </>
  );

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

      <div className="flex gap-6 items-start">

        {/* ── DESKTOP SIDEBAR ──────────────────────────────────────────────── */}
        <aside className="hidden md:block w-56 flex-shrink-0 bg-white p-4 rounded-xl border border-gray-200 shadow-sm sticky top-20">
          <FilterControls />
        </aside>

        {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Toolbar */}
          <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 mb-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center justify-between sm:justify-start gap-3">
              <p className="text-xs sm:text-sm text-gray-600">
                <span className="font-bold text-gray-900">{filtered.length}</span> items in{" "}
                <span className="font-semibold text-gray-900">Mobile accessory</span>
              </p>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="md:hidden flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z" clipRule="evenodd" />
                </svg>
                Filters {activeTags.length > 0 && `(${activeTags.length})`}
              </button>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3">
              <label className="flex items-center gap-1.5 text-xs text-gray-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={e => { setVerifiedOnly(e.target.checked); setPage(1); }}
                  className="accent-blue-600 w-3.5 h-3.5 rounded"
                />
                <span>Verified only</span>
              </label>

              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs text-gray-700 outline-none bg-white cursor-pointer hover:border-gray-400"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Orders</option>
              </select>

              {/* View Switcher */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 transition-colors ${viewMode === "grid" ? "bg-blue-50 text-blue-600" : "bg-white text-gray-500 hover:text-gray-700"}`}
                  title="Grid view"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2.5A2.25 2.25 0 0 0 4.25 9h2.5A2.25 2.25 0 0 0 9 6.75v-2.5A2.25 2.25 0 0 0 6.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 2 13.25v2.5A2.25 2.25 0 0 0 4.25 18h2.5A2.25 2.25 0 0 0 9 15.75v-2.5A2.25 2.25 0 0 0 6.75 11h-2.5Zm9-9A2.25 2.25 0 0 0 11 4.25v2.5A2.25 2.25 0 0 0 13.25 9h2.5A2.25 2.25 0 0 0 18 6.75v-2.5A2.25 2.25 0 0 0 15.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 11 13.25v2.5A2.25 2.25 0 0 0 13.25 18h2.5A2.25 2.25 0 0 0 18 15.75v-2.5A2.25 2.25 0 0 0 15.75 11h-2.5Z" clipRule="evenodd"/>
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 transition-colors border-l border-gray-300 ${viewMode === "list" ? "bg-blue-50 text-blue-600" : "bg-white text-gray-500 hover:text-gray-700"}`}
                  title="List view"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Active filter tags */}
          {activeTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 items-center">
              {activeTags.map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-xs text-gray-700 px-2.5 py-1 rounded-md shadow-2xs">
                  {tag.label}
                  <button onClick={() => removeTag(tag)} className="text-gray-400 hover:text-red-500 font-bold ml-0.5">×</button>
                </span>
              ))}
              <button onClick={clearAll} className="text-xs text-blue-600 hover:underline font-medium ml-1">
                Clear all filters
              </button>
            </div>
          )}

          {/* ── GRID VIEW ──────────────────────────────────────────────────── */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {paginated.map(p => (
                <div
                  key={p.id}
                  className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                  onClick={() => navigate("/details/1")}
                >
                  <div className="relative mb-3 flex items-center justify-center h-36 sm:h-44 bg-gray-50 rounded-lg p-2">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                    />
                    <button
                      onClick={e => { e.stopPropagation(); toggleWishlist(p.id); }}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-xs"
                      title="Save to wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={wishlist.includes(p.id) ? "#ef4444" : "none"}
                        stroke={wishlist.includes(p.id) ? "#ef4444" : "#6b7280"}
                        strokeWidth={1.5}
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                      </svg>
                    </button>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-bold text-gray-900">${p.price.toFixed(2)}</span>
                      {p.oldPrice && <span className="text-xs text-gray-400 line-through">${p.oldPrice.toFixed(2)}</span>}
                    </div>

                    <div className="flex items-center gap-1.5 mt-1">
                      <Stars rating={p.rating} />
                      <span className="text-xs text-amber-600 font-semibold">{p.rating}</span>
                    </div>

                    <p className="text-xs text-gray-700 mt-1.5 line-clamp-2 leading-relaxed">{p.name}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── LIST VIEW ──────────────────────────────────────────────────── */}
          {viewMode === "list" && (
            <div className="space-y-4">
              {paginated.map(p => (
                <div
                  key={p.id}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row gap-4 items-center sm:items-start group"
                  onClick={() => navigate("/details/1")}
                >
                  <div className="w-full sm:w-44 h-40 flex-shrink-0 bg-gray-50 rounded-lg p-3 flex items-center justify-center">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">{p.name}</h3>

                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-base sm:text-lg font-bold text-gray-900">${p.price.toFixed(2)}</span>
                      {p.oldPrice && <span className="text-xs text-gray-400 line-through">${p.oldPrice.toFixed(2)}</span>}
                    </div>

                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Stars rating={p.rating} />
                        <span className="text-amber-600 font-semibold">{p.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{p.orders} orders</span>
                      <span>•</span>
                      <span className="text-green-600 font-medium">{p.shipping}</span>
                    </div>

                    <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="flex sm:flex-col justify-end gap-2 w-full sm:w-auto">
                    <button
                      onClick={e => { e.stopPropagation(); toggleWishlist(p.id); }}
                      className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500 flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={wishlist.includes(p.id) ? "#ef4444" : "none"}
                        stroke={wishlist.includes(p.id) ? "#ef4444" : "#6b7280"}
                        strokeWidth={1.5}
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                      </svg>
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); navigate("/details/1"); }}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors flex-1 sm:flex-none"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── PAGINATION ─────────────────────────────────────────────────── */}
          <div className="flex justify-end items-center gap-2 mt-6">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 bg-white"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${
                  page === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 bg-white"
            >
              Next
            </button>
          </div>

        </div>

      </div>

      {/* ── MOBILE FILTER MODAL / DRAWER ────────────────────────────────────── */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col justify-between p-4 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
                <h3 className="font-bold text-base text-gray-900">Filters</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <FilterControls />
            </div>

            <div className="border-t border-gray-200 pt-3 flex gap-2">
              <button
                onClick={clearAll}
                className="w-1/2 py-2 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50"
              >
                Clear All
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-1/2 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default WebGridViewMain;