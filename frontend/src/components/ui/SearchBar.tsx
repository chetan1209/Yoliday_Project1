import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2 w-full max-w-xl mb-6">
      <button className="p-2 text-gray-500 hover:text-[#F15A29]">
        <span className="material-icons">filter_list</span>
      </button>
      <input
        type="text"
        placeholder="Search a project"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#F15A29]"
        value={value}
        onChange={onChange}
      />
      <button className="bg-[#F15A29] p-2 rounded-r-md text-white hover:bg-[#e04e1e]">
        <span className="material-icons">search</span>
      </button>
    </div>
  );
};

export default SearchBar; 