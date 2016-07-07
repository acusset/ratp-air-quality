/**
 * Created by Antoine on 05/07/2016.
 */
window.Records = Backbone.Collection.extend({

    date: function () {
        // Selection du jour (année/mois/jour)
        return '2015/12/31'.replace(/\//g, '%2F');
    },

    model: Record,

    url: function () {
        return 'http://data.ratp.fr/api/records/1.0/search/?dataset=qualite-de-lair-mesuree-dans-la-station-franklin-d-roosevelt&rows=24&facet=date&refine.date=' + this.date();
    },

    parse: function (response) {
        //api returns objects in the content attribute of response, need to override parse and cast
        return _.map(response.records, function (model, id) {
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
