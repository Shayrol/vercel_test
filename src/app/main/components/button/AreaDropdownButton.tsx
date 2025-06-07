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
    <div className="relative w-full max-w-[250px]" ref={dropdownRef}>
      <div
        className="
          flex justify-between items-center h-12 px-4 py-3 bg-white border-2 
          border-[#e9ecef] rounded-3xl cursor-pointer text-sm text-[#495057] 
          transition-all min-w-[140px] hover:border-[#ff6b6b] hover:bg-[#fff5f5]
          dark:bg-[#343638] dark:border-[#272829]/90 dark:dark:text-[#f3f3f3]
          dark:hover:border-[#ff6b6b] dark:hover:bg-[#fff5f5]/10
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
          absolute top-full left-0 right-0 bg-white border border-[#e9ecef] z-50
          max-h-[300px] overflow-y-auto mt-1 shadow-lg rounded-xl
          dark:bg-[#343638] dark:border-[#272829]/90 
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
              className="border border-[#f1f3f4] dark:border-[#343638]"
              key={regionGroup.title}
            >
              <div className="px-4 py-2 bg-gray-100 text-xs font-semibold text-gray-500 border-b border-[#9a9a9a] dark:bg-[#fff5f5]/10 dark:text-[#f3f3f3]">
                {regionGroup.title}
              </div>
              {regionGroup.items.map((region) => (
                <div
                  key={region}
                  className="px-4 py-[10px] cursor-pointer text-sm text-gray-700 hover:bg-[#f1f3f5] transition-colors duration-200 dark:text-[#f3f3f3] dark:hover:bg-[#fff5f5]/10"
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
