// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart1");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Aug 11", "Aug 12", "Aug 13", "Aug 14", "Aug 15", "Aug 16", "Aug 17", "Aug 18", "Aug 19", "Aug 20", "Aug 21", "Aug 22", "Aug 23"],
    datasets: [
      {
      label: "Organic",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
    },
    {
      label: "Social",  // New label for the second line
      lineTension: 0.3,
      backgroundColor: "rgba(92,184,92,0.2)",  // Change the color for differentiation
      borderColor: "rgba(92,184,92,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(92,184,92,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(92,184,92,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [8000, 29100, 20000, 15000, 20000, 24000, 29000, 31000, 27000, 23000, 31000, 30000, 35000],  // New data points
    },
    {
      label: "Paid",  // New label for the second line
      lineTension: 0.3,
      backgroundColor: "rgba(184,92,92,0.2)",  // Change the color for differentiation
      borderColor: "rgba(184,92,92,0.2)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(184,92,92,0.2)",
      pointBorderColor: "rgba(184,92,92,0.2)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(184,92,92,0.2)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [5000, 22300, 24400, 12000, 25400, 10000, 12000, 32100, 26700, 25300, 31300, 25000, 18000],  // New data points
    },
    {
      label: "Email",  // New label for the second line
      lineTension: 0.3,
      backgroundColor: "rgba(184,92,184,0.2)",  // Change the color for differentiation
      borderColor: "rgba(184,92,184,0.2)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(184,92,184,0.2)",
      pointBorderColor: "rgba(184,92,184,0.2)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(184,92,92,0.2)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [5000, 2100, 2000, 9000, 12000, 16000, 12300, 32000, 26000, 25100, 21300, 35000, 28000],  // New data points
    }
    ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});

// Area Chart Example
var ctx = document.getElementById("harvesting_freedom_social_area_chart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Aug 11", "Aug 12", "Aug 13", "Aug 14", "Aug 15", "Aug 16", "Aug 17", "Aug 18", "Aug 19", "Aug 20", "Aug 21", "Aug 22", "Aug 23"],
    datasets: [
      {
      label: "Google Ads",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
    },
    {
      label: "YouTube",  // New label for the second line
      lineTension: 0.3,
      backgroundColor: "rgba(92,184,92,0.2)",  // Change the color for differentiation
      borderColor: "rgba(92,184,92,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(92,184,92,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(92,184,92,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [8000, 29100, 20000, 15000, 20000, 24000, 29000, 31000, 27000, 23000, 31000, 30000, 35000],  // New data points
    },
    {
      label: "Facebook",  // New label for the second line
      lineTension: 0.3,
      backgroundColor: "rgba(184,92,92,0.2)",  // Change the color for differentiation
      borderColor: "rgba(184,92,92,0.2)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(184,92,92,0.2)",
      pointBorderColor: "rgba(184,92,92,0.2)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(184,92,92,0.2)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [5000, 22300, 24400, 12000, 25400, 10000, 12000, 32100, 26700, 25300, 31300, 25000, 18000],  // New data points
    },
    {
      label: "Instagram",  // New label for the second line
      lineTension: 0.3,
      backgroundColor: "rgba(184,92,184,0.2)",  // Change the color for differentiation
      borderColor: "rgba(184,92,184,0.2)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(184,92,184,0.2)",
      pointBorderColor: "rgba(184,92,184,0.2)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(184,92,92,0.2)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [5000, 2100, 2000, 9000, 12000, 16000, 12300, 32000, 26000, 25100, 21300, 35000, 28000],  // New data points
    }
    ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});

// Area Chart Example
var ctx = document.getElementById("myAreaChart2");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Aug 11", "Aug 12", "Aug 13", "Aug 14", "Aug 15", "Aug 16", "Aug 17", "Aug 18", "Aug 19", "Aug 20", "Aug 21", "Aug 22", "Aug 23"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

// Area Chart Example
var ctx = document.getElementById("social_media_campaigns_harvesting_freedom");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
    datasets: [
      {
        label: "Instagram",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
      },
      {
        label: "Twitter",  // New label for the second line
        lineTension: 0.3,
        backgroundColor: "rgba(92,184,92,0.2)",  // Change the color for differentiation
        borderColor: "rgba(92,184,92,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(92,184,92,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(92,184,92,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [8000, 29100, 20000, 15000, 20000, 24000, 29000, 31000, 27000, 23000, 31000, 30000, 35000],  // New data points
      },
      {
        label: "YouTube",  // New label for the second line
        lineTension: 0.3,
        backgroundColor: "rgba(184,92,92,0.2)",  // Change the color for differentiation
        borderColor: "rgba(184,92,92,0.2)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(184,92,92,0.2)",
        pointBorderColor: "rgba(184,92,92,0.2)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(184,92,92,0.2)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [5000, 22300, 24400, 12000, 25400, 10000, 12000, 32100, 26700, 25300, 31300, 25000, 18000],  // New data points
      }
    ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true  // Display the legend to differentiate the lines
    }
  }
});

// Area Chart Example
var ctx = document.getElementById("social_media_campaigns_harvesting_freedom2");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
    datasets: [
      {
        label: "Instagram",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
      },
      {
        label: "Twitter",  // New label for the second line
        lineTension: 0.3,
        backgroundColor: "rgba(92,184,92,0.2)",  // Change the color for differentiation
        borderColor: "rgba(92,184,92,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(92,184,92,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(92,184,92,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [8000, 29100, 20000, 15000, 20000, 24000, 29000, 31000, 27000, 23000, 31000, 30000, 35000],  // New data points
      },
      {
        label: "YouTube",  // New label for the second line
        lineTension: 0.3,
        backgroundColor: "rgba(184,92,92,0.2)",  // Change the color for differentiation
        borderColor: "rgba(184,92,92,0.2)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(184,92,92,0.2)",
        pointBorderColor: "rgba(184,92,92,0.2)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(184,92,92,0.2)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [5000, 22300, 24400, 12000, 25400, 10000, 12000, 32100, 26700, 25300, 31300, 25000, 18000],  // New data points
      }
    ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true  // Display the legend to differentiate the lines
    }
  }
});

