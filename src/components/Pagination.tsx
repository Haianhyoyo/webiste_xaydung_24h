
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5; // Total pages to show including ellipsis but excluding first/last if truncated

        if (totalPages <= 7) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always include first page
            pages.push(1);

            // Calculate start and end of visible middle pages
            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            // Adjust if active page is near start or end
            if (currentPage <= 3) {
                endPage = 4;
            } else if (currentPage >= totalPages - 2) {
                startPage = totalPages - 3;
            }

            // Add ellipsis before middle pages if needed
            if (startPage > 2) {
                pages.push('...');
            }

            // Add middle pages
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            // Add ellipsis after middle pages if needed
            if (endPage < totalPages - 1) {
                pages.push('...');
            }

            // Always include last page
            pages.push(totalPages);
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-center space-x-2 py-8">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${currentPage === 1
                        ? 'border-gray-800 text-gray-600 cursor-not-allowed dark:border-white/10 dark:text-gray-600'
                        : 'border-gray-700 text-gray-300 hover:border-primary hover:text-primary dark:border-white/20 dark:text-gray-300 dark:hover:border-primary dark:hover:text-primary'
                    }`}
            >
                <span className="material-symbols-outlined text-sm">arrow_back_ios_new</span>
            </button>

            {getPageNumbers().map((page, index) => (
                page === '...' ? (
                    <span key={`ellipsis-${index}`} className="w-10 h-10 flex items-center justify-center text-gray-500">
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => typeof page === 'number' && onPageChange(page)}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg border font-bold text-sm transition-all ${currentPage === page
                                ? 'bg-primary border-primary text-secondary'
                                : 'bg-transparent border-gray-700 text-gray-300 hover:border-gray-500 dark:border-white/20 dark:text-gray-300 dark:hover:border-white/40'
                            }`}
                    >
                        {page}
                    </button>
                )
            ))}

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${currentPage === totalPages
                        ? 'border-gray-800 text-gray-600 cursor-not-allowed dark:border-white/10 dark:text-gray-600'
                        : 'border-gray-700 text-gray-300 hover:border-primary hover:text-primary dark:border-white/20 dark:text-gray-300 dark:hover:border-primary dark:hover:text-primary'
                    }`}
            >
                <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </button>
        </div>
    );
}
