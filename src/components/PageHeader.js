import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
  },
  pageDescription: {
    paddingLeft: theme.spacing(4),
    opacity: "0.6",
  },
}));

export default function PageHeader(props) {
  const classes = useStyle();

  const { title, subtitle, icon } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div>
          <Typography
            className={classes.pageTitle}
            variant="h6"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            className={classes.pageDescription}
            component="div"
          >
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
