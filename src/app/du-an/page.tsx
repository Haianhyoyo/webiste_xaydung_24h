import Link from 'next/link';
import CompletedProjectsList from '@/components/CompletedProjectsList';

export default function ProjectsPage() {
    return (
        <>
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img alt="Project Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4" />
                    <div className="absolute inset-0 bg-secondary/80 dark:bg-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary text-primary font-bold text-xs uppercase tracking-widest mb-4 backdrop-blur-sm">Portfolio</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 shadow-sm">
                        Dự Án Đã Hoàn Thành
                    </h1>
                    <div className="flex items-center justify-center space-x-3 text-sm font-medium">
                        <Link className="text-gray-300 hover:text-primary transition" href="/">Trang Chủ</Link>
                        <span className="text-primary">•</span>
                        <span className="text-white">Dự Án</span>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-6 py-2 rounded-full bg-primary text-secondary font-bold shadow-lg hover:bg-yellow-400 transition-transform hover:-translate-y-1">Tất Cả</button>
                        <Link href="/dich-vu/cong-nhom-duc"
                            className="inline-block px-6 py-2 rounded-full
                      bg-white dark:bg-surface-dark
                      border border-gray-200 dark:border-white/10
                      text-text-light dark:text-text-dark font-medium
                      hover:border-primary hover:text-primary
                      dark:hover:border-primary dark:hover:text-primary
                      transition-all hover:-translate-y-1">
                            Cổng Nhôm Đúc
                        </Link>
                        <Link href="/dich-vu/cong-sat-my-thuat"
                            className="inline-block px-6 py-2 rounded-full
                      bg-white dark:bg-surface-dark
                      border border-gray-200 dark:border-white/10
                      text-text-light dark:text-text-dark font-medium
                      hover:border-primary hover:text-primary
                      dark:hover:border-primary dark:hover:text-primary
                      transition-all hover:-translate-y-1">
                            Cổng Sắt Mỹ Thuật
                        </Link>
                        <Link href="/dich-vu/cong-cnc"
                            className="inline-block px-6 py-2 rounded-full
                      bg-white dark:bg-surface-dark
                      border border-gray-200 dark:border-white/10
                      text-text-light dark:text-text-dark font-medium
                      hover:border-primary hover:text-primary
                      dark:hover:border-primary dark:hover:text-primary
                      transition-all hover:-translate-y-1">
                            Cổng CNC
                        </Link>
                        <Link href="/dich-vu/tu-dong-hoa"
                            className="inline-block px-6 py-2 rounded-full
                      bg-white dark:bg-surface-dark
                      border border-gray-200 dark:border-white/10
                      text-text-light dark:text-text-dark font-medium
                      hover:border-primary hover:text-primary
                      dark:hover:border-primary dark:hover:text-primary
                      transition-all hover:-translate-y-1">
                            Tự Động Hóa
                        </Link>
                        <Link href="/dich-vu/lan-can-va-cau-thang"
                            className="inline-block px-6 py-2 rounded-full
                      bg-white dark:bg-surface-dark
                      border border-gray-200 dark:border-white/10
                      text-text-light dark:text-text-dark font-medium
                      hover:border-primary hover:text-primary
                      dark:hover:border-primary dark:hover:text-primary
                      transition-all hover:-translate-y-1">
                            Lan Can &amp; Cầu Thang
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects List with Pagination */}
            <CompletedProjectsList />

            <section className="py-12 bg-secondary border-t border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary">
                        {[
                            { val: '1500+', label: 'Dự án hoàn thành' },
                            { val: '63', label: 'Tỉnh thành phục vụ' },
                            { val: '50+', label: 'Nhân sự tay nghề cao' },
                            { val: '98%', label: 'Khách hàng hài lòng' }
                        ].map((stat, idx) => (
                            <div key={idx} className="p-4 rounded hover:bg-white/5 transition duration-300">
                                <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.val}</div>
                                <div className="text-xs md:text-sm font-medium text-white opacity-80 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface-light dark:bg-surface-dark">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-display font-bold text-secondary dark:text-text-dark mb-4">Bạn Đã Sẵn Sàng Nâng Tầm Ngôi Nhà Của Mình?</h2>
                    <p className="text-text-muted-light dark:text-text-muted-dark mb-8 text-lg">Liên hệ ngay với chúng tôi để được tư vấn thiết kế miễn phí và nhận báo giá ưu đãi nhất cho công trình của bạn.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a className="bg-primary hover:bg-yellow-400 text-secondary font-bold py-3 px-8 rounded shadow flex items-center justify-center transition transform hover:-translate-y-1" href="tel:0589779999">
                            <span className="material-symbols-outlined mr-2">phone_in_talk</span> 0589.779.999
                        </a>
                        <Link className="bg-white dark:bg-transparent text-secondary dark:text-primary border-2 border-secondary dark:border-primary hover:bg-secondary hover:text-white dark:hover:bg-primary dark:hover:text-secondary font-bold py-3 px-8 rounded shadow flex items-center justify-center transition transform hover:-translate-y-1" href="/lien-he">
                            <span className="material-symbols-outlined mr-2">email</span> Gửi Yêu Cầu
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
