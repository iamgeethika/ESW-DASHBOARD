/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

function Get(yourUrl) {
  const Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}
const obj = JSON.parse(
  Get(
    "https://api.thingspeak.com/channels/1916314/feeds.json?api_key=RXVM9CKGE824QFCQ&results=1"
  )
);
const obj1 = JSON.parse(
  Get(
    "https://api.thingspeak.com/channels/1916314/feeds.json?api_key=RXVM9CKGE824QFCQ&results=320&average=240"
  )
);
function Dashboard() {
  const { task1, task2, task3, task4, task5, task6 } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="co2"
                title="CO2"
                count={obj.feeds[0].field1}
                percentage={{
                  color: "disabled",
                  label: "AVG VALUE = ",
                  amount: obj1.feeds[0].field1,
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="thermostat"
                title="TEMPERATURE"
                count={obj.feeds[0].field3}
                percentage={{
                  color: "disabled",
                  label: "AVG VALUE = ",
                  amount: obj1.feeds[0].field3,
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="water_drop"
                title="HUMIDITY"
                count={obj.feeds[0].field4}
                percentage={{
                  color: "disabled",
                  label: "AVG VALUE = ",
                  amount: obj1.feeds[0].field4,
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="local_gas_station"
                title="VOC"
                count={obj.feeds[0].field2}
                percentage={{
                  color: "disabled",
                  label: "AVG VALUE = ",
                  amount: obj1.feeds[0].field2,
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="lens_blur"
                title="PM 2.5"
                count={obj.feeds[0].field5}
                percentage={{
                  color: "disabled",
                  label: "AVG VALUE = ",
                  amount: obj1.feeds[0].field5,
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="factory"
                title="PM 10"
                count={obj.feeds[0].field6}
                percentage={{
                  color: "disabled",
                  label: "AVG VALUE = ",
                  amount: obj1.feeds[0].field6,
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="CO2"
                  date={obj.feeds[0].created_at}
                  chart={task1}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="VOC"
                  date={obj.feeds[0].created_at}
                  chart={task2}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="TEMPERATURE"
                  date={obj.feeds[0].created_at}
                  chart={task3}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="HUMIDITY"
                  date={obj.feeds[0].created_at}
                  chart={task4}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="PM 2.5"
                  date={obj.feeds[0].created_at}
                  chart={task5}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="PM 10"
                  date={obj.feeds[0].created_at}
                  chart={task6}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
