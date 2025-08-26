import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDeleteClick(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="mt-10">
      <input
        className="p-1 px-3 rounded-md m-2 w-[80%] max-w-[400px] mt-5"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-5 mt-3 bg-slate-200 p-4 rounded-md w-full">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="shadow-md bg-slate-300 rounded-lg p-4 flex flex-col gap-2 items-start" key={paste?._id}>
                <div className="text-4xl w-full items-start flex">{paste.title}</div>

                <div>{paste.content}</div>

                <div className=" mt-3 flex flex-row flex-wrap gap-4 place-content-evenly w-full">
                  <button className="bg-[#9290C3] p-1 px-3 rounded-md text-xs"><Link to={`/?pasteId=${paste?._id}`}>Edit</Link></button>
                  <button className="bg-[#9290C3] p-1 px-3 rounded-md text-xs"><Link to={`/pastes/${paste?._id}`}>View</Link></button>
                  <button className="bg-[#9290C3] p-1 px-3 rounded-md text-xs" onClick={() => handleDeleteClick(paste?._id)}>
                    Delete
                  </button>
                  <button
                  className="bg-[#9290C3] p-1 px-3 rounded-md text-xs"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    Copy
                  </button>
                  <button className="bg-[#9290C3] p-1 px-3 rounded-md text-xs">Share</button>
                </div>

                <div>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
