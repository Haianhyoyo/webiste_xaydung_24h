import Link from 'next/link';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';
import ContactForm from '@/components/ContactForm';

export default function CongNhomDucPage() {
    return (
        <>
            {/* Hero Section */}
            {/* Hero Section Removed */}{/*
            <div className="w-full">
                <div className="@container">
                    <div className="relative flex min-h-[600px] flex-col items-center justify-center p-4 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(34, 30, 16, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmbmK_Uaoh2zTc95w0vlVJ4bvOJXxsvXo4M1egWBb9kv_Ps9pW-WlDEdhj3veHo3R__b_oEbAx9TaPnfktTBp5PzFa861FTXwVCP-nDneZI9TSm16zNr8D3EEzA9IJEUARwX-ZGTkVa3H5PYTRCW7hCwfF_OBWQfo9Czk6quJVqZx-MjgXtSIIGSfiaqVoV3_R4UNi0VMroxP9h08m3WVILVq0gFxuwhT_fDCEYUeToCeL07PtlsbqeFJluEHTj3mKvdIbuEVKwDM")' }}>
                        </div>
                        <div className="relative z-10 flex flex-col gap-6 max-w-[800px] px-4 animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 self-center rounded-full bg-primary/20 px-3 py-1 border border-primary/30 backdrop-blur-sm">
                                <span className="text-primary text-xs font-bold uppercase tracking-wide">Đẳng cấp thượng lưu</span>
                            </div>
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                                Tinh Hoa Cổng Nhôm Đúc <br /><span className="text-primary">Bền Vững Với Thời Gian</span>
                            </h1>
                            <h2 className="text-gray-200 text-base font-normal leading-relaxed md:text-lg max-w-[600px] self-center">
                                Chúng tôi kiến tạo những bộ cổng độc bản, kết hợp giữa nghệ thuật đúc thủ công tinh xảo và công nghệ sơn 5 lớp hiện đại, mang lại vẻ đẹp vĩnh cửu cho ngôi nhà của bạn.
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Link className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-yellow-400 text-[#181711] text-base font-bold transition-transform hover:scale-105" href="/lien-he">
                                    <span>Tư Vấn Miễn Phí</span>
                                </Link>
                                <Link className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-bold backdrop-blur-sm transition-colors" href="/du-an">
                                    <span>Xem Mẫu Mới 2024</span>
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
                                Sản Phẩm Của Chúng Tôi
                            </h1>
                            <p className="text-[#bab49c] text-base max-w-[720px]">Khám phá bộ sưu tập cổng nhôm đúc cao cấp với nhiều phong cách khác nhau.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {getProductsByCategory('Cổng Nhôm Đúc').map((product) => (
                                <div key={product.id} className="group flex flex-col rounded-xl border border-[#393628] bg-background-dark overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Link href={`/dich-vu/cong-nhom-duc/${product.slug}`}>
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
                                                <span className="material-symbols-outlined text-sm">star</span>
                                                {product.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 p-6">
                                        <div className="flex flex-col gap-2">
                                            <Link href={`/dich-vu/cong-nhom-duc/${product.slug}`}>
                                                <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors">
                                                    {product.name}
                                                </h3>
                                            </Link>
                                            <p className="text-[#bab49c] text-sm line-clamp-2">
                                                Model {product.model} - Xuất xứ: {product.origin}
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
                                            href={`/dich-vu/cong-nhom-duc/${product.slug}`}
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
            <div className="w-full bg-gradient-to-br from-surface-dark to-background-dark py-20 border-t border-[#393628]">
                <div className="layout-container flex justify-center px-4 md:px-10">
                    <div className="layout-content-container flex flex-col md:flex-row max-w-[1200px] w-full gap-12 items-center">
                        <div className="flex-1 flex flex-col gap-6">
                            <h2 className="text-white text-3xl md:text-4xl font-black leading-tight">
                                Bạn Đã Sẵn Sàng Nâng Tầm <br /><span className="text-primary">Không Gian Sống?</span>
                            </h2>
                            <p className="text-[#bab49c] text-lg">Để lại thông tin để nhận bảng báo giá chi tiết và catalogue mẫu cổng mới nhất năm 2024. Đội ngũ kỹ sư của chúng tôi sẽ liên hệ trong vòng 30 phút.</p>
                            <div className="flex flex-col gap-4 mt-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#bab49c]">Hotline tư vấn 24/7</p>
                                        <p className="text-white font-bold text-lg">0901 234 567</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#bab49c]">Email báo giá</p>
                                        <p className="text-white font-bold text-lg">contact@nhomduchoanggia.vn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-[500px]">
                            <ContactForm serviceName="Cổng Nhôm Đúc" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
