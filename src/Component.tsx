import React, { useState } from "react";

interface Component {
  // this is way of multiple type
  text: string | number | boolean;
  onClick?: () => void; // adding this question mark will make the fn optional to use
}

interface data {
  name: string;
  price: number;
}
const Component: React.FC<Component> = (prop) => {
  const [num, setnum] = useState<number>(0);
  const [pdata, setPdata] = useState<data>({
    name: "Shirt",
    price: 500,
  });
  return (
    <div>
      {num}
      <button onClick={() => setnum(num + 1)}>{prop.text}</button>
    </div>
  );
};

export default Component;
