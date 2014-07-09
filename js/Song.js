define([], function () {

    var reset = function(){

      // Always clean an object

    };

    var persistFavoriteStatus = function (value) {
        // something complicated
        throw new Error("not yet implemented");
    };

    return {

        persistFavoriteStatus: persistFavoriteStatus,
        reset: reset

    };

});