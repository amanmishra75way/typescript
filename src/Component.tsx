import React from "react";

interface Component {
  text: string;
  onClick: () => void;
}
const Component: React.FC<Component> = (prop) => {
  return (
    <div>
      <button onClick={prop.onClick}>{prop.text}</button>
    </div>
  );
};

export default Component;
