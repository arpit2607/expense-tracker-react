import React, { useState } from "react";

interface Props {
  children: string;
  maxch?: number;
}

const ExpandText = ({ children, maxch = 100 }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (children.length <= maxch) return <p>{children}</p>;

  const text = expanded ? children : children.substring(0, maxch);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandText;
