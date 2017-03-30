// ===========================================
// ======== data is from data.js
// ===========================================

var gallery = Object.create({

    wrapText: function(text, len) {
        if(text.length > len) {
            return text.substring(0, (len - 3)) + "...";
        }
        return text;
    },
    getTeachers: function () {
        var toAppend = "";
        for (var i = 0; i < teachers.length; i++) {
            var teacher = teachers[i];
            var image = pathTeachers + teacher.image;
            toAppend += '<div class="card">'+
                    '<img src="' + image + '" alt="' + teacher.name + '">' +
                        '<p class="text-center">' +
                        '<strong>'+ teacher.name + '</strong> <br>' +
                        ' ' + teacher.task + ' <br>' +
                        ' ' + this.wrapText(teacher.description, 35) + ' ' +
                    '</p>' +
                '</div > ';
        }
        return toAppend;
    }
});