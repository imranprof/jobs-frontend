import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";

export default function PortfolioPage() {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary" className={classes.root}>
      Hello World
    </Button>
  );
}
