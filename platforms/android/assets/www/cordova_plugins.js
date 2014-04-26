cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/pl.ug.ash/www/Ash.js",
        "id": "pl.ug.ash.Ash",
        "clobbers": [
            "Ash"
        ]
    },
    {
        "file": "plugins/pl.ug.ash/www/promise.js",
        "id": "pl.ug.ash.AshPromise",
        "clobbers": [
            "AshPromise"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "pl.ug.ash": "0.1"
}
// BOTTOM OF METADATA
});