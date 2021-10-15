import React from "react";
import { Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

function Home() {
  return (
    <div>
      <Typography>
        Home sweet Home สวัสดี <Icon>home</Icon>${process.env.PUBLIC_URL}
      </Typography>
      <iframe
        title="dashBoard"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=cff4467e-f1f0-430b-b352-c4d285b1a93d&autoAuth=true&ctid=2b5aa58e-043c-4caf-99ad-eaada2ef7def&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1iLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default Home;
