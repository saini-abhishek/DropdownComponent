import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "28px"
  },
  smallAvatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  circleAvatar: {
    background: "linear-gradient(90deg, #D500F9 0%, #FF1744 100%)"
  },
  squareAvatar: {
    backgroundColor: "#304FFE"
  },
  avatarPointer: {
    cursor: "pointer"
  }
});

export default function ImageAvatar({
  size,
  variant,
  imageUrl,
  userName,
  onClick,
  ...props
}) {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        className={`${classes.root} ${classes[size]} 
                ${
                  variant === "rounded"
                    ? classes.squareAvatar
                    : classes.circleAvatar
                }
                ${onClick ? classes.avatarPointer : null}
                `}
        alt=""
        src={imageUrl}
        onClick={onClick}
        variant={variant}
      >
        {userName}
      </Avatar>
    </Grid>
  );
}
