export interface Project {
    title: string;
    slug: string;
    category: string;
    year: string;
    location: string;
    image: string;
    desc: string;
    content?: string;
}

export const COMPLETED_PROJECTS: Project[] = [
    {
        title: 'Biệt thự Vườn Củ Chi',
        slug: 'biet-thu-vuon-cu-chi',
        category: 'Cổng Nhôm Đúc',
        year: '2023',
        location: 'Củ Chi, TP.HCM',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuIwJhoMqBM8wL2i-LRTvLA_7ZMLYjWAni78Uzed8WkSMGOthnXBr75bbU2e0H9uku9dk-VURIz8CmMDIj0ygjs-IK2ctweXaTigp9FVhONb0fTwK6JA-rE-HYrRb87uhQNcTO9i7qVB8EUcunwFbV0vE8smJtIWIUyX3OAeQDJXGzPiPOPs7OFmM2WdLnhBtCc1D4sYfR0TNGcusTOQ-QIR_ndCGWYeo3rPcq4NkTpP2oKZCxwlZVRg5mZtb7AsJYD0fl_mvpyGQ',
        desc: 'Thi công trọn gói hạng mục cổng nhôm đúc Buckingham với hoạ tiết hoàng gia tinh xảo, sơn giả cổ đồng vàng 5 lớp.',
        content: 'Dự án Biệt thự Vườn Củ Chi là một trong những công trình tiêu biểu của năm 2023. Hệ thống cổng nhôm đúc được thiết kế theo phong cách Buckingham Hoàng Gia, mang lại vẻ đẹp uy nghi và tráng lệ. Sản phẩm sử dụng công nghệ đúc chân không V-Process tiên tiến nhất hiện nay, đảm bảo bề mặt láng mịn, hoa văn sắc nét đến từng chi tiết nhỏ. Lớp sơn 5 lớp giả cổ đồng vàng không chỉ tạo hiệu ứng thẩm mỹ cao mà còn bảo vệ sản phẩm bền bỉ trước thời tiết khắc nghiệt.'
    },
    {
        title: 'Villa Thảo Điền',
        slug: 'villa-thao-dien',
        category: 'Cổng Sắt Mỹ Thuật',
        year: '2023',
        location: 'Quận 2, TP.HCM',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIJ0xcqA5JOB-TVNDHq2mvWKg0krBe4c8_dIK0htkOVoP7jx2-BEKlMlk53X2QmdS2zOW5_BaGmq7sxcqnEgG1Zhtzq2dJZuRrtMjmh-j8ZKvMW2igxn-kJdLB2SNEQEw0ktA3cIt8Xxzdiz3cjqgKhSmtfkFeyhZQprwpjVmVeUseXGfOKSV2lh09rBXJr-2h7eWYBdqHcU5mUoejTNYVjoCAVCl-5kk-13-s61Rb_H1jJIUPi9AUy6RpiEXk8v0yEl5gpNIY61g',
        desc: 'Thiết kế và thi công cổng sắt nghệ thuật phong cách hiện đại, kết hợp kính cường lực và hệ thống tự động âm sàn.',
        content: 'Tại Villa Thảo Điền, chúng tôi đã triển khai giải pháp cổng sắt nghệ thuật kết hợp kính cường lực, tạo nên một mặt tiền vừa hiện đại, vừa an toàn. Các chi tiết sắt được uốn thủ công bởi những nghệ nhân lành nghề nhất, kết hợp với công nghệ cắt CNC chính xác. Hệ thống motor âm sàn nhập khẩu từ Ý giúp vận hành êm ái và giữ nguyên vẻ đẹp thẩm mỹ của cánh cổng.'
    },
    {
        title: 'Resort Phú Quốc 5*',
        slug: 'resort-phu-quoc-5-sao',
        category: 'Dự Án Nghỉ Dưỡng',
        year: '2022',
        location: 'Phú Quốc, Kiên Giang',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmeJzz-ij94YZOySNKUcAsgTi55CyPlreTWVZl7kXsHbKgaguzFz-hJ1dP0ewwoMjoP4MUOeFdwlc1VFLA0Ng-WvQNTicsCtogt7IY-8F9rj06rShKvIy3QaZ880ympRw2FGmfnK4l6XPrXH6xDHTHQrBs0c9gNBIHwZgTcmOhjDCA2t-VY-PkXIF3T_XqXz3nsz4MnvmlJTFhvwSzgzeU_w7sg0zRD5gtml9kME1V2_JUu5Nl5I-Ry9JDqBryRu2RoH-qXarpWVo',
        desc: 'Tổng thầu hạng mục hàng rào, cổng chính tự động kiểm soát ra vào và hệ thống lan can biển chống ăn mòn muối.',
        content: 'Dự án Resort Phú Quốc 5 sao đặt ra thách thức lớn về khả năng chống chịu ăn mòn của môi trường biển. Chúng tôi đã sử dụng hợp kim nhôm đặc chủng và quy trình sơn tĩnh điện chuẩn hàng hải để đảm bảo độ bền trên 20 năm cho hệ thống hàng rào và lan can. Cổng chính tích hợp hệ thống kiểm soát ra vào thông minh, nhận diện khuôn mặt và thẻ từ dành cho khách VIP.'
    },
    {
        title: 'Penthouse Quận 7',
        slug: 'penthouse-quan-7',
        category: 'Lan Can & Cầu Thang',
        year: '2022',
        location: 'Quận 7, TP.HCM',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-sOGyteEsrzwzy6-92iiPagtBKsTbuGuuwOkCws_onTF_2b5EJ-yz68TmhTBKoAGma_ntZoYt4jtNXgLzQJ5JJJGcAfPkP1hP8fPuSD2ltksgpTpCHz8qPVjcIlqWQuluygSXrLn2OHo_Hf51TP1bm-y3d90HFiuHfmt06XHq8v_EDmzIL-W81RSZa4AbkhukeFOCRFot28_3cE_vEAYoGnC3bAg-Wnr7EaDNxs_LkIxP9k18A_1m9RppGcyny1hCBHcUWhBUrb0',
        desc: 'Hệ thống lan can ban công nhôm đúc mạ vàng 24k và cầu thang xoắn ốc nghệ thuật tạo điểm nhấn sang trọng.',
        content: 'Căn Penthouse này là biểu tượng của sự xa hoa. Điểm nhấn chính là hệ thống lan can và cầu thang xoắn ốc được mạ vàng 24k công nghiệp. Từng đường nét hoa văn được chau chuốt tỉ mỉ, kết hợp với tay vịn gỗ Gõ Đỏ tự nhiên. Đây không chỉ là một hạng mục xây dựng, mà là một tác phẩm nghệ thuật thực sự trong không gian sống.'
    },
    {
        title: 'Khu Dân Cư Cao Cấp',
        slug: 'khu-dan-cu-cao-cap-dong-nai',
        category: 'Tự Động Hóa',
        year: '2021',
        location: 'Đồng Nai',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmeJzz-ij94YZOySNKUcAsgTi55CyPlreTWVZl7kXsHbKgaguzFz-hJ1dP0ewwoMjoP4MUOeFdwlc1VFLA0Ng-WvQNTicsCtogt7IY-8F9rj06rShKvIy3QaZ880ympRw2FGmfnK4l6XPrXH6xDHTHQrBs0c9gNBIHwZgTcmOhjDCA2t-VY-PkXIF3T_XqXz3nsz4MnvmlJTFhvwSzgzeU_w7sg0zRD5gtml9kME1V2_JUu5Nl5I-Ry9JDqBryRu2RoH-qXarpWVo',
        desc: 'Lắp đặt đồng bộ 50 bộ cổng tự động thông minh tích hợp nhận diện biển số xe và điều khiển qua Smartphone.',
        content: 'Chúng tôi tự hào là đơn vị cung cấp giải pháp tự động hóa toàn diện cho Khu Dân Cư này. Hệ thống bao gồm 50 cổng tự động cho các biệt thự, được kết nối vào hệ thống quản lý trung tâm. Cư dân có thể điều khiển cổng qua App điện thoại, xem lịch sử ra vào, và cấp quyền truy cập tạm thời cho khách. Hệ thống Camera AI nhận diện biển số xe giúp tự động mở cổng cho xe đăng ký trước.'
    },
    {
        title: 'Nhà Phố Gò Vấp',
        slug: 'nha-pho-go-vap',
        category: 'Cổng CNC',
        year: '2021',
        location: 'Gò Vấp, TP.HCM',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYdKL-K6PheZoeZmAc7nZldDMswHzR2U0Wrcg9UT6qbt-fO7j7BkcV0A622ZIuc7kHQUXkr6btJWk7hv0n0gkvxLo9MYfWnwszKoGDflPI9l05z5LOPOzzKeEYLFmLdilD1zx6GlORGN5z38HDJJTR1zkNJ7Zoq4wguviPp77CHPBoT2eyJPECNX4djtXYHXbrQlhH6MtQA0s9Nopg8XGFDf__JUh42oE0t1m0Y8cLnpbEge_XzzUew8kh6kMQfp-LGZ2Rkia6sZg',
        desc: 'Cổng CNC cắt laser họa tiết Trống Đồng Đông Sơn, sơn tĩnh điện màu đen mờ kết hợp phụ kiện đồng đỏ.',
        content: 'Mẫu cổng CNC Trống Đồng Đông Sơn mang đậm bản sắc văn hóa Việt. Công nghệ cắt Laser Fiber công suất lớn cho đường cắt sắc sảo, không ba via. Chúng tôi sử dụng thép tấm dày 5mm - 8mm đảm bảo độ cứng vững. Bề mặt sơn tĩnh điện màu đen mờ (Matt Black) cao cấp tạo nền cho các chi tiết phụ kiện màu đồng đỏ nổi bật.'
    },
    {
        title: 'Biệt Thự Đơn Lập',
        slug: 'biet-thu-don-lap-binh-duong',
        category: 'Cổng Nhôm Đúc',
        year: '2020',
        location: 'Bình Dương',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU8_fqGn7hxeB58YUmB2Jw_vcIuOiDZU_yFwQNGf9w_8uHgogLbpdSE6Qi4R_n8QZ8oSP_gvMLDrQsjMOCp6QVBsdgFOOCFto6ZwtPxMmrGm1gWwfWU3cY_JhkhRTRfTpeFRX6FX4XVh9IRsUY3ljuf9jWwrzxIqhj9XsRI122M_0n8SqoMJu6GjtpSB14_74OERiVkBdw6_RG2wxUtdGgyMnZN3cbOKeaXRIcg060vbNpc2ydm5jdeQfVc4ciXgsl9qSteem51E4',
        desc: 'Bộ cổng nhôm đúc nguyên khối nặng 1.5 tấn, mẫu mã độc quyền thiết kế riêng theo phong thủy gia chủ.',
        content: 'Đây là một trong những bộ cổng đồ sộ nhất chúng tôi từng thực hiện. Với trọng lượng lên đến 1.5 tấn mỗi cánh, việc đúc nguyên khối là một thách thức kỹ thuật lớn. Họa tiết "Tứ Linh Hội Tụ" được thiết kế độc quyền theo tuổi và mệnh của gia chủ. Cổng được trang bị hệ thống bản lề cối xoay chịu lực đặc biệt và motor tay đòn thủy lực công suất lớn.'
    },
    {
        title: 'Cổng Phụ & Hàng Rào',
        slug: 'cong-phu-va-hang-rao-long-an',
        category: 'Chi Tiết Nghệ Thuật',
        year: '2020',
        location: 'Long An',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIJ0xcqA5JOB-TVNDHq2mvWKg0krBe4c8_dIK0htkOVoP7jx2-BEKlMlk53X2QmdS2zOW5_BaGmq7sxcqnEgG1Zhtzq2dJZuRrtMjmh-j8ZKvMW2igxn-kJdLB2SNEQEw0ktA3cIt8Xxzdiz3cjqgKhSmtfkFeyhZQprwpjVmVeUseXGfOKSV2lh09rBXJr-2h7eWYBdqHcU5mUoejTNYVjoCAVCl-5kk-13-s61Rb_H1jJIUPi9AUy6RpiEXk8v0yEl5gpNIY61g',
        desc: 'Các chi tiết hoa văn sắt uốn thủ công tinh xảo, tạo nên sự mềm mại nhưng vẫn đảm bảo an toàn tuyệt đối.',
        content: 'Sự đồng bộ trong thiết kế từ cổng chính đến cổng phụ và hàng rào tạo nên vẻ đẹp tổng thể hoàn hảo. Hàng rào sắt nghệ thuật sử dụng thép đặc vuông 16mm và 20mm, uốn nóng thủ công để tạo độ mềm mại cho hoa văn nhưng vẫn vô cùng chắc chắn. Các đầu chông bảo vệ được đúc hoa văn lá tây, vừa trang trí vừa đảm bảo an ninh.'
    },
    {
        title: 'Khu Công Nghiệp VSIP',
        slug: 'khu-cong-nghiep-vsip-binh-duong',
        category: 'Dự Án Nhà Xưởng',
        year: '2019',
        location: 'Bình Dương',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPDaNFL2LKyyf6rXuaVkIrFQHJBynyZZAfnGlzoF7JZ3yecYRXc33c-5XyngE7wV1Bo6s6JBhATbPdAxp3YkMX10X2z-RdMBaK5lyBRiTT9oKEJ2JSkvQFsqtszUvG_IYbZqmNa5I_oNhQSMsSzN3fpEGkr8pepjBjtq4gS_9YsNN_c9zdSxPkUP8z4jrqwVfSA1sw8QNH45dRI1eHiVaGZFTGK0-ClhjlzEzxEQmuX72g0ygNlvjpSGQ17DnTzPTa9phwU3NEOJE',
        desc: 'Hệ thống cổng trượt siêu trường siêu trọng dài 20m, vận hành tự động cho xe container ra vào.',
        content: 'Đáp ứng nhu cầu ra vào thường xuyên của xe Container tải trọng lớn, chúng tôi thiết kế hệ thống cổng trượt Cantilever không đường ray (hoặc đường ray âm chịu lực cao). Cổng dài 20m, nặng 3 tấn nhưng vẫn vận hành nhẹ nhàng nhờ hệ thống bánh xe chịu lực chuyên dụng và Motor công nghiệp 3 pha tải trọng 4000kg. Tốc độ đóng mở nhanh giúp tối ưu lưu thông cho nhà máy.'
    }
];
