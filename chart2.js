// Data
const pieChartData = {
    labels: ["นอน", "กินข้าว", "เรียน", "พักผ่อน"],
    datasets: [
      {
        data: [8, 3, 10, 3],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
      }
    ]
  };

  // Configuration
  const pieChartConfig = {
    type: "pie",
    data: pieChartData,
    options: {
      plugins: {
        legend: {
          display: true,
          position: "bottom"
        },
        title: {
          display: true,
          text: "กิจวัตรประจำวัน (หน่วยเป็น ชั่วโมง)"
        }
      }
    }
  };

  // Create the new pie chart and assign it to the myChart2 variable
  const ctx2 = document.getElementById("myChart2").getContext("2d");
  const myChart2 = new Chart(ctx2, pieChartConfig);