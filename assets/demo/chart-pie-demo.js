// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Instagram", "Google Ads", "YouTube"],
    datasets: [{
      data: [500, 2500, 1500],
      backgroundColor: ['#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// Pie Chart Example
var ctx1 = document.getElementById("myPieChart2");
var myPieChart1 = new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: ["Harvesting Freedom: A New Film About Agricultural Change in the US", "How Industrial Change is Affecting Our Farmers"],
    datasets: [{
      data: [3000, 2012],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// Pie Chart Example
var ctx2 = document.getElementById("myPieChart3");
var myPieChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ["It's Time to Vote, UK!", "Laugh and Vote: A New Comedic Twist on Politics"],
    datasets: [{
      data: [3000, 2012],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});


// Pie Chart Example
var ctx = document.getElementById("myPieChart3");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Google Ads", "Facebook", "Instagram", "Twitter (X)"],
    datasets: [{
      data: [3500, 4500, 1300, 700],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});