
import Link from 'next/link';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';
import ContactForm from '@/components/ContactForm';

export default function LanCanCauThangPage() {
    return (
        <>
            {/* Hero Section Removed */}{/*
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img alt="Staircase and Railing Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-sOGyteEsrzwzy6-92iiPagtBKsTbuGuuwOkCws_onTF_2b5EJ-yz68TmhTBKoAGma_ntZoYt4jtNXgLzQJ5JJJGcAfPkP1hP8fPuSD2ltksgpTpCHz8qPVjcIlqWQuluygSXrLn2OHo_Hf51TP1bm-y3d90HFiuHfmt06XHq8v_EDmzIL-W81RSZa4AbkhukeFOCRFot28_3cE_vEAYoGnC3bAg-Wnr7EaDNxs_LkIxP9k18A_1m9RppGcyny1hCBHcUWhBUrb0" />
                    <div className="absolute inset-0 bg-secondary/80 dark:bg-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary text-primary font-bold text-xs uppercase tracking-widest mb-4 backdrop-blur-sm">Interior Design</span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 shadow-sm">
                        Lan Can & Cầu Thang
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
                        Điểm nhấn kiến trúc kết nối không gian, mang lại vẻ đẹp sang trọng và sự an toàn tuyệt đối cho ngôi nhà.
                    </p>
                    <div className="flex items-center justify-center space-x-3 text-sm font-medium">
                        <Link className="text-gray-300 hover:text-primary transition" href="/">Trang Chủ</Link>
                        <span className="text-primary">•</span>
                        <Link className="text-gray-300 hover:text-primary transition" href="/dich-vu">Sản Phẩm</Link>
                        <span className="text-primary">•</span>
                        <span className="text-white">Lan Can & Cầu Thang</span>
                    </div>
                </div>
            </section>
            */}



            <section className="py-16 bg-surface-light dark:bg-surface-dark bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary dark:text-white mb-4">Các Mẫu Lan Can &amp; Cầu Thang Tiêu Biểu</h2>
                        <p className="text-text-muted-light dark:text-text-muted-dark">Sự đa dạng trong thiết kế mang đến nhiều sự lựa chọn cho không gian sống của bạn.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {getProductsByCategory('Lan Can & Cầu Thang').map((product) => (
                            <div key={product.id} className="group relative bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <Link href={`/dich-vu/lan-can-va-cau-thang/${product.slug}`}>
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                                        />
                                    </Link>
                                    <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                        <Link href={`/dich-vu/lan-can-va-cau-thang/${product.slug}`} className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-secondary hover:bg-white hover:text-primary transition-all duration-300 transform scale-0 group-hover:scale-100 delay-75 shadow-lg">
                                            <span className="material-symbols-outlined text-2xl">zoom_in</span>
                                        </Link>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-primary text-secondary text-xs font-bold px-3 py-1 rounded opacity-100 shadow-md">{product.model}</div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <Link href={`/dich-vu/lan-can-va-cau-thang/${product.slug}`}>
                                        <h3 className="text-xl font-display font-bold text-secondary dark:text-white group-hover:text-primary transition-colors mb-2">{product.name}</h3>
                                    </Link>
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-lg font-bold text-primary">{product.salePrice.toLocaleString('vi-VN')}đ</span>
                                        <span className="text-sm text-gray-400 line-through">{product.originalPrice.toLocaleString('vi-VN')}đ</span>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{product.origin}</span>
                                        <Link href={`/dich-vu/lan-can-va-cau-thang/${product.slug}`} className="text-sm font-semibold text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-primary transition flex items-center">
                                            Chi tiết <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-white/5">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        <ContactForm serviceName="Lan Can & Cầu Thang" className="bg-white dark:bg-surface-dark" titleColor="black" />
                    </div>
                </div>
            </section>


        </>
    );
}
