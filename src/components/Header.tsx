'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import SearchModal from './SearchModal';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDarkMode(true);
        }
    };

    return (
        <>
            {/* Top Bar */}
            <div className="bg-black text-white text-sm py-2 px-4 hidden md:block border-b border-gray-800">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center"><span className="material-symbols-outlined text-sm mr-1">email</span> ceoadsup@gmail.com</span>
                        <span className="flex items-center"><span className="material-symbols-outlined text-sm mr-1">schedule</span> Mon - Sat: 8:00 - 17:30</span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="bg-primary hover:bg-yellow-600 text-black px-4 py-1 rounded text-xs font-bold uppercase transition">
                            <a className="flex items-center hover:text-primary transition" href="tel:0587.979.999"><span className="material-symbols-outlined text-sm mr-1">phone</span> Gọi ngay 0587.979.999</a>
                        </button>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-background-light dark:bg-surface-dark shadow-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer overflow-hidden max-w-[70%] md:max-w-none">
                            <div className="mr-2 md:mr-3 relative h-12 md:h-16 w-auto">
                                <img alt="Cổng Đẹp Pro Logo" className="h-full w-auto object-contain" src="/image/logo-xay-dung-24h.png" />
                            </div>
                            <div className="leading-tight truncate">
                                <h1 className="font-display font-extrabold text-base md:text-xl uppercase tracking-wide text-gray-800 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] dark:text-white truncate">
                                    Xây Dựng <span className="text-primary">24H</span>
                                </h1>
                                <p className="text-[10px] md:text-xs text-gray-500 tracking-wide dark:text-gray-400 hidden sm:block">
                                    Uy tín • Chất lượng • Tận tâm
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex space-x-8">
                            <Link className="font-display font-medium text-primary border-b-2 border-primary pb-1" href="/">Giới Thiệu</Link>

                            {/* Dịch Vụ Dropdown */}
                            <div className="relative group">
                                <Link href="/dich-vu" className="font-display font-medium hover:text-primary transition flex items-center pb-1 text-text-light dark:text-text-dark">
                                    Dịch Vụ
                                    <span className="material-symbols-outlined text-sm ml-1 transition group-hover:rotate-180">expand_more</span>
                                </Link>
                                <ul className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-left">
                                    <li><Link href="/dich-vu/thiet-ke-va-thi-cong" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary">Thiết kế & thi công</Link></li>
                                    <li><Link href="/dich-vu/tu-dong-hoa" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary">Tự động hóa</Link></li>
                                    <li><Link href="/dich-vu/kham-pha-cong-nghe" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary">Khám phá công nghệ</Link></li>
                                    <li><Link href="/dich-vu/son-hoan-thien" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary">Sơn hoàn thiện</Link></li>
                                </ul>
                            </div>

                            {/* Sản Phẩm Dropdown */}
                            <div className="relative group">
                                <Link href="/san-pham" className="font-display font-medium hover:text-primary transition flex items-center pb-1 text-text-light dark:text-text-dark">
                                    Sản Phẩm
                                    <span className="material-symbols-outlined text-sm ml-1 transition group-hover:rotate-180">expand_more</span>
                                </Link>
                                <ul className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-left">
                                    <li><Link href="/dich-vu/cong-nhom-duc" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary">Cổng nhôm đúc</Link></li>
                                    <li><Link href="/dich-vu/cong-cnc" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary">Cổng CNC</Link></li>
                                    <li><Link href="/dich-vu/cong-hop-kim-nhom" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary">Cổng hợp kim nhôm</Link></li>
                                    <li><Link href="/dich-vu/cong-sat-my-thuat" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary">Cổng sắt mỹ thuật</Link></li>
                                    <li><Link href="/dich-vu/lan-can-va-cau-thang" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary">Lan can & Cầu thang</Link></li>
                                    <li><Link href="/dich-vu/thang-may" className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary">Thang máy</Link></li>
                                </ul>
                            </div>

                            <Link className="font-display font-medium hover:text-primary transition pb-1 text-text-light dark:text-text-dark" href="/du-an">Dự Án</Link>
                            <Link className="font-display font-medium hover:text-primary transition pb-1 text-text-light dark:text-text-dark" href="/lien-he">Liên Hệ</Link>
                        </nav>

                        {/* Icons */}
                        <div className="flex items-center space-x-4">
                            <button
                                aria-label="Search"
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition text-text-light dark:text-text-dark"
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <span className="material-symbols-outlined text-xl">search</span>
                            </button>
                            <button
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition text-primary dark:text-yellow-300"
                                onClick={toggleDarkMode}
                            >
                                {isDarkMode ?
                                    <span className="material-symbols-outlined text-xl">light_mode</span> :
                                    <span className="material-symbols-outlined text-xl dark:block">dark_mode</span>
                                }
                            </button>
                            <button className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition text-text-light dark:text-text-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                <span className="material-symbols-outlined text-2xl">menu</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 p-4 max-h-[80vh] overflow-y-auto">
                        <nav className="flex flex-col space-y-4">
                            <Link className="font-display font-medium text-text-light dark:text-text-dark hover:text-primary transition" href="/">Giới Thiệu</Link>

                            {/* Dịch Vụ Submenu for Mobile */}
                            <div>
                                <button
                                    className="font-display font-medium text-text-light dark:text-text-dark hover:text-primary transition flex items-center justify-between w-full"
                                    onClick={() => {
                                        const subMenu = document.getElementById('mobile-dichvu-submenu');
                                        if (subMenu) {
                                            subMenu.classList.toggle('hidden');
                                        }
                                    }}
                                >
                                    Dịch Vụ
                                    <span className="material-symbols-outlined text-sm ml-1">expand_more</span>
                                </button>
                                <ul id="mobile-dichvu-submenu" className="mt-2 pl-4 space-y-2 hidden border-l border-gray-200 dark:border-gray-700">
                                    <li><Link href="/dich-vu/thiet-ke-va-thi-cong" className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition">Thiết kế & thi công</Link></li>
                                    <li><Link href="/dich-vu/tu-dong-hoa" className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition">Tự động hóa</Link></li>
                                    <li><Link href="/dich-vu/kham-pha-cong-nghe" className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition">Khám phá công nghệ</Link></li>
                                    <li><Link href="/dich-vu/son-hoan-thien" className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition">Sơn hoàn thiện</Link></li>
                                </ul>
                            </div>

                            {/* Sản Phẩm Submenu for Mobile */}
                            <div>
                                <button
                                    className="font-display font-medium text-text-light dark:text-text-dark hover:text-primary transition flex items-center justify-between w-full"
                                    onClick={() => {
                                        const subMenu = document.getElementById('mobile-sanpham-submenu');
                                        if (subMenu) {
                                            subMenu.classList.toggle('hidden');
                                        }
                                    }}
                                >
                                    Sản Phẩm
                                    <span className="material-symbols-outlined text-sm ml-1">expand_more</span>
                                </button>
                                <ul id="mobile-sanpham-submenu" className="mt-2 pl-4 space-y-2 hidden border-l border-gray-200 dark:border-gray-700">
                                    <li><Link href="/dich-vu/cong-nhom-duc" className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition">Cổng nhôm đúc</Link></li>
                                    <li><Link href="/dich-vu/cong-cnc" className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition">Cổng CNC</Link></li>
                                    <li><Link href="/dich-vu/cong-hop-kim-nhom" className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition">Cổng hợp kim nhôm</Link></li>
                                    <li><Link href="/dich-vu/cong-sat-my-thuat" className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition">Cổng sắt mỹ thuật</Link></li>
                                    <li><Link href="/dich-vu/lan-can-va-cau-thang" className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition">Lan can & Cầu thang</Link></li>
                                    <li><Link href="/dich-vu/thang-may" className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition">Thang máy</Link></li>
                                </ul>
                            </div>

                            <Link className="font-display font-medium text-text-light dark:text-text-dark hover:text-primary transition" href="/du-an">Dự Án</Link>
                            <Link className="font-display font-medium text-text-light dark:text-text-dark hover:text-primary transition" href="/lien-he">Liên Hệ</Link>
                        </nav>
                    </div>
                )}
            </header>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
