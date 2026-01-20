
import Link from 'next/link';

export default function KhamPhaCongNghePage() {
    return (
        <>
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img alt="Technology and Innovation Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPDaNFL2LKyyf6rXuaVkIrFQHJBynyZZAfnGlzoF7JZ3yecYRXc33c-5XyngE7wV1Bo6s6JBhATbPdAxp3YkMX10X2z-RdMBaK5lyBRiTT9oKEJ2JSkvQFsqtszUvG_IYbZqmNa5I_oNhQSMsSzN3fpEGkr8pepjBjtq4gS_9YsNN_c9zdSxPkUP8z4jrqwVfSA1sw8QNH45dRI1eHiVaGZFTGK0-ClhjlzEzxEQmuX72g0ygNlvjpSGQ17DnTzPTa9phwU3NEOJE" />
                    <div className="absolute inset-0 bg-secondary/80 dark:bg-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary text-primary font-bold text-xs uppercase tracking-widest mb-4 backdrop-blur-sm">Innovation & Future</span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 shadow-sm">
                        Khám Phá Công Nghệ
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
                        Tiên phong ứng dụng công nghệ 4.0 vào sản xuất và vận hành, mang đến những sản phẩm cơ khí chính xác và thông minh nhất.
                    </p>
                    <div className="flex items-center justify-center space-x-3 text-sm font-medium">
                        <Link className="text-gray-300 hover:text-primary transition" href="/">Trang Chủ</Link>
                        <span className="text-primary">•</span>
                        <Link className="text-gray-300 hover:text-primary transition" href="/dich-vu">Sản Phẩm</Link>
                        <span className="text-primary">•</span>
                        <span className="text-white">Công Nghệ</span>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface-light dark:bg-surface-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Thiết Kế Thông Minh</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary dark:text-white mb-6">Ứng Dụng Thực Tế Ảo (VR/AR)</h2>
                            <p className="text-text-muted-light dark:text-text-muted-dark mb-6 leading-relaxed">
                                Chúng tôi tiên phong áp dụng công nghệ mô phỏng 3D và thực tế ảo, giúp khách hàng hình dung chính xác 99% sản phẩm sau khi lắp đặt vào công trình thực tế trước khi tiến hành sản xuất.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-primary/10 p-2 rounded text-primary mr-4">
                                        <span className="material-symbols-outlined">view_in_ar</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary dark:text-white">Trải Nghiệm Trực Quan</h4>
                                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Xem mẫu cổng ngay trên điện thoại của bạn tại vị trí nhà bạn.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-primary/10 p-2 rounded text-primary mr-4">
                                        <span className="material-symbols-outlined">architecture</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary dark:text-white">Thiết Kế Chính Xác</h4>
                                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Bản vẽ kỹ thuật 2D/3D chi tiết từng milimet.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-orange-500 opacity-30 rounded-2xl blur-lg"></div>
                            <img alt="VR AR Technology in Gate Design" className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-2 border-white dark:border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPDaNFL2LKyyf6rXuaVkIrFQHJBynyZZAfnGlzoF7JZ3yecYRXc33c-5XyngE7wV1Bo6s6JBhATbPdAxp3YkMX10X2z-RdMBaK5lyBRiTT9oKEJ2JSkvQFsqtszUvG_IYbZqmNa5I_oNhQSMsSzN3fpEGkr8pepjBjtq4gS_9YsNN_c9zdSxPkUP8z4jrqwVfSA1sw8QNH45dRI1eHiVaGZFTGK0-ClhjlzEzxEQmuX72g0ygNlvjpSGQ17DnTzPTa9phwU3NEOJE" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary dark:text-white mb-4">Công Nghệ Sản Xuất Hiện Đại</h2>
                        <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
                            Hệ thống máy móc nhập khẩu từ Đức, Nhật Bản và Thụy Sĩ đảm bảo chất lượng sản phẩm đạt chuẩn quốc tế.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-primary">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
                            </div>
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-3 text-center">Cắt Laser Fiber CNC</h3>
                            <p className="text-text-muted-light dark:text-text-muted-dark text-sm text-center">
                                Công nghệ cắt kim loại bằng tia laser fiber công suất cao, cho vết cắt sắc nét, không ba via, sai số dưới 0.05mm.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-primary">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">token</span>
                            </div>
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-3 text-center">Đúc Chân Không V-Process</h3>
                            <p className="text-text-muted-light dark:text-text-muted-dark text-sm text-center">
                                Công nghệ đúc nhôm sử dụng khuôn cát khô và hút chân không, tạo ra bề mặt sản phẩm láng mịn, hoa văn sắc sảo.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-primary">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">imagesearch_roller</span>
                            </div>
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-3 text-center">Sơn Tĩnh Điện Tự Động</h3>
                            <p className="text-text-muted-light dark:text-text-muted-dark text-sm text-center">
                                Dây chuyền sơn tĩnh điện khép kín với súng phun robot, đảm bảo độ dày lớp sơn đồng đều, bám dính cực tốt.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface-light dark:bg-surface-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/5">
                                <img alt="IoT Connection" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYdKL-K6PheZoeZmAc7nZldDMswHzR2U0Wrcg9UT6qbt-fO7j7BkcV0A622ZIuc7kHQUXkr6btJWk7hv0n0gkvxLo9MYfWnwszKoGDflPI9l05z5LOPOzzKeEYLFmLdilD1zx6GlORGN5z38HDJJTR1zkNJ7Zoq4wguviPp77CHPBoT2eyJPECNX4djtXYHXbrQlhH6MtQA0s9Nopg8XGFDf__JUh42oE0t1m0Y8cLnpbEge_XzzUew8kh6kMQfp-LGZ2Rkia6sZg" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-pulse">
                                <span className="material-symbols-outlined text-white text-4xl">wifi</span>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Vạn Vật Kết Nối (IoT)</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary dark:text-white mb-6">Kiểm Soát Trong Tầm Tay</h2>
                            <p className="text-text-muted-light dark:text-text-muted-dark mb-6 leading-relaxed">
                                Tích hợp các thiết bị ngoại vi thông minh, biến cánh cổng & cầu thang trở thành một phần của hệ sinh thái ngôi nhà.
                            </p>
                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined">router</span>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-secondary dark:text-white">Wifi &amp; 4G</h4>
                                        <p className="mt-1 text-text-muted-light dark:text-text-muted-dark text-sm">
                                            Module điều khiển trung tâm kết nối internet tốc độ cao, phản hồi lệnh tức thì.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined">settings_voice</span>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-secondary dark:text-white">Điều Khiển Giọng Nói</h4>
                                        <p className="mt-1 text-text-muted-light dark:text-text-muted-dark text-sm">
                                            Tương thích với Google Assistant, Amazon Alexa, Apple Siri. "Ok Google, mở cổng!"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary text-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">An Ninh Đa Lớp</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
                            <div className="text-primary mb-4 text-5xl">
                                <span className="material-symbols-outlined">lock</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Khóa Điện Thông Minh</h3>
                            <p className="text-sm text-gray-400">Tự động chốt khóa khi cổng đóng, lực giữ lên tới 2000kg.</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
                            <div className="text-primary mb-4 text-5xl">
                                <span className="material-symbols-outlined">videocam</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Camera AI</h3>
                            <p className="text-sm text-gray-400">Nhận diện biển số xe (License Plate Recognition) để tự động mở cổng.</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
                            <div className="text-primary mb-4 text-5xl">
                                <span className="material-symbols-outlined">sensors</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Cảm Biến Hồng Ngoại</h3>
                            <p className="text-sm text-gray-400">Phát hiện người lạ đột nhập, kích hoạt còi báo động.</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition">
                            <div className="text-primary mb-4 text-5xl">
                                <span className="material-symbols-outlined">history</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Lịch Sử Ra Vào</h3>
                            <p className="text-sm text-gray-400">Ghi lại thời gian, hình ảnh người ra vào, truy xuất dễ dàng trên App.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-primary">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">Sẵn Sàng Cho Ngôi Nhà Tương Lai?</h2>
                    <p className="text-secondary/80 text-lg mb-8 max-w-2xl mx-auto">
                        Đừng để ngôi nhà của bạn lạc hậu. Hãy để chúng tôi mang công nghệ tiên tiến nhất đến với không gian sống của bạn.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link className="bg-secondary text-white font-bold py-4 px-10 rounded-full shadow-xl hover:scale-105 transition transform" href="/lien-he">
                            Liên Hệ Tư Vấn Ngay
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
