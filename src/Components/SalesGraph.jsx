import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function SalesGraph({ update }) {
  const [revenueData, setRevenueData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://khatsauthentication.alwaysdata.net/khats/getRevenue', {
          headers: {
            authorization: JSON.parse(localStorage.getItem('token'))
          }
        });
        console.log('got the revenue Data');
        setRevenueData(response.data.data);
      } catch (err) {
        console.log(err.response && err.response.data.error ? err.response.data.error : 'Failed to get the revenue data');
      }
    };

    fetchData();
  }, [update]);

  if (!revenueData) return (
    <div style={{ width: '100%', height:250, border: '1px solid black' }}></div>
  );
  
  return (
    <Line
      data={{
        labels: revenueData.map((data) => new Date(data.date  ).toLocaleDateString()),
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
            text: "Daily Revenue & Cost",
          },
        },
      }}
    />
  )
}