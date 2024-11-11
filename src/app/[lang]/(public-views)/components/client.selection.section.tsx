'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const dropdownItems = [
  { label: '해외 개발자 원격 채용', href: '/ko' },
  { label: '외국인 원격 채용 (비개발 직군)', href: '/en' },
  { label: '한국어 가능 외국인 채용', href: '/ko' },
];

export function Selection() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="inline-flex justify-center w-full text-white font-black">
        채용
        <Image src="/arrow-down.svg" alt="arrow-down" width={24} height={24} />
      </button>

      {isOpen && (
        <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {dropdownItems.map((item, index) => (
              <a key={index} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
