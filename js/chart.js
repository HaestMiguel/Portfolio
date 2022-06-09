const BI = {
    labels: [
        'Data Visualisatie',
        'Data Engeneering',
        'Data Science',
        'Artificial intelligence'

    ],
    datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)'
        ]
    }]
};
const APP = {
    labels: [
        'HTML',
        'CSS',
        'Javascript',
        'Java',
        'PHP'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
        ]
    }]
};

// BI
// Config
const configbi = {
    type: 'polarArea',
    data: BI,
    options: {}
};

//Chart
const chartbi = new Chart(
    document.getElementById('BI'),
    configbi
);

//app
//Config
const configapp = {
    type: 'polarArea',
    data: APP,
    options: {}
};
//Chart
const chartapp = new Chart(
    document.getElementById('APP'),
    configapp
);


// Buttons
function showApp() {
    var x = document.getElementById("APP");
    var y = document.getElementById("BI")
    x.style.display = "block";
    y.style.display = "none"

  }
function showBI() {
    var x = document.getElementById("APP");
    var y = document.getElementById("BI")
    y.style.display = "block";
    x.style.display = "none"

}