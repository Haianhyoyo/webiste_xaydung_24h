
import Link from 'next/link';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';

export default function ThangMayPage() {
    return (
        <>
            {/* Hero Section */}
            {/* Hero Section Removed */}{/*
            <section className="relative h-[600px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(24, 22, 17, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuByhAgHFaNOqn97FW1sXwqwzIbcYm4RSlR75RutcgMLasWqjeQWbPwzha94ymQ0P8FC7hChxKCxG-J2uA1JdYLP149OBK0gI8g5irn8Yi-cHWNYT6MESN2PQjgf-5OHpjC591nYqojUlunKe6xmwGStBaWD2PIEKxJ8W1_OnuAKkjDatFY8JzMGdnt-QCP4419q9-V2cPcyP4dQhVkiRzJwReELsfoYatSDnxGCK-NXgu7Gwag8Nj3E9-x1JbZgfaWACHTNoKyGwwc")' }}>
                <div className="layout-content-container max-w-[960px] px-4 md:px-10 w-full flex flex-col items-center text-center gap-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
                        <span className="text-xs font-bold uppercase tracking-wide text-primary">Công Nghệ Mới 2024</span>
                    </div>
                    <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em]">
                        Nâng Tầm <br /><span className="text-primary">Không Gian Sống</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                        Giải pháp thang máy toàn diện, kết hợp công nghệ vận hành êm ái và thẩm mỹ tinh tế cho ngôi nhà hiện đại.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-[#181611] font-bold hover:bg-[#b8950e] transition-all transform hover:scale-105" href="/lien-he">
                            Tư vấn miễn phí
                        </Link>
                        <button className="h-12 px-8 rounded-lg border border-[#393528] bg-[#181611]/50 text-white font-medium hover:bg-[#181611] transition-all flex items-center gap-2 justify-center backdrop-blur-sm">
                            <span className="material-symbols-outlined text-sm">download</span>
                            Tải Catalogue
                        </button>
                    </div>
                </div>
            </section>
            */}



            {/* Product List */}
            <section className="bg-[#1c1a14] py-20 px-4 md:px-40 flex justify-center border-b border-[#393528]">
                <div className="max-w-[960px] w-full">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Danh Mục Sản Phẩm</h2>
                        <p className="text-gray-400">Các dòng thang máy gia đình và tải khách cao cấp nhất</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getProductsByCategory('Thang Máy').map((product) => (
                            <div key={product.id} className="group flex flex-col rounded-xl border border-[#393528] bg-[#221e10] overflow-hidden hover:border-primary/50 transition-colors">
                                <div className="relative aspect-[3/4] w-full overflow-hidden">
                                    <Link href={`/dich-vu/thang-may/${product.slug}`}>
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </Link>
                                    <div className="absolute top-4 left-4 bg-primary text-[#181611] text-xs font-bold px-3 py-1 rounded shadow-md">{product.model}</div>
                                </div>
                                <div className="p-6 flex flex-col gap-3">
                                    <Link href={`/dich-vu/thang-may/${product.slug}`}>
                                        <h3 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                                    </Link>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-primary font-bold text-lg">{product.salePrice.toLocaleString('vi-VN')}đ</span>
                                        {product.originalPrice > product.salePrice && (
                                            <span className="text-white/40 text-sm line-through">{product.originalPrice.toLocaleString('vi-VN')}đ</span>
                                        )}
                                    </div>
                                    <Link href={`/dich-vu/thang-may/${product.slug}`} className="mt-2 pt-4 border-t border-[#393528] text-white/60 group-hover:text-primary flex items-center justify-between transition-colors font-medium">
                                        Xem chi tiết <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>







            {/* CTA Section */}
            <section className="bg-primary relative overflow-hidden py-16 px-4">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="relative z-10 layout-content-container max-w-[960px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-[#181611] max-w-lg">
                        <h2 className="text-3xl font-black leading-tight mb-2">Bạn đã sẵn sàng nâng cấp không gian?</h2>
                        <p className="font-medium text-[#181611]/80">Liên hệ ngay để nhận khảo sát miễn phí và báo giá chi tiết trong 24h.</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="tel:0909123456" className="h-12 px-6 rounded-lg bg-[#181611] text-white font-bold hover:bg-black transition-colors shadow-lg whitespace-nowrap flex items-center">
                            Gọi ngay: 0909 123 456
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
