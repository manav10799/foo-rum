import React, { useState } from "react";

const toolbarOptions = [
  { id: "bold", group: "format" },
  { id: "italic", group: "format" },
  { id: "underline", group: "format" },
  { id: "unlist", group: "list" },
  { id: "olist", group: "list" },
  { id: "quotes", group: "block" },
  { id: "code", group: "block" },
];

const TextEditorOptions = ({ functionNotImplement }) => {
  const [selected, setSelected] = useState(["bold"]);

  const toggleOption = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setTimeout(() => {
      functionNotImplement();
    }, 100);
  };

  return (
    <div className="flex items-center bg-black/3 p-1 rounded-[10px]">
      <select className="text-sm rounded-[7px] p-2 focus:outline-none bg-white shadow mr-6.5">
        <option>Paragraph</option>
        <option>Heading</option>
      </select>

      <div className="flex items-center text-gray-600">
        {/* Format group */}
        <div className="flex items-center mr-4.5">
          {toolbarOptions
            .filter((opt) => opt.group === "format")
            .map((opt) => (
              <span
                key={opt.id}
                id={opt.id}
                className={
                  selected.includes(opt.id)
                    ? "p-2 bg-white rounded-[7px] shadow mr-[9px]"
                    : opt.id === "underline"
                    ? " mr-0"
                    : "mr-4.5"
                }
                onClick={() => toggleOption(opt.id)}
                style={{ cursor: "pointer" }}
              >
                {opt.id === "bold" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.33332 7L9.04165 7C10.4914 7 11.6667 8.17525 11.6667 9.625C11.6667 11.0747 10.4914 12.25 9.04165 12.25L3.37035 12.25C2.79761 12.25 2.33332 11.7857 2.33332 11.213L2.33332 7ZM2.33332 7L7.29165 7C8.7414 7 9.91665 5.82475 9.91665 4.375C9.91665 2.92525 8.7414 1.75 7.29165 1.75L3.17591 1.75C2.71056 1.75 2.33332 2.12724 2.33332 2.59259L2.33332 7Z"
                      stroke="black"
                      strokeOpacity="0.75"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {opt.id === "italic" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.24984 1.75005L11.0832 1.75005M2.91651 12.25L8.74984 12.25M8.16651 1.75005L5.83317 12.25"
                      stroke="black"
                      strokeOpacity="0.54"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {opt.id === "underline" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.49988 12.25L10.4999 12.25M10.4999 1.75002L10.4999 6.41668C10.4999 8.34968 8.93288 9.91668 6.99988 9.91668C5.06688 9.91668 3.49988 8.34968 3.49988 6.41668L3.49988 1.75002"
                      stroke="black"
                      strokeOpacity="0.54"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            ))}
        </div>
        <span className="border-r h-8 border-black/10 mr-4.5"></span>
        <div className="flex items-center mr-4.5" id="unlist">
          {toolbarOptions
            .filter((opt) => opt.group === "list")
            .map((opt) => (
              <span
                key={opt.id}
                id={opt.id}
                className={
                  selected.includes(opt.id)
                    ? "p-2 bg-white rounded-[7px] shadow mr-[9px]"
                    : opt.id === "olist"
                    ? "mr-0"
                    : "mr-4.5"
                }
                onClick={() => toggleOption(opt.id)}
                style={{ cursor: "pointer" }}
              >
                {opt.id === "unlist" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25011 11.6668L12.8334 11.6668M5.2501 7.00011L12.8334 7.00011M5.25011 2.33344L12.8334 2.33344M2.04177 2.33345C2.04177 2.49453 1.91119 2.62511 1.7501 2.62511C1.58902 2.62511 1.45844 2.49453 1.45844 2.33345M2.04177 2.33345C2.04177 2.17236 1.91119 2.04178 1.7501 2.04178C1.58902 2.04178 1.45844 2.17236 1.45844 2.33345M2.04177 2.33345L1.45844 2.33345M2.04177 7.00011C2.04177 7.16119 1.91119 7.29178 1.7501 7.29178C1.58902 7.29178 1.45844 7.16119 1.45844 7.00011M2.04177 7.00011C2.04177 6.83903 1.91119 6.70844 1.7501 6.70844C1.58902 6.70844 1.45844 6.83903 1.45844 7.00011M2.04177 7.00011L1.45844 7.00011M2.04177 11.6668C2.04177 11.8279 1.91119 11.9584 1.7501 11.9584C1.58902 11.9584 1.45844 11.8279 1.45844 11.6668M2.04177 11.6668C2.04177 11.5057 1.91119 11.3751 1.7501 11.3751C1.58902 11.3751 1.45844 11.5057 1.45844 11.6668M2.04177 11.6668L1.45844 11.6668"
                      stroke="black"
                      strokeOpacity="0.54"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {opt.id === "olist" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25008 11.6667L12.8334 11.6667M5.25008 7.00008L12.8334 7.00008M5.25008 2.33341L12.8334 2.33341M2.04175 4.66674L2.04175 1.75008L1.16675 2.33337M2.04175 4.66674L1.16675 4.66674M2.04175 4.66674L2.91675 4.66671M1.16689 8.75008L2.91689 8.75008L2.91675 10.2084L1.16675 10.2084L1.16675 11.6667L2.91689 11.6667"
                      stroke="black"
                      strokeOpacity="0.54"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            ))}
        </div>
        <span className="border-r h-8 border-black/10 mr-4.5"></span>
        <div className="flex items-center pr-4.5" id="quotes">
          {toolbarOptions
            .filter((opt) => opt.group === "block")
            .map((opt) => (
              <span
                key={opt.id}
                id={opt.id}
                className={
                  selected.includes(opt.id)
                    ? "p-2 bg-white rounded-[7px] shadow mr-[9px]"
                    : opt.id === "code"
                    ? " mr-0"
                    : "mr-4.5"
                }
                onClick={() => toggleOption(opt.id)}
                style={{ cursor: "pointer" }}
              >
                {opt.id === "quotes" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83335 4.66666V7.72916C5.83335 9.10623 5.185 10.4029 4.08335 11.2292L3.50002 11.6667M5.83335 4.66666C5.83335 4.97628 5.83335 5.13108 5.81624 5.26105C5.69809 6.15851 4.99187 6.86473 4.09441 6.98288C3.96444 7 3.80963 7 3.50002 7C3.19041 7 3.0356 7 2.90563 6.98288C2.00817 6.86473 1.30195 6.15851 1.1838 5.26105C1.16669 5.13108 1.16669 4.97628 1.16669 4.66666C1.16669 4.35705 1.16669 4.20224 1.1838 4.07228C1.30195 3.17481 2.00817 2.46859 2.90563 2.35044C3.0356 2.33333 3.19041 2.33333 3.50002 2.33333C3.80963 2.33333 3.96444 2.33333 4.09441 2.35044C4.99187 2.46859 5.69809 3.17481 5.81624 4.07228C5.83335 4.20224 5.83335 4.35705 5.83335 4.66666ZM12.8334 4.66666V7.72916C12.8334 9.10623 12.185 10.4029 11.0834 11.2292L10.5 11.6667M12.8334 4.66666C12.8334 4.97628 12.8334 5.13108 12.8162 5.26105C12.6981 6.15851 11.9919 6.86473 11.0944 6.98288C10.9644 7 10.8096 7 10.5 7C10.1904 7 10.0356 7 9.90563 6.98288C9.00817 6.86473 8.30195 6.15851 8.1838 5.26105C8.16669 5.13108 8.16669 4.97628 8.16669 4.66666C8.16669 4.35705 8.16669 4.20224 8.1838 4.07228C8.30195 3.17481 9.00817 2.46859 9.90563 2.35044C10.0356 2.33333 10.1904 2.33333 10.5 2.33333C10.8096 2.33333 10.9644 2.33333 11.0944 2.35044C11.9919 2.46859 12.6981 3.17481 12.8162 4.07228C12.8334 4.20224 12.8334 4.35705 12.8334 4.66666Z"
                      stroke="black"
                      strokeOpacity="0.54"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {opt.id === "code" && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.50002 4.66667L1.16669 7L3.50002 9.33333M10.5 4.66667L12.8334 7L10.5 9.33333M8.16669 1.75L5.83335 12.25"
                      stroke="black"
                      strokeOpacity="0.54"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TextEditorOptions;
