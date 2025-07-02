import React from "react";

interface Component {
  text: string;
  onClick?: () => void; // adding this question mark will make the fn optional to use
}
const Component: React.FC<Component> = (prop) => {
  return (
    <div>
      <button onClick={prop.onClick}>{prop.text}</button>
      <button>{prop.text}</button>
    </div>
  );
};

export default Component;
