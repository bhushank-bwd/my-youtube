import React, { useEffect, useState } from "react";
import "boxicons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { addCacheSearch } from "./utils/searchSlice";
const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [search, setSearch] = useState(false);
  const cachedSearch = useSelector((store) => store.search);
  const toggleleftMenu = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedSearch[searchQuery]) {
        setSearchList(cachedSearch[searchQuery]);
      } else {
        searchData();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const searchData = async () => {
    console.log("cached", cachedSearch);
    const res = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&q=" +
        searchQuery
    );
    const res2 = await res.json();
    console.log(searchQuery, "searchQuery", res2[1]);
    setSearchList(res2[1]);
    dispatch(
      addCacheSearch({
        [searchQuery]: res2[1],
      })
    );
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md">
      <div className="flex col-span-1 cursor-pointer">
        <div className="h-8 align-middle pr-1" onClick={toggleleftMenu}>
          <box-icon name="menu"></box-icon>
        </div>
        <a href="/">
          <img
            className="h-8"
            alt="Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 h-10 border border-gray-400 p-1 rounded-l-full align-middle"
            type="text"
            value={searchQuery}
            onFocus={() => {
              setSearch(true);
            }}
            onBlur={() => {
              setSearch(false);
            }}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button className="border border-gray-400 p-1 align-middle rounded-r-full w-10">
            <box-icon name="search-alt-2"></box-icon>
          </button>
        </div>
        {search && searchList.length && (
          <div className="p-2 rounded-md fixed bg-gray-300 align-c w-1/3">
            <ul className="">
              {searchList?.map((item, index) => {
                return (
                  <li className="h-8 align-middle " key={index}>
                    <span className="h-4">
                      <box-icon name="search-alt-2"></box-icon>
                    </span>
                    <span className="h-4">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <box-icon name="user"></box-icon>
      </div>
    </div>
  );
};

export default Head;
