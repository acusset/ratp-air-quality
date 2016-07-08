/**
 * Created by Antoine on 05/07/2016.
 */

$(document).ready(function () {
    moment.locale('fr');
    new AppRouter;
    Backbone.history.start();
});