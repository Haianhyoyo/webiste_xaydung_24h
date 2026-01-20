import Link from 'next/link';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';

export default function CongCNCPage() {
    return (
        <>
            {/* Hero Section Removed */}{/*
            <div className="w-full">
                <div className="@container">
                    <div className="relative flex min-h-[600px] flex-col items-center justify-center p-4 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(34, 30, 16, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYdKL-K6PheZoeZmAc7nZldDMswHzR2U0Wrcg9UT6qbt-fO7j7BkcV0A622ZIuc7kHQUXkr6btJWk7hv0n0gkvxLo9MYfWnwszKoGDflPI9l05z5LOPOzzKeEYLFmLdilD1zx6GlORGN5z38HDJJTR1zkNJ7Zoq4wguviPp77CHPBoT2eyJPECNX4djtXYHXbrQlhH6MtQA0s9Nopg8XGFDf__JUh42oE0t1m0Y8cLnpbEge_XzzUew8kh6kMQfp-LGZ2Rkia6sZg")' }}>
                        </div>
                        <div className="relative z-10 flex flex-col gap-6 max-w-[800px] px-4 animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 self-center rounded-full bg-primary/20 px-3 py-1 border border-primary/30 backdrop-blur-sm">
                                <span className="text-primary text-xs font-bold uppercase tracking-wide">Công Nghệ Tương Lai</span>
                            </div>
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                                Cổng CNC Laser <br /><span className="text-primary">Đỉnh Cao Chính Xác</span>
                            </h1>
                            <h2 className="text-gray-200 text-base font-normal leading-relaxed md:text-lg max-w-[600px] self-center">
                                Biến ý tưởng thành hiện thực với công nghệ cắt Laser Fiber tiên tiến. Mỗi đường cắt là một tác phẩm nghệ thuật, mỗi chi tiết đều hoàn hảo đến từng milimet.
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Link className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-yellow-400 text-[#181711] text-base font-bold transition-transform hover:scale-105" href="#designs">
                                    <span>Xem Mẫu Cổng</span>
                                </Link>
                                <Link className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-bold backdrop-blur-sm transition-colors" href="#process">
                                    <span>Quy Trình Cắt</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            */}



            {/* Products Section */}
            <div className="w-full bg-surface-dark py-16 md:py-24 border-y border-[#393628]">
                <div className="layout-container flex justify-center px-4 md:px-10">
                    <div className="layout-content-container flex flex-col max-w-[1200px] w-full gap-12">
                        <div className="flex flex-col gap-4 text-center items-center">
                            <h2 className="text-primary font-bold uppercase tracking-wider text-sm">Sản phẩm nổi bật</h2>
                            <h1 className="text-white text-3xl md:text-4xl font-black leading-tight max-w-[720px]">
                                Bộ Sưu Tập Cổng CNC Cao Cấp
                            </h1>
                            <p className="text-[#bab49c] text-base max-w-[720px]">Khám phá những mẫu thiết kế CNC độc đáo với công nghệ cắt Laser tiên tiến.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {getProductsByCategory('Cổng CNC').map((product) => (
                                <div key={product.id} className="group flex flex-col rounded-xl border border-[#393628] bg-background-dark overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Link href={`/dich-vu/cong-cnc/${product.slug}`}>
                                            <Image
                                                src={product.images[0]}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </Link>
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-background-dark rounded-full text-xs font-bold uppercase">
                                                <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                                                {product.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 p-6">
                                        <div className="flex flex-col gap-2">
                                            <Link href={`/dich-vu/cong-cnc/${product.slug}`}>
                                                <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors">
                                                    {product.name}
                                                </h3>
                                            </Link>
                                            <p className="text-[#bab49c] text-sm line-clamp-2">
                                                Model {product.model} - CNC Laser
                                            </p>
                                        </div>
                                        <div className="flex items-baseline gap-3 border-t border-[#393628] pt-4">
                                            <span className="text-2xl font-bold text-primary">
                                                {product.salePrice.toLocaleString('vi-VN')}đ
                                            </span>
                                            <span className="text-sm text-[#bab49c] line-through">
                                                {product.originalPrice.toLocaleString('vi-VN')}đ
                                            </span>
                                        </div>
                                        <Link
                                            href={`/dich-vu/cong-cnc/${product.slug}`}
                                            className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-yellow-400 text-background-dark font-bold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30"
                                        >
                                            <span>Xem Chi Tiết</span>
                                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            {/* CTA Section */}
            <div className="w-full bg-surface-dark relative overflow-hidden py-16 md:py-24">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="layout-container flex justify-center px-4 md:px-10">
                    <div className="layout-content-container flex flex-col max-w-[800px] w-full gap-8 text-center relative z-10">
                        <h2 className="text-white text-3xl md:text-4xl font-black leading-tight">
                            Sở Hữu Cổng CNC Đẳng Cấp Ngay Hôm Nay
                        </h2>
                        <p className="text-[#bab49c] text-lg max-w-[600px] self-center">
                            Chúng tôi cung cấp giải pháp trọn gói từ tư vấn thiết kế, cắt CNC Laser đến thi công lắp đặt hoàn thiện. Đảm bảo chất lượng và tiến độ cho mọi dự án.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a className="bg-primary hover:bg-yellow-400 text-background-dark font-bold py-3 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1" href="tel:0938771797">
                                <span className="material-symbols-outlined">phone_in_talk</span>
                                0938.771.797
                            </a>
                            <Link className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1" href="/lien-he">
                                <span className="material-symbols-outlined">design_services</span>
                                Đăng Ký Thiết Kế
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}