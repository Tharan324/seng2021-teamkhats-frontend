import React from "react";

import NavbarInside from "./NavbarInside";

const Sales = ({token, setToken}) => {
  return (
    <>
      <NavbarInside token={token} setToken={setToken} />
      {/* <div className="dataCard-revenueCard">
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
      </div> */}
    </>
  )
}

export default Sales;