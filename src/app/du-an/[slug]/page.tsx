import { COMPLETED_PROJECTS } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ProjectDetailPage(props: any) {
    const params = await props.params;
    const project = COMPLETED_PROJECTS.find(p => p.slug === params?.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Project Hero (Simple) */}
            <div className="relative h-[400px] md:h-[500px] w-full">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">{project.category}</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg">{project.title}</h1>
                    <div className="flex items-center gap-6 text-white text-sm font-medium">
                        <span className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full"><span className="material-symbols-outlined text-primary mr-2">calendar_month</span> {project.year}</span>
                        <span className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full"><span className="material-symbols-outlined text-primary mr-2">location_on</span> {project.location}</span>
                    </div>
                </div>
            </div>

            <div className="layout-container max-w-5xl mx-auto px-4 py-16">
                <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-white/5 -mt-24 relative z-10">

                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-secondary dark:text-white mb-6 border-b border-primary/20 pb-4 inline-block">Chi Tiết Dự Án</h2>
                            <div className="prose dark:prose-invert max-w-none mb-8">
                                <p className="text-lg leading-relaxed text-text-light dark:text-gray-300">
                                    {project.content || project.desc}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
                                    <span className="block text-xs uppercase text-gray-500 mb-1">Chủ đầu tư</span>
                                    <span className="block font-bold text-secondary dark:text-white">Anh/Chị ...</span>
                                </div>
                                <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
                                    <span className="block text-xs uppercase text-gray-500 mb-1">Tiến độ</span>
                                    <span className="block font-bold text-secondary dark:text-white">Hoàn thành</span>
                                </div>
                            </div>

                            <Link href="/lien-he" className="inline-flex items-center bg-primary hover:bg-yellow-400 text-secondary font-bold py-3 px-8 rounded shadow transition-all hover:-translate-y-1">
                                Liên Hệ Tư Vấn Dự Án Tương Tự
                            </Link>
                        </div>

                        <div className="w-full md:w-1/3">
                            <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-white/5 sticky top-24">
                                <h3 className="font-bold text-lg mb-4 text-secondary dark:text-white">Dự Án Liên Quan</h3>
                                <div className="flex flex-col gap-4">
                                    {COMPLETED_PROJECTS.filter(p => p.slug !== project.slug && p.category === project.category).slice(0, 3).map(related => (
                                        <Link key={related.slug} href={`/du-an/${related.slug}`} className="group flex gap-4 items-start hover:bg-white dark:hover:bg-surface-dark p-2 rounded transition">
                                            <div className="w-20 h-20 shrink-0 rounded overflow-hidden">
                                                <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-secondary dark:text-white group-hover:text-primary transition line-clamp-2">{related.title}</h4>
                                                <span className="text-xs text-gray-500">{related.year}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
