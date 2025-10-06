"use client";

import { redirect, usePathname } from "next/navigation";
import { useState } from "react";
import { LuSettings2 } from "react-icons/lu";

const DrawerRight = () => {
  const [script, setScript] = useState(null);
  const [auths, setAuths] = useState(null);
  const pathName = usePathname();

  const usePreselected = () => {
    const surahDiv = document?.getElementById("surah");
    const auth = surahDiv?.getAttribute("auth");
    const scriptNo = surahDiv?.getAttribute("script_no");
    const getAuthors = () => {
      if (auth) {
        return JSON.parse(auth);
      }
    };

    const authors = getAuthors();
    const drawer = document.getElementById("my-drawer-4");

    if (authors && drawer.checked) {
      for (let i = 1; i < 16; i++) {
        const checkbox = document.getElementById(i.toString());
        authors.includes(i.toString())
          ? (checkbox.checked = true)
          : (checkbox.checked = false);
      }
    }

    if (scriptNo && drawer.checked) {
      document
        .getElementById(`scr_${scriptNo}`)
        .setAttribute("selected", "selected");
    }
  };

  const selectScript = () => {
    const formElement = document.getElementById("script");
    const formData = new FormData(formElement);
    const scr = formData.get("script");
    setScript(scr);
  };
  const selectAuths = () => {
    const formElement = document.getElementById("translations");
    const formData = new FormData(formElement);

    setAuths(formData.getAll("auth"));
  };

  const updateSelections = async () => {
    setTimeout(() => {
      usePreselected();
    }, 100);
    if (auths) {
      await fetch("/api/set-authors", {
        method: "POST",
        body: JSON.stringify({ auths: auths }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      console.log("Updated authors!");
      setAuths(null);
    }

    if (script) {
      await fetch("/api/set-script", {
        method: "POST",
        body: JSON.stringify({ script: script }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      console.log("Updated Script!");
      setScript(null);
    }

    if (auths || script) {
      redirect(pathName);
    }
  };

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        onChange={updateSelections}
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
            <form
              id="script"
              onChange={selectScript}
              className="flex flex-col gap-1"
            >
              <select name="script" className="text-lg py-2 px-2 text-primary">
                <option id="scr_1" value={[1]}>
                  Uthmani
                </option>
                <option id="scr_2" value={[2]}>
                  Indo Pak
                </option>
              </select>
            </form>
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
