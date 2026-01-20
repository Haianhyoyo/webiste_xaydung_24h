
import Link from 'next/link';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';
import ContactForm from '@/components/ContactForm';

export default function CongHopKimNhomPage() {
    return (
        <>
            {/* Hero Section */}
            {/* Hero Section Removed */}{/*
            <div className="relative w-full">
                <div className="flex min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 relative" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(24, 23, 17, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMiVYvYu1-HqSL-faQRa2NA0ahg5ebbK9pfXZCmjL_q1FNQfqsVuSLVx7Ivko9tmgja80POdZOzmz7ijFjD_bpESjIIE5QvYXXH2PkE0Zxjtny1vk83AIEYSiLp1w6YLRAxR6x-CxY289nHiwOOh79r59aL5-bUaZJ7od9JsZRTOM1QUDF7QcXinuq0OybjHmj5aAHajLW2OKOMl_sBSUuEz8LiyIePT6GMKWLBL10yybs5TFKzxvuuTE_TAPjprW-PTup8IGPvvg")' }}>
                    <div className="flex flex-col gap-4 text-center max-w-[800px] z-10 animate-fade-in-up">
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                            Tinh Hoa Cổng <span className="text-primary">Hợp Kim Nhôm</span>
                        </h1>
                        <h2 className="text-gray-200 text-base md:text-xl font-normal leading-relaxed max-w-[600px] mx-auto">
                            Sự kết hợp hoàn hảo giữa nghệ thuật đúc chân không và độ bền vượt thời gian. Nâng tầm đẳng cấp thượng lưu cho ngôi nhà của bạn.
                        </h2>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-yellow-400 text-background-dark text-base font-bold transition-transform hover:scale-105" href="/lien-he">
                                <span>Nhận Báo Giá</span>
                            </Link>
                            <Link className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border border-white/20 bg-white/5 hover:bg-white/10 text-white text-base font-bold backdrop-blur-sm transition-colors" href="/du-an">
                                <span>Xem Dự Án</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            */}



            {/* Product Gallery */}
            <div className="bg-surface-dark py-20 px-4 md:px-10">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">Sản Phẩm Tiêu Biểu</h2>
                            <p className="text-[#bab49c]">Những mẫu cổng hợp kim nhôm đúc sang trọng nhất</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getProductsByCategory('Cổng Hợp Kim Nhôm').map((product) => (
                            <div key={product.id} className="group relative bg-[#221e10] rounded-xl overflow-hidden shadow-lg border border-[#393628] hover:border-primary/50 transition-all duration-300">
                                <div className="relative aspect-[4/3] w-full overflow-hidden">
                                    <Link href={`/dich-vu/cong-hop-kim-nhom/${product.slug}`}>
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </Link>
                                    <div className="absolute top-4 left-4 bg-primary text-background-dark text-xs font-bold px-3 py-1 rounded shadow-md">{product.model}</div>
                                </div>
                                <div className="p-6">
                                    <Link href={`/dich-vu/cong-hop-kim-nhom/${product.slug}`}>
                                        <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                                    </Link>
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-lg font-bold text-primary">{product.salePrice.toLocaleString('vi-VN')}đ</span>
                                        {product.originalPrice > product.salePrice && <span className="text-white/40 text-sm line-through">{product.originalPrice.toLocaleString('vi-VN')}đ</span>}
                                    </div>
                                    <Link href={`/dich-vu/cong-hop-kim-nhom/${product.slug}`} className="block w-full text-center bg-primary/10 hover:bg-primary text-primary hover:text-background-dark font-bold py-3 rounded transition-colors">
                                        Xem Chi Tiết
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA / Contact Section */}
            <div className="py-20 px-4 md:px-10 relative overflow-hidden bg-background-dark">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface-dark to-transparent -z-10"></div>
                <div className="max-w-[1000px] mx-auto bg-primary rounded-2xl p-1">
                    <div className="bg-background-dark rounded-xl p-8 md:p-16 flex flex-col md:flex-row gap-10 items-center">
                        <div className="flex-1 flex flex-col gap-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                Sẵn sàng nâng tầm ngôi nhà của bạn?
                            </h2>
                            <p className="text-[#bab49c] text-lg">
                                Liên hệ ngay hôm nay để nhận tư vấn miễn phí và báo giá chi tiết cho công trình của bạn. Chúng tôi cam kết chất lượng tốt nhất với giá thành hợp lý.
                            </p>
                            <div className="flex flex-col gap-4 mt-2">
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">call</span>
                                    </span>
                                    <div>
                                        <p className="text-sm text-[#bab49c]">Hotline 24/7</p>
                                        <p className="text-xl font-bold text-white">090 123 4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">mail</span>
                                    </span>
                                    <div>
                                        <p className="text-sm text-[#bab49c]">Email</p>
                                        <p className="text-lg font-bold text-white">contact@congnhomduc.vn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[400px]">
                            <ContactForm serviceName="Cổng Hợp Kim Nhôm" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
