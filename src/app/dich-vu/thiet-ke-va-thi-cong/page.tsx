
import Image from 'next/image';
import Link from 'next/link';
import CompletedProjectsList from '@/components/CompletedProjectsList';

export default function ThietKeThiCongPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="w-full">
                <div className="@container">
                    <div className="relative flex min-h-[500px] flex-col items-center justify-center p-4 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmeJzz-ij94YZOySNKUcAsgTi55CyPlreTWVZl7kXsHbKgaguzFz-hJ1dP0ewwoMjoP4MUOeFdwlc1VFLA0Ng-WvQNTicsCtogt7IY-8F9rj06rShKvIy3QaZ880ympRw2FGmfnK4l6XPrXH6xDHTHQrBs0c9gNBIHwZgTcmOhjDCA2t-VY-PkXIF3T_XqXz3nsz4MnvmlJTFhvwSzgzeU_w7sg0zRD5gtml9kME1V2_JUu5Nl5I-Ry9JDqBryRu2RoH-qXarpWVo")' }}></div>
                        <div className="relative z-10 flex flex-col gap-6 max-w-[800px] px-4">
                            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">Giải Pháp Tổng Thể</span>
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                                Thiết Kế &amp; Thi Công<br /><span className="text-primary">Trọn Gói Chuyên Nghiệp</span>
                            </h1>
                            <p className="text-gray-200 text-base font-normal leading-relaxed md:text-lg max-w-[600px] self-center">
                                Từ ý tưởng sơ phác đến công trình hoàn thiện, chúng tôi đồng hành cùng bạn kiến tạo không gian sống đẳng cấp với quy trình khép kín, tối ưu chi phí và thời gian.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-yellow-400 text-[#181711] text-base font-bold transition-transform hover:scale-105">
                                    <span className="material-symbols-outlined mr-2">calendar_month</span>Đặt Lịch Khảo Sát
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Showcase */}
            <div className="w-full bg-surface-dark py-20 border-b border-[#393628]">
                <div className="layout-container flex justify-center px-4 md:px-10">
                    <div className="max-w-[1200px] w-full flex flex-col gap-12">
                        <div className="flex justify-between items-end">
                            <div>
                                <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Thực Tế Thi Công</h2>
                            </div>
                            <Link className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline" href="/du-an">Xem tất cả <span className="material-symbols-outlined">arrow_forward</span></Link>
                        </div>

                        <CompletedProjectsList className="!bg-transparent !py-0" />
                    </div>
                </div>
            </div>

            {/* Service Categories Section - NEW */}
            <div className="w-full bg-background-light dark:bg-background-dark py-20 border-b border-[#393628]">
                <div className="layout-container flex justify-center px-4 md:px-10">
                    <div className="max-w-[1200px] w-full flex flex-col gap-10">
                        <div className="text-center">
                            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Dịch Vụ Cung Cấp</h2>
                            <h3 className="text-secondary dark:text-white text-3xl md:text-4xl font-black">Giải Pháp Toàn Diện Cho Ngôi Nhà</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: 'Cổng CNC Laser', link: '/dich-vu/cong-cnc', icon: 'precision_manufacturing' },
                                { name: 'Cổng Hợp Kim Nhôm', link: '/dich-vu/cong-hop-kim-nhom', icon: 'gate' },
                                { name: 'Cổng Nhôm Đúc', link: '/dich-vu/cong-nhom-duc', icon: 'star' },
                                { name: 'Cổng Sắt Mỹ Thuật', link: '/dich-vu/cong-sat-my-thuat', icon: 'architecture' },
                                { name: 'Lan Can & Cầu Thang', link: '/dich-vu/lan-can-va-cau-thang', icon: 'stairs' },
                                { name: 'Thang Máy', link: '/dich-vu/thang-may', icon: 'elevator' },
                                { name: 'Tự Động Hóa', link: '/dich-vu/tu-dong-hoa', icon: 'settings_remote' }
                            ].map((service, idx) => (
                                <Link
                                    key={idx}
                                    href={service.link}
                                    className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-[#393628] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="size-16 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                                        <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                    </div>
                                    <h4 className="text-secondary dark:text-white font-bold text-lg text-center group-hover:text-primary transition-colors">{service.name}</h4>
                                    <span className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                                        Xem chi tiết <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Value Props */}
            <div className="w-full bg-surface-dark border-b border-[#393628]">
                <div className="layout-container flex justify-center py-16 px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px]">
                        <div className="flex flex-col gap-4 p-6 rounded-xl bg-background-dark/50 border border-[#393628] hover:border-primary/50 transition-colors">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-3xl">verified_user</span>
                            </div>
                            <h3 className="text-white text-xl font-bold">Chất Lượng Cam Kết</h3>
                            <p className="text-[#bab49c]">Giám sát chặt chẽ từng giai đoạn, sử dụng vật liệu đúng chủng loại theo hợp đồng. Bảo hành dài hạn.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-6 rounded-xl bg-background-dark/50 border border-[#393628] hover:border-primary/50 transition-colors">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-3xl">schedule</span>
                            </div>
                            <h3 className="text-white text-xl font-bold">Đúng Tiến Độ</h3>
                            <p className="text-[#bab49c]">Quy trình làm việc khoa học, đội ngũ nhân công dồi dào đảm bảo bàn giao công trình đúng hẹn.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-6 rounded-xl bg-background-dark/50 border border-[#393628] hover:border-primary/50 transition-colors">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-3xl">savings</span>
                            </div>
                            <h3 className="text-white text-xl font-bold">Tối Ưu Chi Phí</h3>
                            <p className="text-[#bab49c]">Xưởng sản xuất trực tiếp không qua trung gian, giúp khách hàng tiết kiệm 15-20% chi phí.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Steps */}
            <div className="w-full bg-background-dark py-20">
                <div className="layout-container flex justify-center px-4 md:px-10">
                    <div className="max-w-[1000px] w-full flex flex-col gap-16">
                        <div className="text-center">
                            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Quy Trình Làm Việc</h2>
                            <h3 className="text-white text-3xl md:text-4xl font-black">6 Bước Đến Ngôi Nhà Mơ Ước</h3>
                        </div>

                        <div className="relative">
                            {/* Vertical line for mobile, Horizontal for desktop could be complex with Tailwind only, sticking to vertical list style for better responsiveness */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#393628] -translate-x-1/2 hidden md:block"></div>

                            <div className="flex flex-col gap-12">
                                {[
                                    { icon: 'contacts', title: 'Tiếp Nhận & Tư Vấn', desc: 'Lắng nghe nhu cầu, tư vấn sơ bộ về phong cách, vật liệu và dự toán chi phí.' },
                                    { icon: 'architecture', title: 'Khảo Sát Thực Tế', desc: 'Kỹ sư đến tận nơi đo đạc, đánh giá hiện trạng và tư vấn giải pháp thi công tối ưu.' },
                                    { icon: 'design_services', title: 'Thiết Kế 2D/3D', desc: 'Lên bản vẽ chi tiết, phối cảnh 3D để khách hàng hình dung rõ nét về sản phẩm.' },
                                    { icon: 'contract_edit', title: 'Ký Hợp Đồng', desc: 'Thống nhất phương án, vật liệu, đơn giá và tiến độ thi công. Ký kết hợp đồng pháp lý.' },
                                    { icon: 'construction', title: 'Sản Xuất & Thi Công', desc: 'Gia công tại xưởng và lắp đặt tại công trình theo đúng bản vẽ kỹ thuật.' },
                                    { icon: 'handshake', title: 'Nghiệm Thu & Bàn Giao', desc: 'Khách hàng kiểm tra chất lượng, nghiệm thu và nhận bàn giao công trình. Kích hoạt bảo hành.' }
                                ].map((step, idx) => (
                                    <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center md:even:flex-row-reverse group`}>
                                        <div className="flex-1 md:text-right md:group-even:text-left pl-16 md:pl-0 md:pr-0">
                                            <h4 className="text-white text-xl font-bold mb-2">{idx + 1}. {step.title}</h4>
                                            <p className="text-[#bab49c]">{step.desc}</p>
                                        </div>
                                        <div className="size-16 rounded-full bg-surface-dark border-4 border-background-dark outline outline-2 outline-primary flex items-center justify-center z-10 relative shrink-0">
                                            <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                                        </div>
                                        <div className="flex-1 hidden md:block text-[#393628] font-black text-6xl opacity-20 select-none group-even:text-right group-odd:text-left">
                                            0{idx + 1}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="w-full bg-gradient-to-r from-[#221e10] to-[#181711] py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="layout-container flex flex-col items-center text-center px-4 relative z-10">
                    <h2 className="text-white text-3xl md:text-5xl font-black mb-6 max-w-[800px]">Đừng Để Ý Tưởng Chỉ Là Ý Tưởng</h2>
                    <p className="text-xl text-[#bab49c] mb-10 max-w-[600px]">Hãy để chúng tôi hiện thực hóa ngôi nhà trong mơ của bạn với giải pháp thi công toàn diện và chất lượng đỉnh cao.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link className="flex h-14 items-center justify-center rounded-lg bg-primary px-8 text-[#181711] text-lg font-bold hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]" href="/lien-he">
                            Nhận Báo Giá Ngay
                        </Link>
                        <a className="flex h-14 items-center justify-center rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm px-8 text-white text-lg font-bold hover:bg-white/10 transition-all" href="tel:0901234567">
                            <span className="material-symbols-outlined mr-2">call</span> 0901 234 567
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
