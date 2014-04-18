app.filter('euro', function () {
    return function (text) {
        var t = "";
        if (text !== undefined && text !== null) {
            text = text.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
            t = "<sup>&euro;</sup>" + text;
        }
        return t;
    };
});