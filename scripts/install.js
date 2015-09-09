var fs = require('fs-extra')

bowercc_config = JSON.stringify({
    "scripts": {
        "postinstall": "wiredep -s header.php"
    }
});

bower_config = JSON.stringify({
    "name": "jims-wordpress-setup",
    "version": "1.0.0",
    "authors": [
        "Jim Sheen"
    ],
    "license": "MIT",
    "ignore": [
        "**/.*",
        "node_modules",
        "bower_components",
        "test",
        "tests"
    ]
});


fs.outputFile("bower.json", bower_config, function(err) {
    if (err) {
        return console.log(err);
    }
})


fs.outputFile('js/global.js', '/* Custom JS */', function(err) {
    if (err) {
        console.log(err) // => null
    }

})

fs.ensureDir('templates/', function(err) {
    if (err) {
        return console.log(err);
    }
})


fs.ensureDir('css/', function(err) {
    if (err) {
        return console.log(err);
    }
})