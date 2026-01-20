export interface Product {
    id: string;
    slug: string;
    name: string;
    category: string;
    model: string;
    origin: string;
    weightCapacity?: string;
    supplier?: string;
    installmentInfo?: string;
    warranty?: string;
    paymentTerms?: string;
    deliveryTime?: string;
    originalPrice: number;
    salePrice: number;
    images: string[];
    specifications: {
        label: string;
        value: string;
    }[] | Record<string, string>;
    description: string;
    features: string[];
    brand?: string;
    status?: string;
    rating?: number;
    reviews?: number;
}

export const PRODUCTS: Product[] = [
    {
        id: '1',
        slug: 'cong-nhom-duc-hoa-van-co-dien',
        name: 'Cổng Nhôm Đúc Hoa Văn Cổ Điển',
        category: 'Cổng Nhôm Đúc',
        model: 'CND-HD-001',
        origin: 'Nhật Bản, Hàn Quốc, Thái Lan',
        supplier: 'Nhà cung cấp',
        installmentInfo: 'Tặng bộ trả góp giá 3.000.000đ',
        warranty: 'Mới 100%',
        paymentTerms: 'Bảo hành',
        deliveryTime: 'Chính hãng',
        originalPrice: 45000000,
        salePrice: 35000000,
        images: [
            '/images/products/cong-nhom-duc-1.jpg',
            '/images/products/cong-nhom-duc-2.jpg',
            '/images/products/cong-nhom-duc-3.jpg',
            '/images/products/cong-nhom-duc-4.jpg',
        ],
        specifications: [
            { label: 'Model', value: 'CND-HD-001' },
            { label: 'Xuất xứ', value: 'Nhật Bản, Hàn Quốc, Thái Lan' },
            { label: 'Tải trọng', value: 'Theo thiết kế' },
            { label: 'Nhà cung cấp', value: 'Nhà cung cấp' },
            { label: 'Tặng bộ trả góp giá 3.000.000đ', value: '' },
            { label: 'Tình trạng', value: 'Mới 100%' },
            { label: 'Bảo hành', value: 'Chính hãng' },
            { label: 'Trạng thái', value: 'Còn hàng' },
            { label: 'Lắp đặt', value: 'Lắp đặt toàn quốc' },
        ],
        description: `
            <h3>Cổng nhôm đúc được ích hợp nhiều công nghệ tiên tiến, đô an toàn cao từ Nhật bản, Hàn quốc, Ý Đức - giúp trưng mày vận hành êm ái và bền bỉ. Thiết kế của sản phẩm được chứng tối nghiêm cứu, chọn lọc kỹ lưỡng từ các thương hiệu thang máy nổi tiếng thế giới, thiết kế của sản phẩm được chứng tối nghiêm cứu, chọn lọc kỹ lưỡng từ các thương hiệu <strong>dòng thang máy dành cho gia đình</strong> nay.</h3>

            <h3>Cổng nhôm đúc với Tính năng và Công nghệ vượt trội</h3>
            
            <div style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #0066cc; margin-top: 0;">✅ Động cơng nhôm đúc tiên tiến, tích hợp nhiều tính năng hiện đại</h4>
                <ul style="margin-bottom: 0;">
                    <li>Tự động chạy bằng công nghệ 32bit (Vi xử lý), nhận chồng và bền bỉ</li>
                    <li>Công nghệ truyền động tua Hiệu-suất động cơ loại không hợp số</li>
                    <li>Khả dụng và công tắng, êm ái và chính xác</li>
                    <li>Tiết kiệm năng lượng, lên tới 40% so với thiết bị thông thường</li>
                    <li>Bộ điều khiển tốc độ, công nghệ VWF giúp tư giảm sát và điều chỉnh tốc độ chính xác</li>
                </ul>
            </div>

            <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #16a34a; margin-top: 0;">✅ Thiết kế dành riêng cho gia đình Ổn định - An toàn cao</h4>
                <ul style="margin-bottom: 0;">
                    <li>Hướng dẫn sử dụng và tăng sản phẩm nhận xây và mất điện</li>
                    <li>Chất liệu cao cấp, thiết kế sang trọng, phù hợp với mọi không gian gia đình</li>
                    <li>Hệ thống an toàn đa lớp, bảo vệ người sử dụng tối đa</li>
                    <li>Vận hành êm ái, ít tiếng ồn, không làm ảnh hưởng đến sinh hoạt</li>
                </ul>
            </div>

            <h3>Cam kết chất lượng</h3>
            <p>Chúng tôi cam kết thiết bị được nhập khẩu hoàn toàn, mới 100% và là sản phẩm chính hãng.</p>
            <p><strong>Mọi tư vấn đều là miễn phí!</strong></p>
        `,
        features: [
            'Hỗ trợ kỹ thuật & tư vấn tận tình 24/7',
            'Bảo hành chính hãng Cổng Nhôm Đúc Việt Nam',
            'Sản phẩm mới 100% nguyên đai, nguyên kiện',
            'Thi công lắp đặt nhanh chóng',
        ],
    },
    {
        id: '2',
        slug: 'cong-nhom-duc-hien-dai',
        name: 'Cổng Nhôm Đúc Hiện Đại',
        category: 'Cổng Nhôm Đúc',
        model: 'CND-HD-002',
        origin: 'Nhật Bản, Hàn Quốc, Thái Lan',
        supplier: 'Nhà cung cấp',
        installmentInfo: 'Tặng bộ trả góp giá 3.000.000đ',
        warranty: 'Mới 100%',
        paymentTerms: 'Bảo hành',
        deliveryTime: 'Chính hãng',
        originalPrice: 55000000,
        salePrice: 42000000,
        images: [
            '/images/products/cong-nhom-duc-5.jpg',
            '/images/products/cong-nhom-duc-6.jpg',
            '/images/products/cong-nhom-duc-7.jpg',
            '/images/products/cong-nhom-duc-8.jpg',
        ],
        specifications: [
            { label: 'Model', value: 'CND-HD-002' },
            { label: 'Xuất xứ', value: 'Nhật Bản, Hàn Quốc, Thái Lan' },
            { label: 'Tải trọng', value: 'Theo thiết kế' },
            { label: 'Nhà cung cấp', value: 'Nhà cung cấp' },
            { label: 'Tặng bộ trả góp giá 3.000.000đ', value: '' },
            { label: 'Tình trạng', value: 'Mới 100%' },
            { label: 'Bảo hành', value: 'Chính hãng' },
            { label: 'Trạng thái', value: 'Còn hàng' },
            { label: 'Lắp đặt', value: 'Lắp đặt toàn quốc' },
        ],
        description: `
            <h3>Cổng nhôm đúc hiện đại được thiết kế với phong cách tối giản, sang trọng, phù hợp với xu hướng kiến trúc đương đại.</h3>

            <h3>Ưu điểm vượt trội</h3>
            
            <div style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #0066cc; margin-top: 0;">✅ Chất liệu nhôm đúc cao cấp</h4>
                <ul style="margin-bottom: 0;">
                    <li>Nhôm đúc nguyên khối, độ bền cao, chống ăn mòn tuyệt đối</li>
                    <li>Bề mặt sơn tĩnh điện, chống bám bụi, dễ vệ sinh</li>
                    <li>Không bị gỉ sét, biến dạng theo thời gian</li>
                    <li>Trọng lượng nhẹ, dễ dàng vận hành</li>
                </ul>
            </div>

            <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #16a34a; margin-top: 0;">✅ Thiết kế hiện đại, thẩm mỹ cao</h4>
                <ul style="margin-bottom: 0;">
                    <li>Kiểu dáng tối giản, thanh lịch</li>
                    <li>Đa dạng màu sắc, phù hợp với mọi công trình</li>
                    <li>Có thể tùy chỉnh theo yêu cầu khách hàng</li>
                    <li>Tăng giá trị thẩm mỹ cho ngôi nhà</li>
                </ul>
            </div>

            <h3>Cam kết của chúng tôi</h3>
            <p>Sản phẩm chính hãng 100%, bảo hành dài hạn, hỗ trợ lắp đặt tận nơi.</p>
        `,
        features: [
            'Hỗ trợ kỹ thuật & tư vấn tận tình 24/7',
            'Bảo hành chính hãng',
            'Sản phẩm mới 100% nguyên đai, nguyên kiện',
            'Thi công lắp đặt nhanh chóng',
        ],
    },
    {
        id: '3',
        slug: 'cong-nhom-duc-2-canh',
        name: 'Cổng Nhôm Đúc 2 Cánh',
        category: 'Cổng Nhôm Đúc',
        model: 'CND-2C-003',
        origin: 'Nhật Bản, Hàn Quốc, Thái Lan',
        supplier: 'Nhà cung cấp',
        installmentInfo: 'Tặng bộ trả góp giá 3.000.000đ',
        warranty: 'Mới 100%',
        paymentTerms: 'Bảo hành',
        deliveryTime: 'Chính hãng',
        originalPrice: 38000000,
        salePrice: 28000000,
        images: [
            '/images/products/cong-nhom-duc-1.jpg',
            '/images/products/cong-nhom-duc-2.jpg',
            '/images/products/cong-nhom-duc-3.jpg',
            '/images/products/cong-nhom-duc-4.jpg',
        ],
        specifications: [
            { label: 'Model', value: 'CND-2C-003' },
            { label: 'Xuất xứ', value: 'Nhật Bản, Hàn Quốc, Thái Lan' },
            { label: 'Số cánh', value: '2 cánh' },
            { label: 'Tải trọng', value: 'Theo thiết kế' },
            { label: 'Nhà cung cấp', value: 'Nhà cung cấp' },
            { label: 'Tặng bộ trả góp giá 3.000.000đ', value: '' },
            { label: 'Tình trạng', value: 'Mới 100%' },
            { label: 'Bảo hành', value: 'Chính hãng' },
            { label: 'Trạng thái', value: 'Còn hàng' },
            { label: 'Lắp đặt', value: 'Lắp đặt toàn quốc' },
        ],
        description: `
            <h3>Cổng nhôm đúc 2 cánh - Giải pháp hoàn hảo cho lối vào nhà phố và biệt thự</h3>

            <h3>Đặc điểm nổi bật</h3>
            
            <div style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #0066cc; margin-top: 0;">✅ Thiết kế 2 cánh đối xứng hoàn hảo</h4>
                <ul style="margin-bottom: 0;">
                    <li>Hai cánh mở ra vào, tạo không gian rộng rãi khi đi lại</li>
                    <li>Hoa văn đối xứng, tạo cảm giác cân bằng và hài hòa</li>
                    <li>Phù hợp với lối vào có chiều rộng từ 2.5m - 4m</li>
                    <li>Có thể tích hợp motor tự động hoặc mở thủ công</li>
                </ul>
            </div>

            <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #16a34a; margin-top: 0;">✅ Chất lượng vượt trội</h4>
                <ul style="margin-bottom: 0;">
                    <li>Nhôm đúc nguyên khối, độ dày đồng đều</li>
                    <li>Khung cổng chắc chắn, chịu lực tốt</li>
                    <li>Bản lề cao cấp, vận hành êm ái</li>
                    <li>Sơn tĩnh điện 5 lớp, bền màu theo thời gian</li>
                </ul>
            </div>

            <h3>Ứng dụng</h3>
            <p>Cổng 2 cánh phù hợp với nhà phố, biệt thự, văn phòng, showroom. Đây là lựa chọn phổ biến nhất cho các công trình dân dụng.</p>
        `,
        features: [
            'Hỗ trợ kỹ thuật & tư vấn tận tình 24/7',
            'Bảo hành chính hãng',
            'Sản phẩm mới 100% nguyên đai, nguyên kiện',
            'Thi công lắp đặt nhanh chóng',
        ],
    },
    {
        id: '4',
        slug: 'cong-nhom-duc-4-canh',
        name: 'Cổng Nhôm Đúc 4 Cánh',
        category: 'Cổng Nhôm Đúc',
        model: 'CND-4C-004',
        origin: 'Nhật Bản, Hàn Quốc, Thái Lan',
        supplier: 'Nhà cung cấp',
        installmentInfo: 'Tặng bộ trả góp giá 3.000.000đ',
        warranty: 'Mới 100%',
        paymentTerms: 'Bảo hành',
        deliveryTime: 'Chính hãng',
        originalPrice: 75000000,
        salePrice: 58000000,
        images: [
            '/images/products/cong-nhom-duc-5.jpg',
            '/images/products/cong-nhom-duc-6.jpg',
            '/images/products/cong-nhom-duc-7.jpg',
            '/images/products/cong-nhom-duc-8.jpg',
        ],
        specifications: [
            { label: 'Model', value: 'CND-4C-004' },
            { label: 'Xuất xứ', value: 'Nhật Bản, Hàn Quốc, Thái Lan' },
            { label: 'Số cánh', value: '4 cánh' },
            { label: 'Tải trọng', value: 'Theo thiết kế' },
            { label: 'Nhà cung cấp', value: 'Nhà cung cấp' },
            { label: 'Tặng bộ trả góp giá 3.000.000đ', value: '' },
            { label: 'Tình trạng', value: 'Mới 100%' },
            { label: 'Bảo hành', value: 'Chính hãng' },
            { label: 'Trạng thái', value: 'Còn hàng' },
            { label: 'Lắp đặt', value: 'Lắp đặt toàn quốc' },
        ],
        description: `
            <h3>Cổng nhôm đúc 4 cánh - Đẳng cấp cho biệt thự và lâu đài</h3>

            <h3>Ưu điểm vượt trội</h3>
            
            <div style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #0066cc; margin-top: 0;">✅ Thiết kế 4 cánh sang trọng</h4>
                <ul style="margin-bottom: 0;">
                    <li>Bốn cánh mở đối xứng, tạo lối vào rộng rãi và uy nghi</li>
                    <li>Phù hợp với mặt tiền rộng từ 5m - 8m</li>
                    <li>Hoa văn liên kết giữa các cánh, tạo bức tranh hoàn chỉnh</li>
                    <li>Tích hợp motor tự động cao cấp, điều khiển từ xa</li>
                    <li>Có thể mở từng đôi cánh hoặc mở toàn bộ 4 cánh</li>
                </ul>
            </div>

            <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #16a34a; margin-top: 0;">✅ Kết cấu chắc chắn</h4>
                <ul style="margin-bottom: 0;">
                    <li>Khung thép hộp 100x100mm, chịu lực cực tốt</li>
                    <li>Bản lề công nghiệp, đảm bảo độ bền lâu dài</li>
                    <li>Hệ thống ray trượt chính xác</li>
                    <li>Cân bằng tải trọng đồng đều giữa các cánh</li>
                </ul>
            </div>

            <h3>Ứng dụng</h3>
            <p>Cổng 4 cánh dành cho biệt thự cao cấp, lâu đài, resort, khách sạn. Thể hiện đẳng cấp và sự sang trọng của chủ nhân.</p>
        `,
        features: [
            'Hỗ trợ kỹ thuật & tư vấn tận tình 24/7',
            'Bảo hành chính hãng',
            'Sản phẩm mới 100% nguyên đai, nguyên kiện',
            'Thi công lắp đặt nhanh chóng',
        ],
    },
    {
        id: '5',
        slug: 'cong-nhom-duc-dang-lua',
        name: 'Cổng Nhôm Đúc Dạng Lùa',
        category: 'Cổng Nhôm Đúc',
        model: 'CND-LUA-005',
        origin: 'Nhật Bản, Hàn Quốc, Thái Lan',
        supplier: 'Nhà cung cấp',
        installmentInfo: 'Tặng bộ trả góp giá 3.000.000đ',
        warranty: 'Mới 100%',
        paymentTerms: 'Bảo hành',
        deliveryTime: 'Chính hãng',
        originalPrice: 52000000,
        salePrice: 39000000,
        images: [
            '/images/products/cong-nhom-duc-1.jpg',
            '/images/products/cong-nhom-duc-2.jpg',
            '/images/products/cong-nhom-duc-5.jpg',
            '/images/products/cong-nhom-duc-6.jpg',
        ],
        specifications: [
            { label: 'Model', value: 'CND-LUA-005' },
            { label: 'Xuất xứ', value: 'Nhật Bản, Hàn Quốc, Thái Lan' },
            { label: 'Kiểu mở', value: 'Lùa ngang' },
            { label: 'Tải trọng', value: 'Theo thiết kế' },
            { label: 'Nhà cung cấp', value: 'Nhà cung cấp' },
            { label: 'Tặng bộ trả góp giá 3.000.000đ', value: '' },
            { label: 'Tình trạng', value: 'Mới 100%' },
            { label: 'Bảo hành', value: 'Chính hãng' },
            { label: 'Trạng thái', value: 'Còn hàng' },
            { label: 'Lắp đặt', value: 'Lắp đặt toàn quốc' },
        ],
        description: `
            <h3>Cổng nhôm đúc dạng lùa - Tiết kiệm không gian, hiện đại</h3>

            <h3>Đặc điểm nổi bật</h3>
            
            <div style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #0066cc; margin-top: 0;">✅ Cơ chế lùa ngang tiện lợi</h4>
                <ul style="margin-bottom: 0;">
                    <li>Cổng trượt ngang trên ray, không chiếm diện tích mở cửa</li>
                    <li>Phù hợp với lối vào hẹp, không gian hạn chế</li>
                    <li>Vận hành êm ái, ít tiếng ồn</li>
                    <li>Tích hợp motor tự động, điều khiển từ xa</li>
                    <li>Có thể lùa sang trái hoặc phải tùy thiết kế</li>
                </ul>
            </div>

            <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #16a34a; margin-top: 0;">✅ Hệ thống ray trượt cao cấp</h4>
                <ul style="margin-bottom: 0;">
                    <li>Ray inox 304, chống gỉ sét tuyệt đối</li>
                    <li>Bánh xe công nghiệp, chịu tải cao</li>
                    <li>Hệ thống giảm chấn, chống va đập</li>
                    <li>Tự động dừng khi gặp vật cản</li>
                </ul>
            </div>

            <h3>Ứng dụng</h3>
            <p>Cổng lùa phù hợp với nhà phố hẹp, nhà trong hẻm, khu công nghiệp, bãi đỗ xe. Giải pháp tối ưu cho không gian hạn chế.</p>
        `,
        features: [
            'Hỗ trợ kỹ thuật & tư vấn tận tình 24/7',
            'Bảo hành chính hãng',
            'Sản phẩm mới 100% nguyên đai, nguyên kiện',
            'Thi công lắp đặt nhanh chóng',
        ],
    },
    {
        id: '6',
        slug: 'cong-cnc-trong-dong',
        name: 'Cổng CNC Trống Đồng',
        category: 'Cổng CNC',
        model: 'CNC-TD-001',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        installmentInfo: 'Tặng bộ trả góp giá 3.000.000đ',
        warranty: 'Mới 100%',
        paymentTerms: 'Bảo hành',
        deliveryTime: 'Chính hãng',
        originalPrice: 28000000,
        salePrice: 18000000,
        images: [
            '/images/products/cong-nhom-duc-1.jpg',
            '/images/products/cong-nhom-duc-2.jpg',
        ],
        specifications: [
            { label: 'Model', value: 'CNC-TD-001' },
            { label: 'Xuất xứ', value: 'Việt Nam' },
            { label: 'Vật liệu', value: 'Thép tấm/Inox 304' },
            { label: 'Độ dày', value: '5mm - 20mm' },
            { label: 'Công nghệ', value: 'Cắt Laser Fiber' },
            { label: 'Sơn', value: 'Tĩnh điện 2 lớp' },
            { label: 'Bảo hành', value: '10 năm màu sơn' },
        ],
        description: `
            <h3>Cổng CNC Trống Đồng - Tinh hoa văn hóa Việt</h3>
            <p>Sự kết hợp hoàn hảo giữa công nghệ cắt Laser Fiber hiện đại và họa tiết Trống Đồng Đông Sơn truyền thống. Mang lại vẻ đẹp trang trọng, uy nghiêm và đậm đà bản sắc dân tộc cho ngôi nhà của bạn.</p>
            
            <div style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #0066cc; margin-top: 0;">✅ Ý nghĩa phong thủy</h4>
                <ul style="margin-bottom: 0;">
                    <li>Biểu tượng của quyền lực và thịnh vượng</li>
                    <li>Thu hút tài lộc, may mắn cho gia chủ</li>
                    <li>Xua đuổi tà khí, bảo vệ bình an cho gia đạo</li>
                </ul>
            </div>
        `,
        features: [
            'Công nghệ cắt Laser Fiber chính xác',
            'Sơn tĩnh điện cao cấp bền màu',
            'Thiết kế đậm chất văn hóa',
            'Bảo hành dài hạn',
        ],
    },
    {
        id: '7',
        slug: 'cong-cnc-hien-dai',
        name: 'Cổng CNC Hiện Đại',
        category: 'Cổng CNC',
        model: 'CNC-MD-002',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        installmentInfo: 'Tặng bộ trả góp giá 3.000.000đ',
        warranty: 'Mới 100%',
        paymentTerms: 'Bảo hành',
        deliveryTime: 'Chính hãng',
        originalPrice: 25000000,
        salePrice: 16000000,
        images: [
            '/images/products/cong-nhom-duc-3.jpg',
            '/images/products/cong-nhom-duc-4.jpg',
        ],
        specifications: [
            { label: 'Model', value: 'CNC-MD-002' },
            { label: 'Xuất xứ', value: 'Việt Nam' },
            { label: 'Vật liệu', value: 'Thép tấm/Inox 304' },
            { label: 'Độ dày', value: '5mm - 20mm' },
            { label: 'Công nghệ', value: 'Cắt Laser Fiber' },
            { label: 'Sơn', value: 'Tĩnh điện 2 lớp' },
            { label: 'Bảo hành', value: '10 năm màu sơn' },
        ],
        description: `
            <h3>Cổng CNC Hiện Đại - Vẻ đẹp của sự tối giản</h3>
            <p>Thiết kế với các đường nét hình học, họa tiết abstract độc đáo. Phù hợp với các công trình kiến trúc hiện đại, nhà phố, biệt thự sân vườn.</p>
             <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <h4 style="color: #16a34a; margin-top: 0;">✅ Ưu điểm thiết kế</h4>
                <ul style="margin-bottom: 0;">
                    <li>Tạo không gian thoáng đãng, không bị bí bách</li>
                    <li>Dễ dàng vệ sinh, bảo dưỡng</li>
                    <li>Mẫu mã đa dạng, không lo lỗi thời</li>
                </ul>
            </div>
        `,
        features: [
            'Thiết kế tối giản, tinh tế',
            'Độ bền vượt trội',
            'Phù hợp nhiều loại kiến trúc',
            'Dễ dàng tùy biến kích thước',
        ],
    },
    {
        id: '8',
        slug: 'cong-cnc-4-canh',
        name: 'Cổng CNC 4 Cánh',
        category: 'Cổng CNC',
        model: 'CNC-4C-003',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        installmentInfo: 'Tặng bộ trả góp giá 3.000.000đ',
        warranty: 'Mới 100%',
        paymentTerms: 'Bảo hành',
        deliveryTime: 'Chính hãng',
        originalPrice: 45000000,
        salePrice: 32000000,
        images: [
            '/images/products/cong-nhom-duc-5.jpg',
            '/images/products/cong-nhom-duc-6.jpg',
        ],
        specifications: [
            { label: 'Model', value: 'CNC-4C-003' },
            { label: 'Xuất xứ', value: 'Việt Nam' },
            { label: 'Số cánh', value: '4 cánh' },
            { label: 'Vật liệu', value: 'Thép tấm/Inox 304' },
            { label: 'Công nghệ', value: 'Cắt Laser Fiber' },
            { label: 'Sơn', value: 'Tĩnh điện 2 lớp' },
            { label: 'Bảo hành', value: '10 năm màu sơn' },
        ],
        description: `
            <h3>Cổng CNC 4 Cánh - Giải pháp cho mặt tiền rộng</h3>
            <p>Cổng xếp 4 cánh linh hoạt, tiết kiệm không gian khi mở. Kết cấu vững chắc kết hợp họa tiết CNC tinh xảo tạo nên sự bề thế cho công trình.</p>
        `,
        features: [
            'Cơ chế mở linh hoạt',
            'Tiết kiệm không gian',
            'Kết cấu vững chắc',
            'Tích hợp motor tự động',
        ],
    },
    {
        id: '9',
        slug: 'cong-cnc-2-canh',
        name: 'Cổng CNC 2 Cánh',
        category: 'Cổng CNC',
        model: 'CNC-2C-004',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        installmentInfo: 'Tặng bộ trả góp giá 3.000.000đ',
        warranty: 'Mới 100%',
        paymentTerms: 'Bảo hành',
        deliveryTime: 'Chính hãng',
        originalPrice: 22000000,
        salePrice: 15000000,
        images: [
            '/images/products/cong-nhom-duc-7.jpg',
            '/images/products/cong-nhom-duc-8.jpg',
        ],
        specifications: [
            { label: 'Model', value: 'CNC-2C-004' },
            { label: 'Xuất xứ', value: 'Việt Nam' },
            { label: 'Số cánh', value: '2 cánh' },
            { label: 'Vật liệu', value: 'Thép tấm/Inox 304' },
            { label: 'Công nghệ', value: 'Cắt Laser Fiber' },
            { label: 'Sơn', value: 'Tĩnh điện 2 lớp' },
            { label: 'Bảo hành', value: '10 năm màu sơn' },
        ],
        description: `
            <h3>Cổng CNC 2 Cánh - Sự lựa chọn phổ biến</h3>
            <p>Mẫu cổng truyền thống được nâng tầm với công nghệ CNC. Đơn giản nhưng không đơn điệu, phô diễn được gu thẩm mỹ tinh tế của gia chủ.</p>
        `,
        features: [
            'Thiết kế cân đối, hài hòa',
            'Phù hợp đa số nhà phố',
            'Lắp đặt nhanh chóng',
            'Chi phí hợp lý',
        ],
    },
    {
        id: 'cnc-05',
        slug: 'cong-cnc-hoa-van-co-dien',
        name: 'Cổng CNC Hoa Văn Cổ Điển',
        category: 'Cổng CNC',
        model: 'CNC-CD-005',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        installmentInfo: 'Tặng bộ trả góp giá 3.000.000đ',
        warranty: 'Mới 100%',
        paymentTerms: 'Bảo hành',
        deliveryTime: 'Chính hãng',
        originalPrice: 26000000,
        salePrice: 19500000,
        images: [
            '/images/products/cong-nhom-duc-1.jpg',
            '/images/products/cong-nhom-duc-2.jpg',
        ],
        specifications: [
            { label: 'Model', value: 'CNC-CD-005' },
            { label: 'Xuất xứ', value: 'Việt Nam' },
            { label: 'Vật liệu', value: 'Thép tấm/Inox 304' },
            { label: 'Công nghệ', value: 'Cắt Laser Fiber' },
            { label: 'Sơn', value: 'Tĩnh điện 2 lớp' },
        ],
        description: `
            <h3>Cổng CNC Hoa Văn Cổ Điển - Vẻ đẹp vượt thời gian</h3>
            <p>Sự kết hợp giữa công nghệ hiện đại và hơi hướng cổ điển, mang lại sự sang trọng và hoài cổ cho ngôi nhà.</p>
        `,
        features: [
            'Hoa văn cổ điển tinh xảo',
            'Sơn tĩnh điện bền màu',
            'Chống gỉ sét tốt',
        ],
    },
    {
        id: 'cnc-06',
        slug: 'cong-cnc-ket-hop-go',
        name: 'Cổng CNC Kết Hợp Gỗ Sang Trọng',
        category: 'Cổng CNC',
        model: 'CNC-GO-006',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        installmentInfo: 'Tặng bộ trả góp giá 3.000.000đ',
        warranty: 'Mới 100%',
        paymentTerms: 'Bảo hành',
        deliveryTime: 'Chính hãng',
        originalPrice: 35000000,
        salePrice: 28000000,
        images: [
            '/images/products/cong-nhom-duc-3.jpg',
            '/images/products/cong-nhom-duc-4.jpg',
        ],
        specifications: [
            { label: 'Model', value: 'CNC-GO-006' },
            { label: 'Xuất xứ', value: 'Việt Nam' },
            { label: 'Vật liệu', value: 'Thép tấm kết hợp gỗ tự nhiên' },
            { label: 'Công nghệ', value: 'Cắt Laser Fiber' },
        ],
        description: `
            <h3>Cổng CNC Kết Hợp Gỗ - Đẳng cấp và ấm cúng</h3>
            <p>Sự pha trộn độc đáo giữa sự cứng cáp của kim loại và vẻ đẹp ấm áp của gỗ tự nhiên.</p>
        `,
        features: [
            'Thiết kế độc đáo',
            'Gỗ tự nhiên đã qua xử lý',
            'Kết cấu vững chắc',
        ],
    },
    // Cổng Sắt Mỹ Thuật
    {
        id: 'csmt-04',
        slug: 'cong-sat-don-gian',
        name: 'Cổng Sắt Đơn Giản',
        category: 'Cổng Sắt Mỹ Thuật',
        model: 'CSMT-DG-004',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        originalPrice: 8000000,
        salePrice: 6500000,
        images: ['/images/products/cong-nhom-duc-5.jpg'],
        specifications: [
            { label: 'Chất liệu', value: 'Sắt hộp' },
            { label: 'Sơn', value: 'Chống rỉ 2 lớp' },
        ],
        description: `<h3>Cổng sắt đơn giản - Tiết kiệm và hiệu quả</h3><p>Mẫu cổng phù hợp với nhu cầu cơ bản, bền bỉ và dễ sử dụng.</p>`,
        features: ['Giá thành rẻ', 'Dễ lắp đặt', 'Bền bỉ'],
    },
    {
        id: 'csmt-05',
        slug: 'cong-sat-1-canh',
        name: 'Cổng Sắt 1 Cánh',
        category: 'Cổng Sắt Mỹ Thuật',
        model: 'CSMT-1C-005',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        originalPrice: 5000000,
        salePrice: 4200000,
        images: ['/images/products/cong-nhom-duc-6.jpg'],
        specifications: [
            { label: 'Số cánh', value: '1 cánh' },
            { label: 'Chất liệu', value: 'Sắt hộp/Sắt đặc' },
        ],
        description: `<h3>Cổng sắt 1 cánh - Nhỏ gọn tiện lợi</h3><p>Dành cho lối đi phụ hoặc cổng sau, tiết kiệm diện tích.</p>`,
        features: ['Tiết kiệm diện tích', 'Vận hành nhẹ nhàng'],
    },
    {
        id: 'csmt-06',
        slug: 'cong-sat-2-canh',
        name: 'Cổng Sắt 2 Cánh',
        category: 'Cổng Sắt Mỹ Thuật',
        model: 'CSMT-2C-006',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        originalPrice: 9000000,
        salePrice: 7500000,
        images: ['/images/products/cong-nhom-duc-7.jpg'],
        specifications: [
            { label: 'Số cánh', value: '2 cánh' },
            { label: 'Chất liệu', value: 'Sắt hộp/Sắt mỹ thuật' },
        ],
        description: `<h3>Cổng sắt 2 cánh - Truyền thống và hiện đại</h3><p>Mẫu cổng phổ biến nhất, phù hợp với hầu hết các ngôi nhà.</p>`,
        features: ['Mở rộng tối đa', 'Thiết kế đa dạng'],
    },
    {
        id: 'csmt-07',
        slug: 'cong-sat-4-canh',
        name: 'Cổng Sắt 4 Cánh',
        category: 'Cổng Sắt Mỹ Thuật',
        model: 'CSMT-4C-007',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        originalPrice: 14000000,
        salePrice: 11500000,
        images: ['/images/products/cong-nhom-duc-8.jpg'],
        specifications: [
            { label: 'Số cánh', value: '4 cánh' },
            { label: 'Chất liệu', value: 'Sắt hộp' },
        ],
        description: `<h3>Cổng sắt 4 cánh - Linh hoạt đóng mở</h3><p>Có thể mở 2 cánh hoặc 4 cánh tùy nhu cầu, rất tiện lợi.</p>`,
        features: ['Linh hoạt', 'Phù hợp mặt tiền rộng'],
    },
    // Thang Máy
    {
        id: 'tm-04',
        slug: 'thang-may-tai-hang',
        name: 'Thang Máy Tải Hàng',
        category: 'Thang Máy',
        originalPrice: 350000000,
        salePrice: 300000000,
        description: 'Thang máy tải hàng chuyên dụng, chịu tải trọng lớn, vận hành bền bỉ.',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4'],
        features: ['Tải trọng lên tới 5000kg', 'Sàn thép gân chống trượt', 'Cửa mở rộng'],
        specifications: {
            'Tải trọng': '1000kg - 5000kg',
            'Tốc độ': '30m/phút',
        },
        model: 'Cargo Lift C-Series',
        brand: 'Mitsubishi / Fuji',
        status: 'in-stock',
        origin: 'Liên doanh / Nhập khẩu'
    },
    {
        id: 'tm-05',
        slug: 'thang-may-benh-vien',
        name: 'Thang Máy Bệnh Viện',
        category: 'Thang Máy',
        originalPrice: 550000000,
        salePrice: 480000000,
        description: 'Thang máy chuyên dụng cho bệnh viện, kích thước cabin lớn để vừa giường bệnh.',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4'],
        features: ['Vận hành êm ái', 'Kích thước chuẩn y tế', 'Ưu tiên gọi tầng'],
        specifications: {
            'Tải trọng': '1000kg - 1600kg',
            'Kích thước cabin': 'Theo chuẩn giường bệnh',
        },
        model: 'Hospital Bed Lift',
        brand: 'Mitsubishi / Fuji',
        status: 'in-stock',
        origin: 'Liên doanh / Nhập khẩu'
    },
    {
        id: 'tm-06',
        slug: 'thang-may-cho-thuc-an',
        name: 'Thang Máy Chở Thức Ăn',
        category: 'Thang Máy',
        originalPrice: 85000000,
        salePrice: 65000000,
        description: 'Thang tời thực phẩm cho nhà hàng, khách sạn, trường học. Nhỏ gọn, inox 304 sạch sẽ.',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4'],
        features: ['Inox 304 an toàn thực phẩm', 'Nhỏ gọn', 'Dễ vệ sinh'],
        specifications: {
            'Tải trọng': '50kg - 200kg',
            'Tốc độ': '30m/phút',
        },
        model: 'Dumbwaiter DW-Series',
        brand: 'Việt Nam / Nhập khẩu',
        status: 'in-stock',
        origin: 'Việt Nam'
    },
    {
        id: '10',
        slug: 'cong-sat-my-thuat-co-dien',
        name: 'Cổng Sắt Mỹ Thuật Cổ Điển',
        category: 'Cổng Sắt Mỹ Thuật',
        model: 'CSMT-001',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        installmentInfo: 'Tặng khóa thông minh',
        warranty: '24 tháng',
        paymentTerms: 'Thanh toán linh hoạt',
        deliveryTime: '15-20 ngày',
        originalPrice: 15000000,
        salePrice: 12500000,
        images: ['/images/products/cong-nhom-duc-1.jpg', '/images/products/cong-nhom-duc-2.jpg'],
        specifications: [
            { label: 'Chất liệu', value: 'Sắt đặc, thép tấm' },
            { label: 'Sơn', value: 'Sơn tĩnh điện, sơn Epoxi' },
            { label: 'Phong cách', value: 'Cổ điển châu Âu' },
            { label: 'Kích thước', value: 'Theo khảo sát thực tế' }
        ],
        description: `<h3>Cổng sắt mỹ thuật cổ điển - Vẻ đẹp trường tồn</h3><p>Được uốn rèn thủ công bởi những nghệ nhân lành nghề, mang lại vẻ đẹp mềm mại, uyển chuyển nhưng vô cùng chắc chắn.</p>`,
        features: ['Sắt đặc uốn thủ công', 'Hoa văn tinh xảo', 'Sơn chống rỉ cao cấp', 'Độ bền trên 20 năm']
    },
    {
        id: '11',
        slug: 'cong-sat-my-thuat-hien-dai',
        name: 'Cổng Sắt Mỹ Thuật Hiện Đại',
        category: 'Cổng Sắt Mỹ Thuật',
        model: 'CSMT-002',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        installmentInfo: 'Hỗ trợ vận chuyển',
        warranty: '24 tháng',
        paymentTerms: 'Thanh toán linh hoạt',
        deliveryTime: '15-20 ngày',
        originalPrice: 12000000,
        salePrice: 9500000,
        images: ['/images/products/cong-nhom-duc-3.jpg', '/images/products/cong-nhom-duc-4.jpg'],
        specifications: [
            { label: 'Chất liệu', value: 'Sắt hộp, chi tiết CNC' },
            { label: 'Sơn', value: 'Sơn tĩnh điện' },
            { label: 'Phong cách', value: 'Hiện đại, tối giản' }
        ],
        description: `<h3>Cổng sắt hiện đại - Đơn giản mà tinh tế</h3><p>Phù hợp với kiến trúc nhà phố, biệt thự hiện đại. Thiết kế thông thoáng, đảm bảo an ninh.</p>`,
        features: ['Thiết kế thanh thoát', 'Dễ dàng vệ sinh', 'Giá thành hợp lý', 'Thi công nhanh']
    },
    {
        id: '12',
        slug: 'cong-sat-biet-thu',
        name: 'Cổng Sắt Biệt Thự Cao Cấp',
        category: 'Cổng Sắt Mỹ Thuật',
        model: 'CSMT-VIP-003',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        installmentInfo: 'Tặng bộ điều khiển cửa',
        warranty: '36 tháng',
        paymentTerms: 'Thanh toán linh hoạt',
        deliveryTime: '20-25 ngày',
        originalPrice: 20000000,
        salePrice: 16000000,
        images: ['/images/products/cong-nhom-duc-5.jpg', '/images/products/cong-nhom-duc-6.jpg'],
        specifications: [
            { label: 'Chất liệu', value: 'Sắt đặc vuông 20-30mm' },
            { label: 'Phụ kiện', value: 'Hoa văn gang đúc' },
            { label: 'Môtơ', value: 'Tích hợp tự động (Option)' }
        ],
        description: `<h3>Cổng sắt biệt thự - Đẳng cấp thượng lưu</h3><p>Kết hợp giữa sắt uốn nghệ thuật và phụ kiện gang đúc, tạo nên bộ cổng hoành tráng, xứng tầm với ngôi nhà.</p>`,
        features: ['Kết cấu vững chắc', 'Chi tiết cầu kỳ', 'Mạ kẽm nhúng nóng', 'Tích hợp tự động hóa']
    },

    // Lan Can & Cầu Thang
    {
        id: '13',
        slug: 'lan-can-nhom-duc',
        name: 'Lan Can Nhôm Đúc Hoàng Gia',
        category: 'Lan Can & Cầu Thang',
        model: 'LCT-001',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        installmentInfo: 'Đo đạc miễn phí',
        warranty: '5 năm',
        paymentTerms: 'Theo tiến độ',
        deliveryTime: '20-30 ngày',
        originalPrice: 5500000,
        salePrice: 4200000,
        images: ['/images/products/cong-nhom-duc-7.jpg', '/images/products/cong-nhom-duc-8.jpg'],
        specifications: [
            { label: 'Chất liệu', value: 'Hợp kim nhôm đúc' },
            { label: 'Sơn', value: '5 lớp giả cổ' },
            { label: 'Đơn vị tính', value: 'md (mét dài)' },
            { label: 'Chiều cao', value: '900mm - 1100mm' }
        ],
        description: `<h3>Lan can nhôm đúc - Điểm nhấn sang trọng</h3><p>Không bị rỉ sét, bền màu vĩnh viễn với thời gian. Họa tiết hoa lá tây sang trọng, phù hợp biệt thự cổ điển.</p>`,
        features: ['Không rỉ sét', 'Màu sắc sang trọng', 'Đúc nguyên khối', 'Bảo hành trọn đời vật liệu']
    },
    {
        id: '14',
        slug: 'cau-thang-sat-nghe-thuat',
        name: 'Cầu Thang Sắt Nghệ Thuật',
        category: 'Lan Can & Cầu Thang',
        model: 'LCT-002',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        installmentInfo: '-',
        warranty: '2 năm',
        paymentTerms: 'Theo tiến độ',
        deliveryTime: '10-15 ngày',
        originalPrice: 1800000,
        salePrice: 1400000,
        images: ['/images/products/cong-nhom-duc-1.jpg', '/images/products/cong-nhom-duc-2.jpg'],
        specifications: [
            { label: 'Chất liệu', value: 'Sắt la, sắt vuông đặc' },
            { label: 'Tay vịn', value: 'Gỗ Lim/Gõ đỏ' },
            { label: 'Màu sắc', value: 'Đen mờ, đồng giả cổ' }
        ],
        description: `<h3>Cầu thang sắt nghệ thuật - Uyển chuyển và tinh tế</h3><p>Tay vịn gỗ tự nhiên kết hợp lan can sắt uốn tạo cảm giác ấm cúng nhưng không kém phần nghệ thuật.</p>`,
        features: ['Tay vịn gỗ cao cấp', 'Sắt uốn thủ công', 'Chắc chắn an toàn', 'Giá trị thẩm mỹ cao']
    },
    {
        id: '15',
        slug: 'lan-can-kinh-cuong-luc',
        name: 'Lan Can Kính Cường Lực',
        category: 'Lan Can & Cầu Thang',
        model: 'LCT-003',
        origin: 'Việt Nam',
        supplier: 'Xây Dựng 24H',
        installmentInfo: '-',
        warranty: '2 năm',
        paymentTerms: 'Theo tiến độ',
        deliveryTime: '5-7 ngày',
        originalPrice: 1500000,
        salePrice: 1100000,
        images: ['/images/products/cong-nhom-duc-3.jpg', '/images/products/cong-nhom-duc-4.jpg'],
        specifications: [
            { label: 'Kính', value: 'Cường lực 10mm/12mm' },
            { label: 'Trụ', value: 'Inox 304 / Không trụ' },
            { label: 'Tay vịn', value: 'Inox / Gỗ / Không tay vịn' }
        ],
        description: `<h3>Lan can kính - Mở rộng không gian</h3><p>Giải pháp tối ưu cho không gian hiện đại, giúp lấy sáng và mở rộng tầm nhìn tối đa.</p>`,
        features: ['Kính cường lực an toàn', 'Phụ kiện Inox 304', 'Dễ dàng vệ sinh', 'Thiết kế hiện đại']
    },

    // Thang Máy
    {
        id: '16',
        slug: 'thang-may-gia-dinh',
        name: 'Thang Máy Gia Đình (Homelift)',
        category: 'Thang Máy',
        model: 'TM-HOME-01',
        origin: 'Liên doanh / Nhập khẩu',
        supplier: 'Xây Dựng 24H',
        installmentInfo: 'Hỗ trợ trả góp 0%',
        warranty: '24 tháng',
        paymentTerms: '5 đợt',
        deliveryTime: '45-60 ngày',
        originalPrice: 450000000,
        salePrice: 380000000,
        images: ['/images/products/cong-nhom-duc-5.jpg', '/images/products/cong-nhom-duc-6.jpg'],
        specifications: [
            { label: 'Tải trọng', value: '350kg - 450kg' },
            { label: 'Tốc độ', value: '0.4 m/s' },
            { label: 'Số điểm dừng', value: '3-6 stop' },
            { label: 'Hố Pit', value: '300mm (Siêu nông)' }
        ],
        description: `<h3>Thang máy gia đình - Tiện nghi hoàn hảo</h3><p>Giải pháp di chuyển an toàn và tiện lợi cho người già và trẻ em. Thiết kế may đo theo kích thước thực tế của ngôi nhà.</p>`,
        features: ['Công nghệ an toàn 5 lớp', 'Tiết kiệm điện năng', 'Vận hành êm ái', 'Thiết kế sang trọng nội thất cabin']
    },
    {
        id: '17',
        slug: 'thang-may-kinh',
        name: 'Thang Máy Lồng Kính (Panoramic)',
        category: 'Thang Máy',
        model: 'TM-GLASS-02',
        origin: 'Nhập khẩu nguyên chiếc',
        supplier: 'Xây Dựng 24H',
        installmentInfo: 'Tặng gói bảo trì 5 năm',
        warranty: '36 tháng',
        paymentTerms: 'Theo hợp đồng',
        deliveryTime: '60-90 ngày',
        originalPrice: 650000000,
        salePrice: 550000000,
        images: ['/images/products/cong-nhom-duc-7.jpg', '/images/products/cong-nhom-duc-8.jpg'],
        specifications: [
            { label: 'Vách cabin', value: 'Kính cường lực an toàn' },
            { label: 'Khung giếng', value: 'Khung thép / Nhôm định hình' },
            { label: 'Tải trọng', value: '450kg - 630kg' }
        ],
        description: `<h3>Thang máy lồng kính - Tầm nhìn không giới hạn</h3><p>Nâng tầm đẳng cấp cho ngôi nhà. Vừa di chuyển vừa ngắm cảnh, biến thang máy thành điểm nhấn kiến trúc độc đáo.</p>`,
        features: ['Quan sát 360 độ', 'Tích hợp led RGB', 'Công nghệ trục vít/thủy lực/cáp kéo', 'Sang trọng hiện đại']
    },
    {
        id: 'tm-03',
        slug: 'thang-may-tai-khach',
        name: 'Thang Máy Tải Khách',
        category: 'Thang Máy',
        salePrice: 420000000,
        originalPrice: 450000000,
        description: 'Thang máy tải khách tiêu chuẩn cho chung cư mini, văn phòng, khách sạn. Vận hành êm ái, an toàn tuyệt đối.',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4'],
        features: ['Tải trọng 450kg - 1000kg', 'Cứu hộ tự động ARD', 'Gương inox 304'],
        specifications: {
            'Tải trọng': '450kg - 1000kg',
            'Tốc độ': '60m/phút - 90m/phút',
            'Động cơ': 'Có hộp số / Không hộp số',
            'Pit': '1400mm'
        },
        model: 'Passenger P-Series',
        brand: 'Mitsubishi / Fuji',
        status: 'in-stock',
        rating: 5,
        reviews: 12,
        origin: 'Liên doanh / Nhập khẩu'
    },
    // Cổng Hợp Kim Nhôm
    {
        id: 'hkn-01',
        slug: 'cong-hop-kim-nhom-buckingham',
        name: 'Cổng Hợp Kim Nhôm Buckingham',
        category: 'Cổng Hợp Kim Nhôm',
        salePrice: 11500000,
        originalPrice: 13000000,
        description: 'Mẫu cổng Buckingham lấy cảm hứng từ cung điện hoàng gia Anh, thể hiện sự quyền uy và sang trọng bậc nhất. Họa tiết sư tử và vương miện được đúc nổi 3D tinh xảo.',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAg5d90VKVLeGBSNf78m8ufD9QzKioRqnrBe4tzb8S0Vm0fJwEeKymr_FWDh3Pia-rAkZxkGjNn82tDJ_geaU1arWitz9zPMHwnG5JWu3xvy_Z5BUs_viffz7J7zi59l2bfw-THc0UCVjcKeaL0yGCC8-hDhQvEmUXJ73cF_6rxq2hGRbzUmLKQYUK9zphhLsjWo7WLRpEywcvD9fWBqSwnTUh7woUkIMyR9MW0dJDQg5XAkpjreiTiOd7DcgldvIn5euqi7gQtnkQ'],
        features: ['Đúc chân không nguyên khối', 'Họa tiết Buckingham kinh điển', 'Sơn 5 lớp giả cổ'],
        specifications: {
            'Chất liệu': 'Hợp kim nhôm ACD12',
            'Công nghệ': 'Đúc chân không V-Process',
            'Độ dày': '20mm - 40mm (tùy chi tiết)',
            'Sơn': 'Tĩnh điện 5 lớp'
        },
        model: 'Buckingham Palace',
        brand: 'Cổng Đẹp Pro',
        status: 'in-stock',
        rating: 5,
        reviews: 28,
        origin: 'Việt Nam'
    },
    {
        id: 'hkn-02',
        slug: 'cong-hop-kim-nhom-hoa-sen',
        name: 'Cổng Hợp Kim Nhôm Hoa Sen',
        category: 'Cổng Hợp Kim Nhôm',
        salePrice: 10500000,
        originalPrice: 12000000,
        description: 'Vẻ đẹp truyền thống Việt Nam được tái hiện qua hình ảnh hoa sen thuần khiết, mang lại vượng khí và sự bình an cho gia chủ.',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAZbXT6ojBY0D93UbSH2N5Tzs-2T8QQONxx2AuL3sczKl3o0465PIQIzka3sCjl80w6A6vi907aBw4QKhq4MLgtJRCafISBiUr5O5-lJQSzLnWJLLtw9A6khpbnuQKlyzMe_FbDDVibu71ZNY-4cxfRf_gggSYEhyhN6Y4pKvpbcCuyv5W_sci-mCavDDm3dGNONPHeUFSJqdXgyFPrtF0-aVzzwCongDmx8kgHBvyDEYW_RPJ6ldEb95quns6wmi_1RBO-Je8XhEU'],
        features: ['Họa tiết Hoa Sen phong thủy', 'Màu đồng vàng sang trọng', 'Bền màu trên 20 năm'],
        specifications: {
            'Chất liệu': 'Hợp kim nhôm ACD12',
            'Công nghệ': 'Đúc thường / Chân không',
            'Độ dày': '18mm - 35mm',
            'Bảo hành': '20 năm phần nhôm'
        },
        model: 'Lotus Classic',
        brand: 'Cổng Đẹp Pro',
        status: 'in-stock',
        rating: 5,
        reviews: 15,
        origin: 'Việt Nam'
    },
    {
        id: 'hkn-03',
        slug: 'cong-hop-kim-nhom-trong-dong',
        name: 'Cổng Hợp Kim Nhôm Trống Đồng',
        category: 'Cổng Hợp Kim Nhôm',
        salePrice: 11200000,
        originalPrice: 12500000,
        description: 'Biểu tượng văn hóa Trống Đồng Đông Sơn được chau chuốt tỉ mỉ, phù hợp với những ngôi nhà yêu thích nét đẹp văn hóa lịch sử.',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDqnmia71yO0AttyNaDHTS-e8vtlEVir0qQvrAWSkttrsCGw5Sji8QN7uUWxd2pxN3JjsqY2Uuw9Vpm2Emxl1j_IhImBuWb2YYVUYxVX6_M_SnJtm8LAnUsmxzQXZPEPWK0fLIoarPH4JTbRL1v_m668-5XtrgXdhRlz8sLWvcIzt1tMJYxNE0vhf50ihrghT80Gwt9Y1mIvckZ56DPG7-vyUq1d6yvpy6xGItNPG_WxONibsL9-6VsWJdQyccEsmq3jakBeU6fvmM'],
        features: ['Mặt trống đồng sắc nét', 'Khung bao bản lớn', 'Phù hợp biệt thự phố'],
        specifications: {
            'Chất liệu': 'Hợp kim nhôm ACD12',
            'Công nghệ': 'Đúc chân không',
            'Độ dày': '20mm - 50mm',
            'Bề mặt': 'Phủ bóng 2k'
        },
        model: 'Dong Son Drum',
        brand: 'Cổng Đẹp Pro',
        status: 'in-stock',
        rating: 5,
        reviews: 20,
        origin: 'Việt Nam'
    }
];

export function getProductBySlug(slug: string): Product | undefined {
    return PRODUCTS.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
    return PRODUCTS.filter(product => product.category === category);
}
