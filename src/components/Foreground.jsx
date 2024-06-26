import React, { useRef } from "react";
import Card from "./Card";


const Foreground = () => {

    const ref = useRef();

  const data = [
    {
      desc: "Complete the Home Works given Today",
      filesize: ".9mb",
      close: false,
      tag:{ isOpen:true, tagTitle: "Download Now", tagColor:" green "}
    },

    {
      desc: "Follow up the given tasks of DevOps ",
      filesize: ".9mb",
      close: false,
      tag:{ isOpen:true, tagTitle: "Download Now", tagColor:" blue "}
    },

    {
      desc: "Complete the Data Structure and Algorithm Tutorials",
      filesize: ".9mb",
      close: false,
      tag:{ isOpen:false, tagTitle: "Upload", tagColor:" green "}
    },

  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-8">
      
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}

    </div>
  );
};

export default Foreground;
