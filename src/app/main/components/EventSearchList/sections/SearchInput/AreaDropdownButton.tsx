"use client";

import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";

type Props = {
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
};

export default function AreaDropdownButton({
  selectedRegion,
  setSelectedRegion,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (region: string) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative w-full max-w-[250px] max-sm:max-w-full"
      ref={dropdownRef}
    >
      <div
        className="
          flex justify-between items-center h-12 px-4 py-3 border-2 
          rounded-3xl cursor-pointer text-sm
          transition-all min-w-[140px] hover:border-[#ff6b6b] hover:bg-[var(--category-hover-bg)]
          bg-[var(--input-bg)] border-[var(--border-main)] text-[var(--text-main)]
          "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm">{selectedRegion}</span>
        <span
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {isOpen && (
        <div
          className="
          absolute top-full left-0 right-0 border z-50
          max-h-[300px] overflow-y-auto mt-1 shadow-lg rounded-xl
          bg-[var(--input-bg)] border-[var(--border-main)]
          "
        >
          {[
            {
              title: "전체 지역",
              items: ["전체 지역"],
            },
            {
              title: "수도권",
              items: ["서울", "경기도", "인천"],
            },
            {
              title: "강원권",
              items: ["강원특별자치도"],
            },
            {
              title: "충청권",
              items: ["충청북도", "충청남도", "대전", "세종특별자치시"],
            },
            {
              title: "전라권",
              items: ["전북특별자치도", "전라남도", "광주"],
            },
            {
              title: "경상권",
              items: ["경상북도", "경상남도", "부산", "대구", "울산"],
            },
            {
              title: "제주권",
              items: ["제주도"],
            },
          ].map((regionGroup) => (
            <div
              className="border border-[var(--border-main)]"
              key={regionGroup.title}
            >
              <div
                className="
                px-4 py-2 text-xs font-semibold border-b 
                bg-[var(--option-title-bg)] text-[var(--text-main)] 
                border-[var(--border-main)]"
              >
                {regionGroup.title}
              </div>
              {regionGroup.items.map((region) => (
                <div
                  key={region}
                  className="
                    px-4 py-[10px] cursor-pointer text-sm
                    transition-colors duration-200 
                    text-[var(--text-main)] bg-[var(--bg-main)] 
                    hover:bg-[var(--option-hover-bg)]/10"
                  onClick={() => handleSelect(region)}
                >
                  {region}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
