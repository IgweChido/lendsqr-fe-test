import React, { useEffect } from "react";

// import React from "react";

const ClickOutsideRef = (
  ref: React.MutableRefObject<any | null>,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
        console.log("click outside");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default ClickOutsideRef;
