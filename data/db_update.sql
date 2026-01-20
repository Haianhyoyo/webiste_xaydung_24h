-- Enable UUID extension if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Products Table
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    model TEXT,
    origin TEXT,
    supplier TEXT,
    original_price NUMERIC,
    sale_price NUMERIC,
    images TEXT[], -- Array of image URLs
    specifications JSONB,
    description TEXT,
    features TEXT[],
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT,
    year TEXT,
    location TEXT,
    image TEXT,
    description TEXT,
    content TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contacts Table
CREATE TABLE IF NOT EXISTS contacts (
    id BIGINT PRIMARY KEY, -- Using timestamp-based ID from JSON
    name TEXT,
    email TEXT,
    phone TEXT,
    service TEXT,
    message TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert Products
INSERT INTO products (id, slug, name, category, model, origin, supplier, original_price, sale_price, images, specifications, description, features) VALUES
('1', 'cong-nhom-duc-hoa-van-co-dien', 'Cổng Nhôm Đúc Hoa Văn Cổ Điển', 'Cổng Nhôm Đúc', 'CND-HD-001', 'Nhật Bản, Hàn Quốc, Thái Lan', 'Nhà cung cấp', 45000000, 35000000, ARRAY['/images/products/cong-nhom-duc-1.jpg','/images/products/cong-nhom-duc-2.jpg','/images/products/cong-nhom-duc-3.jpg','/images/products/cong-nhom-duc-4.jpg'], '[{"label": "Model", "value": "CND-HD-001"}, {"label": "Xuất xứ", "value": "Nhật Bản, Hàn Quốc, Thái Lan"}, {"label": "Tải trọng", "value": "Theo thiết kế"}]', '<h3>Cổng nhôm đúc...</h3>', ARRAY['Hỗ trợ kỹ thuật & tư vấn tận tình 24/7','Bảo hành chính hãng']),
('2', 'cong-nhom-duc-hien-dai', 'Cổng Nhôm Đúc Hiện Đại', 'Cổng Nhôm Đúc', 'CND-HD-002', 'Nhật Bản, Hàn Quốc, Thái Lan', 'Nhà cung cấp', 55000000, 42000000, ARRAY['/images/products/cong-nhom-duc-5.jpg','/images/products/cong-nhom-duc-6.jpg'], '[{"label": "Model", "value": "CND-HD-002"}]', '<h3>Cổng nhôm đúc hiện đại...</h3>', ARRAY['Hỗ trợ kỹ thuật...']),
('3', 'cong-nhom-duc-2-canh', 'Cổng Nhôm Đúc 2 Cánh', 'Cổng Nhôm Đúc', 'CND-2C-003', 'Nhật Bản, Hàn Quốc, Thái Lan', 'Nhà cung cấp', 38000000, 28000000, ARRAY['/images/products/cong-nhom-duc-1.jpg'], '[{"label": "Số cánh", "value": "2 cánh"}]', '<h3>Cổng nhôm đúc 2 cánh...</h3>', ARRAY['Bảo hành chính hãng']),
('4', 'cong-nhom-duc-4-canh', 'Cổng Nhôm Đúc 4 Cánh', 'Cổng Nhôm Đúc', 'CND-4C-004', 'Nhật Bản, Hàn Quốc, Thái Lan', 'Nhà cung cấp', 75000000, 58000000, ARRAY['/images/products/cong-nhom-duc-5.jpg'], '[{"label": "Số cánh", "value": "4 cánh"}]', '<h3>Cổng nhôm đúc 4 cánh...</h3>', ARRAY['Kết cấu vững chắc']),
('5', 'cong-nhom-duc-dang-lua', 'Cổng Nhôm Đúc Dạng Lùa', 'Cổng Nhôm Đúc', 'CND-LUA-005', 'Nhật Bản, Hàn Quốc, Thái Lan', 'Nhà cung cấp', 52000000, 39000000, ARRAY['/images/products/cong-nhom-duc-1.jpg'], '[{"label": "Kiểu mở", "value": "Lùa ngang"}]', '<h3>Cổng nhôm đúc dạng lùa...</h3>', ARRAY['Tiết kiệm không gian']),
('6', 'cong-cnc-trong-dong', 'Cổng CNC Trống Đồng', 'Cổng CNC', 'CNC-TD-001', 'Việt Nam', 'Xây Dựng 24H', 28000000, 18000000, ARRAY['/images/products/cong-nhom-duc-1.jpg'], '[{"label": "Công nghệ", "value": "Cắt Laser Fiber"}]', '<h3>Cổng CNC Trống Đồng...</h3>', ARRAY['Công nghệ cắt Laser Fiber']),
('7', 'cong-cnc-hien-dai', 'Cổng CNC Hiện Đại', 'Cổng CNC', 'CNC-MD-002', 'Việt Nam', 'Xây Dựng 24H', 25000000, 16000000, ARRAY['/images/products/cong-nhom-duc-3.jpg'], '[{"label": "Vật liệu", "value": "Thép tấm"}]', '<h3>Cổng CNC Hiện Đại...</h3>', ARRAY['Thiết kế tối giản']),
('8', 'cong-cnc-4-canh', 'Cổng CNC 4 Cánh', 'Cổng CNC', 'CNC-4C-003', 'Việt Nam', 'Xây Dựng 24H', 45000000, 32000000, ARRAY['/images/products/cong-nhom-duc-5.jpg'], '[{"label": "Số cánh", "value": "4 cánh"}]', '<h3>Cổng CNC 4 Cánh...</h3>', ARRAY['Cơ chế mở linh hoạt']),
('9', 'cong-cnc-2-canh', 'Cổng CNC 2 Cánh', 'Cổng CNC', 'CNC-2C-004', 'Việt Nam', 'Xây Dựng 24H', 22000000, 15000000, ARRAY['/images/products/cong-nhom-duc-7.jpg'], '[{"label": "Số cánh", "value": "2 cánh"}]', '<h3>Cổng CNC 2 Cánh...</h3>', ARRAY['Thiết kế cân đối']),
('cnc-05', 'cong-cnc-hoa-van-co-dien', 'Cổng CNC Hoa Văn Cổ Điển', 'Cổng CNC', 'CNC-CD-005', 'Việt Nam', 'Xây Dựng 24H', 26000000, 19500000, ARRAY['/images/products/cong-nhom-duc-1.jpg'], '[{"label": "Phong cách", "value": "Cổ điển"}]', '<h3>Cổng CNC Hoa Văn Cổ Điển...</h3>', ARRAY['Hoa văn cổ điển']),
('cnc-06', 'cong-cnc-ket-hop-go', 'Cổng CNC Kết Hợp Gỗ Sang Trọng', 'Cổng CNC', 'CNC-GO-006', 'Việt Nam', 'Xây Dựng 24H', 35000000, 28000000, ARRAY['/images/products/cong-nhom-duc-3.jpg'], '[{"label": "Vật liệu", "value": "Thép + Gỗ"}]', '<h3>Cổng CNC Kết Hợp Gỗ...</h3>', ARRAY['Thiết kế độc đáo']),
('csmt-04', 'cong-sat-don-gian', 'Cổng Sắt Đơn Giản', 'Cổng Sắt Mỹ Thuật', 'CSMT-DG-004', 'Việt Nam', 'Xây Dựng 24H', 8000000, 6500000, ARRAY['/images/products/cong-nhom-duc-5.jpg'], '[{"label": "Chất liệu", "value": "Sắt hộp"}]', '<h3>Cổng sắt đơn giản...</h3>', ARRAY['Giá thành rẻ']),
('csmt-05', 'cong-sat-1-canh', 'Cổng Sắt 1 Cánh', 'Cổng Sắt Mỹ Thuật', 'CSMT-1C-005', 'Việt Nam', 'Xây Dựng 24H', 5000000, 4200000, ARRAY['/images/products/cong-nhom-duc-6.jpg'], '[{"label": "Số cánh", "value": "1 cánh"}]', '<h3>Cổng sắt 1 cánh...</h3>', ARRAY['Tiết kiệm diện tích']),
('csmt-06', 'cong-sat-2-canh', 'Cổng Sắt 2 Cánh', 'Cổng Sắt Mỹ Thuật', 'CSMT-2C-006', 'Việt Nam', 'Xây Dựng 24H', 9000000, 7500000, ARRAY['/images/products/cong-nhom-duc-7.jpg'], '[{"label": "Số cánh", "value": "2 cánh"}]', '<h3>Cổng sắt 2 cánh...</h3>', ARRAY['Truyền thống']),
('csmt-07', 'cong-sat-4-canh', 'Cổng Sắt 4 Cánh', 'Cổng Sắt Mỹ Thuật', 'CSMT-4C-007', 'Việt Nam', 'Xây Dựng 24H', 14000000, 11500000, ARRAY['/images/products/cong-nhom-duc-8.jpg'], '[{"label": "Số cánh", "value": "4 cánh"}]', '<h3>Cổng sắt 4 cánh...</h3>', ARRAY['Linh hoạt']),
('tm-04', 'thang-may-tai-hang', 'Thang Máy Tải Hàng', 'Thang Máy', 'Cargo Lift C-Series', 'Liên doanh', 'Fuji', 350000000, 300000000, ARRAY['https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4'], '[{"label": "Tải trọng", "value": "5000kg"}]', 'Thang máy tải hàng...', ARRAY['Tải trọng lớn']),
('tm-05', 'thang-may-benh-vien', 'Thang Máy Bệnh Viện', 'Thang Máy', 'Hospital Bed Lift', 'Liên doanh', 'Fuji', 550000000, 480000000, ARRAY['https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4'], '[{"label": "Tiêu chuẩn", "value": "Y tế"}]', 'Thang máy bệnh viện...', ARRAY['Kích thước chuẩn y tế']),
('tm-06', 'thang-may-cho-thuc-an', 'Thang Máy Chở Thức Ăn', 'Thang Máy', 'DW-Series', 'Việt Nam', 'Việt Nam', 85000000, 65000000, ARRAY['https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4'], '[{"label": "Vật liệu", "value": "Inox 304"}]', 'Thang tời thực phẩm...', ARRAY['An toàn thực phẩm']),
('10', 'cong-sat-my-thuat-co-dien', 'Cổng Sắt Mỹ Thuật Cổ Điển', 'Cổng Sắt Mỹ Thuật', 'CSMT-001', 'Việt Nam', 'Xây Dựng 24H', 15000000, 12500000, ARRAY['/images/products/cong-nhom-duc-1.jpg'], '[{"label": "Phong cách", "value": "Cổ điển"}]', '<h3>Cổng sắt mỹ thuật cổ điển...</h3>', ARRAY['Sắt đặc uốn thủ công']),
('11', 'cong-sat-my-thuat-hien-dai', 'Cổng Sắt Mỹ Thuật Hiện Đại', 'Cổng Sắt Mỹ Thuật', 'CSMT-002', 'Việt Nam', 'Xây Dựng 24H', 12000000, 9500000, ARRAY['/images/products/cong-nhom-duc-3.jpg'], '[{"label": "Phong cách", "value": "Hiện đại"}]', '<h3>Cổng sắt hiện đại...</h3>', ARRAY['Thiết kế thanh thoát']),
('12', 'cong-sat-biet-thu', 'Cổng Sắt Biệt Thự Cao Cấp', 'Cổng Sắt Mỹ Thuật', 'CSMT-VIP-003', 'Việt Nam', 'Xây Dựng 24H', 20000000, 16000000, ARRAY['/images/products/cong-nhom-duc-5.jpg'], '[{"label": "Phụ kiện", "value": "Gang đúc"}]', '<h3>Cổng sắt biệt thự...</h3>', ARRAY['Kết cấu vững chắc']),
('13', 'lan-can-nhom-duc', 'Lan Can Nhôm Đúc Hoàng Gia', 'Lan Can & Cầu Thang', 'LCT-001', 'Việt Nam', 'Xây Dựng 24H', 5500000, 4200000, ARRAY['/images/products/cong-nhom-duc-7.jpg'], '[{"label": "Chất liệu", "value": "Nhôm đúc"}]', '<h3>Lan can nhôm đúc...</h3>', ARRAY['Không rỉ sét']),
('14', 'cau-thang-sat-nghe-thuat', 'Cầu Thang Sắt Nghệ Thuật', 'Lan Can & Cầu Thang', 'LCT-002', 'Việt Nam', 'Xây Dựng 24H', 1800000, 1400000, ARRAY['/images/products/cong-nhom-duc-1.jpg'], '[{"label": "Tay vịn", "value": "Gỗ"}]', '<h3>Cầu thang sắt nghệ thuật...</h3>', ARRAY['Tay vịn gỗ cao cấp']),
('15', 'lan-can-kinh-cuong-luc', 'Lan Can Kính Cường Lực', 'Lan Can & Cầu Thang', 'LCT-003', 'Việt Nam', 'Xây Dựng 24H', 1500000, 1100000, ARRAY['/images/products/cong-nhom-duc-3.jpg'], '[{"label": "Kính", "value": "Cường lực"}]', '<h3>Lan can kính...</h3>', ARRAY['Hiện đại']),
('16', 'thang-may-gia-dinh', 'Thang Máy Gia Đình (Homelift)', 'Thang Máy', 'TM-HOME-01', 'Liên doanh', 'Xây Dựng 24H', 450000000, 380000000, ARRAY['/images/products/cong-nhom-duc-5.jpg'], '[{"label": "Tải trọng", "value": "350kg"}]', '<h3>Thang máy gia đình...</h3>', ARRAY['Tiết kiệm điện']),
('17', 'thang-may-kinh', 'Thang Máy Lồng Kính (Panoramic)', 'Thang Máy', 'TM-GLASS-02', 'Nhập khẩu', 'Xây Dựng 24H', 650000000, 550000000, ARRAY['/images/products/cong-nhom-duc-7.jpg'], '[{"label": "Vách", "value": "Kính"}]', '<h3>Thang máy lồng kính...</h3>', ARRAY['Quan sát 360 độ']),
('tm-03', 'thang-may-tai-khach', 'Thang Máy Tải Khách', 'Thang Máy', 'Passenger P-Series', 'Liên doanh', 'Mitsubishi', 450000000, 420000000, ARRAY['https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4'], '[{"label": "Tải trọng", "value": "1000kg"}]', 'Thang máy tải khách tiêu chuẩn...', ARRAY['Cứu hộ tự động']),
('hkn-01', 'cong-hop-kim-nhom-buckingham', 'Cổng Hợp Kim Nhôm Buckingham', 'Cổng Hợp Kim Nhôm', 'Buckingham Palace', 'Việt Nam', 'Cổng Đẹp Pro', 13000000, 11500000, ARRAY['https://lh3.googleusercontent.com/aida-public/AB6AXuAg5d90VKVLeGBSNf78m8ufD9QzKioRqnrBe4tzb8S0Vm0fJwEeKymr_FWDh3Pia-rAkZxkGjNn82tDJ_geaU1arWitz9zPMHwnG5JWu3xvy_Z5BUs_viffz7J7zi59l2bfw-THc0UCVjcKeaL0yGCC8-hDhQvEmUXJ73cF_6rxq2hGRbzUmLKQYUK9zphhLsjWo7WLRpEywcvD9fWBqSwnTUh7woUkIMyR9MW0dJDQg5XAkpjreiTiOd7DcgldvIn5euqi7gQtnkQ'], '[{"label": "Công nghệ", "value": "V-Process"}]', 'Mẫu cổng Buckingham...', ARRAY['Đúc chân không']),
('hkn-02', 'cong-hop-kim-nhom-hoa-sen', 'Cổng Hợp Kim Nhôm Hoa Sen', 'Cổng Hợp Kim Nhôm', 'Lotus Classic', 'Việt Nam', 'Cổng Đẹp Pro', 12000000, 10500000, ARRAY['https://lh3.googleusercontent.com/aida-public/AB6AXuAZbXT6ojBY0D93UbSH2N5Tzs-2T8QQONxx2AuL3sczKl3o0465PIQIzka3sCjl80w6A6vi907aBw4QKhq4MLgtJRCafISBiUr5O5-lJQSzLnWJLLtw9A6khpbnuQKlyzMe_FbDDVibu71ZNY-4cxfRf_gggSYEhyhN6Y4pKvpbcCuyv5W_sci-mCavDDm3dGNONPHeUFSJqdXgyFPrtF0-aVzzwCongDmx8kgHBvyDEYW_RPJ6ldEb95quns6wmi_1RBO-Je8XhEU'], '[{"label": "Họa tiết", "value": "Hoa Sen"}]', 'Vẻ đẹp truyền thống Việt Nam...', ARRAY['Hoa Sen phong thủy']),
('hkn-03', 'cong-hop-kim-nhom-trong-dong', 'Cổng Hợp Kim Nhôm Trống Đồng', 'Cổng Hợp Kim Nhôm', 'Dong Son Drum', 'Việt Nam', 'Cổng Đẹp Pro', 12500000, 11200000, ARRAY['https://lh3.googleusercontent.com/aida-public/AB6AXuDqnmia71yO0AttyNaDHTS-e8vtlEVir0qQvrAWSkttrsCGw5Sji8QN7uUWxd2pxN3JjsqY2Uuw9Vpm2Emxl1j_IhImBuWb2YYVUYxVX6_M_SnJtm8LAnUsmxzQXZPEPWK0fLIoarPH4JTbRL1v_m668-5XtrgXdhRlz8sLWvcIzt1tMJYxNE0vhf50ihrghT80Gwt9Y1mIvckZ56DPG7-vyUq1d6yvpy6xGItNPG_WxONibsL9-6VsWJdQyccEsmq3jakBeU6fvmM'], '[{"label": "Họa tiết", "value": "Trống Đồng"}]', 'Biểu tượng văn hóa Trống Đồng...', ARRAY['Mặt trống đồng sắc nét'])
ON CONFLICT (slug) DO NOTHING;

-- Insert Projects
INSERT INTO projects (slug, title, category, year, location, image, description, content) VALUES
('biet-thu-vuon-cu-chi', 'Biệt thự Vườn Củ Chi', 'Cổng Nhôm Đúc', '2023', 'Củ Chi, TP.HCM', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuIwJhoMqBM8wL2i-LRTvLA_7ZMLYjWAni78Uzed8WkSMGOthnXBr75bbU2e0H9uku9dk-VURIz8CmMDIj0ygjs-IK2ctweXaTigp9FVhONb0fTwK6JA-rE-HYrRb87uhQNcTO9i7qVB8EUcunwFbV0vE8smJtIWIUyX3OAeQDJXGzPiPOPs7OFmM2WdLnhBtCc1D4sYfR0TNGcusTOQ-QIR_ndCGWYeo3rPcq4NkTpP2oKZCxwlZVRg5mZtb7AsJYD0fl_mvpyGQ', 'Thi công trọn gói hạng mục cổng nhôm đúc...', 'Dự án Biệt thự Vườn Củ Chi...'),
('villa-thao-dien', 'Villa Thảo Điền', 'Cổng Sắt Mỹ Thuật', '2023', 'Quận 2, TP.HCM', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIJ0xcqA5JOB-TVNDHq2mvWKg0krBe4c8_dIK0htkOVoP7jx2-BEKlMlk53X2QmdS2zOW5_BaGmq7sxcqnEgG1Zhtzq2dJZuRrtMjmh-j8ZKvMW2igxn-kJdLB2SNEQEw0ktA3cIt8Xxzdiz3cjqgKhSmtfkFeyhZQprwpjVmVeUseXGfOKSV2lh09rBXJr-2h7eWYBdqHcU5mUoejTNYVjoCAVCl-5kk-13-s61Rb_H1jJIUPi9AUy6RpiEXk8v0yEl5gpNIY61g', 'Thiết kế và thi công cổng sắt...', 'Tại Villa Thảo Điền...'),
('resort-phu-quoc-5-sao', 'Resort Phú Quốc 5*', 'Dự Án Nghỉ Dưỡng', '2022', 'Phú Quốc, Kiên Giang', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmeJzz-ij94YZOySNKUcAsgTi55CyPlreTWVZl7kXsHbKgaguzFz-hJ1dP0ewwoMjoP4MUOeFdwlc1VFLA0Ng-WvQNTicsCtogt7IY-8F9rj06rShKvIy3QaZ880ympRw2FGmfnK4l6XPrXH6xDHTHQrBs0c9gNBIHwZgTcmOhjDCA2t-VY-PkXIF3T_XqXz3nsz4MnvmlJTFhvwSzgzeU_w7sg0zRD5gtml9kME1V2_JUu5Nl5I-Ry9JDqBryRu2RoH-qXarpWVo', 'Tổng thầu hạng mục hàng rào...', 'Dự án Resort Phú Quốc...'),
('penthouse-quan-7', 'Penthouse Quận 7', 'Lan Can & Cầu Thang', '2022', 'Quận 7, TP.HCM', 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-sOGyteEsrzwzy6-92iiPagtBKsTbuGuuwOkCws_onTF_2b5EJ-yz68TmhTBKoAGma_ntZoYt4jtNXgLzQJ5JJJGcAfPkP1hP8fPuSD2ltksgpTpCHz8qPVjcIlqWQuluygSXrLn2OHo_Hf51TP1bm-y3d90HFiuHfmt06XHq8v_EDmzIL-W81RSZa4AbkhukeFOCRFot28_3cE_vEAYoGnC3bAg-Wnr7EaDNxs_LkIxP9k18A_1m9RppGcyny1hCBHcUWhBUrb0', 'Hệ thống lan can ban công...', 'Căn Penthouse này là biểu tượng...'),
('khu-dan-cu-cao-cap-dong-nai', 'Khu Dân Cư Cao Cấp', 'Tự Động Hóa', '2021', 'Đồng Nai', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmeJzz-ij94YZOySNKUcAsgTi55CyPlreTWVZl7kXsHbKgaguzFz-hJ1dP0ewwoMjoP4MUOeFdwlc1VFLA0Ng-WvQNTicsCtogt7IY-8F9rj06rShKvIy3QaZ880ympRw2FGmfnK4l6XPrXH6xDHTHQrBs0c9gNBIHwZgTcmOhjDCA2t-VY-PkXIF3T_XqXz3nsz4MnvmlJTFhvwSzgzeU_w7sg0zRD5gtml9kME1V2_JUu5Nl5I-Ry9JDqBryRu2RoH-qXarpWVo', 'Lắp đặt đồng bộ 50 bộ cổng...', 'Chúng tôi tự hào...'),
('nha-pho-go-vap', 'Nhà Phố Gò Vấp', 'Cổng CNC', '2021', 'Gò Vấp, TP.HCM', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYdKL-K6PheZoeZmAc7nZldDMswHzR2U0Wrcg9UT6qbt-fO7j7BkcV0A622ZIuc7kHQUXkr6btJWk7hv0n0gkvxLo9MYfWnwszKoGDflPI9l05z5LOPOzzKeEYLFmLdilD1zx6GlORGN5z38HDJJTR1zkNJ7Zoq4wguviPp77CHPBoT2eyJPECNX4djtXYHXbrQlhH6MtQA0s9Nopg8XGFDf__JUh42oE0t1m0Y8cLnpbEge_XzzUew8kh6kMQfp-LGZ2Rkia6sZg', 'Cổng CNC cắt laser...', 'Mẫu cổng CNC...'),
('biet-thu-don-lap-binh-duong', 'Biệt Thự Đơn Lập', 'Cổng Nhôm Đúc', '2020', 'Bình Dương', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4', 'Bộ cổng nhôm đúc nguyên khối...', 'Đây là một trong những...'),
('cong-phu-va-hang-rao-long-an', 'Cổng Phụ & Hàng Rào', 'Chi Tiết Nghệ Thuật', '2020', 'Long An', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIJ0xcqA5JOB-TVNDHq2mvWKg0krBe4c8_dIK0htkOVoP7jx2-BEKlMlk53X2QmdS2zOW5_BaGmq7sxcqnEgG1Zhtzq2dJZuRrtMjmh-j8ZKvMW2igxn-kJdLB2SNEQEw0ktA3cIt8Xxzdiz3cjqgKhSmtfkFeyhZQprwpjVmVeUseXGfOKSV2lh09rBXJr-2h7eWYBdqHcU5mUoejTNYVjoCAVCl-5kk-13-s61Rb_H1jJIUPi9AUy6RpiEXk8v0yEl5gpNIY61g', 'Các chi tiết hoa văn...', 'Sự đồng bộ trong thiết kế...'),
('khu-cong-nghiep-vsip-binh-duong', 'Khu Công Nghiệp VSIP', 'Dự Án Nhà Xưởng', '2019', 'Bình Dương', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPDaNFL2LKyyf6rXuaVkIrFQHJBynyZZAfnGlzoF7JZ3yecYRXc33c-5XyngE7wV1Bo6s6JBhATbPdAxp3YkMX10X2z-RdMBaK5lyBRiTT9oKEJ2JSkvQFsqtszUvG_IYbZqmNa5I_oNhQSMsSzN3fpEGkr8pepjBjtq4gS_9YsNN_c9zdSxPkUP8z4jrqwVfSA1sw8QNH45dRI1eHiVaGZFTGK0-ClhjlzEzxEQmuX72g0ygNlvjpSGQ17DnTzPTa9phwU3NEOJE', 'Hệ thống cổng trượt...', 'Đáp ứng nhu cầu...')
ON CONFLICT (slug) DO NOTHING;

-- Insert Contacts
INSERT INTO contacts (id, name, email, phone, service, message, created_at) VALUES
(1767930453807, 'Nguyễn Hải Anh', NULL, '0869851345', 'Cổng sắt mỹ thuật', 'Mình cần hỗ trợ tư vấn cổng sắt mỹ thuật ạ', '2026-01-09T03:47:33.807Z'),
(1768731849557, 'Nguyễn Hải Đông', NULL, '0869851345', 'Cổng tự động', 'tôi cần tư vấn nhanh', '2026-01-18T10:24:09.557Z'),
(1768732510031, 'Test User', NULL, '0123456789', 'Cổng Nhôm Đúc', 'Đăng ký tư vấn dịch vụ: Cổng Nhôm Đúc', '2026-01-18T10:35:10.031Z'),
(1768732577251, 'Test User HK', NULL, '0112233445', 'Cổng Hợp Kim Nhôm', 'Đăng ký tư vấn dịch vụ: Cổng Hợp Kim Nhôm', '2026-01-18T10:36:17.251Z'),
(1768732656589, 'User LC Manual', NULL, '0123456789', 'Lan Can & Cầu Thang', 'Đăng ký tư vấn dịch vụ: Lan Can & Cầu Thang', '2026-01-18T10:37:36.589Z'),
(1768732980934, 'Nguyễn Hải Anh', NULL, '0869851345', 'Cổng CNC', 'Đăng ký tư vấn dịch vụ: Cổng CNC', '2026-01-18T10:43:00.934Z'),
(1768733023138, 'Nguyễn văn sỹ', NULL, '0869851345', 'Thang Máy', 'Đăng ký tư vấn dịch vụ: Thang Máy', '2026-01-18T10:43:43.138Z'),
(1768733046292, 'Nguyễn văn đạt', NULL, '0869851345', 'Khác', 'Đăng ký tư vấn dịch vụ: Khác', '2026-01-18T10:44:06.292Z'),
(1768733080707, 'Nguyễn văn Tiến', NULL, '0869851345', 'Cổng Sắt Mỹ Thuật', 'Đăng ký tư vấn dịch vụ: Cổng Sắt Mỹ Thuật', '2026-01-18T10:44:40.707Z')
ON CONFLICT (id) DO NOTHING;
