import React from "react";
import ReactDOM from "react-dom";
import CustomizedMenus from "./demo";
import ImageAvatar from "./ImageAvatar";

function App() {
  return (
    <div>
      <CustomizedMenus>
        <ImageAvatar size="smallAvatar" userName="AB" />
      </CustomizedMenus>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
