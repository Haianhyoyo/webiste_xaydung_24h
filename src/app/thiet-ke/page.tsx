import Link from 'next/link';

export default function DesignPage() {
    return (
        <>
            <section className="relative bg-secondary-dark border-b border-gray-800 py-20">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1628151016159-8692751f7744?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        Thư Viện <span className="text-primary">Mẫu Thiết Kế</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-light">
                        Khám phá bộ sưu tập cổng nhà đẳng cấp, đa dạng phong cách từ cổ điển đến hiện đại, mang lại vẻ đẹp hoàn mỹ cho ngôi nhà của bạn.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-background-dark text-text-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button className="px-6 py-2 rounded-full border border-primary bg-primary text-secondary-dark font-bold hover:bg-primary hover:text-secondary-dark transition duration-300">Tất Cả</button>
                        <button className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:border-primary hover:text-primary transition duration-300">Cổng Hiện Đại</button>
                        <button className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:border-primary hover:text-primary transition duration-300">Cổng Cổ Điển</button>
                        <button className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:border-primary hover:text-primary transition duration-300">Tân Cổ Điển</button>
                        <button className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:border-primary hover:text-primary transition duration-300">Cổng CNC</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Cổng Tự Động Athena',
                                code: 'MS-01',
                                style: 'Hiện Đại',
                                desc: 'Thiết kế hiện đại tích hợp motor âm sàn, chất liệu hợp kim nhôm cao cấp.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmeJzz-ij94YZOySNKUcAsgTi55CyPlreTWVZl7kXsHbKgaguzFz-hJ1dP0ewwoMjoP4MUOeFdwlc1VFLA0Ng-WvQNTicsCtogt7IY-8F9rj06rShKvIy3QaZ880ympRw2FGmfnK4l6XPrXH6xDHTHQrBs0c9gNBIHwZgTcmOhjDCA2t-VY-PkXIF3T_XqXz3nsz4MnvmlJTFhvwSzgzeU_w7sg0zRD5gtml9kME1V2_JUu5Nl5I-Ry9JDqBryRu2RoH-qXarpWVo'
                            },
                            {
                                title: 'Buckingham Palace',
                                longTitle: 'Cổng Nhôm Đúc Buckingham',
                                code: 'CD-05',
                                style: 'Cổ Điển',
                                desc: 'Phong cách hoàng gia Châu Âu, hoa văn đúc nổi tinh xảo mạ vàng 24k.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4'
                            },
                            {
                                title: 'Lotus Garden',
                                longTitle: 'Cổng Sắt Nghệ Thuật',
                                code: 'NT-12',
                                style: 'Tân Cổ Điển',
                                desc: 'Sự kết hợp giữa sắt đặc uốn thủ công và công nghệ cắt CNC chính xác.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIJ0xcqA5JOB-TVNDHq2mvWKg0krBe4c8_dIK0htkOVoP7jx2-BEKlMlk53X2QmdS2zOW5_BaGmq7sxcqnEgG1Zhtzq2dJZuRrtMjmh-j8ZKvMW2igxn-kJdLB2SNEQEw0ktA3cIt8Xxzdiz3cjqgKhSmtfkFeyhZQprwpjVmVeUseXGfOKSV2lh09rBXJr-2h7eWYBdqHcU5mUoejTNYVjoCAVCl-5kk-13-s61Rb_H1jJIUPi9AUy6RpiEXk8v0yEl5gpNIY61g'
                            },
                            {
                                title: 'Trống Đồng Đông Sơn',
                                longTitle: 'Cổng CNC Trống Đồng',
                                code: 'CN-08',
                                style: 'CNC',
                                desc: 'Họa tiết trống đồng Đông Sơn truyền thống kết hợp công nghệ cắt laser hiện đại.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYdKL-K6PheZoeZmAc7nZldDMswHzR2U0Wrcg9UT6qbt-fO7j7BkcV0A622ZIuc7kHQUXkr6btJWk7hv0n0gkvxLo9MYfWnwszKoGDflPI9l05z5LOPOzzKeEYLFmLdilD1zx6GlORGN5z38HDJJTR1zkNJ7Zoq4wguviPp77CHPBoT2eyJPECNX4djtXYHXbrQlhH6MtQA0s9Nopg8XGFDf__JUh42oE0t1m0Y8cLnpbEge_XzzUew8kh6kMQfp-LGZ2Rkia6sZg'
                            },
                            {
                                title: 'Oak Wood Style',
                                longTitle: 'Cổng Giả Gỗ Cao Cấp',
                                code: 'WD-03',
                                style: 'Hiện Đại',
                                desc: 'Vẻ đẹp ấm áp của gỗ tự nhiên với độ bền của kim loại sơn tĩnh điện vân gỗ.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4'
                            },
                            {
                                title: 'Minimalist Black',
                                longTitle: 'Minimalist Modern',
                                code: 'MN-09',
                                style: 'Hiện Đại',
                                desc: 'Phong cách tối giản, đường nét dứt khoát, phù hợp với kiến trúc nhà phố.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIJ0xcqA5JOB-TVNDHq2mvWKg0krBe4c8_dIK0htkOVoP7jx2-BEKlMlk53X2QmdS2zOW5_BaGmq7sxcqnEgG1Zhtzq2dJZuRrtMjmh-j8ZKvMW2igxn-kJdLB2SNEQEw0ktA3cIt8Xxzdiz3cjqgKhSmtfkFeyhZQprwpjVmVeUseXGfOKSV2lh09rBXJr-2h7eWYBdqHcU5mUoejTNYVjoCAVCl-5kk-13-s61Rb_H1jJIUPi9AUy6RpiEXk8v0yEl5gpNIY61g'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="design-card group relative bg-secondary rounded-lg overflow-hidden shadow-xl border border-gray-800 hover:border-primary/50 transition duration-300">
                                <div className="aspect-w-4 aspect-h-3 h-64 relative overflow-hidden">
                                    <img alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" src={item.img} />
                                    <div className="design-overlay absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 flex items-center justify-center p-6 group-hover:opacity-100">
                                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                                            <h3 className="text-xl font-bold text-white mb-2">{item.longTitle || item.title}</h3>
                                            <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.desc}</p>
                                            <button className="bg-primary text-secondary-dark font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition">Xem Chi Tiết</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-primary text-xs font-bold uppercase tracking-wider">{item.style}</span>
                                        <span className="text-gray-500 text-xs">Mã: {item.code}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <nav className="flex space-x-2">
                            <a className="px-4 py-2 bg-secondary border border-gray-700 text-gray-300 rounded hover:bg-primary hover:text-secondary-dark hover:border-primary transition" href="#">Trước</a>
                            <a className="px-4 py-2 bg-primary border border-primary text-secondary-dark font-bold rounded" href="#">1</a>
                            <a className="px-4 py-2 bg-secondary border border-gray-700 text-gray-300 rounded hover:bg-primary hover:text-secondary-dark hover:border-primary transition" href="#">2</a>
                            <a className="px-4 py-2 bg-secondary border border-gray-700 text-gray-300 rounded hover:bg-primary hover:text-secondary-dark hover:border-primary transition" href="#">3</a>
                            <a className="px-4 py-2 bg-secondary border border-gray-700 text-gray-300 rounded hover:bg-primary hover:text-secondary-dark hover:border-primary transition" href="#">Tiếp</a>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#1a1a1a] border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-4">Bạn Có Ý Tưởng Riêng?</h2>
                    <p className="text-gray-400 mb-8 text-lg">Đội ngũ kiến trúc sư của chúng tôi sẵn sàng hiện thực hóa bản vẽ trong mơ của bạn. Hãy gửi yêu cầu ngay hôm nay.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a className="bg-primary hover:bg-yellow-400 text-secondary-dark font-bold py-3 px-8 rounded shadow flex items-center justify-center transition transform hover:-translate-y-1" href="/lien-he">
                            <span className="material-symbols-outlined mr-2">design_services</span> Đặt Thiết Kế Riêng
                        </a>
                        <a className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-secondary-dark font-bold py-3 px-8 rounded shadow flex items-center justify-center transition transform hover:-translate-y-1" href="tel:0587979999">
                            <span className="material-symbols-outlined mr-2">phone_in_talk</span> Tư Vấn Miễn Phí
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
