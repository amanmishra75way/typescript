import React from "react";

interface Component {
  text: string;
}
const Component: React.FC<Component> = (prop) => {
  return (
    <div>
      <button>{prop.text}</button>
    </div>
  );
};

export default Component;
