import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex items-center justify-center space-x-4 mt-4">
    <button
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
      className="px-3 py-1 rounded bg-gray-200 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
    >
      Previous
    </button>
    <span className="text-sm text-gray-600">
      Page {currentPage} of {totalPages}
    </span>
    <button
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
      className="px-3 py-1 rounded bg-gray-200 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
    >
      Next
    </button>
  </div>
);

export default Pagination;
