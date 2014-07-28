// This file was automatically generated from main.soy. // Please don't edit this file by hand. if (typeof main == 'undefined') { var main = {}; } /** * @param {Object.
<string, *>=} opt_data * @param {(null|undefined)=} opt_ignored * @return {string} * @notypecheck */ main.page = function(opt_data, opt_ignored) { return '
    <!doctype html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="author" content="Eduardo Lundgren">
        <meta name="description" content="A modern approach for Computer Vision on the web.">
        <meta property="og:title" content="tracking.js">
        <meta property="og:description" content="A modern approach for Computer Vision on the web">
        <meta property="og:image" content="http://trackingjs.com/images/app/site_screenshot.jpg">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>tracking.js' + ((opt_data.pageName) ? ' | ' + soy.$$escapeHtml(opt_data.pageName) : '') + '</title>
        <link href="//fonts.googleapis.com/css?family=Roboto+Slab:400,300,100|Ubuntu" rel="stylesheet" type="text/css">
        <!-- build:css ' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/all.min.css -->
        <link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + '../bower_components/pure/pure-min.css">
        <link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/highlight.css">
        <link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/side-menu.css">
        <link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/main.css">
        <!-- endbuild -->
    </head>

    <body>
        <div id="layout">' + soy.$$filterNoAutoescape(opt_data.content) + '</div>
        <!-- build:js ' + soy.$$escapeHtml(opt_data.baseDir) + 'scripts/all.min.js -->
        <script src="' + soy.$$escapeHtml(opt_data.baseDir) + 'scripts/side-menu.js">
            < \/script><!-- endbuild -->\n    <script type="text/javascript
            ">\n    var _gaq = _gaq || [];\n    _gaq.push([\'_setAccount\', \'UA-8055185-3\']);\n    _gaq.push([\'_trackPageview\']);\n\n    (function() {\n      var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n      ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n      var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n    })();\n    <\/script>\n  </body></html>';
};