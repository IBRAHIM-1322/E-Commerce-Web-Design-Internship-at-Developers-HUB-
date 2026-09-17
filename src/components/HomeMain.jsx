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
import Jacket from "../assets/Layout/alibaba/Image/cloth/Brown Jacket.png";
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
    ];

    const electronics = [
        { name: "Smart watches", price: "USD 19", img: smartWatch },
        { name: "Cameras", price: "USD 89", img: camera },
        { name: "Headphones", price: "USD 10", img: headset },
        { name: "Smart watches", price: "USD 90", img: smartWatch },
        { name: "Gaming set", price: "USD 35", img: headset },
        { name: "Laptops & PC", price: "USD 340", img: laptop },
        { name: "Smartphones", price: "USD 19", img: phone },
        { name: "Electric kettle", price: "USD 240", img: watch }, // ✅ replace with kettle img when available
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

    // Recomended Items

    const [hoveredId, setHoveredId] = useState(null);

    const recommendedItems = [
        {
            id: 1,
            name: "T-shirts with multiple colors, for men",
            price: "$10.30",
            img: Shirt,
        },
        {
            id: 2,
            name: "Jeans shorts for men blue color",
            price: "$10.30",
            img: Shorts,
        },
        {
            id: 3,
            name: "Brown winter coat medium size",
            price: "$12.50",
            img: Coat,
        },
        {
            id: 4,
            name: "Jeans bag for travel for men",
            price: "$34.00",
            img: Bag,
        },
        {
            id: 5,
            name: "Leather wallet",
            price: "$99.00",
            img: Wallet,
        },
        {
            id: 6,
            name: "Canon camera black, 100x zoom",
            price: "$9.99",
            img: camera,
        },
        {
            id: 7,
            name: "Headset for gaming with mic",
            price: "$8.99",
            img: headset,
        },
        {
            id: 8,
            name: "Smartwatch silver color modern",
            price: "$10.30",
            img: watch,
        },
        {
            id: 9,
            name: "Blue wallet for men leather metarfial",
            price: "$10.30",
            img: Wallet,
        },
        {
            id: 10,
            name: "Jeans bag for travel for men",
            price: "$80.95",
            img: Bag,
        },
    ];


    // Extra Services
    const services = [
        {
            id: 1,
            title: "Source from Industry Hubs",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="600px" height="600px" viewBox="0 0 24 24" fill="none">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            img: ExtraS1,
        },
        {
            id: 2,
            title: "Customize Your Products",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.66 17 22 12 22C7 22 3 20.66 3 19V5M21 9.72021C21 11.3802 17 12.7202 12 12.7202C7 12.7202 3 11.3802 3 9.72021M21 14.44C21 16.1 17 17.44 12 17.44C7 17.44 3 16.1 3 14.44" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            img: ExtraS2,
        },
        {
            id: 3,
            title: "Fast, reliable shipping by ocean or air",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024"><path fill="#000000" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z" /></svg>,
            img: ExtraS3,
        },
        {
            id: 4,
            title: "Product monitoring and inspection",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            img: ExtraS4,
        },
    ];

    const [hoveredid, setHoveredid] = useState(null);


    //  Suppliers

    const regions = [
        { name: "Arabic Emirates", url: "shopname.ae", code: "ae" },
        { name: "Australia", url: "shopname.ae", code: "au" },
        { name: "United States", url: "shopname.ae", code: "us" },
        { name: "Russia", url: "shopname.ru", code: "ru" },
        { name: "Italy", url: "shopname.it", code: "it" },
        { name: "Denmark", url: "denmark.com.dk", code: "dk" },
        { name: "France", url: "shopname.com.fr", code: "fr" },
        { name: "Arabic Emirates", url: "shopname.ae", code: "ae" },
        { name: "China", url: "shopname.ae", code: "cn" },
        { name: "Great Britain", url: "shopname.co.uk", code: "gb" },
    ];

    const [hoveredI, setHoveredI] = useState(null);

    return (
        <>
            {/* ── BANNER ─────────────────────────────────────────────────────────── */}
            <section className="my-3 h-auto w-10/12 mx-auto bg-white gap-3 flex justify-center">

                {/* LEFT SIDEBAR */}
                <div className="bg-white my-3 px-3 text-sm">
                    <ul className="text-gray-600">
                        {categories.map((cat) => (
                            <li
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1 rounded cursor-pointer hover:bg-gray-200 ${selectedCategory === cat ? "bg-gray-200 font-medium" : ""
                                    }`}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* BANNER IMAGE */}
                <div className="relative my-3">
                    <img src={banner} alt="hero" className="w-full h-auto object-fill rounded-lg" />
                    <div className="absolute top-10 left-10">
                        <p className="text-xl text-gray-700">Latest trending</p>
                        <h1 className="text-3xl font-bold">Electronic items</h1>
                        <button
                            onClick={handleLearnMore}
                            className="mt-4 bg-white px-4 py-2 rounded shadow hover:bg-gray-100"
                        >
                            Learn more
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="my-3 px-5 flex flex-col gap-2 text-sm h-80">

                    {/* LOGIN CARD */}
                    <div className="bg-blue-100 p-3 rounded-lg text-center">
                        <div className="flex">
                            <img
                                className="w-11 h-11"
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                alt="user"
                            />
                            <p className="text-gray-700 w-48">Hi, user <br /> let's get started</p>
                        </div>
                        <button
                            onClick={handleJoin}
                            className="mt-3 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
                        >
                            Join now
                        </button>
                        <button
                            onClick={handleLogin}
                            className="mt-2 w-full border py-1 rounded bg-white hover:bg-gray-100"
                        >
                            Log in
                        </button>
                    </div>

                    {/* OFFER CARD */}
                    <div
                        onClick={() => alert("Viewing new supplier offers")}
                        className="bg-orange-400 text-white p-4 rounded-lg cursor-pointer hover:opacity-90"
                    >
                        Get US $10 off <br /> with a new supplier
                    </div>

                    {/* QUOTE CARD */}
                    <div
                        onClick={() => alert("Opening supplier quote form")}
                        className="bg-teal-400 text-white p-4 rounded-lg cursor-pointer hover:opacity-90"
                    >
                        Send quotes with <br /> supplier preferences
                    </div>

                </div>

            </section>

            {/* ── DEALS SECTION ──────────────────────────────────────────────────── */}
            <section className="w-10/12 mx-auto flex justify-end bg-white mt-6">

                {/* TIMER */}
                <div className="p-6 w-1/3 border-r">
                    <h2 className="text-lg font-semibold">Deals and offers</h2>
                    <p className="text-gray-500 text-sm">Hygiene equipments</p>
                    <div className="flex gap-2 mt-4">
                        {[{ val: "04", label: "Days" }, { val: "13", label: "Hour" }, { val: "34", label: "Min" }, { val: "56", label: "Sec" }].map(
                            ({ val, label }) => (
                                <div key={label} className="bg-gray-700 text-white text-center px-3 py-2 rounded">
                                    <p className="font-semibold">{val}</p>
                                    <span className="text-xs">{label}</span>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* DEAL PRODUCTS */}
                {products.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 px-6 border-r last:border-r-0 hover:bg-gray-50 cursor-pointer"
                    >
                        <img src={item.img} alt={item.name} className="h-24 object-contain" />
                        <p className="mt-2 text-sm">{item.name}</p>
                        <span className="text-red-500 text-sm bg-red-100 px-3 py-1 rounded-full mt-2">
                            {item.discount}
                        </span>
                    </div>
                ))}

            </section>

            {/* ── HOME AND OUTDOOR ───────────────────────────────────────────────── */}
            <section className="w-10/12 mx-auto flex mt-6 bg-white">

                {/* LEFT BANNER */}
                <div
                    className="p-6 flex flex-col justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner2})`, width: "31vw" }}
                >
                    <h2 className="text-xl font-semibold w-32">{title}</h2>
                    <button className="mt-4 bg-white px-4 py-2 rounded shadow w-fit hover:bg-gray-100">
                        Source now
                    </button>
                </div>

                {/* HOME PRODUCTS */}
                <div className="col-span-4 grid grid-cols-4">
                    {homeProducts.map((item, index) => (
                        <div
                            key={index}
                            className="border p-4 hover:bg-gray-50 cursor-pointer flex justify-between items-center"
                        >
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-gray-400 text-sm">From</p>
                                <p className="text-gray-500 text-sm">{item.price}</p>
                            </div>
                            <img src={item.img} alt={item.name} className="h-16 object-contain" />
                        </div>
                    ))}
                </div>

            </section>

            {/* ── ELECTRONICS SECTION ────────────────────────────────────────────── */}

            <section className="w-10/12 mx-auto flex mt-6 bg-white">

                {/* LEFT BANNER */}
                <div
                    className="p-6 flex flex-col justify-between bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner3})`, width: "26.4vw" }}
                >
                    <h2 className="text-xl font-bold text-gray-800 leading-snug">
                        Consumer <br /> electronics and <br /> gadgets
                    </h2>


                    <button
                        onClick={() => alert("Navigating to electronics listings")}
                        className="bg-white text-gray-800 text-sm px-4 py-2 rounded shadow-sm hover:bg-gray-100 w-fit"
                    >
                        Source now
                    </button>
                </div>

                {/* ELECTRONICS GRID */}
                <div className="flex-1 grid grid-cols-4 border-l border-t border-gray-200">
                    {electronics.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 border-b border-r border-gray-200 cursor-pointer"
                            style={{
                                backgroundColor: hoveredIndex === index ? "#f9fafb" : "#fff",
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => alert(`Viewing ${item.name}`)}
                        >
                            <div>
                                <p className="font-medium text-sm text-gray-800">{item.name}</p>
                                <p className="text-gray-400 text-xs mt-0.5">From</p>
                                <p className="text-gray-500 text-xs">{item.price}</p>
                            </div>
                            <img
                                src={item.img}
                                alt={item.name}
                                className="h-16 w-16 object-contain"
                            />
                        </div>
                    ))}
                </div>

            </section>

            {/* -------------------------------------------Request Section ------------------------------------------------------*/}
            <section
                className="w-10/12 mx-auto relative py-16 px-8 mt-6 flex items-center justify-between overflow-hidden"
                style={{
                    background: "linear-gradient(to right, #1565c0 0%, #42a5d5aa 60%, #80d8ea55 100%)",
                    minHeight: "260px",
                }}
            >
                {/* Background warehouse image overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                        backgroundImage: { banner4 }
                    }}
                />

                {/* LEFT TEXT */}
                <div className="relative z-10 text-white max-w-sm">
                    <h2 className="text-3xl font-bold leading-snug mb-3">
                        An easy way to send <br /> requests to all suppliers
                    </h2>
                    <p className="text-sm text-blue-100 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt.
                    </p>
                </div>

                {/* RIGHT FORM CARD */}
                <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 w-full max-w-md ml-auto">
                    <h3 className="text-base font-bold text-gray-800 mb-4">
                        Send quote to suppliers
                    </h3>

                    {/* Item input */}
                    <input
                        type="text"
                        placeholder="What item you need?"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 placeholder-gray-400 mb-3 outline-none focus:border-blue-400"
                    />

                    {/* Details textarea */}
                    <textarea
                        placeholder="Type more details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        rows={4}
                        className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 placeholder-gray-400 mb-3 outline-none focus:border-blue-400 resize-y"
                    />

                    {/* Quantity + Unit row */}
                    <div className="flex gap-3 mb-4">
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400"
                        />
                        <select
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400 bg-white"
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
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2 rounded transition-colors"
                    >
                        Send inquiry
                    </button>
                </div>
            </section>

            {/* ---------------------------------------------------Recommended Items---------------------------------------------- */}
            <section className="w-10/12 mx-auto mt-8 bg-gray-100">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Recommended items</h2>

                <div className="grid grid-cols-5 gap-3">
                    {recommendedItems.map((item) => (
                        <div
                            key={item.id}
                            className="border border-gray-200 rounded-lg p-3 cursor-pointer flex flex-col"
                            style={{
                                backgroundColor: hoveredId === item.id ? "#f9fafb" : "#fff",
                                boxShadow: hoveredId === item.id ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                                transition: "all 0.15s ease",
                            }}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => alert(`Viewing: ${item.name}`)}
                        >
                            {/* Product image */}
                            <div className="flex items-center justify-center h-40 mb-3">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            {/* Price */}
                            <p className="text-sm font-semibold text-gray-800">{item.price}</p>

                            {/* Name */}
                            <p className="text-xs text-gray-500 mt-0.5 leading-snug">{item.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/*----------------------------------------- Extra Services------------------------------------------------- */}
            <section className="w-10/12 mx-auto mt-8 bg-gray-100">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Our extra services</h2>

                <div className="grid grid-cols-4 gap-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="border border-gray-200 rounded-md overflow-hidden cursor-pointer"
                            style={{
                                boxShadow: hoveredId === service.id ? "0 4px 16px rgba(0,0,0,0.10)" : "0 1px 4px rgba(0,0,0,0.05)",
                                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                                transform: hoveredId === service.id ? "translateY(-2px)" : "translateY(0)",
                            }}
                            onMouseEnter={() => setHoveredId(service.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => alert(`Navigating to: ${service.title}`)}
                        >
                            {/* Image + icon overlap */}
                            <div className="relative">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-36 object-cover"
                                />
                                {/* Icon badge — half overlapping the image bottom edge */}
                                <div
                                    className="absolute -bottom-5 right-5 w-11 h-11 p-2 rounded-full bg-blue-50 border border-gray-200 flex items-center justify-center text-lg shadow-sm"
                                >
                                    {service.icon}
                                </div>
                            </div>

                            {/* Text */}
                            <div className="pt-8 px-4 pb-4">
                                <p className="text-sm font-semibold text-gray-800 leading-snug">
                                    {service.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Suppliers */}
            <section className="w-10/12 mx-auto mt-8 bg-gray-100 pb-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Suppliers by region</h2>

                <div className="grid grid-cols-5 gap-x-6 gap-y-4">
                    {regions.map((region, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => alert(`Navigating to suppliers in ${region.name}`)}
                        >
                            {/* Flag image */}
                            <img
                                src={`https://flagcdn.com/w40/${region.code}.png`}
                                alt={region.name}
                                className="w-9 h-6 flex-shrink-0 rounded-sm border border-gray-200 object-cover"
                            />

                            {/* Text */}
                            <div>
                                <p
                                    className="text-sm font-medium leading-tight"
                                    style={{ color: hoveredIndex === index ? "#2563eb" : "#1f2937" }}
                                >
                                    {region.name}
                                </p>
                                <p className="text-xs text-gray-400">{region.url}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Main;