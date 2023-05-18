import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

export default function AdoptButton() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab variant="extended" color="primary" aria-label="add">
        ADOPT NOW
      </Fab>
    </Box>
  );
}
