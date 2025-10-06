"use client";

import { useEffect, useState } from "react";
import { LuSettings2 } from "react-icons/lu";

const DrawerRight = () => {
  const [auths, setAuths] = useState(null);

  useEffect(() => {
    fetch("/api/get-selected-authors", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          for (const id of data) {
            document.getElementById(id).checked = true;
          }
        }
      });
  }, []);

  const selectAuths = () => {
    const formElement = document.getElementById("translations");
    const formData = new FormData(formElement);

    setAuths(formData.getAll("auth"));
  };

  const updateAuths = async () => {
    if (auths !== null) {
      await fetch("/api/set-authors", {
        method: "POST",
        body: JSON.stringify({ auths: auths }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      console.log("Updated authors!");
      setAuths(null);
      window.location.reload();
    }
  };

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        onChange={updateAuths}
      />
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
        <ul className="menu bg-base-200 text-base-content min-h-full w-70 p-4 flex flex-col gap-4">
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
            <form
              id="translations"
              onChange={selectAuths}
              className="flex flex-col gap-1"
            >
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  id="1"
                  name="auth"
                  value={1}
                  className="w-6"
                />
                <label className="text-lg">আহসানুল বায়ান</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="2"
                  name="auth"
                  value={2}
                />
                <label className="text-lg">ফজলুর রহমান</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="3"
                  name="auth"
                  value={3}
                />
                <label className="text-lg">মুহিউদ্দীন খান</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="4"
                  name="auth"
                  value={4}
                />
                <label className="text-lg">মুজিবুর রহমান</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="5"
                  name="auth"
                  value={5}
                />
                <label className="text-lg">তাইসীরুল কুরআন</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="6"
                  name="auth"
                  value={6}
                />
                <label className="text-lg">আবু বকর মুহাম্মাদ যাকারিয়া</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="7"
                  name="auth"
                  value={7}
                />
                <label className="text-lg">The Clear Quran</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="8"
                  name="auth"
                  value={8}
                />
                <label className="text-lg">Abdul Haleem</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="9"
                  name="auth"
                  value={9}
                />
                <label className="text-lg">Jalalayn</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="10"
                  name="auth"
                  value={10}
                />
                <label className="text-lg">Khan And Hilali</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="11"
                  name="auth"
                  value={11}
                />
                <label className="text-lg">Taqi Usmani</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="12"
                  name="auth"
                  value={12}
                />
                <label className="text-lg">Muhammad Marmaduke Pickthall</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="13"
                  name="auth"
                  value={13}
                />
                <label className="text-lg">Saheeh International</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="14"
                  name="auth"
                  value={14}
                />
                <label className="text-lg">Transliteration</label>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <input
                  type="checkbox"
                  className="w-6"
                  id="15"
                  name="auth"
                  value={15}
                />
                <label className="text-lg">Yusuf Ali</label>
              </div>
            </form>
          </details>
        </ul>
      </div>
    </div>
  );
};

export default DrawerRight;
