import React from "react";
import LeftSection from "../LeftSection/LeftSection";
import RightSection from "../RightSection/RightSection";
const MainBody = () => {
  const [statuses, setStatuses] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [pointer, setPointer] = React.useState(0);

  const triggerSetStatuses = (statusCode) => {
    if (pointer > 8) {
      alert("No More Elements Can be added");
    } else {
      setStatuses((prev) => {
        prev[pointer] = statusCode;
        return prev;
      });
      setPointer(pointer + 1);
    }
  };

  return (
    <>
      <LeftSection onOptionSelect={triggerSetStatuses} />
      <RightSection statuses={statuses} />
    </>
  );
};

export default MainBody;
