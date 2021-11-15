import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { ContentRoute } from "./ContentRoute";
import PrivateRoute from "./PrivateRoute";
import ErrorUnAuthorized from "../pages/ErrorUnAuthorized";
import Home from "../pages/Home";
import TitleManage from "../modules/Title/pages/TitleManage";
import Test from "../pages/Test";
import { PERMISSIONS } from "../../Constant";
import EmployeeManage from "../modules/Employee/pages/EmployeeManage";
import AlertDemo from "../modules/_demo/pages/AlertDemo";
import FormDemo from "../modules/_demo/pages/formComponents/FormDemo";
import FormWithAutoComplete from "../modules/_demo/pages/formComponents/FormWithAutoComplete";
import FormWithCheckBox from "../modules/_demo/pages/formComponents/FormWithCheckBox";
import FormWithCheckboxGroup from "../modules/_demo/pages/formComponents/FormWithCheckboxGroup";
import FormWithDatePicker from "../modules/_demo/pages/formComponents/FormWithDatePicker";
import FormWithDateTimePicker from "../modules/_demo/pages/formComponents/FormWithDateTimePicker";
import FormWithDropdown from "../modules/_demo/pages/formComponents/FormWithDropdown";
import FormWithDropdownCascade from "../modules/_demo/pages/formComponents/FormWithDropdownCascade";
import FormWithRadioGroup from "../modules/_demo/pages/formComponents/FormWithRadioGroup";
import FormWithRating from "../modules/_demo/pages/formComponents/FormWithRating";
import FormWithSlider from "../modules/_demo/pages/formComponents/FormWithSlider";
import FormWithSwitch from "../modules/_demo/pages/formComponents/FormWithSwitch";
import FormWithTextMaskCardId from "../modules/_demo/pages/formComponents/FormWithTextMaskCardId";
import FormWithTextField from "../modules/_demo/pages/formComponents/FormWithTextField";
import FormWithTextNumber from "../modules/_demo/pages/formComponents/FormWithTextNumber";
import FormWithTimePicker from "../modules/_demo/pages/formComponents/FormWithTimePicker";
import FormWithUploader from "../modules/_demo/pages/formComponents/FormWithUploader";
import pdfGenerrate from "../modules/_demo/pages/PdfGenerateDemo";
import QRGenerateDemo from "../modules/_demo/pages/QRGenerateDemo";
import QRReaderDemo from "../modules/_demo/pages/QRReaderDemo";
import BarcodeGenerateDemo from "../modules/_demo/pages/BarcodeGenerateDemo";
import ChartDemo from "../modules/_demo/pages/ChartDemo";
import ChartDrillDownDemo from "../modules/_demo/pages/ChartDrillDownDemo";
import PrintComponent from "../modules/_demo/pages/PrintComponent";
import DatatableListDemo from "../modules/_demo/pages/DatatableListDemo";
import TabBasic from "../modules/_demo/pages/TabBasic";
import ReduxDemo from "../modules/_demo/pages/ReduxDemo";
import FormWithCustomDateBE from '../modules/_demo/pages/formComponents/FormWithCustomDateBE'

