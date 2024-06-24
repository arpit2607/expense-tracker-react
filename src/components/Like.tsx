import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [fillHeart, setFillHeart] = useState(false);

  const toggle = () => {
    setFillHeart(!fillHeart);
    onClick();
  };

  if (fillHeart) return <FcLike color="red" size={20} onClick={toggle} />;
  return <FcLikePlaceholder size={20} onClick={toggle} />;
};

export default Like;
