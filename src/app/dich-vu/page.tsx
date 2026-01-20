import Link from 'next/link';
import Image from 'next/image';

const SERVICES = [
    {
        title: 'Thiết kế & Thi công',
        slug: 'thiet-ke-va-thi-cong',
        desc: 'Giải pháp thiết kế và thi công trọn gói kiến trúc, nội thất, cảnh quan với quy trình chuyên nghiệp.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmeJzz-ij94YZOySNKUcAsgTi55CyPlreTWVZl7kXsHbKgaguzFz-hJ1dP0ewwoMjoP4MUOeFdwlc1VFLA0Ng-WvQNTicsCtogt7IY-8F9rj06rShKvIy3QaZ880ympRw2FGmfnK4l6XPrXH6xDHTHQrBs0c9gNBIHwZgTcmOhjDCA2t-VY-PkXIF3T_XqXz3nsz4MnvmlJTFhvwSzgzeU_w7sg0zRD5gtml9kME1V2_JUu5Nl5I-Ry9JDqBryRu2RoH-qXarpWVo',
        icon: 'design_services'
    },
    {
        title: 'Tự động hóa',
        slug: 'tu-dong-hoa',
        desc: 'Cung cấp và lắp đặt hệ thống cổng tự động, cửa tự động, barriers thông minh công nghệ cao.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPDaNFL2LKyyf6rXuaVkIrFQHJBynyZZAfnGlzoF7JZ3yecYRXc33c-5XyngE7wV1Bo6s6JBhATbPdAxp3YkMX10X2z-RdMBaK5lyBRiTT9oKEJ2JSkvQFsqtszUvG_IYbZqmNa5I_oNhQSMsSzN3fpEGkr8pepjBjtq4gS_9YsNN_c9zdSxPkUP8z4jrqwVfSA1sw8QNH45dRI1eHiVaGZFTGK0-ClhjlzEzxEQmuX72g0ygNlvjpSGQ17DnTzPTa9phwU3NEOJE',
        icon: 'settings_remote'
    },
    {
        title: 'Khám phá công nghệ',
        slug: 'kham-pha-cong-nghe',
        desc: 'Ứng dụng các công nghệ mới nhất vào xây dựng và quản lý vận hành ngôi nhà thông minh.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-sOGyteEsrzwzy6-92iiPagtBKsTbuGuuwOkCws_onTF_2b5EJ-yz68TmhTBKoAGma_ntZoYt4jtNXgLzQJ5JJJGcAfPkP1hP8fPuSD2ltksgpTpCHz8qPVjcIlqWQuluygSXrLn2OHo_Hf51TP1bm-y3d90HFiuHfmt06XHq8v_EDmzIL-W81RSZa4AbkhukeFOCRFot28_3cE_vEAYoGnC3bAg-Wnr7EaDNxs_LkIxP9k18A_1m9RppGcyny1hCBHcUWhBUrb0',
        icon: 'memory'
    },
    {
        title: 'Sơn hoàn thiện',
        slug: 'son-hoan-thien',
        desc: 'Dịch vụ sơn giả cổ, sơn tĩnh điện, sơn hiệu ứng nghệ thuật bền đẹp và đẳng cấp.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIJ0xcqA5JOB-TVNDHq2mvWKg0krBe4c8_dIK0htkOVoP7jx2-BEKlMlk53X2QmdS2zOW5_BaGmq7sxcqnEgG1Zhtzq2dJZuRrtMjmh-j8ZKvMW2igxn-kJdLB2SNEQEw0ktA3cIt8Xxzdiz3cjqgKhSmtfkFeyhZQprwpjVmVeUseXGfOKSV2lh09rBXJr-2h7eWYBdqHcU5mUoejTNYVjoCAVCl-5kk-13-s61Rb_H1jJIUPi9AUy6RpiEXk8v0yEl5gpNIY61g',
        icon: 'imagesmode'
    }
];

export default function DichVuPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pt-12 pb-24">
            <div className="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Lĩnh Vực Hoạt Động</span>
                    <h1 className="text-4xl md:text-5xl font-black text-secondary dark:text-white">Dịch Vụ Của Chúng Tôi</h1>
                    <p className="text-text-muted-light dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                        Chúng tôi cung cấp các giải pháp toàn diện cho ngôi nhà của bạn, từ thiết kế thi công đến các công nghệ tự động hóa hiện đại.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {SERVICES.map((service, idx) => (
                        <Link key={idx} href={`/dich-vu/${service.slug}`} className="group relative h-[300px] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500">
                            <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                            <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-3 bg-primary rounded-lg text-secondary">
                                        <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{service.title}</h2>
                                </div>
                                <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {service.desc}
                                </p>
                                <span className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                    Xem chi tiết <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