export default function BasePage(props) {
  return (
    <React.Fragment>
      <Switch>
        {/* <Redirect exact from="/" to="/home" /> */}
        <Route exact path="/errorUnAuthorized" component={ErrorUnAuthorized} />
        <ContentRoute exact title="home" path="/" component={Home} />
        <ContentRoute exact title="home" path="/home" component={Home} />
        <ContentRoute exact path="/test" component={Test} title="Test" />

                {/* Begin Demo */}

        <ContentRoute
          exact
          title="alert demo"
          path="/demo/alert"
          component={AlertDemo}
        />
        <ContentRoute
          exact
          title="form demo"
          path="/demo/formDemo"
          component={FormDemo}
        />
                <ContentRoute
          exact
          title="form demo"
          path="/demo/formWithCustomDateBE"
          component={FormWithCustomDateBE}
        />
        <ContentRoute
          exact
          title="form with autoComplete demo"
          path="/demo/formWithAutoComplete"
          component={FormWithAutoComplete}
        />
        <ContentRoute
          exact
          path="/demo/formWithCheckBox"
          component={FormWithCheckBox}
          title="FormWithCheckBox"
        />
        <ContentRoute
          exact
          path="/demo/formWithCheckboxGroup"
          component={FormWithCheckboxGroup}
          title="FormWithCheckboxGroup"
        />
        <ContentRoute
          exact
          path="/demo/formWithDatePicker"
          component={FormWithDatePicker}
          title="FormWithDatePicker"
        />
        <ContentRoute
          exact
          path="/demo/formWithDateTimePicker"
          component={FormWithDateTimePicker}
          title="FormWithDateTimePicker"
        />
        <ContentRoute
          exact
          path="/demo/formWithDropdown"
          component={FormWithDropdown}
          title="FormWithDropdown"
        />
        <ContentRoute
          exact
          path="/demo/formWithDropdownCascade"
          component={FormWithDropdownCascade}
          title="FormWithDropdownCascade"
        />
        <ContentRoute
          exact
          path="/demo/formWithRadioGroup"
          component={FormWithRadioGroup}
          title="FormWithRadioGroup"
        />
        <ContentRoute
          exact
          path="/demo/formWithRating"
          component={FormWithRating}
          title="FormWithRating"
        />
        <ContentRoute
          exact
          path="/demo/formWithSlider"
          component={FormWithSlider}
          title="FormWithSlider"
        />
        <ContentRoute
          exact
          path="/demo/formWithSwitch"
          component={FormWithSwitch}
          title="FormWithSwitch"
        />
        <ContentRoute
          exact
          path="/demo/formWithTextMaskCardId"
          component={FormWithTextMaskCardId}
          title="FormWithTextMaskCardId"
        />
        <ContentRoute
          exact
          path="/demo/formWithTextField"
          component={FormWithTextField}
          title="FormWithTextField"
        />
        <ContentRoute
          exact
          path="/demo/formWithTextNumber"
          component={FormWithTextNumber}
          title="FormWithTextNumber"
        />
        <ContentRoute
          exact
          path="/demo/formWithTimePicker"
          component={FormWithTimePicker}
          title="FormWithTimePicker"
        />
        <ContentRoute
          exact
          path="/demo/formWithUploader"
          component={FormWithUploader}
          title="FormWithUploader"
        />
        <ContentRoute
          exact
          path="/demo/reduxDemo"
          component={ReduxDemo}
          title="reduxDemo"
        />
        <ContentRoute
          exact
          path="/demo/pdfGenerrate"
          component={pdfGenerrate}
          title="pdfGenerrate"
        />
        <ContentRoute
          exact
          path="/demo/QRGenerateDemo"
          component={QRGenerateDemo}
          title="QRGenerateDemo"
        />
        <ContentRoute
          exact
          path="/demo/QRReaderDemo"
          component={QRReaderDemo}
          title="QRReaderDemo"
        />
        <ContentRoute
          exact
          path="/demo/BarcodeGenerateDemo"
          component={BarcodeGenerateDemo}
          title="BarcodeGenerateDemo"
        />
        <ContentRoute
          exact
          path="/demo/apexcharts"
          component={ChartDemo}
          title="ChartDemo"
        />
        <ContentRoute
          exact
          path="/demo/chartDrillDown"
          component={ChartDrillDownDemo}
          title="ChartDrillDownDemo"
        />
        <ContentRoute
          exact
          path="/demo/PrintComponent"
          component={PrintComponent}
          title="PrintComponent"
        />
        <ContentRoute
          exact
          path="/demo/datatableList"
          component={DatatableListDemo}
          title="DatatableListDemo"
        />
        <ContentRoute
          exact
          path="/demo/tabBasic"
          component={TabBasic}
          title="Tab Basic"
        />
        {/* End Demo part สามารถ comment ได้ */}

        <PrivateRoute
          exact
          path="/title"
          permissions={[]}
          component={TitleManage}
          title="Manage Title"
        />

        <PrivateRoute
          exact
          path="/permissionTest"
          permissions={[PERMISSIONS.employee_delete]}
          component={Test}
          title="Test Permission"
        />

        <PrivateRoute
          exact
          path="/employeeManage"
          permissions={[PERMISSIONS.employee_read]}
          component={EmployeeManage}
          title="Employee Manage"
        />

        {/* nothing match - redirect to error */}
        <Redirect to="/error404" />
      </Switch>
    </React.Fragment>
  );
}
