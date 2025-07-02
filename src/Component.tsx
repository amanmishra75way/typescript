import React, { useState } from "react";

interface Component {
  // this is way of multiple type
  text: string | number | boolean;
  onClick?: () => void; // adding this question mark will make the fn optional to use
}

const Component: React.FC<Component> = (prop) => {
  const [name, setname] = useState<string>("");

  const changehandler = (e) => {
    setname(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={(e) => changehandler(e)} value={name} />
      {name}
    </div>
  );
};

export default Component;
