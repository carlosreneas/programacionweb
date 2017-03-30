// ===========================================
// ======== data is from data.js
// ===========================================

var newshelper = Object.create({

    wrapText: function(text, len) {
        if(text.length > len) {
            return text.substring(0, (len - 3)) + "...";
        }
        return text;
    },
    getNews: function () {
        var toAppend = "";
        for (var i = 0; i < news.length; i++) {
            var news_n = news[i];
            var image = pathThumbs + news_n.image;

            toAppend += '<div class="card">'+
                    '<img src="' + image + '" alt="' + news_n.name + '">' +
                        '<p class="text-center">' +
                        '<strong>'+ this.wrapText(news_n.title, 60) + '</strong> <br>' +
                        ' ' + this.wrapText(news_n.description, 60) + ' ' +
                    '</p>' +
                '</div > ';
        }
        return toAppend;
    }
});