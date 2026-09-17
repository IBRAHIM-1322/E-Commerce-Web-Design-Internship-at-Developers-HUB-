import { useState } from "react";
import { useNavigate } from "react-router-dom";
import watch from "../assets/Image/tech/Watch.png";
import laptop from "../assets/Image/tech/Laptop.png";
import phone from "../assets/Image/tech/Phone.png";
import Ipad from "../assets/Image/tech/Ipad.png";

import Bag from "../assets/Layout/alibaba/Image/cloth/Bag.png";
import Shirt from "../assets/Layout/alibaba/Image/cloth/Shirt.png";
import Wallet from "../assets/Layout/alibaba/Image/cloth/Wallet.png";

const initialCartItems = [
    { id: 1, name: "T-shirts with multiple colors, for men and lady", size: "medium", color: "blue", material: "Cotton", seller: "Artel Market", price: 78.99, qty: 2, img: Shirt },
    { id: 2, name: "Casual Denim travel bag for modern travelers", size: "large", color: "blue", material: "Denim", seller: "Best factory LLC", price: 39.00, qty: 1, img: Bag },
    { id: 3, name: "Luxury slim leather wallet with RFID protection", size: "standard", color: "black", material: "Genuine Leather", seller: "Artel Market", price: 170.50, qty: 1, img: Wallet },
];

const initialSaved = [
    { id: 1, name: "Apple iPad Pro 11-inch Liquid Retina", price: 99.50, img: Ipad },
    { id: 2, name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, img: phone },
    { id: 3, name: "Smart Watch Series 6 - Silver Aluminum", price: 99.50, img: watch },
    { id: 4, name: "MacBook Pro 14-inch Laptop - Space Gray", price: 99.50, img: laptop },
];

