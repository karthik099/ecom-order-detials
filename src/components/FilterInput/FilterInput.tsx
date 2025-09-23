import React from 'react';

interface FilterInputProps {
  label: string;
  type: string;
  value: string | number | undefined | string[];
  onChange: (value: string | number | string[]) => void;
  placeholder?: string;
  options?: string[];
  multiple?: boolean;
}

const FilterInput: React.FC<FilterInputProps> = ({ label, type, value, onChange, placeholder, options, multiple }) => {
  if (type === 'select' && options) {
    return (
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
        <select
          multiple={!!multiple}
          value={value as unknown as string[] || []}
          onChange={e => {
            const selected = Array.from(e.target.selectedOptions, option => option.value);
            onChange(multiple ? selected : selected[0]);
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2"
        >
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </label>
    );
  }
  return (
    <label className="block mb-2 text-sm font-medium text-gray-700">
      {label}
      <input
        type={type}
        value={value === undefined ? '' : value}
        placeholder={placeholder}
        onChange={e => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2"
      />
    </label>
  );
};

export default FilterInput;
