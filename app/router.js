/**
 * Created by Antoine on 07/07/2016.
 */

var AppRouter = Backbone.Router.extend({

        minDate: new moment('11-02-2013', 'DD-MM-YYYY'),
        maxDate: new moment('31-12-2015', 'DD-MM-YYYY'),

        routes: {
            "*actions": "defaultRoute"
        },

        isValideDate: function (date) {
            var date = new moment(date, 'DD-MM-YYYY');
            return date.isValid() && date.isBefore(this.maxDate) && date.isAfter(this.minDate);
        },

        validateDate: function (date) {
            date = new moment(date, 'DD-MM-YYYY');
            if (date.isBefore(this.minDate)) {
                return this.minDate;
            } else if (date.isAfter(this.maxDate)) {
                return this.maxDate;
            } else {
                return date;
            }
        },

        defaultRoute: function (action) {
            var date;
            if (_.isNull(action)) {
                date = this.minDate;
            } else {
                date = this.validateDate(action);
            }
            var records = new Records();
            records.fetch({
                data: {'refine.date': date.format('YYYY-MM-DD')},
                error: function () {
                    $('#alert').css('display','')
                },
                success: function () {
                    $('#head-title').html('Qualité de l\'air à la station Franklin Roosevelt le ' + date.format('LL'));

                    var dataSetTemp = _.map(records.models, function (element) {
                        return element.get("temp");
                    });
                    var dataSetNo = _.map(records.models, function (element) {
                        return element.get("no");
                    });
                    var dataSetNo2 = _.map(records.models, function (element) {
                        return element.get("no2");
                    });
                    var dataSetCo2 = _.map(records.models, function (element) {
                        return element.get("co2");
                    });
                    var dataSetPm10 = _.map(records.models, function (element) {
                        return element.get("pm10");
                    });
                    var dataSetHumi = _.map(records.models, function (element) {
                        return element.get("humi");
                    });
                    var labelsSet = _.map(records.models, function (element) {
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
                                data: dataSetTemp
                            }
                        ]
                    };

                    new Chart(ctx, {
                        type: 'line',
                        data: data
                    });

                    // Qualité de l'air
                    ctx = $("#airChart");
                    data = {
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
                                data: dataSetPm10
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
                                data: dataSetNo
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
                                data: dataSetNo2
                            }
                        ]
                    };
                    new Chart(ctx, {
                        type: 'line',
                        data: data
                    });

                    ctx = $("#humiChart");
                    data = {
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
                                data: dataSetHumi
                            }
                        ]
                    };

                    new Chart(ctx, {
                        type: 'line',
                        data: data
                    });

                    ctx = $("#co2Chart");
                    data = {
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
                                data: dataSetCo2
                            }
                        ]
                    };

                    new Chart(ctx, {
                        type: 'line',
                        data: data
                    });
                }
            });
        }
    })
    ;