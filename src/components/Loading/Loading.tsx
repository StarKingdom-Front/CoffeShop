import React from 'react'


import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

export default function Loading() {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">

            <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
    </div>
  )
}
