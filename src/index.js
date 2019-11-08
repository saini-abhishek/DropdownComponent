import React from "react";
import ReactDOM from "react-dom";
import CustomizedMenus from "./demo";
import ImageAvatar from "./ImageAvatar";
import MenuItem from "@material-ui/core/MenuItem";

function App() {
  const IconComponent = <ImageAvatar size="smallAvatar" userName="AB" />;

  return (
    <div>
      <CustomizedMenus iconComponent={IconComponent}>
        <MenuItem onClick={null}>Profile</MenuItem>
        <MenuItem onClick={null}>My account</MenuItem>
        <MenuItem onClick={null}>Logout</MenuItem>
      </CustomizedMenus>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
