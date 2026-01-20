
import Link from 'next/link';
import ProjectGallery from '@/components/ProjectGallery';

export default function ThietKePage() {
    return (
        <>
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img alt="Interior Design Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPDaNFL2LKyyf6rXuaVkIrFQHJBynyZZAfnGlzoF7JZ3yecYRXc33c-5XyngE7wV1Bo6s6JBhATbPdAxp3YkMX10X2z-RdMBaK5lyBRiTT9oKEJ2JSkvQFsqtszUvG_IYbZqmNa5I_oNhQSMsSzN3fpEGkr8pepjBjtq4gS_9YsNN_c9zdSxPkUP8z4jrqwVfSA1sw8QNH45dRI1eHiVaGZFTGK0-ClhjlzEzxEQmuX72g0ygNlvjpSGQ17DnTzPTa9phwU3NEOJE" />
                    <div className="absolute inset-0 bg-secondary/80 dark:bg-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary text-primary font-bold text-xs uppercase tracking-widest mb-4 backdrop-blur-sm">Architecture & Interior</span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 shadow-sm">
                        Thiết Kế Kiến Trúc & Nội Thất
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
                        Kiến tạo không gian sống đẳng cấp, nơi nghệ thuật giao thoa cùng công năng, mang đậm dấu ấn cá nhân của gia chủ.
                    </p>
                    <div className="flex items-center justify-center space-x-3 text-sm font-medium">
                        <Link className="text-gray-300 hover:text-primary transition" href="/">Trang Chủ</Link>
                        <span className="text-primary">•</span>
                        <Link className="text-gray-300 hover:text-primary transition" href="/dich-vu">Dịch Vụ</Link>
                        <span className="text-primary">•</span>
                        <span className="text-white">Thiết Kế</span>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-16 bg-surface-light dark:bg-surface-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Triết Lý Thiết Kế</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary dark:text-white mb-6">Nghệ Thuật Sắp Đặt Không Gian</h2>
                            <p className="text-text-muted-light dark:text-text-muted-dark mb-6 leading-relaxed text-lg">
                                Tại Xây Dựng 24H, chúng tôi tin rằng mỗi ngôi nhà là một tác phẩm nghệ thuật độc bản. Không chỉ đơn thuần là sắp xếp nội thất, thiết kế là sự thổi hồn vào từng mét vuông diện tích, là sự cân bằng hoàn hảo giữa thẩm mỹ tinh tế và công năng tiện dụng.
                            </p>
                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined">palette</span>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-secondary dark:text-white">Thẩm Mỹ Vượt Trội</h4>
                                        <p className="mt-1 text-text-muted-light dark:text-text-muted-dark text-sm">
                                            Cập nhật những xu hướng thiết kế mới nhất thế giới (Modern Luxury, Indochine, Neo Classic).
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined">engineering</span>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-secondary dark:text-white">Giải Pháp Kỹ Thuật Tối Ưu</h4>
                                        <p className="mt-1 text-text-muted-light dark:text-text-muted-dark text-sm">
                                            Đảm bảo kết cấu bền vững, hệ thống điện nước thông minh và phong thủy hài hòa.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="absolute -top-4 -right-4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                            <img alt="Interior Design Philosophy" className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white dark:border-white/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYdKL-K6PheZoeZmAc7nZldDMswHzR2U0Wrcg9UT6qbt-fO7j7BkcV0A622ZIuc7kHQUXkr6btJWk7hv0n0gkvxLo9MYfWnwszKoGDflPI9l05z5LOPOzzKeEYLFmLdilD1zx6GlORGN5z38HDJJTR1zkNJ7Zoq4wguviPp77CHPBoT2eyJPECNX4djtXYHXbrQlhH6MtQA0s9Nopg8XGFDf__JUh42oE0t1m0Y8cLnpbEge_XzzUew8kh6kMQfp-LGZ2Rkia6sZg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Quy Trình Làm Việc</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary dark:text-white mb-4">5 Bước Kiến Tạo Không Gian Mơ Ước</h2>
                    </div>
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-white/10 -translate-y-1/2 z-0"></div>

                        <div className="flex flex-wrap justify-center gap-8 relative z-10">
                            {[
                                { step: "01", title: "Khảo Sát", desc: "Đo đạc hiện trạng, lắng nghe nhu cầu & tư vấn sơ bộ.", icon: "architecture" },
                                { step: "02", title: "Ý Tưởng", desc: "Lên layout mặt bằng công năng & định hình phong cách.", icon: "lightbulb" },
                                { step: "03", title: "Thiết Kế 3D", desc: "Phối cảnh chi tiết mọi góc cạnh, trực quan & sống động.", icon: "view_in_ar" },
                                { step: "04", title: "Bồ Kỹ Thuật", desc: "Triển khai bản vẽ thi công điện nước, kết cấu chi tiết.", icon: "format_list_numbered" },
                                { step: "05", title: "Giám Sát", desc: "Theo dõi quá trình thi công đảm bảo đúng với bản vẽ.", icon: "visibility" },
                            ].map((item, index) => (
                                <div key={index} className="w-full md:w-[calc(33.333%-2rem)] lg:w-[calc(20%-2rem)] bg-white dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-white/5 text-center group hover:-translate-y-2 transition duration-300">
                                    <div className="w-16 h-16 mx-auto bg-primary text-secondary rounded-full flex items-center justify-center text-3xl mb-4 shadow-lg shadow-primary/30 group-hover:scale-110 transition">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-secondary dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Gallery with Pagination */}
            <ProjectGallery />

            {/* CTA Section */}
            <section className="py-20 bg-background-light dark:bg-background-dark">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-white/5 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-tr-full"></div>

                        <h2 className="text-3xl font-display font-bold text-secondary dark:text-white mb-6 relative z-10">Bạn Muốn Sở Hữu Không Gian Đáng Mơ Ước?</h2>
                        <p className="text-text-muted-light dark:text-text-muted-dark mb-8 text-lg relative z-10">
                            Hãy để các kiến trúc sư tài năng của chúng tôi giúp bạn hiện thực hóa ý tưởng. Nhận bảng báo giá thiết kế chi tiết ngay hôm nay.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                            <a className="bg-primary hover:bg-yellow-400 text-secondary font-bold py-4 px-10 rounded-lg shadow-xl hover:scale-105 transition transform flex items-center justify-center cursor-pointer" href="tel:0938771797">
                                <span className="material-symbols-outlined mr-2">call</span> Gọi Ngay: 0938.771.797
                            </a>
                            <Link className="bg-transparent border-2 border-secondary dark:border-white text-secondary dark:text-white font-bold py-4 px-10 rounded-lg hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-secondary transition transform flex items-center justify-center" href="/lien-he">
                                <span className="material-symbols-outlined mr-2">edit_calendar</span> Đăng Ký Tư Vấn
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
