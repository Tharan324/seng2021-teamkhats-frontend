import { Chart as ChartJS, defaults } from "chart.js/auto";
import React from "react";
import { Line } from "react-chartjs-2";
import revenueData from "../SalesData/data";
import NavbarInside from "./NavbarInside";
import SalesTable from "./SalesTable";

const Sales = ({ token, setToken }) => {
  console.log(ChartJS, defaults)
  return (
    <>
      <NavbarInside token={token} setToken={setToken} />
      <div className="dataCard-revenueCard">
        <p className="graph-heading">Total Revenue</p>
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              }
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.2,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
        <SalesTable className="sales-table" />
      </div>
    </>
  )
}

export default Sales;