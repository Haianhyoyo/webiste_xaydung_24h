
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Pagination from './Pagination';

import { COMPLETED_PROJECTS } from '@/data/projects';

export default function CompletedProjectsList({ className }: { className?: string }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(COMPLETED_PROJECTS.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = COMPLETED_PROJECTS.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className={`py-16 md:py-20 bg-background-light dark:bg-background-dark ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentItems.map((project, idx) => (
                        <div key={idx} className="group relative bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                            <div className="relative overflow-hidden h-64">
                                <img alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out" src={project.image} />
                                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                    <Link href={`/du-an/${project.slug}`} className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-secondary hover:bg-white hover:text-primary transition-all duration-300 transform scale-0 group-hover:scale-100 delay-75 shadow-lg">
                                        <span className="material-symbols-outlined text-2xl">arrow_outward</span>
                                    </Link>
                                </div>
                                <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full opacity-100 group-hover:opacity-0 transition duration-300">{project.year}</div>
                            </div>
                            <div className="p-6 relative">
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{project.category}</span>
                                    <Link href={`/du-an/${project.slug}`}>
                                        <h3 className="text-xl font-display font-bold text-secondary dark:text-white group-hover:text-primary transition-colors mb-3">{project.title}</h3>
                                    </Link>
                                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm line-clamp-2 mb-4">
                                        {project.desc}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10 text-xs text-text-muted-light dark:text-gray-500">
                                        <span className="flex items-center"><span className="material-symbols-outlined text-sm mr-1">location_on</span> {project.location}</span>
                                        <Link href={`/du-an/${project.slug}`} className="flex items-center font-semibold text-primary group-hover:underline cursor-pointer">Xem chi tiết</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
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
