/**
 * Created by Antoine on 05/07/2016.
 */

var Record = Backbone.Model.extend({

    default: {
        'datasetid': "qualite-de-lair-mesuree-dans-la-station-chatelet",
        'recordid': "",
        "fields": {
            "co2": "",
            "temp": "",
            "pm10": "",
            "no": "",
            "humi": "",
            "date": "",
            "heure": "",
            "no2": ""
        },
        "record_timestamp": "",
    },

    initialize: function (data) {
        var datetime = new moment(this.get("fields")["date"] + " " + this.get("fields")["heure"], 'YYYY-MM-DD HH:mm');
        this.set("datetime", datetime);
        this.set("temp", parseFloat(this.get("fields")["temp"].replace(",", ".")));
        this.set("co2", parseInt(this.get("fields")["co2"]));
        this.set("no", parseInt(this.get("fields")["no"]));
        this.set("no2", parseInt(this.get("fields")["no2"]));
        this.set("humi", parseFloat(this.get("fields")["humi"].replace(",", ".")));
        this.set("pm10", parseInt(this.get("fields")["pm10"]));
    },

    idAttribute: 'recordid',

});