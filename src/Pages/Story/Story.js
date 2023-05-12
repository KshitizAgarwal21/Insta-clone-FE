import React from "react";
import { useLocation } from "react-router-dom";
export default function Story() {
  const location = useLocation();
  return (
    <div>
      <img src={location.state.storyid} />
    </div>
  );
}
