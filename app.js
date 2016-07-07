/**
 * Created by Antoine on 05/07/2016.
 */

$(document).ready(function () {

    moment.locale('fr');
    var records = new Records();
    records.fetch({
        success: function () {
            var dataSetTemp = _.map(records.models, function (element, index, list) {
                return element.get("temp");
            });

            var dataSetNo = _.map(records.models, function (element, index, list) {
                return element.get("no");
            });
            var dataSetNo2 = _.map(records.models, function (element, index, list) {
                return element.get("no2");
            });
            var dataSetCo2 = _.map(records.models, function (element, index, list) {
                return element.get("co2");
            });
            var dataSetPm10 = _.map(records.models, function (element, index, list) {
                return element.get("pm10");
            });

            var dataSetHumi = _.map(records.models, function (element, index, list) {
                return element.get("humi");
            });

            var labelsSet = _.map(records.models, function (element, index, list) {
                return element.get("datetime").format('H:mm');
            });

            var ctx = $("#tempChart");
            var data = {
                labels: labelsSet,
                datasets: [
                    {
                        label: "Température",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: dataSetTemp,
                    }
                ]
            };

            var myTempChart = new Chart(ctx, {
                type: 'line',
                data: data
            });

            // Qualité de l'air
            var ctx = $("#airChart");
            var data = {
                labels: labelsSet,
                datasets: [
                    {
                        label: "Particules (PM10)",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "rgba(126,87,194,0.4)",
                        borderColor: "rgba(126,87,194,1)",
                        pointBorderColor: "rgba(126,87,194,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(126,87,194,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: dataSetPm10,
                    },
                    {
                        label: "NO",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "rgba(33,150,243,0.4)",
                        borderColor: "rgba(33,150,243,1)",
                        pointBorderColor: "rgba(33,150,243,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(33,150,243,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: dataSetNo,
                    },
                    {
                        label: "NO2",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "rgba(255,202,40,0.4)",
                        borderColor: "rgba(255,202,40,1)",
                        pointBorderColor: "rgba(255,202,40,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255,202,40,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: dataSetNo2,
                    },
                ]
            };
            var myTempChart = new Chart(ctx, {
                type: 'line',
                data: data
            });

            var ctx = $("#humiChart");
            var data = {
                labels: labelsSet,
                datasets: [
                    {
                        label: "Humidité (%)",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "rgba(244,67,54,0.4)",
                        borderColor: "rgba(244,67,54,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(244,67,54,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(244,67,54,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: dataSetHumi,
                    }
                ]
            };

            var myTempChart = new Chart(ctx, {
                type: 'line',
                data: data
            });

            var ctx = $("#co2Chart");
            var data = {
                labels: labelsSet,
                datasets: [
                    {
                        label: "CO2",
                        fill: true,
                        lineTension: 0.2,
                        backgroundColor: "rgba(255,152,0,0.4)",
                        borderColor: "rgba(255,152,0,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(255,152,0,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255,152,0,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: dataSetCo2,
                    }
                ]
            };

            var myTempChart = new Chart(ctx, {
                type: 'line',
                data: data
            });

        },
    });




    //http://data.ratp.fr/api/records/1.0/search/?dataset=qualite-de-lair-mesuree-dans-la-station-franklin-d-roosevelt&rows=20&sort=-date&facet=date&refine.date=2015

    // $.getJSON('http://data.ratp.fr/api/records/1.0/search/?dataset=qualite-de-lair-mesuree-dans-la-station-chatelet',
    //     function (data) {
    //         console.log(data);
    //     }
    // );

});