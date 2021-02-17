import React from "react";
import "./Loader.css";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loader() {
  return (
    <div className="loader__container">
      <CircularProgress />
    </div>
  );
}

export default Loader;
