'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProductSidebar() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            question: 'Lựa chọn cổng nhôm đúc liên doanh hay nhập khẩu?',
            answer: 'Cổng nhôm đúc nhập khẩu thường có chất lượng cao hơn, độ bền tốt hơn và thiết kế đa dạng hơn. Tuy nhiên, giá thành sẽ cao hơn so với sản phẩm liên doanh. Chúng tôi khuyên bạn nên chọn sản phẩm nhập khẩu chính hãng để đảm bảo chất lượng lâu dài.',
        },
        {
            question: 'Mất điện cổng nhôm đúc có hoạt động được không?',
            answer: 'Cổng nhôm đúc tự động có thể được trang bị hệ thống dự phòng pin hoặc có thể mở thủ công khi mất điện. Bạn nên tham khảo với nhà cung cấp về các giải pháp dự phòng phù hợp.',
        },
        {
            question: 'Làm thế nào để biết được cổng nhôm đúc có được nhập khẩu chính hãng?',
            answer: 'Sản phẩm chính hãng sẽ có đầy đủ giấy tờ xuất xứ, tem chống hàng giả, và được bảo hành chính thức từ nhà sản xuất. Chúng tôi cam kết cung cấp sản phẩm 100% chính hãng với đầy đủ chứng từ.',
        },
        {
            question: 'Cổng nhôm đúc có sử dụng được điện 1 phase (220v) không?',
            answer: 'Có, hầu hết các loại cổng nhôm đúc tự động đều có thể hoạt động với nguồn điện 1 phase 220v, phù hợp với hệ thống điện gia đình thông thường tại Việt Nam.',
        },
    ];

    return (
        <div className="space-y-6">
            {/* Hotline Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">phone_in_talk</span>
                    HOTLINE BÁN HÀNG 24/7
                </h3>
                <div className="space-y-3">
                    <Link
                        href="tel:0924666288"
                        className="block text-2xl font-bold hover:text-blue-100 transition-colors"
                    >
                        0924.666.288
                    </Link>
                    <div className="text-sm opacity-90">
                        <p className="font-semibold">ĐẠI LÝ - CỘNG TÁC VIÊN</p>
                        <p className="text-xl font-bold mt-1">0924.666.288</p>
                    </div>
                    <div className="text-sm opacity-90">
                        <p className="font-semibold">VP30</p>
                        <p className="font-bold mt-1">Số 13, KĐT Vĩnh Hoàng, Hoàng Văn Thụ, quận Hoàng Mai, TP Hà Nội.</p>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-white/5 p-5 shadow-sm">
                <h3 className="font-bold text-secondary dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">play_circle</span>
                    Video
                </h3>
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-gray-400">videocam</span>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-white/5 p-5 shadow-sm">
                <h3 className="font-bold text-secondary dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">help</span>
                    Câu hỏi thường gặp
                </h3>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full text-left py-3 flex items-start gap-2 hover:text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined text-sm mt-0.5 flex-shrink-0">
                                    {openFaq === index ? 'expand_more' : 'chevron_right'}
                                </span>
                                <span className="text-sm font-medium text-secondary dark:text-white">
                                    {faq.question}
                                </span>
                            </button>
                            {openFaq === index && (
                                <div className="pb-3 pl-6 pr-2">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Installation Banner */}
            <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-90"></div>
                <div className="relative p-6 text-white text-center">
                    <h3 className="text-xl font-bold mb-2">LẮP ĐẶT</h3>
                    <p className="text-2xl font-bold">TOÀN QUỐC</p>
                </div>
            </div>

            {/* Features List */}
            <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-white/5 p-5 shadow-sm">
                <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">check_circle</span>
                        <span className="text-secondary dark:text-white">Sản phẩm chính hãng</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">check_circle</span>
                        <span className="text-secondary dark:text-white">Bảo hành chính hãng</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">check_circle</span>
                        <span className="text-secondary dark:text-white">Giá bán siêu cạnh tranh</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">check_circle</span>
                        <span className="text-secondary dark:text-white">Dịch vụ chuyên nghiệp, tận tâm</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">check_circle</span>
                        <span className="text-secondary dark:text-white">Lắp đặt dàn bảo dưỡng tiện lợi</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">check_circle</span>
                        <span className="text-secondary dark:text-white">Hỗ trợ kỹ thuật 24/7</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
