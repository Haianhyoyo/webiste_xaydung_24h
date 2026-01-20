import { Product } from '@/data/products';
import Link from 'next/link';

interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    return (
        <div className="space-y-6">
            {/* Product Name & Category */}
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                    <span className="material-symbols-outlined text-base">check_circle</span>
                    {product.category}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-secondary dark:text-white">
                    {product.name}
                </h1>
            </div>

            {/* Product Specifications Table */}
            <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Bảng thông số sản phẩm:
                </p>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    {(Array.isArray(product.specifications)
                        ? product.specifications
                        : Object.entries(product.specifications).map(([label, value]) => ({ label, value }))
                    ).map((spec, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-2 gap-4 px-4 py-2.5 text-sm ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-surface-dark'
                                }`}
                        >
                            <span className="text-gray-600 dark:text-gray-400 font-medium">
                                {spec.label}
                            </span>
                            <span className="text-secondary dark:text-white font-medium">
                                {spec.value || '—'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pricing */}
            <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4">
                <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-red-600">
                        {product.salePrice.toLocaleString('vi-VN')}đ
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                        {product.originalPrice.toLocaleString('vi-VN')}đ
                    </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Giá trên đã tham khảo, Zalo/Gọi/Chat để có giá ưu đãi
                </p>
            </div>

            {/* CTA Button */}
            <Link
                href="tel:0924666288"
                className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
                <span className="material-symbols-outlined">phone_in_talk</span>
                LIÊN HỆ TƯ VẤN MIỄN PHÍ
            </Link>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="material-symbols-outlined text-blue-600 text-2xl">support_agent</span>
                    <div>
                        <p className="text-sm font-semibold text-secondary dark:text-white">
                            Hỗ trợ kỹ thuật & tư vấn tận tình 24/7
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="material-symbols-outlined text-green-600 text-2xl">verified</span>
                    <div>
                        <p className="text-sm font-semibold text-secondary dark:text-white">
                            Bảo hành chính hãng {product.category}
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <span className="material-symbols-outlined text-purple-600 text-2xl">inventory_2</span>
                    <div>
                        <p className="text-sm font-semibold text-secondary dark:text-white">
                            Sản phẩm mới 100% nguyên đai, nguyên kiện
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <span className="material-symbols-outlined text-orange-600 text-2xl">construction</span>
                    <div>
                        <p className="text-sm font-semibold text-secondary dark:text-white">
                            Thi công lắp đặt nhanh chóng
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
