"use client";
import { LuSettings2 } from "react-icons/lu";

const DrawerRight = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-ghost btn-circle"
        >
          <LuSettings2 className="text-xl" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col gap-4">
          {/* Sidebar content here */}
          <details>
            <summary className="cursor-pointer btn w-full text-xl btn-secondary">
              Select Script
            </summary>
            <div className="flex flex-col gap-1">
              <select className="text-lg py-2 px-2 text-primary">
                <option>Indo Pak</option>
                <option>Usmani</option>
              </select>
            </div>
          </details>
          <details>
            <summary className="cursor-pointer btn w-full text-xl btn-secondary">
              Select Translations
            </summary>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">আহসানুল বায়ান</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">ফজলুর রহমান</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">মুহিউদ্দীন খান</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">মুজিবুর রহমান</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">তাইসীরুল কুরআন</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">আবু বকর মুহাম্মাদ যাকারিয়া</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">The Clear Quran</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">Abdul Haleem</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">Jalalayn</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">Taqi Usmani</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">Muhammad Marmaduke Pickthall</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">Saheeh International</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">Transliteration</i>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input type="checkbox" className="w-6" />
                <i className="text-lg">Yusuf Ali</i>
              </div>
            </div>
          </details>
        </ul>
      </div>
    </div>
  );
};

export default DrawerRight;
