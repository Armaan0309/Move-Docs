import React from "react";
import { FaFileLines } from "react-icons/fa6";
import { FiDownloadCloud } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900 text-white px-8 py-10 overflow-hidden"
    >
      <FaFileLines />

      <p className="text-sm mt-5 tracking-wider font-semibold leading-tight">
        {data.desc}
      </p>

      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between px-8 py-3 mb-2">
          <h5>{data.filesize}</h5>
          <span className="text-2xl">
            {data.close ? <IoMdCloseCircleOutline /> : <FiDownloadCloud />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full h-12 ${
              data.tag.tagColor === "blue" ? "bg-blue-900" : "bg-green-700"
            } flex items-center justify-center`}
          >
            <h3 className="text-lg font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
