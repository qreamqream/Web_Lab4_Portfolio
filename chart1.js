
        // Data
        const data = {
          labels: ["ปีการศึกษา2562", "ปีการศึกษา2563", "ปีการศึกษา2564", "ปีการศึกษา2565"],
          datasets: [
            {
              label: "เกรดเฉลี่ย",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              data: [4.00, 4.00, 3.95, 3.98]
            }
          ]
        };
    
        // Configuration
        const config = {
          type: "bar",
          data: data,
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 4.00,
                title: {
                  display: true,
                  text: "เกรดเฉลี่ย"
                }
              },
              x: {
                title: {
                  display: true,
                  text: "ปีการศึกษา"
                }
              }
            }
          }
        };
    
        // Create chart
        const ctx = document.getElementById("myChart").getContext("2d");
        const myChart = new Chart(ctx, config);
      
        