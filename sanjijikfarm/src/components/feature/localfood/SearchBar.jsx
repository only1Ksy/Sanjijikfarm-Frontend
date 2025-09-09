import SearchIcon from '@/assets/icons/search.svg';

export default function SearchBar({ keyword, handleChange, handleKeyDown, handleSearch }) {
  return (
    <div className="absolute top-0 z-10 w-full p-2.5">
      <div className="text-body-1 bg-gray-1 flex h-13 w-full items-center rounded-md font-medium">
        <input
          value={keyword}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="검색어를 입력하세요."
          className="m-4 w-full focus:outline-none"
        />
        <div className="mr-4 cursor-pointer" onClick={handleSearch}>
          <SearchIcon className="text-background-03" />
        </div>
      </div>
    </div>
  );
}
