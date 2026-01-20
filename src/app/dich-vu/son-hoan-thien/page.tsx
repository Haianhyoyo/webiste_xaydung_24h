
import Link from 'next/link';

export default function SonHoanThienPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full">
                <div className="relative flex flex-col items-center justify-center min-h-[600px] w-full bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(24, 23, 17, 0.7) 0%, rgba(24, 23, 17, 0.4) 50%, rgba(24, 23, 17, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFiKL0vBdgK8jnoJeRPl8Y8bSjXA1c32zkTglQmbsLxFmPBXRqCKdbHONR-VmDN9Y9iesXLZ_aIUthCnVpzYWE0sZarXB5Y1DG_hsMomC9WJp-tPTYBaAycfnd3wcni4QEUaPGpTTC-9ZKH75a5aRoY5b-8lX_YGUyMDCCQzdj2yaFoRI3vsopUEfFbErQ7P5gIuBgdvnvPngRfG9iyqHZKXeRijaRCnqOroeDg4lY6VQKPzYGDR64NRJb-JxFOwrKwFn2Boc2em4")' }}>
                    <div className="max-w-[960px] px-4 text-center z-10 flex flex-col gap-6 animate-fade-in-up">
                        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mx-auto backdrop-blur-sm">
                            <span className="material-symbols-outlined text-primary text-sm">verified</span>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">Công nghệ sơn cao cấp</span>
                        </div>
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                            Sơn &amp; Thi Công <br /> <span className="text-primary">Sơn Thành Phẩm</span>
                        </h1>
                        <p className="text-gray-200 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
                            Bảo vệ tối đa, nâng tầm thẩm mỹ cho cổng và hàng rào kim loại với công nghệ sơn tiên tiến. Độ bền vượt trội trước mọi điều kiện thời tiết khắc nghiệt.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                            <Link className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-yellow-400 transition-colors text-background-dark text-base font-bold shadow-lg shadow-yellow-900/20" href="/lien-he">
                                Tư vấn miễn phí
                            </Link>
                            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors text-base font-bold backdrop-blur-sm">
                                Xem quy trình
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="bg-background-dark py-16 px-4 md:px-20">
                <div className="max-w-[960px] mx-auto flex flex-col gap-12">
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                            Công Nghệ Sơn Chuyên Dụng
                        </h2>
                        <p className="text-[#bab49c] text-base md:text-lg max-w-[720px]">
                            Chúng tôi sử dụng các loại sơn chất lượng cao nhất để đảm bảo độ bền và vẻ đẹp cho công trình.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-[#393628] bg-surface-dark p-6 transition-all hover:border-primary/50 hover:bg-surface-dark/80 hover:-translate-y-1">
                            <div className="size-12 rounded-full bg-background-dark border border-[#393628] flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-colors text-primary">
                                <span className="material-symbols-outlined text-[28px]">layers</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white text-xl font-bold">Sơn Epoxy 2 Thành Phần</h3>
                                <p className="text-[#bab49c] text-sm leading-relaxed">Độ bám dính cực cao, chịu va đập và mài mòn tốt, thích hợp cho cửa cổng tần suất sử dụng lớn và chịu lực cao.</p>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-[#393628] bg-surface-dark p-6 transition-all hover:border-primary/50 hover:bg-surface-dark/80 hover:-translate-y-1">
                            <div className="size-12 rounded-full bg-background-dark border border-[#393628] flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-colors text-primary">
                                <span className="material-symbols-outlined text-[28px]">format_paint</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white text-xl font-bold">Sơn Tĩnh Điện</h3>
                                <p className="text-[#bab49c] text-sm leading-relaxed">Tạo bề mặt láng mịn, đều màu, thẩm mỹ cao. Công nghệ thân thiện với môi trường và chống bong tróc hiệu quả.</p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-[#393628] bg-surface-dark p-6 transition-all hover:border-primary/50 hover:bg-surface-dark/80 hover:-translate-y-1">
                            <div className="size-12 rounded-full bg-background-dark border border-[#393628] flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-colors text-primary">
                                <span className="material-symbols-outlined text-[28px]">shield</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white text-xl font-bold">Sơn Chống Rỉ Cao Cấp</h3>
                                <p className="text-[#bab49c] text-sm leading-relaxed">Lớp bảo vệ cốt lõi ngăn chặn quá trình oxy hóa từ bên trong, đặc biệt quan trọng cho công trình ngoài trời tiếp xúc mưa nắng.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Before/After Comparison */}
            <div className="py-16 bg-[#12110c] border-y border-[#2a271d]">
                <div className="max-w-[960px] mx-auto px-4 md:px-10">
                    <div className="flex flex-col items-center gap-4 mb-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase">
                            Hiệu quả thực tế
                        </div>
                        <h2 className="text-white text-3xl font-black">Biến Đổi Hoàn Hảo</h2>
                        <p className="text-[#bab49c] max-w-xl">Từ thô sơ đến hoàn mỹ. Xem sự khác biệt mà quy trình sơn chuyên nghiệp của GateMaster mang lại.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        {/* Before Card */}
                        <div className="relative group overflow-hidden rounded-xl border border-[#393628]">
                            <div className="aspect-[4/3] w-full bg-gray-800">
                                <div className="w-full h-full bg-cover bg-center grayscale opacity-80" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9_1wooS4-QqtwgB7MHby9gi-MxMQuqR3_qXeUs4kxJWkdN0DfPT7zivBSqA3fExNHa2fF9fOukWdTBPbD5zu42VTcZgX_1JYMWekPm-wMLKUwzm7pabRtIjp3P2Rbx60Kbp-Pa8uSKqSgFuF9xau7qgjgY_J2uucHUBP1CaHPOIjgfO7p2kHKHp1dUHfAB1MJnLJnn4fVmPMlPgW0a6kID6LXHwPtL5tyUU_kQ-CZ2tG_L2sKNzcjJipYhYlmbTU14qJ3omHApMU")' }}></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center size-8 rounded-full bg-gray-600 text-white font-bold text-xs">01</span>
                                    <h3 className="text-white font-bold text-lg">Trước khi thi công</h3>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-gray-800/90 text-gray-300 px-3 py-1 rounded text-xs font-medium backdrop-blur-sm border border-gray-700">Thô &amp; Rỉ Sét</div>
                        </div>
                        {/* After Card */}
                        <div className="relative group overflow-hidden rounded-xl border border-primary/30 shadow-[0_0_30px_-10px_rgba(244,202,37,0.3)]">
                            <div className="aspect-[4/3] w-full bg-gray-800">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqD44gh-bGff0i8M5CbVsWUQLKEV6N_N0zO6lRyxnRrUH28YhEaBbxTY-y23KGqdEJB6cZwtwHViP80hVRC0kR6UTRGXzllVhwl71Ei1SybzKtQtoRmIU8Wtc3VwQ1US84sVlupc83M-tTJqDxX6lcFueOoVzVYSL3Tq6emF983CYAvgRv0FuO62gPAb8eJ92v6G4M-trKqK_FWaO1FVMmHe4oyFolrIn3GG3WiSP9S_P78bWt1Yoi3Vi-s04TeUsGxRDdoUA2P4k")' }}></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center size-8 rounded-full bg-primary text-background-dark font-bold text-xs">02</span>
                                    <h3 className="text-white font-bold text-lg">Sau khi hoàn thiện</h3>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-primary text-background-dark px-3 py-1 rounded text-xs font-bold shadow-sm">Hoàn Mỹ</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Timeline */}
            <div className="bg-background-dark py-16 px-4 md:px-20">
                <div className="max-w-[960px] mx-auto flex flex-col">
                    <h2 className="text-white text-3xl font-black mb-10 text-center md:text-left">Quy Trình Thi Công Tiêu Chuẩn</h2>
                    <div className="grid grid-cols-[48px_1fr] gap-x-4 md:gap-x-8 px-0 md:px-4 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[23px] md:left-[27px] top-4 bottom-10 w-[2px] bg-[#393628]"></div>
                        {/* Step 1 */}
                        <div className="flex flex-col items-center gap-1 pt-1 z-10">
                            <div className="size-12 rounded-full bg-surface-dark border-2 border-primary flex items-center justify-center text-primary shadow-lg shadow-black/50">
                                <span className="material-symbols-outlined">texture</span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col pb-12 pt-2">
                            <h3 className="text-white text-lg font-bold leading-tight mb-1">Làm sạch bề mặt (Sandblasting)</h3>
                            <p className="text-[#bab49c] text-base leading-relaxed">Sử dụng công nghệ phun cát áp lực cao để loại bỏ hoàn toàn rỉ sét, dầu mỡ và lớp sơn cũ, tạo độ nhám cần thiết cho sơn bám dính.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-col items-center gap-1 pt-1 z-10">
                            <div className="size-12 rounded-full bg-surface-dark border border-[#544f3b] flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">brush</span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col pb-12 pt-2">
                            <h3 className="text-white text-lg font-bold leading-tight mb-1">Sơn lót chống rỉ</h3>
                            <p className="text-[#bab49c] text-base leading-relaxed">Phun lớp lót Epoxy giàu kẽm, tạo lớp khiên bảo vệ kim loại khỏi tác động của môi trường và tăng cường độ bám cho lớp phủ.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-col items-center gap-1 pt-1 z-10">
                            <div className="size-12 rounded-full bg-surface-dark border border-[#544f3b] flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">format_paint</span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col pb-12 pt-2">
                            <h3 className="text-white text-lg font-bold leading-tight mb-1">Sơn phủ lớp 1 &amp; 2</h3>
                            <p className="text-[#bab49c] text-base leading-relaxed">Thi công các lớp sơn phủ tạo màu. Mỗi lớp sơn được kiểm soát độ dày nghiêm ngặt để đảm bảo màu sắc đồng nhất và bề mặt mịn màng.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="flex flex-col items-center gap-1 pt-1 z-10">
                            <div className="size-12 rounded-full bg-surface-dark border border-[#544f3b] flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">stars</span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col pb-12 pt-2">
                            <h3 className="text-white text-lg font-bold leading-tight mb-1">Sơn hoàn thiện (Topcoat)</h3>
                            <p className="text-[#bab49c] text-base leading-relaxed">Lớp phủ cuối cùng tạo độ bóng (hoặc mờ theo yêu cầu), chống tia UV và chống trầy xước, mang lại vẻ đẹp hoàn thiện.</p>
                        </div>
                        {/* Step 5 */}
                        <div className="flex flex-col items-center gap-1 pt-1 z-10">
                            <div className="size-12 rounded-full bg-surface-dark border border-[#544f3b] flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">assignment_turned_in</span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col pt-2">
                            <h3 className="text-white text-lg font-bold leading-tight mb-1">Kiểm tra chất lượng (QC)</h3>
                            <p className="text-[#bab49c] text-base leading-relaxed">Đo độ dày màng sơn khô, kiểm tra độ bám dính và độ bóng trước khi đóng gói và bàn giao cho khách hàng.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Gallery & Technical Specs Table */}
            <div className="bg-surface-dark py-16 px-4 border-t border-[#393628]">
                <div className="max-w-[1280px] mx-auto">
                    {/* Specs Table */}
                    <div className="mb-16">
                        <h2 className="text-white text-2xl font-bold mb-6">Thông Số Kỹ Thuật &amp; Bảo Hành</h2>
                        <div className="overflow-x-auto rounded-lg border border-[#393628]">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-surface-dark border-b border-[#393628]">
                                        <th className="p-4 text-white font-bold text-sm uppercase tracking-wide">Tiêu chí</th>
                                        <th className="p-4 text-white font-bold text-sm uppercase tracking-wide">Sơn Epoxy</th>
                                        <th className="p-4 text-primary font-bold text-sm uppercase tracking-wide">Sơn Tĩnh Điện</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b border-[#393628] hover:bg-white/5 transition-colors">
                                        <td className="p-4 text-[#bab49c] font-medium">Độ bền màu (ngoài trời)</td>
                                        <td className="p-4 text-white">3 - 5 năm</td>
                                        <td className="p-4 text-white font-bold">7 - 10 năm</td>
                                    </tr>
                                    <tr className="border-b border-[#393628] hover:bg-white/5 transition-colors">
                                        <td className="p-4 text-[#bab49c] font-medium">Khả năng chống va đập</td>
                                        <td className="p-4 text-white font-bold">Rất Tốt</td>
                                        <td className="p-4 text-white">Tốt</td>
                                    </tr>
                                    <tr className="border-b border-[#393628] hover:bg-white/5 transition-colors">
                                        <td className="p-4 text-[#bab49c] font-medium">Độ bóng bề mặt</td>
                                        <td className="p-4 text-white">Bóng vừa / Mờ</td>
                                        <td className="p-4 text-white">Bóng cao / Sần / Mờ</td>
                                    </tr>
                                    <tr className="border-b border-[#393628] hover:bg-white/5 transition-colors">
                                        <td className="p-4 text-[#bab49c] font-medium">Thời gian thi công</td>
                                        <td className="p-4 text-white">3 - 4 ngày</td>
                                        <td className="p-4 text-white">1 - 2 ngày</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-4 text-[#bab49c] font-medium">Bảo hành</td>
                                        <td className="p-4 text-white">24 tháng</td>
                                        <td className="p-4 text-white">36 - 60 tháng</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 px-4 md:px-0">
                        <div>
                            <h2 className="text-white text-3xl font-black mb-2">Dự Án Đã Thực Hiện</h2>
                            <p className="text-[#bab49c]">Những tác phẩm nghệ thuật kim loại được bảo vệ bởi GateMaster.</p>
                        </div>
                        <Link className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" href="/du-an">
                            Xem tất cả dự án <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="aspect-square md:aspect-[4/5] rounded-lg overflow-hidden relative group cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVheKcR0Cg5Qr-q2aFUEuX31zUlLHmTEaBPZHXGvIhFEyPh9qmuuMTJ3Wam7bYEPVrU5HSMYvbXd55xFZatl451aD_8whpNCMu8ccDEMxveCPeNwyteu6jj-cwVpY9-jWcKaZRaBXj0BECy5RoYgTGNnafhMhqySOpJl_7JkT94xBGYuksakkTozKNHpNS0wruIe_AqeYMMIGW1V0JmfzgAjVaX2HzHADckcc6oNVOsxL4iMRT1wX9Pn4uHHWgkcoOfb3kkl8pMYU")' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                <p className="text-primary text-xs font-bold uppercase mb-1">Biệt thự Lan Anh</p>
                                <h3 className="text-white font-bold text-lg">Cổng nhôm đúc mạ đồng</h3>
                            </div>
                        </div>
                        <div className="aspect-square md:aspect-[4/5] rounded-lg overflow-hidden relative group cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVwh3dGWZot08MWLGeFr0ilMvBJsYjiB4pfK_P2DyZWzs8rlsMenh49dJb-xsDdNvETspGo1M4ZCMSBcaZiXL90gF52DpXqns4DOWPnLUko5VsQ3FJyRzZwOPDbHGSbPi184jZMhCWqyWu7YTiY-LJn2akNmEVPFCvr5VnM2zIYUtYF4xrP_FjQ2hPplEfeDBbvjZ083ALEN4DQBdBkC81uvs6-xbqOUZnUap6gbPh6TbveWdz8LfW5wVGwbTPxSVDgEemVBmcacg")' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                <p className="text-primary text-xs font-bold uppercase mb-1">Khu đô thị Sala</p>
                                <h3 className="text-white font-bold text-lg">Hàng rào thép hiện đại</h3>
                            </div>
                        </div>
                        <div className="aspect-square md:aspect-[4/5] rounded-lg overflow-hidden relative group cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnsv3bVqseZWRZ9zwR_ETh4JkxW0DuzaSnGb1MHaGWLq11JitsoMlP26wCLzsPDVoW7_KKSbXxnRbHS4lSaFeD-85ak0KOl9lEXTu508JTP1EiAEJukgHjTpQVedFZ3MykwkLZMZuzWl4gtWTMbNua9XncQ19bUhLYilqSVMsrofvY8xdQ8QIpjZENRVim9yQNHoIrqIIx9XmSHcHZlb_6mFJ_slwTbUiQ7YMP3WsKOrsm-HlWm1yoMMHgYcrh1SqoLsR3FbpQNig")' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                <p className="text-primary text-xs font-bold uppercase mb-1">Dinh thự Chateau</p>
                                <h3 className="text-white font-bold text-lg">Cổng sắt nghệ thuật</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-20 bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="max-w-[960px] mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-background-dark text-3xl md:text-4xl font-black mb-4">Sẵn sàng bảo vệ công trình của bạn?</h2>
                    <p className="text-background-dark/80 text-lg mb-8 max-w-2xl mx-auto font-medium">Liên hệ ngay hôm nay để nhận tư vấn giải pháp sơn phù hợp nhất cho cổng và hàng rào của bạn.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:0909123456" className="bg-background-dark text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-black transition-colors shadow-lg">
                            Gọi Hotline: 0909 123 456
                        </a>
                        <Link href="/lien-he" className="bg-transparent border-2 border-background-dark text-background-dark px-8 py-3 rounded-lg font-bold text-lg hover:bg-background-dark/10 transition-colors">
                            Gửi yêu cầu báo giá
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