function WebCartMain() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [saved, setSaved] = useState(initialSaved);
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(20);
    const [couponMsg, setCouponMsg] = useState("");

    const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
    const tax = cartItems.length > 0 ? 14 : 0;
    const appliedDiscount = cartItems.length > 0 ? discount : 0;
    const total = Math.max(0, subtotal - appliedDiscount + tax);

    const updateQty = (id, val) => setCartItems(c => c.map(i => i.id === id ? { ...i, qty: +val } : i));
    const removeItem = (id) => setCartItems(c => c.filter(i => i.id !== id));
    const removeAll = () => setCartItems([]);
    const saveForLater = (id) => {
        const item = cartItems.find(i => i.id === id);
        if (item) {
            setSaved(s => [...s, { ...item, id: Date.now() }]);
            removeItem(id);
        }
    };
    const moveToCart = (id) => {
        const item = saved.find(i => i.id === id);
        if (item) {
            setCartItems(c => [...c, { ...item, qty: 1, size: "medium", color: "blue", material: "Plastic", seller: "Seller" }]);
            setSaved(s => s.filter(i => i.id !== id));
        }
    };
    const applyCoupon = () => {
        if (coupon.trim().toUpperCase() === "SAVE10" || coupon.trim().toUpperCase() === "DISCOUNT") {
            setDiscount(50);
            setCouponMsg("Coupon applied! $50 discount.");
        } else {
            setCouponMsg("Invalid coupon code.");
        }
    };

    return (
        <div className="site-container py-6">

            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                My Shopping Cart ({cartItems.reduce((sum, i) => sum + i.qty, 0)} items)
            </h1>

            {/* ── TOP ROW: CART ITEMS LIST + ORDER SUMMARY ──────────────────────── */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">

                {/* Cart Items List */}
                <div className="flex-1 w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    {cartItems.length === 0 ? (
                        <div className="p-12 text-center">
                            <svg className="w-16 h-16 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <p className="text-base font-semibold text-gray-700">Your cart is currently empty</p>
                            <p className="text-xs text-gray-400 mt-1">Explore our wide catalog to find what you love!</p>
                            <button
                                onClick={() => navigate("/grid-view")}
                                className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors"
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item, idx) => (
                            <div
                                key={item.id}
                                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 ${
                                    idx < cartItems.length - 1 ? "border-b border-gray-100" : ""
                                }`}
                            >
                                <div className="flex items-start gap-4 flex-1 min-w-0">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-lg p-1.5 flex items-center justify-center flex-shrink-0 border border-gray-100">
                                        <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-semibold text-gray-900 leading-snug">{item.name}</h3>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Size: <span className="text-gray-700 capitalize">{item.size}</span>, Color: <span className="text-gray-700 capitalize">{item.color}</span>, Material: <span className="text-gray-700 capitalize">{item.material}</span>
                                        </p>
                                        <p className="text-xs text-gray-400 mt-0.5">Seller: {item.seller}</p>
                                        <div className="flex items-center gap-3 mt-3">
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-xs text-red-600 hover:text-red-700 border border-red-200 hover:border-red-400 px-2.5 py-1 rounded-md transition-colors"
                                            >
                                                Remove
                                            </button>
                                            <button
                                                onClick={() => saveForLater(item.id)}
                                                className="text-xs text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-400 px-2.5 py-1 rounded-md transition-colors"
                                            >
                                                Save for later
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between sm:flex-col sm:items-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                                    <p className="text-base font-bold text-gray-900">${(item.price * item.qty).toFixed(2)}</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-500">Qty:</span>
                                        <select
                                            value={item.qty}
                                            onChange={e => updateQty(item.id, e.target.value)}
                                            className="border border-gray-300 rounded-lg px-2.5 py-1 text-xs text-gray-700 outline-none bg-white cursor-pointer hover:border-gray-400"
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                                <option key={n} value={n}>{n}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                    <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 bg-gray-50 border-t border-gray-200">
                        <button
                            onClick={() => navigate("/grid-view")}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                        >
                            ← Continue Shopping
                        </button>
                        {cartItems.length > 0 && (
                            <button onClick={removeAll} className="text-xs font-medium text-red-600 hover:text-red-700 hover:underline">
                                Remove All
                            </button>
                        )}
                    </div>
                </div>

                {/* Order Summary & Coupon */}
                <div className="w-full lg:w-80 flex-shrink-0 space-y-4">

                    {/* Coupon Code */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Have a coupon?</p>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Add coupon code (e.g. SAVE10)"
                                value={coupon}
                                onChange={e => setCoupon(e.target.value)}
                                onKeyDown={e => e.key === "Enter" && applyCoupon()}
                                className="flex-1 border border-gray-300 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-blue-500 transition-all"
                            />
                            <button
                                onClick={applyCoupon}
                                className="bg-blue-50 border border-blue-500 hover:bg-blue-100 text-blue-600 font-semibold px-3 py-1.5 rounded-lg text-xs transition-colors"
                            >
                                Apply
                            </button>
                        </div>
                        {couponMsg && (
                            <p className={`text-xs mt-2 ${couponMsg.includes("Invalid") ? "text-red-500" : "text-green-600"}`}>
                                {couponMsg}
                            </p>
                        )}
                    </div>

                    {/* Cost Breakdown */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-3">
                        <h3 className="text-base font-bold text-gray-900 border-b pb-2.5">Order Summary</h3>
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Subtotal:</span>
                            <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Discount:</span>
                            <span className="text-red-600 font-semibold">- ${appliedDiscount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 border-b border-gray-100 pb-3">
                            <span>Estimated Tax:</span>
                            <span className="text-green-600 font-semibold">+ ${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center pt-1">
                            <span className="text-base font-bold text-gray-900">Total:</span>
                            <span className="text-xl font-extrabold text-gray-900">${total.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={() => alert("Proceeding to checkout")}
                            disabled={cartItems.length === 0}
                            className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors text-sm shadow-sm active:scale-98"
                        >
                            Proceed to Checkout
                        </button>

                        <div className="flex justify-center items-center gap-2 pt-2 text-gray-400">
                            {["VISA", "MASTERCARD", "PAYPAL", "APPLE PAY"].map((p, i) => (
                                <span key={i} className="text-[9px] font-bold px-2 py-1 bg-gray-100 rounded border border-gray-200">
                                    {p}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* ── TRUST BADGES ─────────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                    {
                        title: "Secure Payment",
                        desc: "100% encrypted & secure checkout",
                        icon: (
                            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        ),
                    },
                    {
                        title: "Customer Support",
                        desc: "24/7 dedicated support team",
                        icon: (
                            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ),
                    },
                    {
                        title: "Free Delivery",
                        desc: "On all orders above $100",
                        icon: (
                            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                        ),
                    },
                    {
                        title: "Easy Returns",
                        desc: "Hassle-free 30 days money refund",
                        icon: (
                            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        ),
                    },
                ].map((b) => (
                    <div key={b.title} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-2xs">
                        <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                            {b.icon}
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm font-bold text-gray-800">{b.title}</p>
                            <p className="text-[11px] text-gray-500 mt-0.5">{b.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── SAVED FOR LATER ──────────────────────────────────────────────── */}
            {saved.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Saved for later</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {saved.map(item => (
                            <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
                                <div>
                                    <div className="h-32 bg-gray-50 rounded-lg p-2 flex items-center justify-center mb-3">
                                        <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain" />
                                    </div>
                                    <p className="text-base font-bold text-gray-900">${item.price.toFixed(2)}</p>
                                    <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">{item.name}</p>
                                </div>
                                <button
                                    onClick={() => moveToCart(item.id)}
                                    className="mt-3 inline-flex items-center justify-center gap-1.5 w-full text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 py-2 rounded-lg transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                                        <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                                    </svg>
                                    Move to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* ── DISCOUNT BANNER ──────────────────────────────────────────────── */}
            <div
                className="mt-8 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white shadow-md"
                style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)" }}
            >
                <div className="text-center sm:text-left">
                    <p className="font-extrabold text-lg sm:text-xl leading-tight">Super discount on orders over $100 USD</p>
                    <p className="text-xs sm:text-sm text-blue-100 mt-1">Get special seasonal discounts from certified suppliers worldwide.</p>
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

export default WebCartMain;