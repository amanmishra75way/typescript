import React, { useState } from "react";

interface Component {
  // this is way of multiple type
  text: string | number | boolean;
  onClick?: () => void; // adding this question mark will make the fn optional to use
}

const Component: React.FC<Component> = (prop) => {
  const [num, setnum] = useState<number>(0);
  return (
    <div>
      {num}
      <button onClick={() => setnum(num + 1)}>{prop.text}</button>
    </div>
  );
};

export default Component;
