import React, { useState, useRef, useEffect, useContext } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Login from "./Login";
import TextEditorOptions from "../components/TextEditorOptions";
import trashIcon from "../assets/trash.svg";
import smileIcon from "../assets/smile.svg";
import plusIcon from "../assets/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../slices/postSlice";
import john from "../assets/john.svg";
import CurrentUser from "../context/UserContext";

const PostEditor = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const emojiAnchorRef = useRef(null);
  const [currentEmoji, setCurrentEmoji] = useState("");
  const emojiList = ["😀", "✌🏻", "😡", "🚀", "🥳"];
  const { user } = useContext(CurrentUser);
  useEffect(() => {
    if (!showEmojiPicker) return;
    function handleClickOutside(event) {
      if (
        emojiAnchorRef.current &&
        !emojiAnchorRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showEmojiPicker]);
  const postDispatch = useDispatch();
  const postSelector = useSelector((store) => store?.postSlice);

  const handleSubmitPost = () => {
    if (message.trim() === "") {
      alert("Please add a message");
      return;
    }
    if (!user || (typeof user === "object" && !Object.keys(user).length)) {
      setShowLoginModal(true);
      return;
    }
    const form = {
      id: postSelector.posts.length + 1,
      author: {
        name: user.name,
        avatarUrl: john,
      },
      timestamp: "1 minutes ago",
      emoji: currentEmoji || "😁",
      message: message,
    };
    postDispatch(addPost(form));
    setMessage("");
  };

  return (
    <>
      {showLoginModal && (
        <Modal isOpen={true} onClose={() => setShowLoginModal(false)}>
          <Login />
        </Modal>
      )}
      <div className="mb-8.5 mt-23">
        <Card
          innerChildren={
            <div>
              <div className="flex items-center justify-between p-2.5">
                <TextEditorOptions />
                <button className="p-3 bg-[#FF0000]/15 hover:bg-red-200 rounded-lg cursor-pointer">
                  <img src={trashIcon} />
                </button>
              </div>
              <div className="flex py-1 px-3.5 mb-3 items-start relative">
                <span ref={emojiAnchorRef} className="relative">
                  <img
                    src={smileIcon}
                    className="mt-[5px] mr-1.5 cursor-pointer"
                    alt="Pick emoji"
                    onClick={() => setShowEmojiPicker((v) => !v)}
                    tabIndex={0}
                    aria-label="Open emoji picker"
                  />
                  {showEmojiPicker && (
                    <div
                      className="absolute left-0 z-20 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-2 w-max animate-fade-in"
                      style={{ top: 30 }}
                    >
                      <div className="flex gap-2 justify-between">
                        {emojiList.map((emoji) => (
                          <button
                            key={emoji}
                            className="text-2xl p-1 hover:bg-gray-100 rounded-lg focus:outline-none cursor-pointer"
                            onClick={() => {
                              setCurrentEmoji(emoji);
                              setShowEmojiPicker(false);
                            }}
                            aria-label={`Insert emoji ${emoji}`}
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How are you feeling today?"
                  className="w-full resize-none border-none outline-none text-black/80 placeholder:text-black/40"
                  rows="3"
                />
              </div>
              <div className="border-b w-full border-[#D9D9D9]"></div>
              <div className="flex items-center justify-between py-1.5 px-2.5">
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="p-1.5 bg-black/6 rounded-[10px] cursor-pointer">
                    <img src={plusIcon} />
                  </span>
                  <span className="cursor-pointer">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 14.25C11.5714 14.25 15 12 15 8.25M9 14.25C6.42857 14.25 3 12 3 8.25M9 14.25V16.5M9 12C6.92893 12 5.25 10.3211 5.25 8.25V5.25C5.25 3.17893 6.92893 1.5 9 1.5C11.0711 1.5 12.75 3.17893 12.75 5.25V8.25C12.75 10.3211 11.0711 12 9 12Z"
                        stroke="black"
                        strokeOpacity="0.63"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="cursor-pointer">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 6.375C10.5 6.58211 10.3321 6.75 10.125 6.75C9.9179 6.75 9.75001 6.58211 9.75001 6.375M10.5 6.375C10.5 6.16789 10.3321 6 10.125 6C9.9179 6 9.75001 6.16789 9.75001 6.375M10.5 6.375L9.75001 6.375M14.25 11.2501L14.25 6.75007C14.7614 6.3665 15.0171 6.17471 15.2122 6.0998C16.0352 5.78367 16.952 6.24209 17.1929 7.09017C17.25 7.29113 17.25 7.61077 17.25 8.25004L17.25 9.75006C17.25 10.3893 17.25 10.709 17.1929 10.91C16.952 11.758 16.0352 12.2164 15.2122 11.9003C15.0171 11.8254 14.7614 11.6336 14.25 11.2501ZM7.5 15.75C5.87228 15.75 5.05842 15.75 4.3928 15.5623C2.71847 15.0901 1.40994 13.7815 0.937727 12.1072C0.750003 11.4416 0.750003 10.6277 0.750003 9C0.750003 7.37228 0.750003 6.55842 0.937727 5.8928C1.40994 4.21847 2.71847 2.90993 4.3928 2.43772C5.05842 2.25 5.87228 2.25 7.5 2.25C9.12773 2.25 9.94159 2.25 10.6072 2.43772C12.2815 2.90993 13.5901 4.21847 14.0623 5.8928C14.25 6.55842 14.25 7.37228 14.25 9C14.25 10.6277 14.25 11.4416 14.0623 12.1072C13.5901 13.7815 12.2815 15.0901 10.6072 15.5623C9.94159 15.75 9.12773 15.75 7.5 15.75Z"
                        stroke="black"
                        strokeOpacity="0.63"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <button className="cursor-pointer" onClick={handleSubmitPost}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_292)">
                      <path
                        d="M6.55196 11.25C6.22572 11.25 6.0626 11.25 5.91568 11.2036C5.78564 11.1626 5.66538 11.0954 5.56227 11.0061C5.44577 10.9053 5.36028 10.7664 5.1893 10.4886L4.33542 9.10099C2.1403 5.53393 1.04274 3.7504 1.26983 2.75441C1.46586 1.89469 2.10028 1.20182 2.93944 0.930999C3.91161 0.617244 5.78471 1.55379 9.5309 3.42689L19.5217 8.42228C21.8247 9.5738 22.9762 10.1496 23.3458 10.9287C23.6673 11.6067 23.6673 12.3933 23.3458 13.0713C22.9762 13.8504 21.8247 14.4262 19.5217 15.5777L9.5309 20.5731C5.78471 22.4462 3.91161 23.3827 2.93944 23.069C2.10028 22.7982 1.46586 22.1053 1.26983 21.2456C1.04274 20.2496 2.1403 18.466 4.33542 14.899L5.18929 13.5114C5.36027 13.2336 5.44576 13.0947 5.56226 12.9939C5.66537 12.9046 5.78563 12.8374 5.91566 12.7964C6.06259 12.75 6.22571 12.75 6.55194 12.75L11.25 12.75C11.6642 12.75 12 12.4142 12 12C12 11.5858 11.6642 11.25 11.25 11.25L6.55196 11.25Z"
                        fill="#5057EA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_292">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          }
          innerClassName="border border-black/13 shadow-md"
          outerClassName="p-2 bg-black/3"
        />
      </div>
    </>
  );
};
export default PostEditor;
