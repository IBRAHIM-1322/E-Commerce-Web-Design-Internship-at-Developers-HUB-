import { useState } from "react";
import logo from "../assets/Layout/Brand/logo-colored.png";
import playstore from "../assets/Layout/Misc/Group.png";
import Appstore from "../assets/Layout/Misc/market-button.png";
import { api } from "../lib/api";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [language, setLanguage] = useState("English");

  const handleSubscribe = async () => {
    if (!email.trim() || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      await api.subscribe(email.trim());
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      alert(error.message);
    }
  };

  const navLinks = {
    About: ["About Us", "Find store", "Categories", "Blogs"],
    Partnership: ["About Us", "Find store", "Categories", "Blogs"],
    Information: ["Help Center", "Money Refund", "Shipping", "Contact us"],
    "For users": ["Login", "Register", "Settings", "My Orders"],
  };

  const socials = [
    {
      label: "Facebook",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
        </svg>
      ),
    },
    {
      label: "Twitter / X",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 576 512">
          <path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z" />
        </svg>
      ),
    },
  ];

  const languages = ["English", "Arabic", "French", "German", "Spanish", "Chinese"];

  return (
    <footer className="bg-gray-100 mt-12 border-t border-gray-200">

      {/* Newsletter Section */}
      <div className="py-10 border-b border-gray-200 px-4">
        <div className="site-container max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Subscribe to our newsletter</h2>
          <p className="text-gray-500 text-sm mt-2">
            Get daily news on upcoming offers from top verified suppliers worldwide
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center mt-5 gap-2.5 max-w-md mx-auto w-full">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg text-sm transition-colors flex-shrink-0"
            >
              Subscribe
            </button>
          </div>

          {subscribed && (
            <p className="text-green-600 font-medium text-sm mt-3 animate-fade-in">✓ You've successfully subscribed!</p>
          )}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-white py-12">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-4">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Best information about the company goes here but now lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="flex items-center gap-3 text-gray-400 pt-1">
                {socials.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => alert(`Opening ${s.label}`)}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center transition-colors"
                    title={s.label}
                  >
                    {s.svg}
                  </button>
                ))}
              </div>
            </div>

            {/* Nav Link Columns */}
            {Object.entries(navLinks).map(([heading, links]) => (
              <div key={heading} className="space-y-3">
                <h3 className="font-semibold text-gray-800 text-sm">{heading}</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  {links.map((link) => (
                    <li key={link}>
                      <button
                        onClick={() => alert(`Navigating to ${link}`)}
                        className="hover:text-blue-600 transition-colors text-left"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Get App Section */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 text-sm">Get App</h3>
              <div className="space-y-2.5">
                <img
                  src={Appstore}
                  alt="App Store"
                  className="cursor-pointer hover:opacity-80 transition-opacity h-10 w-auto"
                  onClick={() => alert("Opening Apple App Store")}
                />
                <img
                  src={playstore}
                  alt="Google Play"
                  className="cursor-pointer hover:opacity-80 transition-opacity h-10 w-auto"
                  onClick={() => alert("Opening Google Play Store")}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-100 border-t border-gray-200 py-4">
        <div className="site-container flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-sm text-center sm:text-left">
          <p>© 2026 Ecommerce Inc. All rights reserved.</p>

          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 text-xs text-gray-700 bg-white outline-none cursor-pointer hover:border-gray-400"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  🌐 {lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;