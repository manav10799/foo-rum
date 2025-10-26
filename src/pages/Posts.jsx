import React, { useState } from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Posts = () => {
  const functionNotImplement = () => {
    alert("Functionality Not Implemented!!!");
  };
  const postSelector = useSelector((store) => store?.postSlice);
  return (
    <div>
      {postSelector.posts.map((post) => {
        return (
          <Card
            outerClassName="mb-6.5 p-2 bg-black/3"
            key={post.id}
            innerChildren={
              <div className="p-3.5">
                <div className="flex gap-3">
                  <div>
                    <img
                      src={post.author.avatarUrl}
                      alt="avatar"
                      className="mb-2.5 w-[37px] h-[37px] min-w-[37px] min-h-[37px] object-cover"
                    />
                    <span className="bg-[#F2F2F2] p-1.5 rounded-full">
                      <span>{post.emoji}</span>
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[13px]">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-gray-400">{post.timestamp}</p>
                    <p className="text-gray-600 text-sm mt-2">{post.message}</p>
                  </div>
                </div>
              </div>
            }
            outerChildren={
              <div className="flex items-center gap-6.5 pt-2 px-3.5">
                <span className="cursor-pointer" onClick={functionNotImplement}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 15.75C9.75 15.75 16.5 12.0002 16.5 6.75032C16.5 4.12542 14.25 2.28304 12 2.25049C10.875 2.23421 9.75 2.62549 9 3.75044C8.25 2.62549 7.10554 2.25049 6 2.25049C3.75 2.25049 1.5 4.12542 1.5 6.75032C1.5 12.0002 8.25 15.75 9 15.75Z"
                      stroke="#2F384C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="cursor-pointer" onClick={functionNotImplement}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25 6H11.25M5.25 9H8.25M14.0374 15.7724C13.9384 15.713 13.8889 15.6833 13.8396 15.6552C13.119 15.2448 12.3076 15.0201 11.4786 15.0013C11.4218 15 11.3641 15 11.2487 15H8.25C6.62228 15 5.80842 15 5.1428 14.8123C3.46847 14.3401 2.15993 13.0315 1.68772 11.3572C1.5 10.6916 1.5 9.87772 1.5 8.25C1.5 6.62228 1.5 5.80842 1.68772 5.1428C2.15993 3.46847 3.46847 2.15993 5.1428 1.68772C5.80842 1.5 6.62228 1.5 8.25 1.5H9C11.3297 1.5 12.4946 1.5 13.4134 1.8806C14.6386 2.38807 15.6119 3.36144 16.1194 4.58658C16.5 5.50544 16.5 6.67029 16.5 9V14.3781C16.5 14.5709 16.5 14.6673 16.4941 14.7336C16.4011 15.7795 15.2899 16.4086 14.3452 15.9503C14.2853 15.9212 14.2027 15.8716 14.0374 15.7724Z"
                      stroke="#2F384C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="cursor-pointer" onClick={functionNotImplement}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_373)">
                      <path
                        d="M8.25 9.75L8.53457 10.4899C9.5894 13.2326 10.1168 14.6039 10.825 14.9489C11.4376 15.2472 12.1598 15.2132 12.7416 14.8586C13.4143 14.4486 13.8104 13.0338 14.6028 10.2041L15.716 6.22824C16.2177 4.43672 16.4685 3.54096 16.2357 2.92628C16.0327 2.39035 15.6096 1.96724 15.0737 1.76427C14.459 1.53147 13.5633 1.78228 11.7718 2.28391L7.79584 3.39716C4.96617 4.18947 3.55133 4.58563 3.14136 5.25828C2.78678 5.84005 2.75275 6.56231 3.05106 7.17484C3.39597 7.88306 4.76729 8.41049 7.50993 9.46536L8.25 9.75ZM8.25 9.75L10.125 7.875"
                        stroke="#2F384C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_373">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            }
            innerClassName="border border-black/13 shadow-md"
          />
        );
      })}
    </div>
  );
};

export default Posts;
