
import Link from 'next/link';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';

export default function CongSatMyThuatPage() {
    return (
        <>
            {/* Hero Section Removed */}{/*
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img alt="Artistic Iron Gate Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4" />
                    <div className="absolute inset-0 bg-secondary/80 dark:bg-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary text-primary font-bold text-xs uppercase tracking-widest mb-4 backdrop-blur-sm">Premium Collection</span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 shadow-sm">
                        Cổng Sắt Mỹ Thuật
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
                        Sự kết hợp hoàn hảo giữa kỹ thuật rèn thủ công truyền thống và công nghệ hiện đại, mang lại vẻ đẹp vĩnh cửu cho ngôi nhà của bạn.
                    </p>
                    <div className="flex items-center justify-center space-x-3 text-sm font-medium">
                        <Link className="text-gray-300 hover:text-primary transition" href="/">Trang Chủ</Link>
                        <span className="text-primary">•</span>
                        <Link className="text-gray-300 hover:text-primary transition" href="/dich-vu">Sản Phẩm</Link>
                        <span className="text-primary">•</span>
                        <span className="text-white">Cổng Sắt Mỹ Thuật</span>
                    </div>
                </div>
            </section>
            */}



            <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary dark:text-white mb-4">Bộ Sưu Tập Mẫu Cổng Đẹp</h2>
                        <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
                            Khám phá các mẫu cổng sắt mỹ thuật được ưa chuộng nhất hiện nay, đa dạng phong cách từ cổ điển đến hiện đại.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button className="px-6 py-2 rounded-full bg-primary text-secondary font-bold shadow-lg">Tất Cả</button>
                        <button className="px-6 py-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 text-text-light dark:text-text-dark font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all">Cổ Điển</button>
                        <button className="px-6 py-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 text-text-light dark:text-text-dark font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all">Tân Cổ Điển</button>
                        <button className="px-6 py-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 text-text-light dark:text-text-dark font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all">Hiện Đại</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {getProductsByCategory('Cổng Sắt Mỹ Thuật').map((product) => (
                            <div key={product.id} className="group relative bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <Link href={`/dich-vu/cong-sat-my-thuat/${product.slug}`}>
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                                        />
                                    </Link>
                                    <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                        <Link href={`/dich-vu/cong-sat-my-thuat/${product.slug}`} className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-secondary hover:bg-white hover:text-primary transition-all duration-300 transform scale-0 group-hover:scale-100 delay-75 shadow-lg">
                                            <span className="material-symbols-outlined text-2xl">zoom_in</span>
                                        </Link>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-primary text-secondary text-xs font-bold px-3 py-1 rounded opacity-100 shadow-md">{product.model}</div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <Link href={`/dich-vu/cong-sat-my-thuat/${product.slug}`}>
                                        <h3 className="text-xl font-display font-bold text-secondary dark:text-white group-hover:text-primary transition-colors mb-2">{product.name}</h3>
                                    </Link>
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-lg font-bold text-primary">{product.salePrice.toLocaleString('vi-VN')}đ</span>
                                        <span className="text-sm text-gray-400 line-through">{product.originalPrice.toLocaleString('vi-VN')}đ</span>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{product.origin}</span>
                                        <Link href={`/dich-vu/cong-sat-my-thuat/${product.slug}`} className="text-sm font-semibold text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary transition flex items-center">
                                            Chi tiết <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 flex justify-center">
                        <Link href="/lien-he" className="bg-transparent border-2 border-primary text-secondary dark:text-primary hover:bg-primary hover:text-secondary font-bold py-3 px-8 rounded shadow flex items-center justify-center transition transform hover:-translate-y-1">
                            Tư Vấn Thiết Kế Riêng
                        </Link>
                    </div>
                </div>
            </section>



            <section className="py-16 bg-surface-light dark:bg-surface-dark bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPDaNFL2LKyyf6rXuaVkIrFQHJBynyZZAfnGlzoF7JZ3yecYRXc33c-5XyngE7wV1Bo6s6JBhATbPdAxp3YkMX10X2z-RdMBaK5lyBRiTT9oKEJ2JSkvQFsqtszUvG_IYbZqmNa5I_oNhQSMsSzN3fpEGkr8pepjBjtq4gS_9YsNN_c9zdSxPkUP8z4jrqwVfSA1sw8QNH45dRI1eHiVaGZFTGK0-ClhjlzEzxEQmuX72g0ygNlvjpSGQ17DnTzPTa9phwU3NEOJE')] bg-cover bg-center bg-no-repeat relative bg-fixed">
                <div className="absolute inset-0 bg-secondary/90 dark:bg-background-dark/90"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl font-display font-bold text-white mb-4">Bạn Đã Sẵn Sàng Nâng Tầm Ngôi Nhà Của Mình?</h2>
                    <p className="text-gray-300 mb-8 text-lg">Liên hệ ngay với chúng tôi để được tư vấn thiết kế miễn phí và nhận báo giá ưu đãi nhất cho công trình cổng sắt mỹ thuật của bạn.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a className="bg-primary hover:bg-yellow-400 text-secondary font-bold py-3 px-8 rounded shadow flex items-center justify-center transition transform hover:-translate-y-1" href="tel:0938771797">
                            <span className="material-symbols-outlined mr-2">phone_in_talk</span> 0938.771.797
                        </a>
                        <a className="bg-transparent text-white border-2 border-primary hover:bg-primary hover:text-secondary font-bold py-3 px-8 rounded shadow flex items-center justify-center transition transform hover:-translate-y-1" href="/lien-he">
                            <span className="material-symbols-outlined mr-2">email</span> Gửi Yêu Cầu
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
