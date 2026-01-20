import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t-2 border-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="mr-3">
                                <img alt="Cổng Đẹp Pro Logo" className="h-50 w-auto object-contain" src="/image/logo-xay-dung-24h.png" />
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">Chuyên thiết kế, sản xuất và thi công cổng nhôm đúc, cổng sắt nghệ thuật, lan can, cầu thang cao cấp.</p>
                        <div className="flex space-x-4">
                            <a className="text-gray-400 hover:text-primary transition" href="#"><span className="material-symbols-outlined">public</span></a>
                            <a className="text-gray-400 hover:text-primary transition" href="#"><span className="material-symbols-outlined">chat</span></a>
                            <a className="text-gray-400 hover:text-primary transition" href="#"><span className="material-symbols-outlined">play_circle</span></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-l-4 border-primary pl-3 text-white">Liên Kết Nhanh</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link className="hover:text-primary transition" href="/">Giới thiệu</Link></li>
                            <li><Link className="hover:text-primary transition" href="#">Dịch vụ</Link></li>
                            <li><Link className="hover:text-primary transition" href="#">Dự án đã làm</Link></li>
                            <li><Link className="hover:text-primary transition" href="#">Bảng báo giá</Link></li>
                            <li><Link className="hover:text-primary transition" href="#">Tin tức & Sự kiện</Link></li>
                            <li><Link className="hover:text-primary transition" href="/lien-he">Liên hệ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-l-4 border-primary pl-3 text-white">Sản Phẩm</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link className="hover:text-primary transition" href="/dich-vu/cong-nhom-duc">Cổng nhôm đúc</Link></li>
                            <li><Link className="hover:text-primary transition" href="/dich-vu/cong-sat-my-thuat">Cổng sắt mỹ thuật</Link></li>
                            <li><Link className="hover:text-primary transition" href="/dich-vu/cong-cnc">Cổng CNC</Link></li>
                            <li><Link className="hover:text-primary transition" href="/dich-vu/lan-can-va-cau-thang">Lan can ban công</Link></li>
                            <li><Link className="hover:text-primary transition" href="/dich-vu/lan-can-va-cau-thang">Cầu thang xoắn</Link></li>
                            <li><Link className="hover:text-primary transition" href="/dich-vu/tu-dong-hoa">Tự động hóa</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-l-4 border-primary pl-3 text-white">Liên Hệ</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-primary mr-2 text-lg">location_on</span>
                                <span>135 - Nam Đồng - Đống Đa - Hà Nội</span>
                            </li>
                            <li className="flex items-center">
                                <span className="material-symbols-outlined text-primary mr-2 text-lg">phone</span>
                                <span>0587.979.999</span>
                            </li>
                            <li className="flex items-center">
                                <span className="material-symbols-outlined text-primary mr-2 text-lg">email</span>
                                <span>ceoadsup@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>© 2023 Xây Dựng 24h. Anhrio.</p>
                </div>
            </div>
        </footer>
    );
}
