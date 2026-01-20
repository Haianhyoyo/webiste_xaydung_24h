
'use client';

import { useState } from 'react';
import Pagination from './Pagination';

const PROJECTS = [
    {
        id: 1,
        title: 'Biệt Thự Hiện Đại - Vinhomes Riverside',
        style: 'Hiện Đại (Modern)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuIwJhoMqBM8wL2i-LRTvLA_7ZMLYjWAni78Uzed8WkSMGOthnXBr75bbU2e0H9uku9dk-VURIz8CmMDIj0ygjs-IK2ctweXaTigp9FVhONb0fTwK6JA-rE-HYrRb87uhQNcTO9i7qVB8EUcunwFbV0vE8smJtIWIUyX3OAeQDJXGzPiPOPs7OFmM2WdLnhBtCc1D4sYfR0TNGcusTOQ-QIR_ndCGWYeo3rPcq4NkTpP2oKZCxwlZVRg5mZtb7AsJYD0fl_mvpyGQ',
        desc: 'Không gian mở, tối giản với vật liệu kính và bê tông trần.'
    },
    {
        id: 2,
        title: 'Lâu Đài Cổ Điển - Ninh Bình',
        style: 'Cổ Điển (Classic)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPDaNFL2LKyyf6rXuaVkIrFQHJBynyZZAfnGlzoF7JZ3yecYRXc33c-5XyngE7wV1Bo6s6JBhATbPdAxp3YkMX10X2z-RdMBaK5lyBRiTT9oKEJ2JSkvQFsqtszUvG_IYbZqmNa5I_oNhQSMsSzN3fpEGkr8pepjBjtq4gS_9YsNN_c9zdSxPkUP8z4jrqwVfSA1sw8QNH45dRI1eHiVaGZFTGK0-ClhjlzEzxEQmuX72g0ygNlvjpSGQ17DnTzPTa9phwU3NEOJE',
        desc: 'Sự lộng lẫy xa hoa với phào chỉ dát vàng và nội thất gỗ quý.'
    },
    {
        id: 3,
        title: 'Nhà Phố Indochine - Hà Nội',
        style: 'Indochine',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4',
        desc: 'Vẻ đẹp hoài cổ, lãng mạn kết hợp tiện nghi hiện đại.'
    },
    {
        id: 4,
        title: 'Penthouse Duplex - Ecopark',
        style: 'Luxury',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuIwJhoMqBM8wL2i-LRTvLA_7ZMLYjWAni78Uzed8WkSMGOthnXBr75bbU2e0H9uku9dk-VURIz8CmMDIj0ygjs-IK2ctweXaTigp9FVhONb0fTwK6JA-rE-HYrRb87uhQNcTO9i7qVB8EUcunwFbV0vE8smJtIWIUyX3OAeQDJXGzPiPOPs7OFmM2WdLnhBtCc1D4sYfR0TNGcusTOQ-QIR_ndCGWYeo3rPcq4NkTpP2oKZCxwlZVRg5mZtb7AsJYD0fl_mvpyGQ',
        desc: 'Tầm nhìn panorama, nội thất nhập khẩu Ý đẳng cấp.'
    },
    {
        id: 5,
        title: 'Biệt Thự Vườn - Ba Vì',
        style: 'Tropical',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPDaNFL2LKyyf6rXuaVkIrFQHJBynyZZAfnGlzoF7JZ3yecYRXc33c-5XyngE7wV1Bo6s6JBhATbPdAxp3YkMX10X2z-RdMBaK5lyBRiTT9oKEJ2JSkvQFsqtszUvG_IYbZqmNa5I_oNhQSMsSzN3fpEGkr8pepjBjtq4gS_9YsNN_c9zdSxPkUP8z4jrqwVfSA1sw8QNH45dRI1eHiVaGZFTGK0-ClhjlzEzxEQmuX72g0ygNlvjpSGQ17DnTzPTa9phwU3NEOJE',
        desc: 'Hòa mình vào thiên nhiên với thiết kế xanh mát.'
    },
    {
        id: 6,
        title: 'Căn Hộ Studio - Sài Gòn',
        style: 'Minimalism',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4',
        desc: 'Tối ưu hóa công năng cho không gian nhỏ hẹp.'
    },
    {
        id: 7,
        title: 'Showroom Thời Trang - Hàng Bài',
        style: 'Industrial',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuIwJhoMqBM8wL2i-LRTvLA_7ZMLYjWAni78Uzed8WkSMGOthnXBr75bbU2e0H9uku9dk-VURIz8CmMDIj0ygjs-IK2ctweXaTigp9FVhONb0fTwK6JA-rE-HYrRb87uhQNcTO9i7qVB8EUcunwFbV0vE8smJtIWIUyX3OAeQDJXGzPiPOPs7OFmM2WdLnhBtCc1D4sYfR0TNGcusTOQ-QIR_ndCGWYeo3rPcq4NkTpP2oKZCxwlZVRg5mZtb7AsJYD0fl_mvpyGQ',
        desc: 'Cá tính, mạnh mẽ với tường gạch trần và kết cấu thép.'
    },
    {
        id: 8,
        title: 'Resort Mini - Phú Quốc',
        style: 'Mediterranean',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPDaNFL2LKyyf6rXuaVkIrFQHJBynyZZAfnGlzoF7JZ3yecYRXc33c-5XyngE7wV1Bo6s6JBhATbPdAxp3YkMX10X2z-RdMBaK5lyBRiTT9oKEJ2JSkvQFsqtszUvG_IYbZqmNa5I_oNhQSMsSzN3fpEGkr8pepjBjtq4gS_9YsNN_c9zdSxPkUP8z4jrqwVfSA1sw8QNH45dRI1eHiVaGZFTGK0-ClhjlzEzxEQmuX72g0ygNlvjpSGQ17DnTzPTa9phwU3NEOJE',
        desc: 'Hơi thở đại dương với gam màu trắng xanh đặc trưng.'
    }
];

export default function ProjectGallery() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(PROJECTS.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = PROJECTS.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className="py-16 bg-secondary text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Các Dự Án Tiêu Biểu</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Khám phá những công trình kiến trúc độc đáo được thực hiện bởi đội ngũ Xây Dựng 24H.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {currentItems.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                            <img alt={project.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src={project.image} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.style}</span>
                                <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition duration-300">{project.title}</h3>
                                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition duration-300 delay-100">
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </section>
    );
}
