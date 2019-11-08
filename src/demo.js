import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    marginTop: "16px"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
      padding: "20px"
    }}
    {...props}
  />
));

// const StyledMenuItem = withStyles(theme => ({
//   root: {
//     width: '256px',
//     "&:focus": {
//       backgroundColor: theme.palette.primary.main,
//       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
//         color: theme.palette.common.white
//       }
//     }

//   }
// }))(MenuItem);

export default function CustomizedMenus({ iconComponent, ...props }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuIcon = React.cloneElement(iconComponent, { onClick: handleClick });

  return (
    <div>
      {menuIcon}
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.children && props.children}
        {/* <StyledMenuItem>
          <ListItemText>Bussiness</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText>Inbox</ListItemText>
        </StyledMenuItem> */}
      </StyledMenu>
    </div>
  );
}
