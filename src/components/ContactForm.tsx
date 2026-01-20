'use client';

import { useState } from 'react';

interface ContactFormProps {
    serviceName?: string;
    className?: string;
    titleColor?: 'white' | 'black';
}

export default function ContactForm({ serviceName, className = '', titleColor = 'white' }: ContactFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: serviceName || 'Tư vấn chung',
    });

    const isWhiteTitle = titleColor === 'white';
    const titleClasses = isWhiteTitle
        ? "text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]"
        : "text-black drop-shadow-[2px_2px_0_rgba(255,255,255,0.8)]";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    message: `Đăng ký tư vấn dịch vụ: ${formData.service}`,
                }),
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            setStatus('success');
            setFormData(prev => ({ ...prev, name: '', phone: '' }));
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`flex flex-col gap-4 bg-[#221e10] p-8 rounded-2xl border border-[#393628] shadow-2xl ${className}`}>
            <h3 className={`text-2xl font-black mb-2 uppercase tracking-wide ${titleClasses}`}>Đăng Ký Tư Vấn</h3>

            {status === 'success' ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-6 rounded-lg text-center backdrop-blur-sm">
                    <span className="material-symbols-outlined text-5xl mb-3 drop-shadow-md">check_circle</span>
                    <p className="font-black text-xl uppercase tracking-wide drop-shadow-sm mb-2">Đăng ký thành công!</p>
                    <p className="text-sm font-medium opacity-90">Chúng tôi sẽ liên hệ lại sớm nhất.</p>
                </div>
            ) : (
                <>
                    <div className="flex flex-col gap-1">
                        <label className="text-white text-sm font-medium">Họ và tên</label>
                        <input
                            required
                            className="h-12 w-full rounded-lg border border-[#393628] bg-[#2d291e] px-4 text-white placeholder-[#5c5745] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="Nguyễn Văn A"
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-white text-sm font-medium">Số điện thoại</label>
                        <input
                            required
                            pattern="[0-9]{10}"
                            title="Vui lòng nhập số điện thoại hợp lệ (10 số)"
                            className="h-12 w-full rounded-lg border border-[#393628] bg-[#2d291e] px-4 text-white placeholder-[#5c5745] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="09xx xxx xxx"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-white text-sm font-medium">Dịch vụ quan tâm</label>
                        <select
                            className="h-12 w-full rounded-lg border border-[#393628] bg-[#2d291e] px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                            value={formData.service}
                            onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                        >
                            <option value="Cổng Nhôm Đúc">Cổng Nhôm Đúc</option>
                            <option value="Cổng Hợp Kim Nhôm">Cổng Hợp Kim Nhôm</option>
                            <option value="Cổng CNC">Cổng CNC</option>
                            <option value="Cổng Sắt Mỹ Thuật">Cổng Sắt Mỹ Thuật</option>
                            <option value="Lan Can & Cầu Thang">Lan Can & Cầu Thang</option>
                            <option value="Thang Máy">Thang Máy</option>
                            <option value="Khác">Khác</option>
                        </select>
                    </div>

                    {status === 'error' && (
                        <p className="text-red-400 text-sm text-center">Có lỗi xảy ra, vui lòng thử lại sau.</p>
                    )}

                    <button
                        disabled={isLoading}
                        className="mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-primary text-[#181711] text-base font-bold hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Đang gửi...' : 'Gửi Yêu Cầu'}
                    </button>
                    <p className="text-center text-xs text-[#5c5745] mt-2">Chúng tôi cam kết bảo mật thông tin của bạn.</p>
                </>
            )}
        </form>
    );
}
