import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const { id } = useParams();

  const allPastes = useSelector((stste) => stste.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];

  // function createPaste() {
  //     const paste = {
  //       title: title,
  //       content: value,
  //       _id: pasteId || Date.now().toString(36),
  //       createdAt: new Date().toISOString(),
  //     };

  //     if (pasteId) {
  //       //update
  //       dispatch(updateToPastes(paste));
  //     } else {
  //       //create
  //       dispatch(addToPastes(paste));
  //     }

  //     //after creation or updation
  //     setTitle("");
  //     setValue("");
  //     setSearchParams({});
  //   }

  return (
    <div className="bg-slate-400 rounded ">
      <div className="flex flex-row mt-10 gap-4 justify-start p-3">
        <input
          disabled
          className="p-1 px-3 rounded-md m-2 w-[70%] text-4xl"
          type="text"
          placeholder="Title"
          value={paste.title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <button className="p-1 px-3 rounded-md m-2 bg-[#9290C3]" onClick={createPaste}>
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}
      </div>

      <div className="">
        <textarea
          disabled
          className="p-3 rounded-md m-2 mt-1 w-[90%] "
          name=""
          id=""
          value={paste.content}
          placeholder="Write your content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default ViewPaste;
