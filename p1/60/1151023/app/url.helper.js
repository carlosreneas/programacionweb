// ================================
// ======== data is from data.js
// ================================

var helper = Object.create({
    active: "",
    isActive: function (url) {
        var parts = window.location.href.split("/");
        var current = parts[parts.length - 1];
        return (current == url) ? 'active' : '';
    },
    getNav: function (html) {
        var toAppend = "";
        for (var key in states) {
            var state = states[key];
            var class_ = this.isActive(state.url);

            if (class_ == "active") {
                this.active = state;
            }

            toAppend += '<li class="' + class_ + '"> <a href="' + state.url + '">' + state.name + '</a></li>';
        }
        return html.replace('{{repeat_list}}', toAppend);
    },
    getHeaderCss: function () {

        var image = pathHeaders + this.active.header;

        return {
            "background":  "url(" + image + ") no-repeat center center fixed",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover"
        }
    }
});