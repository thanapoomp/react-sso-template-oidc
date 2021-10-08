import React from "react";
import { Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

function Home() {
  return (
    <div>
      <Typography>
        Home sweet Home สวัสดี <Icon>home</Icon>${process.env.PUBLIC_URL}
      </Typography>
    </div>
  );
}

export default Home;
