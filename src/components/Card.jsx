import React from "react";

const Card = ({
  outerChildren,
  innerChildren,
  outerClassName,
  innerClassName,
}) => {
  return (
    <div
      className={`mx-auto rounded-2xl px-2 max-w-[568px] ${
        outerClassName || ""
      }`}
    >
      <div className={`bg-white rounded-xl w-full ${innerClassName || ""}`}>
        {innerChildren}
      </div>
      {outerChildren}
    </div>
  );
};

export default Card;
