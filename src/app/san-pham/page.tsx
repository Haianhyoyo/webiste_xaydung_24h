import Link from 'next/link';

const PRODUCTS = [
    {
        title: 'Cổng Nhôm Đúc',
        slug: 'cong-nhom-duc',
        desc: 'Tinh hoa nghệ thuật đúc chân không, mang lại vẻ đẹp vĩnh cửu và sang trọng cho ngôi nhà.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuIwJhoMqBM8wL2i-LRTvLA_7ZMLYjWAni78Uzed8WkSMGOthnXBr75bbU2e0H9uku9dk-VURIz8CmMDIj0ygjs-IK2ctweXaTigp9FVhONb0fTwK6JA-rE-HYrRb87uhQNcTO9i7qVB8EUcunwFbV0vE8smJtIWIUyX3OAeQDJXGzPiPOPs7OFmM2WdLnhBtCc1D4sYfR0TNGcusTOQ-QIR_ndCGWYeo3rPcq4NkTpP2oKZCxwlZVRg5mZtb7AsJYD0fl_mvpyGQ',
    },
    {
        title: 'Cổng CNC',
        slug: 'cong-cnc',
        desc: 'Công nghệ cắt Laser Fiber hiện đại tạo nên những hoa văn sắc nét, tinh tế và độc đáo.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYdKL-K6PheZoeZmAc7nZldDMswHzR2U0Wrcg9UT6qbt-fO7j7BkcV0A622ZIuc7kHQUXkr6btJWk7hv0n0gkvxLo9MYfWnwszKoGDflPI9l05z5LOPOzzKeEYLFmLdilD1zx6GlORGN5z38HDJJTR1zkNJ7Zoq4wguviPp77CHPBoT2eyJPECNX4djtXYHXbrQlhH6MtQA0s9Nopg8XGFDf__JUh42oE0t1m0Y8cLnpbEge_XzzUew8kh6kMQfp-LGZ2Rkia6sZg',
    },
    {
        title: 'Cổng Hợp Kim Nhôm',
        slug: 'cong-hop-kim-nhom',
        desc: 'Nhẹ, bền, không rỉ sét. Giải pháp hiện đại thay thế cho cổng sắt truyền thống.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIJ0xcqA5JOB-TVNDHq2mvWKg0krBe4c8_dIK0htkOVoP7jx2-BEKlMlk53X2QmdS2zOW5_BaGmq7sxcqnEgG1Zhtzq2dJZuRrtMjmh-j8ZKvMW2igxn-kJdLB2SNEQEw0ktA3cIt8Xxzdiz3cjqgKhSmtfkFeyhZQprwpjVmVeUseXGfOKSV2lh09rBXJr-2h7eWYBdqHcU5mUoejTNYVjoCAVCl-5kk-13-s61Rb_H1jJIUPi9AUy6RpiEXk8v0yEl5gpNIY61g',
    },
    {
        title: 'Cổng Sắt Mỹ Thuật',
        slug: 'cong-sat-my-thuat',
        desc: 'Nét đẹp cổ điển đầy lãng mạn từ những thanh sắt được uốn nắn thủ công tỉ mỉ.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmeJzz-ij94YZOySNKUcAsgTi55CyPlreTWVZl7kXsHbKgaguzFz-hJ1dP0ewwoMjoP4MUOeFdwlc1VFLA0Ng-WvQNTicsCtogt7IY-8F9rj06rShKvIy3QaZ880ympRw2FGmfnK4l6XPrXH6xDHTHQrBs0c9gNBIHwZgTcmOhjDCA2t-VY-PkXIF3T_XqXz3nsz4MnvmlJTFhvwSzgzeU_w7sg0zRD5gtml9kME1V2_JUu5Nl5I-Ry9JDqBryRu2RoH-qXarpWVo',
    },
    {
        title: 'Lan Can & Cầu Thang',
        slug: 'lan-can-va-cau-thang',
        desc: 'Điểm nhấn kiến trúc quan trọng, đảm bảo an toàn và thẩm mỹ cho không gian nội ngoại thất.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-sOGyteEsrzwzy6-92iiPagtBKsTbuGuuwOkCws_onTF_2b5EJ-yz68TmhTBKoAGma_ntZoYt4jtNXgLzQJ5JJJGcAfPkP1hP8fPuSD2ltksgpTpCHz8qPVjcIlqWQuluygSXrLn2OHo_Hf51TP1bm-y3d90HFiuHfmt06XHq8v_EDmzIL-W81RSZa4AbkhukeFOCRFot28_3cE_vEAYoGnC3bAg-Wnr7EaDNxs_LkIxP9k18A_1m9RppGcyny1hCBHcUWhBUrb0',
    },
    {
        title: 'Thang Máy',
        slug: 'thang-may',
        desc: 'Giải pháp di chuyển thông minh, an toàn và tiện nghi cho ngôi nhà hiện đại.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmeJzz-ij94YZOySNKUcAsgTi55CyPlreTWVZl7kXsHbKgaguzFz-hJ1dP0ewwoMjoP4MUOeFdwlc1VFLA0Ng-WvQNTicsCtogt7IY-8F9rj06rShKvIy3QaZ880ympRw2FGmfnK4l6XPrXH6xDHTHQrBs0c9gNBIHwZgTcmOhjDCA2t-VY-PkXIF3T_XqXz3nsz4MnvmlJTFhvwSzgzeU_w7sg0zRD5gtml9kME1V2_JUu5Nl5I-Ry9JDqBryRu2RoH-qXarpWVo',
    }
];

export default function SanPhamPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pt-12 pb-24">
            <div className="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Sản Phẩm Cao Cấp</span>
                    <h1 className="text-4xl md:text-5xl font-black text-secondary dark:text-white">Bộ Sưu Tập Sản Phẩm</h1>
                    <p className="text-text-muted-light dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                        Khám phá các dòng sản phẩm chủ đạo được chế tác tinh xảo, đáp ứng mọi yêu cầu khắt khe về thẩm mỹ và chất lượng.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCTS.map((product, idx) => (
                        <Link key={idx} href={`/dich-vu/${product.slug}`} className="group block bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors">{product.title}</h2>
                                <p className="text-sm text-text-muted-light dark:text-gray-400 line-clamp-2 mb-4">
                                    {product.desc}
                                </p>
                                <span className="inline-flex items-center text-primary font-semibold text-sm">
                                    Xem chi tiết <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
