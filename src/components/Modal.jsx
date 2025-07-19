// const Modal = ({ message, onClose }) => {
//     if (!message) return null;
//     return (
//       <div className="modal-overlay">
//         <div className="modal-content">
//           <p className="modal-message">{message}</p>
//           <button
//             onClick={onClose}
//             className="modal-close-btn"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   };

//   export default Modal;


import React, { useState, useEffect } from "react";
import axios from "axios";

// Moved the Modal component directly into this file to resolve import issues.
// This is a common pattern for smaller, tightly coupled components.
const Modal = ({ message, onClose }) => {
    if (!message) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p className="modal-message">{message}</p>
                <button
                    onClick={onClose}
                    className="modal-close-btn"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;