var data = [],
currentPoints = 5,
currentCharts = 5,
setUp = function(cb) {
        for(var i = 0; i < currentCharts; i++) {
                data[i] = produceTestData(currentPoints);
        }
        cb();
},
produceTestData = function(dataPoints) {
        return stream_layers(3, dataPoints, .1).map(function(data, i) {
                return {
                        key: 'Stream' + i,
                        values: data
                };
        });
},
produceEngine = function() {
        var name = bowser.name,
                version = bowser.version,
                renderingEngine,
                device,
                browser,
                os;

        // rendering engine
        if (bowser.webkit) {
                renderingEngine = "webkit";
        } else if (bowser.blink) {
                renderingEngine = "blink";
        } else if (bowser.gecko) {
                renderingEngine = "gecko";
        } else if (bowser.msie) {
                renderingEngine = "msie";
        } else if (bowser.msedge) {
                renderingEngine = "msedge";
        } else {
                renderingEngine = "unknown";
        }

        // device
        if (bowser.mobile) {
                device = "mobile";
        } else if (bowser.tablet) {
                device = "tablet";
        } else {
                device = "desktop";
        }

        // browser
        if (bowser.chrome) {
                browser = "chrome";
        } else if (bowser.firefox) {
                browser = "firefox";
        } else if (bowser.msie) {
                browser = "msie";
        } else if (bowser.msedge) {
                browser = "msedge";
        } else if (bowser.safari) {
                browser = "safari";
        } else if (bowser.android) {
                browser = "android";
        } else if (bowser.ios) {
                browser = "ios";
        } else if (bowser.opera) {
                browser = "opera";
        } else if (bowser.samsungBrowser) {
                browser = "samsungBrowser";
        } else if (bowser.phantom) {
                browser = "phantom";
        } else if (bowser.blackberry) {
                browser = "blackberry";
        } else if (bowser.webos) {
                browser = "webos";
        } else if (bowser.silk) {
                browser = "silk";
        } else if (bowser.bada) {
                browser = "bada";
        } else if (bowser.tizen) {
                browser = "tizen";
        } else if (bowser.seamonkey) {
                browser = "seamonkey";
        } else if (bowser.sailfish) {
                browser = "sailfish";
        } else if (bowser.ucbrowser) {
                browser = "ucbrowser";
        } else if (bowser.qupzilla) {
                browser = "qupzilla";
        } else if (bowser.vivaldi) {
                browser = "vivaldi";
        } else if (bowser.sleipnir) {
                browser = "sleipnir";
        } else if (bowser.kMeleon) {
                browser = "kMeleon";
        } else {
                browser = "unknown";
        }

        // os
        if (bowser.mac) {
                os = "mac";
        } else if (bowser.windows) {
                os = "windows";
        } else if (bowser.windowsphone) {
                os = "windowsphone";
        } else if (bowser.linux) {
                os = "linux";
        } else if (bowser.chromeos) {
                os = "chromeos";
        } else if (bowser.android) {
                os = "android";
        } else if (bowser.ios) {
                os = "ios";
        } else if (bowser.blackberry) {
                os = "blackberry";
        } else if (bowser.firefoxos) {
                os = "firefoxos";
        } else if (bowser.webos) {
                os = "webos";
        } else if (bowser.bada) {
                os = "bada";
        } else if (bowser.tizen) {
                os = "tizen";
        } else if (bowser.sailfish) {
                os = "sailfish";
        } else {
                os ="unknown";
        }

        return "Lab conditions using the <strong>" + renderingEngine + " engine</strong> on a <strong>" + os + " operating system</strong> using a <strong>" + device + " device</strong> with a <strong>" + browser + " browser</strong>";
},
start,
end,
dataEnd,
dataEndResult = 0,
renderStarts = 0,
renderEnds = 0,
totalPoints = 0,
allCharts = [],
renderTime = function() {
        if (window.performance) return window.performance.now();
        return Date.now();
};