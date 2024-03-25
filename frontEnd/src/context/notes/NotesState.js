import { useState } from "react";
import noteContext from "./noteContext";
// import { useState } from "react";
const NoteState = (props) => {
  let allnotes = [
    {
      _id: "6600998292a53c26a3670b1d",
      user: "66007b0d442165941575cdc6",
      title: "My first note !",
      discription: "Test Note ",
      tag: "react Backend Test ",
      __v: 0,
    },
    {
      _id: "6600998392a53c26a3670b20",
      user: "66007b0d442165941575cdc6",
      title: "My first note !",
      discription: "Test Note ",
      tag: "react Backend Test ",
      __v: 0,
    },
    {
      _id: "6600998392a53c26a3670b23",
      user: "66007b0d442165941575cdc6",
      title: "My first note !",
      discription: "Test Note ",
      tag: "react Backend Test ",
      __v: 0,
    },
    {
      _id: "6600998392a53c26a3670b26",
      user: "66007b0d442165941575cdc6",
      title: "My first note !",
      discription: "Test Note ",
      tag: "react Backend Test ",
      __v: 0,
    },
    {
      _id: "6601ef27b178c35c4699d1d6",
      user: "66007b0d442165941575cdc6",
      title: "My first note !",
      discription: "Test Note ",
      tag: "react Backend Test ",
      __v: 0,
    },
    {
      _id: "6601ef27b178c35c4699d1d9",
      user: "66007b0d442165941575cdc6",
      title: "My first note !",
      discription: "Test Note ",
      tag: "react Backend Test ",
      __v: 0,
    },
    {
      _id: "6601ef2bb178c35c4699d1dc",
      user: "66007b0d442165941575cdc6",
      title: "My first note !",
      discription: "Test Note ",
      tag: "react Backend Test ",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(allnotes);

  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
