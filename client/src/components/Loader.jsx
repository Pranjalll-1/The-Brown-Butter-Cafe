import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = ({
  color = "#fff",
  size = 15,
  loading = true,
  className = "",
}) => (
  <div className={`flex justify-center items-center ${className}`}>
    <PropagateLoader color={color} size={size} loading={loading} />
  </div>
);

export default Loader;
