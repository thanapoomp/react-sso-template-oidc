/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-imports */

import React from "react";
import { Grid,Typography } from "@material-ui/core";
import PropTypes from "prop-types";

require("dayjs/locale/th");
var dayjs = require("dayjs");
dayjs.locale("th");

function ColumnDateTime(props) {
  return (
    <Grid
      style={{ padding: 0, margin: 0 }}
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      {props.value && <Typography>{dayjs(props.value).format(props.format)}</Typography>}
      {!props.value && <Typography>{props.nullValueText}</Typography>}
    </Grid>
  );
}

ColumnDateTime.propTypes = {
  value: PropTypes.string,
  format: PropTypes.string,
  nullValueText: PropTypes.string
};

ColumnDateTime.defaultProps = {
  value: null,
  format: "DD/MM/YYYY HH:mm:ss",
  nullValueText: ""
};

export default ColumnDateTime;
