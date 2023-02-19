// import { Box, Grid } from '@mui/material'
import React from "react";
import Base from "../Base/Base";
import "./Four.css";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
export default function Four() {
  return (
    <Base>
      <div className="four-not-four">
        <h1 className="error">404</h1>
        <h3>page Not Found</h3>

        <h4>It looks like you found a glitch in the matrix...</h4>
        <label className="hover-underline-animation">← Back to Dashboard</label>
      </div>
    </Base>
  );
}
