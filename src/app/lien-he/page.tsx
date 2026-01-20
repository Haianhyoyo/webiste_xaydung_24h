'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Cổng nhôm đúc',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok && data.success) {
                alert('Gửi thành công. Chúng tôi sẽ liên hệ lại sớm.');
                setFormData({ name: '', phone: '', service: 'Cổng nhôm đúc', message: '' });
            } else {
                alert('Gửi thất bại: ' + (data.error || 'Lỗi server'));
            }
        } catch (err) {
            console.error(err);
            alert('Không thể gửi yêu cầu. Vui lòng thử lại sau.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-secondary-dark h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    {/* Placeholder image */}
                    <img alt="Contact Background" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIJ0xcqA5JOB-TVNDHq2mvWKg0krBe4c8_dIK0htkOVoP7jx2-BEKlMlk53X2QmdS2zOW5_BaGmq7sxcqnEgG1Zhtzq2dJZuRrtMjmh-j8ZKvMW2igxn-kJdLB2SNEQEw0ktA3cIt8Xxzdiz3cjqgKhSmtfkFeyhZQprwpjVmVeUseXGfOKSV2lh09rBXJr-2h7eWYBdqHcU5mUoejTNYVjoCAVCl-5kk-13-s61Rb_H1jJIUPi9AUy6RpiEXk8v0yEl5gpNIY61g" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary text-primary font-bold text-sm uppercase tracking-wider mb-4 backdrop-blur-sm">Hỗ Trợ 24/7</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Liên Hệ Với Chúng Tôi</h1>
                    <p className="text-gray-300 max-w-xl mx-auto text-lg">Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp tốt nhất cho ngôi nhà của bạn.</p>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="py-16 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-secondary dark:text-white mb-6 border-l-4 border-primary pl-4">Thông Tin Liên Hệ</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 rounded-full bg-secondary/10 dark:bg-surface-dark flex items-center justify-center flex-shrink-0 mr-4 text-primary">
                                            <span className="material-symbols-outlined text-2xl">location_on</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-secondary dark:text-white mb-1">Địa Chỉ Showroom</h3>
                                            <p className="text-text-muted-light dark:text-text-muted-dark">135 Nam đồng - Đống Đa - Hà Nội</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 rounded-full bg-secondary/10 dark:bg-surface-dark flex items-center justify-center flex-shrink-0 mr-4 text-primary">
                                            <span className="material-symbols-outlined text-2xl">phone_in_talk</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-secondary dark:text-white mb-1">Hotline Tư Vấn</h3>
                                            <p className="text-text-muted-light dark:text-text-muted-dark font-display font-medium text-lg">0587.979.999</p>
                                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">Hỗ trợ kỹ thuật: 086.9851.345</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 rounded-full bg-secondary/10 dark:bg-surface-dark flex items-center justify-center flex-shrink-0 mr-4 text-primary">
                                            <span className="material-symbols-outlined text-2xl">mail</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-secondary dark:text-white mb-1">Email</h3>
                                            <p className="text-text-muted-light dark:text-text-muted-dark">ceoadsup@gmail.com</p>
                                            <p className="text-text-muted-light dark:text-text-muted-dark">sales@congdeppro.vn</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex gap-4">
                                    <a className="flex-1 bg-primary hover:bg-yellow-400 text-secondary font-bold py-3 px-6 rounded shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center" href="tel:0587.979.999">
                                        <span className="material-symbols-outlined mr-2">call</span> Gọi Ngay
                                    </a>
                                    <a className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center" href="https://zalo.me/0587979999" target="_blank">
                                        <span className="font-bold mr-2 text-xl">Z</span> Chat Zalo
                                    </a>
                                </div>
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-md h-80 w-full border border-gray-200 dark:border-secondary-dark relative">
                                <iframe allowFullScreen className="grayscale hover:grayscale-0 transition-all duration-500 w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.924949580649!2d106.67499407481864!3d10.817056658444773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e1f241211f%3A0xc9ef195798144b1f!2zS0RDIENpdHlMYW5kIENlbnRlciBIaWxscw!5e0!3m2!1svi!2s!4v1715694827000!5m2!1svi!2s"></iframe>
                            </div>
                        </div>

                        <div className="bg-surface-light dark:bg-surface-dark p-8 md:p-10 rounded-xl shadow-xl border border-gray-100 dark:border-secondary-dark relative">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -z-0"></div>
                            <h2 className="text-2xl font-display font-bold text-secondary dark:text-white mb-2 relative z-10">Gửi Yêu Cầu Tư Vấn</h2>
                            <p className="text-text-muted-light dark:text-text-muted-dark mb-8 relative z-10">Để lại thông tin, kỹ sư của chúng tôi sẽ liên hệ lại trong vòng 30 phút.</p>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div>
                                    <label className="block text-sm font-medium text-secondary dark:text-gray-300 mb-1" htmlFor="name">Họ tên của bạn <span className="text-red-500">*</span></label>
                                    <input
                                        className="w-full rounded bg-white dark:bg-background-dark border-gray-300 dark:border-secondary-dark text-secondary dark:text-white focus:border-primary focus:ring-primary shadow-sm py-3 px-4"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Nhập họ và tên"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-secondary dark:text-gray-300 mb-1" htmlFor="phone">Số điện thoại <span className="text-red-500">*</span></label>
                                    <input
                                        className="w-full rounded bg-white dark:bg-background-dark border-gray-300 dark:border-secondary-dark text-secondary dark:text-white focus:border-primary focus:ring-primary shadow-sm py-3 px-4"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="Nhập số điện thoại"
                                        required
                                        type="tel"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-secondary dark:text-gray-300 mb-1" htmlFor="service">Dịch vụ quan tâm</label>
                                    <select
                                        className="w-full rounded bg-white dark:bg-background-dark border-gray-300 dark:border-secondary-dark text-secondary dark:text-white focus:border-primary focus:ring-primary shadow-sm py-3 px-4"
                                        id="service"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option>Cổng nhôm đúc</option>
                                        <option>Cổng sắt mỹ thuật</option>
                                        <option>Cổng CNC</option>
                                        <option>Cổng tự động</option>
                                        <option>Lan can & Cầu thang</option>
                                        <option>Khác</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-secondary dark:text-gray-300 mb-1" htmlFor="message">Nội dung cần hỗ trợ</label>
                                    <textarea
                                        className="w-full rounded bg-white dark:bg-background-dark border-gray-300 dark:border-secondary-dark text-secondary dark:text-white focus:border-primary focus:ring-primary shadow-sm py-3 px-4"
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Vui lòng mô tả yêu cầu hoặc kích thước dự kiến..."
                                        rows={4}
                                    ></textarea>
                                </div>
                                <div className="pt-2">
                                    <button
                                        className="w-full bg-secondary hover:bg-secondary-dark dark:bg-primary dark:hover:bg-yellow-400 text-white dark:text-secondary font-bold py-4 px-8 rounded shadow-lg transition transform hover:-translate-y-1 uppercase tracking-wide flex items-center justify-center group disabled:opacity-50"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        {loading ? 'Đang gửi...' : (
                                            <>
                                                Gửi Tin Nhắn <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">send</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
