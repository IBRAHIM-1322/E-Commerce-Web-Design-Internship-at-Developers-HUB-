import { useState } from "react";
import banner from "../assets/Image/backgrounds/Banner-board-800x420 2.png";
import banner2 from "../assets/Image/backgrounds/Group 969.png";
import banner3 from "../assets/Image/backgrounds/image 98.png";
import banner4 from "../assets/Image/backgrounds/Group 982.png";

import watch from "../assets/Image/tech/Watch.png";
import laptop from "../assets/Image/tech/Laptop.png";
import camera from "../assets/Image/tech/Camera.png";
import headset from "../assets/Image/tech/Headphones.png";
import phone from "../assets/Image/tech/Phone.png";

import chair from "../assets/Image/interior/Soft Chair.png";
import kitchenDishes from "../assets/Image/interior/Kitchen Dishes.png";
import smartWatch from "../assets/Image/interior/Smart Watches.png";
import kitchenMixer from "../assets/Image/interior/Kitchen Mixer.png";
import blender from "../assets/Image/interior/Kitchen Mixer.png";
import homeAppliance from "../assets/Image/interior/Home Appliances.png";
import coffeeMaker from "../assets/Image/interior/Coffee Maker.png";

import Bag from "../assets/Layout/alibaba/Image/cloth/Bag.png";
import Shirt from "../assets/Layout/alibaba/Image/cloth/Shirt.png";
import Coat from "../assets/Layout/alibaba/Image/cloth/Coat.png";
import Shorts from "../assets/Layout/alibaba/Image/cloth/Jeans Shorts.png";
import Wallet from "../assets/Layout/alibaba/Image/cloth/Wallet.png";

import ExtraS1 from "../assets/Image/backgrounds/Mask group.png";
import ExtraS2 from "../assets/Image/backgrounds/Mask group (1).png";
import ExtraS3 from "../assets/Image/backgrounds/image 106.png";
import ExtraS4 from "../assets/Image/backgrounds/image 107.png";
import { api } from "../lib/api";

