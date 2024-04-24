import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import SalesTable from "./SalesTable";

import revenueData from "../SalesData/data.json"

const Sales = () => {
    return (
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
        <SalesTable className="sales-table"/>
      </div>
    )
}

export default Sales;