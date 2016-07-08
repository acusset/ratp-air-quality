/**
 * Created by Antoine on 05/07/2016.
 */
window.Records = Backbone.Collection.extend({

    model: Record,

    url: function () {
        if(window.location.protocol != 'https:') {
            return 'http://data.ratp.fr/api/records/1.0/search/?dataset=qualite-de-lair-mesuree-dans-la-station-franklin-d-roosevelt&rows=24&facet=date';
        } else {
            return 'https://data.ratp.fr/api/records/1.0/search/?dataset=qualite-de-lair-mesuree-dans-la-station-franklin-d-roosevelt&rows=24&facet=date';
        }
    },

    parse: function (response) {
        // Parse and cast response
        return _.map(response.records, function (model) {
            return new Record(model);
        });
    },

    comparator: function (a, b) {
        a = a.get("datetime");
        b = b.get("datetime");
        if (a.isBefore(b)) {
            return -1
        } else if (b.isBefore(a)) {
            return 1
        } else {
            return 0
        }
    },
});
