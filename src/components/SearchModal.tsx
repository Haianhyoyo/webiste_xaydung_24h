
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface SearchResult {
    title: string;
    description: string;
    url: string;
    category: string;
}

const SEARCH_DATA: SearchResult[] = [
    { title: 'Trang Chủ', description: 'Trang chính của Xây Dựng 24H', url: '/', category: 'General' },
    { title: 'Giới Thiệu', description: 'Về chúng tôi, tầm nhìn và sứ mệnh', url: '/', category: 'General' },
    { title: 'Liên Hệ', description: 'Thông tin liên hệ và gửi yêu cầu', url: '/lien-he', category: 'General' },
    { title: 'Thiết Kế Kiến Trúc & Nội Thất', description: 'Dịch vụ thiết kế chuyên nghiệp', url: '/dich-vu/thiet-ke', category: 'Service' },
    { title: 'Thiết Kế & Thi Công', description: 'Dịch vụ tổng hợp thiết kế và thi công', url: '/dich-vu/thiet-ke-va-thi-cong', category: 'Service' },
    { title: 'Cổng Nhôm Đúc', description: 'Sản phẩm cổng nhôm đúc sang trọng', url: '/dich-vu/cong-nhom-duc', category: 'Product' },
    { title: 'Cổng CNC', description: 'Cổng cắt CNC nghệ thuật', url: '/dich-vu/cong-cnc', category: 'Product' },
    { title: 'Cổng Hợp Kim Nhôm', description: 'Cổng hợp kim nhôm bền đẹp', url: '/dich-vu/cong-hop-kim-nhom', category: 'Product' },
    { title: 'Cổng Sắt Mỹ Thuật', description: 'Cổng sắt uốn nghệ thuật tinh xảo', url: '/dich-vu/cong-sat-my-thuat', category: 'Product' },
    { title: 'Lan Can & Cầu Thang', description: 'Lan can ban công, cầu thang kính, sắt', url: '/dich-vu/lan-can-va-cau-thang', category: 'Product' },
    { title: 'Thang Máy', description: 'Thang máy gia đình hiện đại', url: '/dich-vu/thang-may', category: 'Product' },
    { title: 'Tự Động Hóa', description: 'Motor cổng tự động, nhà thông minh', url: '/dich-vu/tu-dong-hoa', category: 'Technology' },
    { title: 'Khám Phá Công Nghệ', description: 'Công nghệ sản xuất và VR/AR', url: '/dich-vu/kham-pha-cong-nghe', category: 'Technology' },
    { title: 'Sơn Hoàn Thiện', description: 'Dịch vụ sơn tĩnh điện, hoàn thiện bề mặt', url: '/dich-vu/son-hoan-thien', category: 'Service' },
];

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setQuery('');
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }
        const filtered = SEARCH_DATA.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    }, [query]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-white dark:bg-surface-dark rounded-xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center border-b border-gray-100 dark:border-white/10 p-4">
                    <span className="material-symbols-outlined text-gray-400 text-2xl mr-3">search</span>
                    <input
                        ref={inputRef}
                        type="text"
                        className="flex-1 bg-transparent border-none outline-none text-lg text-secondary dark:text-white placeholder-gray-400"
                        placeholder="Tìm kiếm dịch vụ, sản phẩm..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition text-gray-400"
                    >
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                </div>

                {/* Results or Empty State */}
                <div className="max-h-[60vh] overflow-y-auto">
                    {query === '' ? (
                        <div className="p-8 text-center text-gray-400">
                            <span className="material-symbols-outlined text-4xl mb-2 opacity-50">Manage_search</span>
                            <p>Nhập từ khóa để tìm kiếm</p>
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                                <span className="text-xs font-semibold uppercase text-gray-500 mb-1 w-full">Gợi ý:</span>
                                {['Cổng nhôm đúc', 'Thiết kế', 'Cầu thang', 'Báo giá'].map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => setQuery(tag)}
                                        className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs hover:bg-primary/20 hover:text-primary transition"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : results.length > 0 ? (
                        <div className="py-2">
                            {results.map((result, index) => (
                                <Link
                                    key={index}
                                    href={result.url}
                                    onClick={onClose}
                                    className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition group border-b border-gray-50 dark:border-white/5 last:border-0"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 group-hover:bg-primary group-hover:text-white transition">
                                        <span className="material-symbols-outlined text-xl">
                                            {result.category === 'Product' ? 'inventory_2' :
                                                result.category === 'Service' ? 'design_services' :
                                                    result.category === 'Technology' ? 'memory' : 'article'}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary dark:text-white group-hover:text-primary transition">{result.title}</h4>
                                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{result.description}</p>
                                    </div>
                                    <span className="material-symbols-outlined ml-auto text-gray-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition">chevron_right</span>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 text-center text-gray-500">
                            <p>Không tìm thấy kết quả cho "{query}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
