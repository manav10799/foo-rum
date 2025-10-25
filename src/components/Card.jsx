import React from "react";

const Card = ({ outerChildren, innerChildren, className }) => {
  return (
    <div className={`bg-[#EBEBEB] p-3 rounded-3xl`}>
      <div className="bg-white rounded-2xl">{innerChildren}</div>
      {outerChildren}
    </div>
  );
};

export default Card;
