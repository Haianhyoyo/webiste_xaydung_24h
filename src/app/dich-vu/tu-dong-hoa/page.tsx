
import Link from 'next/link';

export default function TuDongHoaPage() {
    return (
        <>
            {/* Hero Section Removed */}{/*
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img alt="Gate Automation Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYdKL-K6PheZoeZmAc7nZldDMswHzR2U0Wrcg9UT6qbt-fO7j7BkcV0A622ZIuc7kHQUXkr6btJWk7hv0n0gkvxLo9MYfWnwszKoGDflPI9l05z5LOPOzzKeEYLFmLdilD1zx6GlORGN5z38HDJJTR1zkNJ7Zoq4wguviPp77CHPBoT2eyJPECNX4djtXYHXbrQlhH6MtQA0s9Nopg8XGFDf__JUh42oE0t1m0Y8cLnpbEge_XzzUew8kh6kMQfp-LGZ2Rkia6sZg" />
                    <div className="absolute inset-0 bg-secondary/80 dark:bg-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary text-primary font-bold text-xs uppercase tracking-widest mb-4 backdrop-blur-sm">Smart Home Solution</span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 shadow-sm">
                        Tự Động Hóa Cổng Cửa
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
                        Tiện nghi, an toàn và đẳng cấp. Điều khiển cổng nhà bạn chỉ với một chạm trên smartphone, tích hợp hệ thống nhà thông minh.
                    </p>
                    <div className="flex items-center justify-center space-x-3 text-sm font-medium">
                        <Link className="text-gray-300 hover:text-primary transition" href="/">Trang Chủ</Link>
                        <span className="text-primary">•</span>
                        <Link className="text-gray-300 hover:text-primary transition" href="/dich-vu">Sản Phẩm</Link>
                        <span className="text-primary">•</span>
                        <span className="text-white">Tự Động Hóa</span>
                    </div>
                </div>
            </section>
            */}



            <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary dark:text-white mb-4">Các Loại Cổng Tự Động Phổ Biến</h2>
                        <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
                            Tùy thuộc vào không gian và nhu cầu sử dụng, chúng tôi cung cấp 3 giải pháp motor cổng tự động chính.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Type 1 */}
                        <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-white/5 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 text-3xl">
                                <span className="material-symbols-outlined">garage_home</span>
                            </div>
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">Motor Âm Sàn</h3>
                            <p className="text-text-muted-light dark:text-text-muted-dark mb-6 text-sm">
                                Lắp đặt âm dưới mặt đất, đảm bảo tính thẩm mỹ tuyệt đối cho cánh cổng. Chịu tải trọng lớn, vận hành êm ái.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-green-500 mr-2 text-lg">check</span>
                                    Thẩm mỹ cao nhất
                                </li>
                                <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-green-500 mr-2 text-lg">check</span>
                                    Chống nước IP67
                                </li>
                                <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-green-500 mr-2 text-lg">check</span>
                                    Góc mở lên tới 180 độ
                                </li>
                            </ul>
                            <div className="text-center">
                                <span className="text-primary font-bold text-lg block mb-2">9.500.000đ - 25.000.000đ</span>
                                <Link className="text-secondary dark:text-white text-sm hover:underline font-medium" href="/lien-he">Nhận báo giá chi tiết</Link>
                            </div>
                        </div>
                        {/* Type 2 */}
                        <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-lg border border-primary text-center transform md:-translate-y-4 relative z-10">
                            <div className="absolute top-0 right-0 bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">Phổ Biến Nhất</div>
                            <div className="w-16 h-16 bg-primary text-secondary rounded-2xl flex items-center justify-center mb-6 text-3xl mx-auto shadow-lg shadow-primary/30">
                                <span className="material-symbols-outlined">door_sliding</span>
                            </div>
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">Motor Cánh Tay Đòn</h3>
                            <p className="text-text-muted-light dark:text-text-muted-dark mb-6 text-sm">
                                Giải pháp kinh tế và dễ dàng lắp đặt cho cổng mở xoay. Động cơ gắn trực tiếp lên trụ cổng và cánh cổng.
                            </p>
                            <ul className="space-y-3 mb-8 text-left">
                                <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-green-500 mr-2 text-lg">check</span>
                                    Chi phí hợp lý
                                </li>
                                <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-green-500 mr-2 text-lg">check</span>
                                    Dễ bảo trì, sửa chữa
                                </li>
                                <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-green-500 mr-2 text-lg">check</span>
                                    Lắp đặt nhanh chóng
                                </li>
                            </ul>
                            <div className="text-center">
                                <span className="text-primary font-bold text-lg block mb-2">6.500.000đ - 15.000.000đ</span>
                                <Link className="inline-block px-6 py-2 bg-primary text-secondary font-bold rounded hover:bg-yellow-400 transition" href="/lien-he">Đăng Ký Tư Vấn</Link>
                            </div>
                        </div>
                        {/* Type 3 */}
                        <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-white/5 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 text-3xl">
                                <span className="material-symbols-outlined">linear_scale</span>
                            </div>
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">Motor Cổng Trượt</h3>
                            <p className="text-text-muted-light dark:text-text-muted-dark mb-6 text-sm">
                                Dành cho cổng lùa (cổng trượt) ngang. Động cơ mạnh mẽ, có thể kéo cánh cổng nặng tới 2000kg.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-green-500 mr-2 text-lg">check</span>
                                    Tiết kiệm diện tích
                                </li>
                                <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-green-500 mr-2 text-lg">check</span>
                                    Tải trọng cực lớn
                                </li>
                                <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-green-500 mr-2 text-lg">check</span>
                                    Tốc độ đóng mở nhanh
                                </li>
                            </ul>
                            <div className="text-center">
                                <span className="text-primary font-bold text-lg block mb-2">4.500.000đ - 12.000.000đ</span>
                                <Link className="text-secondary dark:text-white text-sm hover:underline font-medium" href="/lien-he">Nhận báo giá chi tiết</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-16 bg-surface-light dark:bg-surface-dark bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPDaNFL2LKyyf6rXuaVkIrFQHJBynyZZAfnGlzoF7JZ3yecYRXc33c-5XyngE7wV1Bo6s6JBhATbPdAxp3YkMX10X2z-RdMBaK5lyBRiTT9oKEJ2JSkvQFsqtszUvG_IYbZqmNa5I_oNhQSMsSzN3fpEGkr8pepjBjtq4gS_9YsNN_c9zdSxPkUP8z4jrqwVfSA1sw8QNH45dRI1eHiVaGZFTGK0-ClhjlzEzxEQmuX72g0ygNlvjpSGQ17DnTzPTa9phwU3NEOJE')] bg-cover bg-center bg-no-repeat relative">
                <div className="absolute inset-0 bg-secondary/90 dark:bg-background-dark/95"></div>
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Trải Nghiệm Sự Tiện Nghi Ngay Hôm Nay</h2>
                    <p className="text-gray-300 mb-8 text-lg">Liên hệ với chúng tôi để được tư vấn giải pháp tự động hóa phù hợp nhất cho ngôi nhà của bạn.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a className="bg-primary hover:bg-yellow-400 text-secondary font-bold py-3 px-8 rounded shadow flex items-center justify-center transition transform hover:-translate-y-1" href="tel:0938771797">
                            <span className="material-symbols-outlined mr-2">phone_in_talk</span> 0938.771.797
                        </a>
                        <Link className="bg-transparent text-white border-2 border-primary hover:bg-primary hover:text-secondary font-bold py-3 px-8 rounded shadow flex items-center justify-center transition transform hover:-translate-y-1" href="/lien-he">
                            <span className="material-symbols-outlined mr-2">calendar_month</span> Đặt Lịch Khảo Sát
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
