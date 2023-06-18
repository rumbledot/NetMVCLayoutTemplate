$('#sidebar-toggler').click(function () {
    if ($('body').hasClass('expanded')) {
        $('body').removeClass('expanded');
        $('body').addClass('drawer');
        $.cookie('menuMode', 'drawer', { path: '/', expires: 7 })
    } else {
        $('body').removeClass('drawer');
        $('body').addClass('expanded');
        $.cookie('menuMode', 'expanded', { path: '/', expires: 7 })
    }
});

//$('.drawer .sidebar-menus .menu-item').mouseenter(function () {
//    $('.drawer .sidebar-menus .menu-item[data-hasChildren="true"] .child-menu').addClass('expand-child-menu');
//});

//$('.drawer .sidebar-menus .menu-item').mouseleave(function () {
//    $('.drawer .sidebar-menus .menu-item[data-hasChildren="true"] .child-menu').removeClass('expand-child-menu');
//});

$('.drawer .sidebar-menus .menu-item .child-menu .expand-child-menu').mouseleave(function () {
    $('.drawer .sidebar-menus .menu-item[data-hasChildren="true"] .child-menu').removeClass('expand-child-menu');
});

$('.menu-item[data-hasChildren="true"]').click(function () {
    $('.menu-item[data-hasChildren="true"] .child-menu').toggleClass('expand-child-menu');
    if ($('.menu-item[data-hasChildren="true"] .menu-item-toggler').hasClass('fa-chevron-down')) {
        $('.menu-item[data-hasChildren="true"] .menu-item-toggler').removeClass('fa-chevron-down')
        $('.menu-item[data-hasChildren="true"] .menu-item-toggler').addClass('fa-chevron-right')
    } else {
        $('.menu-item[data-hasChildren="true"] .menu-item-toggler').removeClass('fa-chevron-right')
        $('.menu-item[data-hasChildren="true"] .menu-item-toggler').addClass('fa-chevron-down')
    }
});