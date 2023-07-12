import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const handler = (e) => {
    setValue(e.target.value);
  };
  const init = () => {
    setValue("");
  };
  return [value, handler, init];
};

export default useInput;
