var testButtons = document.getElementById("tests");

testButtons.addEventListener("click", function(e) {
        if (e.target.className === "testHarness") {
                currentPoints = e.target.dataset.points;
                document.getElementById("charts").innerHTML = "";
                data = [];
                setUp(callbackFunction);
                return false;
        }
        if (e.target.className === "testHarnessCharts") {
                currentCharts = e.target.dataset.points;
                document.getElementById("charts").innerHTML = "";
                data = [];

                setUp(callbackFunction);
                return false;
        }
        if (e.target.className.indexOf("testURL") > -1) {
                window.location = e.target.dataset.url;
                return false;
        }
        return false;
}, false);

var callbackFunction = function() {
        toggleButtons(false);
        renderStarts = 0;
        renderEnds = 0;
        dataEnd = renderTime();
        start = renderTime();
        dataEndResult = Math.round(dataEnd - start, 0);
        totalPoints = parseInt(currentPoints * currentCharts, 10);
        allCharts = [];
        for(var i = 0; i < data.length; i++) {
                produceChart(i, function(chart) {
                        if (renderEnds < data.length - 1) {
                                //renderEnds++;
                        } else {
                                dataEnd = renderTime();
                                dataEndResult = Math.round(dataEnd - start, 0);
                                if (data.length === 1) document.getElementById("render_results").innerHTML = document.getElementById("render_results").innerHTML + " <strong>Data</strong> = " + dataEndResult + "ms.";
                        }
                });
        }
}

function toggleButtons(state) {
        if (arguments === 0) var state = false;

        var buttons = document.getElementsByTagName("button");

        for (var buttonElement = 0; buttonElement < buttons.length; buttonElement++) {
                buttons[buttonElement].disabled = !state;
        }
}