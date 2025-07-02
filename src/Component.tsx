import React from "react";

interface Component {
  text: string;
  onClick?: () => void; // adding this question mark will make the fn optional to use
}
//creating our own type
type prop = { text: string; num: number };

const Component: React.FC<prop> = (prop) => {
  return (
    <div>
      {/* <button onClick={prop.onClick}>{prop.text}</button> */}
      <button>{prop.text}</button>
    </div>
  );
};

export default Component;
