import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Container(props) {
  return <div className="container mt-5 mb-5">{props.children}</div>;
}
