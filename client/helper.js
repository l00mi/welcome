Handlebars.registerHelper("formatDate", function(starttime, format) {
    return moment(starttime).format(format); 
});

