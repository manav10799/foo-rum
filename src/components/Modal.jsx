import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };

  // Clone child to pass onClose to Login if it accepts it
  const childrenWithOnClose = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onClose });
    }
    return child;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={handleOverlayClick}
    >
      {childrenWithOnClose}
    </div>
  );
};

export default Modal;
