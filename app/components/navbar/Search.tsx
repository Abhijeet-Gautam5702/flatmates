"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] rounded-full w-full py-2 md:w-auto shadow-sm hover:shadow-md transition cursor-pointer">
      <div
        className="
        flex
        flex-row
        justify-between
        items-center"
      >
        <div
          className="
            text-sm
            px-6
            font-semibold
            "
        >
          Anywhere
        </div>
        <div
          className="
            hidden
            sm:block
            text-sm
            font-semibold
            px-6
            border-x-[1px]
            flex-1
            text-center
            "
        >
          Any Week
        </div>
        <div
          className="
                text-sm
                pl-6
                pr-2
                text-gray-400
                flex
                flex-row
                items-center
                gap-3
            "
        >
          <div
            className="
                hidden
                sm:block
            "
          >
            Add guests
          </div>
          <div
            className="
                p-2
                bg-blue-800
                rounded-full
                text-white    
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;