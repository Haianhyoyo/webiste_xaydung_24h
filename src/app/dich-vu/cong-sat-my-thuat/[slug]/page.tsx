import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, PRODUCTS } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductSidebar from '@/components/product/ProductSidebar';

interface PageProps {
    params: Promise<{
        slug: string;
    }>
}

// Generate static params for all products
export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        slug: product.slug,
    }));
}

export default async function IronGateProductDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pt-24 pb-20">
            <div className="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap pb-2">
                    <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
                    <span className="mx-2">/</span>
                    <Link href="/dich-vu" className="hover:text-primary transition-colors">Dịch vụ</Link>
                    <span className="mx-2">/</span>
                    <Link href="/dich-vu/cong-sat-my-thuat" className="hover:text-primary transition-colors">Cổng Sắt Mỹ Thuật</Link>
                    <span className="mx-2">/</span>
                    <span className="text-secondary dark:text-white font-medium">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content Area (Left/Center 9 cols) */}
                    <div className="lg:col-span-9 flex flex-col gap-10">
                        {/* Top Section: Gallery + Info */}
                        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-white/5 p-6">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-5">
                                    <ProductGallery images={product.images} title={product.name} />
                                </div>
                                <div className="md:col-span-7">
                                    <ProductInfo product={product} />
                                </div>
                            </div>
                        </div>

                        {/* Detailed Description */}
                        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-white/5 p-6 md:p-8">
                            <h2 className="text-xl font-bold text-secondary dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3 mb-6 uppercase flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">description</span>
                                Mô tả chi tiết
                            </h2>
                            <div
                                className="prose prose-sm md:prose-base dark:prose-invert max-w-none 
                                    prose-h3:text-lg prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-secondary dark:prose-h3:text-white
                                    prose-h4:text-base prose-h4:font-bold prose-h4:mt-4 prose-h4:mb-2
                                    prose-ul:list-disc prose-ul:ml-4 prose-ul:space-y-2
                                    prose-p:leading-relaxed text-gray-600 dark:text-gray-300
                                    prose-strong:text-secondary dark:prose-strong:text-white"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />
                        </div>
                    </div>

                    {/* Sidebar Area (Right 3 cols) */}
                    <div className="lg:col-span-3">
                        <ProductSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}
