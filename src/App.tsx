// import React from "react";
import "./App.css";
import SalesData from "./json/sales.json";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ApexCharts from "react-apexcharts";
import { Chart } from "react-google-charts";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import { Container, Paper, Typography } from "@mui/material";
// import { LineChart as MuiLineChart, Line as MuiLine, XAxis as MuiXAxis, YAxis as MuiYAxis, Tooltip as MuiTooltip, Legend as MuiLegend, LabelList } from "@mui/charts";
import Victory from 'victory';
import Recharts2 from 'react-chartjs-2'
import Recharts from  'recharts'
import Visx from 'visx'

// pipeline/ horizontal and vertical funnel
function App() {
  const highchartsOptions = {
    title: {
      text: "Highcharts Sales Data",
    },
    series: [
      {
        name: "Sales",
        data: SalesData.map((item) => item.sales),
      },
    ],
    xAxis: {
      categories: SalesData.map((item) => item.month),
    },
  };

  const apexOptions = {
    chart: {
      id: "apex-sales-chart",
      background: "#fff", // Set the background color to white
    },
    xaxis: {
      categories: SalesData.map((item) => item.month),
      borderColor: "#000",
    },
    yaxis: {
      title: {
        text: "Sales",
      },
    },
    theme: {
      palette: 'palette1' // up to palette10
    }
  };

  const googleChartOptions = {
    chartType: "LineChart",
    data: [
      ["Month", "Sales"],
      ...SalesData.map((item) => [item.month, item.sales]),
    ],
    options: {
      title: "Google Chart Sales Data",
      hAxis: { title: "Month" },
      vAxis: { title: "Sales" },
    },
  };
  
  const victoryOptions = {
    keys: ["sales"],
  };

  return (
    <div className="App">
      <div className="highcharts-container">
        <HighchartsReact highcharts={Highcharts} options={highchartsOptions} />
      </div>
      <br />
      <div className="apexcharts-container">
        <ApexCharts
          options={apexOptions}
          series={[
            { name: "Sales", data: SalesData.map((item) => item.sales) },
          ]}
          type="line"
          height={350}
        />
      </div>
      <br />
      <div className="google-charts-container">
        <Chart
          chartType={googleChartOptions.chartType}
          data={googleChartOptions.data}
          options={googleChartOptions.options}
          width={"100%"}
          height={"400px"}
        />
      </div>
      <br />
      {/* <Container maxWidth="md">
        <Paper elevation={3} className="mui-charts-container">
          <Typography variant="h5" component="h1" align="center">
            Material-UI Chart
          </Typography>
          <MuiLineChart
            data={SalesData}
            margin={{ top: 16, right: 16, bottom: 16, left: 24 }}
          >
            <MuiXAxis dataKey="month" />
            <MuiYAxis />
            <MuiTooltip />
            <MuiLegend />
            <MuiLine type="monotone" dataKey="sales" stroke="#8884d8" dot={<CustomDot />} activeDot={{ r: 8 }} />
            <LabelList content={CustomLabel} />
          </MuiLineChart>
        </Paper>
      </Container> */}
    </div>
  );
}

export default App;