function Main() {
    const [selectedCategory, setSelectedCategory] = useState("Automobiles");
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const categories = [
        "Automobiles",
        "Clothes and wear",
        "Home interiors",
        "Computer and tech",
        "Tools, equipments",
        "Sports and outdoor",
        "Animal and pets",
        "Machinery tools",
        "More category",
    ];

    const handleJoin = () => alert("Redirecting to Signup Page");
    const handleLogin = () => alert("Redirecting to Login Page");
    const handleLearnMore = () => alert("Navigating to product listings");

    // Deals Section
    const products = [
        { name: "Smart watches", discount: "-25%", img: watch },
        { name: "Laptops", discount: "-15%", img: laptop },
        { name: "GoPro cameras", discount: "-40%", img: camera },
        { name: "Headphones", discount: "-25%", img: headset },
        { name: "Canon cameras", discount: "-25%", img: phone },
    ];

    // Home and Outdoor
    const title = "Home and outdoor";
    const homeProducts = [
        { name: "Soft chairs", price: "USD 19", img: chair },
        { name: "Kitchen dishes", price: "USD 19", img: kitchenDishes },
        { name: "Smart watches", price: "USD 19", img: smartWatch },
        { name: "Kitchen mixer", price: "USD 100", img: kitchenMixer },
        { name: "Blenders", price: "USD 39", img: blender },
        { name: "Home appliance", price: "USD 19", img: homeAppliance },
        { name: "Coffee maker", price: "USD 10", img: coffeeMaker },
        { name: "Soft chair set", price: "USD 29", img: chair },
    ];

    const electronics = [
        { name: "Smart watches", price: "USD 19", img: smartWatch },
        { name: "Cameras", price: "USD 89", img: camera },
        { name: "Headphones", price: "USD 10", img: headset },
        { name: "Smart watches", price: "USD 90", img: watch },
        { name: "Gaming set", price: "USD 35", img: headset },
        { name: "Laptops & PC", price: "USD 340", img: laptop },
        { name: "Smartphones", price: "USD 19", img: phone },
        { name: "Electric kettle", price: "USD 240", img: watch },
    ];

    // Request Section
    const [item, setItem] = useState("");
    const [details, setDetails] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("Pcs");

    const handleSend = async () => {
        if (!item.trim()) {
            alert("Please enter the item you need.");
            return;
        }
        try {
            await api.sendInquiry({ item: item.trim(), details, quantity, unit });
            alert("Inquiry sent successfully.");
            setItem("");
            setDetails("");
            setQuantity("");
        } catch (error) {
            alert(error.message);
        }
    };

    // Recommended Items
    const recommendedItems = [
        { id: 1, name: "T-shirts with multiple colors, for men", price: "$10.30", img: Shirt },
        { id: 2, name: "Jeans shorts for men blue color", price: "$10.30", img: Shorts },
        { id: 3, name: "Brown winter coat medium size", price: "$12.50", img: Coat },
        { id: 4, name: "Jeans bag for travel for men", price: "$34.00", img: Bag },
        { id: 5, name: "Leather wallet", price: "$99.00", img: Wallet },
        { id: 6, name: "Canon camera black, 100x zoom", price: "$9.99", img: camera },
        { id: 7, name: "Headset for gaming with mic", price: "$8.99", img: headset },
        { id: 8, name: "Smartwatch silver color modern", price: "$10.30", img: watch },
        { id: 9, name: "Blue wallet for men leather material", price: "$10.30", img: Wallet },
        { id: 10, name: "Jeans bag for travel for men", price: "$80.95", img: Bag },
    ];

    // Extra Services
    const services = [
        {
            id: 1,
            title: "Source from Industry Hubs",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
            ),
            img: ExtraS1,
        },
        {
            id: 2,
            title: "Customize Your Products",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
            ),
            img: ExtraS2,
        },
        {
            id: 3,
            title: "Fast, reliable shipping by ocean or air",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3Zm-8.27 4a2 2 0 0 1-3.46 0" />
                </svg>
            ),
            img: ExtraS3,
        },
        {
            id: 4,
            title: "Product monitoring and inspection",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            ),
            img: ExtraS4,
        },
    ];

    // Suppliers
    const regions = [
        { name: "Arabic Emirates", url: "shopname.ae", code: "ae" },
        { name: "Australia", url: "shopname.au", code: "au" },
        { name: "United States", url: "shopname.us", code: "us" },
        { name: "Russia", url: "shopname.ru", code: "ru" },
        { name: "Italy", url: "shopname.it", code: "it" },
        { name: "Denmark", url: "denmark.com.dk", code: "dk" },
        { name: "France", url: "shopname.com.fr", code: "fr" },
        { name: "China", url: "shopname.cn", code: "cn" },
        { name: "Great Britain", url: "shopname.co.uk", code: "gb" },
        { name: "Germany", url: "shopname.de", code: "de" },
    ];

    return (
        <div className="site-container py-4 space-y-6">

            {/* ── HERO BANNER & SIDEBAR SECTION ───────────────────────────────────── */}
            <section className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-4">

                    {/* LEFT CATEGORIES (Desktop) */}
                    <div className="hidden lg:block w-56 flex-shrink-0 text-sm">
                        <ul className="space-y-1 text-gray-600">
                            {categories.map((cat) => (
                                <li
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                                        selectedCategory === cat
                                            ? "bg-blue-50 text-blue-600 font-semibold"
                                            : "hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* MAIN HERO BANNER */}
                    <div className="flex-1 relative rounded-xl overflow-hidden min-h-[200px] sm:min-h-[300px] lg:min-h-[360px] flex items-center bg-gray-100">
                        <img
                            src={banner}
                            alt="Hero banner"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div className="relative z-10 p-6 sm:p-10 max-w-md">
                            <p className="text-base sm:text-xl text-gray-700 font-medium">Latest trending</p>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-1 leading-tight">
                                Electronic items
                            </h1>
                            <button
                                onClick={handleLearnMore}
                                className="mt-4 sm:mt-6 bg-white text-gray-900 font-semibold px-5 py-2.5 rounded-lg shadow hover:bg-gray-50 active:scale-95 transition-all text-sm"
                            >
                                Learn more
                            </button>
                        </div>
                    </div>

                    {/* RIGHT USER / PROMO CARDS */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-56 flex-shrink-0 text-sm">

                        {/* User Login Card */}
                        <div className="flex-1 bg-blue-50 p-4 rounded-xl text-center border border-blue-100 flex flex-col justify-center">
                            <div className="flex items-center gap-3 text-left mb-3">
                                <img
                                    className="w-10 h-10 rounded-full bg-white p-1 border border-blue-200"
                                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                    alt="User"
                                />
                                <div>
                                    <p className="text-gray-800 font-semibold leading-tight">Hi, user</p>
                                    <p className="text-xs text-gray-500">Let's get started</p>
                                </div>
                            </div>
                            <button
                                onClick={handleJoin}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 rounded-lg transition-colors text-xs"
                            >
                                Join now
                            </button>
                            <button
                                onClick={handleLogin}
                                className="w-full mt-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium py-1.5 rounded-lg transition-colors text-xs"
                            >
                                Log in
                            </button>
                        </div>

                        {/* Promo Card 1 */}
                        <div
                            onClick={() => alert("Viewing new supplier offers")}
                            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-xl cursor-pointer transition-colors flex flex-col justify-center"
                        >
                            <p className="font-semibold text-xs leading-snug">Get US $10 off</p>
                            <p className="text-xs opacity-90">with a new supplier</p>
                        </div>

                        {/* Promo Card 2 */}
                        <div
                            onClick={() => alert("Opening supplier quote form")}
                            className="flex-1 bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-xl cursor-pointer transition-colors flex flex-col justify-center"
                        >
                            <p className="font-semibold text-xs leading-snug">Send quotes with</p>
                            <p className="text-xs opacity-90">supplier preferences</p>
                        </div>

                    </div>

                </div>
            </section>

            {/* ── DEALS AND OFFERS ─────────────────────────────────────────────────── */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">

                {/* COUNTDOWN TIMER */}
                <div className="p-5 sm:p-6 lg:w-72 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-center">
                    <h2 className="text-lg font-bold text-gray-900">Deals and offers</h2>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Hygiene & tech equipment</p>
                    <div className="flex gap-2 mt-4">
                        {[
                            { val: "04", label: "Days" },
                            { val: "13", label: "Hour" },
                            { val: "34", label: "Min" },
                            { val: "56", label: "Sec" },
                        ].map(({ val, label }) => (
                            <div key={label} className="flex-1 bg-gray-800 text-white text-center py-2 px-1 rounded-lg">
                                <p className="font-bold text-sm sm:text-base leading-none">{val}</p>
                                <span className="text-[10px] text-gray-300">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DEAL PRODUCTS GRID */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-gray-100">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 hover:bg-gray-50 cursor-pointer transition-colors text-center group"
                            onClick={() => alert(`Viewing deal: ${item.name}`)}
                        >
                            <div className="h-24 w-24 flex items-center justify-center mb-2">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                                />
                            </div>
                            <p className="text-xs font-medium text-gray-800 truncate w-full">{item.name}</p>
                            <span className="text-red-600 text-xs font-semibold bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full mt-1.5">
                                {item.discount}
                            </span>
                        </div>
                    ))}
                </div>

            </section>

            {/* ── HOME AND OUTDOOR ────────────────────────────────────────────────── */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">

                {/* Category Banner */}
                <div
                    className="p-6 lg:w-72 bg-cover bg-center flex flex-col justify-between min-h-[160px] lg:min-h-[260px]"
                    style={{ backgroundImage: `url(${banner2})` }}
                >
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 leading-tight">{title}</h2>
                        <p className="text-xs text-gray-600 mt-1">Interior & home tools</p>
                    </div>
                    <button
                        onClick={() => alert("Navigating to home & outdoor")}
                        className="mt-4 bg-white text-gray-800 text-xs font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 active:scale-95 transition-all w-fit"
                    >
                        Source now
                    </button>
                </div>

                {/* Products Grid */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 divide-x divide-y divide-gray-100">
                    {homeProducts.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 hover:bg-gray-50 cursor-pointer transition-colors flex justify-between items-center group"
                            onClick={() => alert(`Viewing: ${item.name}`)}
                        >
                            <div className="pr-2">
                                <p className="font-medium text-xs sm:text-sm text-gray-800 leading-snug">{item.name}</p>
                                <p className="text-gray-400 text-[11px] mt-1">From</p>
                                <p className="text-gray-600 font-semibold text-xs">{item.price}</p>
                            </div>
                            <img
                                src={item.img}
                                alt={item.name}
                                className="h-14 w-14 sm:h-16 sm:w-16 object-contain flex-shrink-0 group-hover:scale-105 transition-transform"
                            />
                        </div>
                    ))}
                </div>

            </section>

            {/* ── CONSUMER ELECTRONICS ────────────────────────────────────────────── */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">

                {/* Category Banner */}
                <div
                    className="p-6 lg:w-72 bg-cover bg-center flex flex-col justify-between min-h-[160px] lg:min-h-[260px]"
                    style={{ backgroundImage: `url(${banner3})` }}
                >
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 leading-tight">
                            Consumer electronics and gadgets
                        </h2>
                    </div>
                    <button
                        onClick={() => alert("Navigating to electronics listings")}
                        className="mt-4 bg-white text-gray-800 text-xs font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 active:scale-95 transition-all w-fit"
                    >
                        Source now
                    </button>
                </div>

                {/* Electronics Grid */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 divide-x divide-y divide-gray-100">
                    {electronics.map((item, index) => (
                        <div
                            key={index}
                            className={`p-4 cursor-pointer transition-colors flex justify-between items-center group ${
                                hoveredIndex === index ? "bg-gray-50" : "bg-white hover:bg-gray-50"
                            }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => alert(`Viewing: ${item.name}`)}
                        >
                            <div className="pr-2">
                                <p className="font-medium text-xs sm:text-sm text-gray-800 leading-snug">{item.name}</p>
                                <p className="text-gray-400 text-[11px] mt-1">From</p>
                                <p className="text-gray-600 font-semibold text-xs">{item.price}</p>
                            </div>
                            <img
                                src={item.img}
                                alt={item.name}
                                className="h-14 w-14 sm:h-16 sm:w-16 object-contain flex-shrink-0 group-hover:scale-105 transition-transform"
                            />
                        </div>
                    ))}
                </div>

            </section>

            {/* ── REQUEST QUOTE / INQUIRY SECTION ─────────────────────────────────── */}
            <section
                className="relative rounded-2xl p-6 sm:p-10 text-white overflow-hidden shadow-md"
                style={{
                    background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #38bdf8 100%)",
                }}
            >
                {/* Background pattern overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
                    style={{ backgroundImage: `url(${banner4})` }}
                />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* Left Text */}
                    <div className="max-w-lg text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                            An easy way to send requests to all suppliers
                        </h2>
                        <p className="text-sm text-blue-100 mt-3 leading-relaxed">
                            Specify your requirement, receive custom quotes within 24 hours, and connect with verified manufacturing partners worldwide.
                        </p>
                    </div>

                    {/* Right Form Card */}
                    <div className="bg-white rounded-xl shadow-2xl p-5 sm:p-6 w-full max-w-md text-gray-800">
                        <h3 className="text-base font-bold text-gray-900 mb-3">Send quote to suppliers</h3>

                        {/* Item input */}
                        <input
                            type="text"
                            placeholder="What item do you need?"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 mb-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />

                        {/* Details textarea */}
                        <textarea
                            placeholder="Type more details (specifications, dimensions, material...)"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            rows={3}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 mb-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-y transition-all"
                        />

                        {/* Quantity + Unit */}
                        <div className="flex gap-2.5 mb-4">
                            <input
                                type="number"
                                placeholder="Quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                            <select
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                                className="w-28 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 bg-white"
                            >
                                <option>Pcs</option>
                                <option>Kg</option>
                                <option>Lbs</option>
                                <option>Tons</option>
                                <option>Boxes</option>
                                <option>Sets</option>
                            </select>
                        </div>

                        {/* Submit button */}
                        <button
                            onClick={handleSend}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors shadow-sm active:scale-98"
                        >
                            Send inquiry
                        </button>
                    </div>

                </div>
            </section>

            {/* ── RECOMMENDED ITEMS ───────────────────────────────────────────────── */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">Recommended items</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                    {recommendedItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border border-gray-200 rounded-xl p-3.5 cursor-pointer flex flex-col justify-between hover:shadow-md hover:border-gray-300 transition-all group"
                            onClick={() => alert(`Viewing: ${item.name}`)}
                        >
                            {/* Product image */}
                            <div className="flex items-center justify-center h-36 sm:h-40 mb-3 bg-gray-50 rounded-lg p-2">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                                />
                            </div>

                            {/* Details */}
                            <div>
                                <p className="text-base font-bold text-gray-900">{item.price}</p>
                                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── EXTRA SERVICES ──────────────────────────────────────────────────── */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">Our extra services</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all transform hover:-translate-y-1 group"
                            onClick={() => alert(`Navigating to: ${service.title}`)}
                        >
                            {/* Image + icon overlap */}
                            <div className="relative h-32 sm:h-36 overflow-hidden bg-gray-100">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Icon badge */}
                                <div className="absolute -bottom-4 right-4 w-10 h-10 rounded-full bg-blue-50 border-2 border-white flex items-center justify-center text-blue-600 shadow-md">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Text */}
                            <div className="pt-6 px-4 pb-4">
                                <p className="text-sm font-semibold text-gray-800 leading-snug">
                                    {service.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SUPPLIERS BY REGION ─────────────────────────────────────────────── */}
            <section className="space-y-4 pb-4">
                <h2 className="text-xl font-bold text-gray-900">Suppliers by region</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                    {regions.map((region, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all"
                            onClick={() => alert(`Navigating to suppliers in ${region.name}`)}
                        >
                            <img
                                src={`https://flagcdn.com/w40/${region.code}.png`}
                                alt={region.name}
                                className="w-8 h-5 sm:w-9 sm:h-6 flex-shrink-0 rounded border border-gray-200 object-cover"
                            />
                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate leading-tight hover:text-blue-600">
                                    {region.name}
                                </p>
                                <p className="text-[11px] text-gray-400 truncate">{region.url}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default Main;