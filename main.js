$('document').ready(function() {

    var aboutHurry = $("#aboutHurry");
    var productsHurry = $("#productsHurry");
    var servicesHurry = $("#servicesHurry");
    var contactHurry = $("#contactHurry");
    var navSections = $(".navSections");

    aboutHurry.removeClass('displayNone');
    
    $('#icon-menu').click(function() {
        if (navSections.is(":visible")) {
            navSections.addClass('displayNone');
          } else {
            navSections.removeClass('displayNone');
          }
    });
    $('#about').click(function() {
        aboutHurry.removeClass('displayNone');
        productsHurry.addClass('displayNone');
        servicesHurry.addClass('displayNone');
        contactHurry.addClass('displayNone');
        navSections.addClass('displayNone');
    });
    $('#products').click(function() {
        productsHurry.removeClass('displayNone');
        aboutHurry.addClass('displayNone');
        servicesHurry.addClass('displayNone');
        contactHurry.addClass('displayNone');
        navSections.addClass('displayNone');
});
    $('#services').click(function() {
        servicesHurry.removeClass('displayNone');
        productsHurry.addClass('displayNone');
        aboutHurry.addClass('displayNone');
        contactHurry.addClass('displayNone');
        navSections.addClass('displayNone');
    });
    $('#contact').click(function() {
        contactHurry.removeClass('displayNone');
        productsHurry.addClass('displayNone');
        aboutHurry.addClass('displayNone');
        servicesHurry.addClass('displayNone');
        navSections.addClass('displayNone');
    });
});