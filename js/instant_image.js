function imageApp() {
    var searchQuery = $.trim($(".imageApp .imageSearchBox").val()) === '' ? "Cookie" : $.trim($(".imageApp .imageSearchBox").val());
    if ($(".imageApp .imageReturn").hasClass("hide")) $(".imageApp .imageReturn").removeClass("hide");
    $(".imageApp .imageResult").attr("src", "https://www.bing.com/th?q=" + searchQuery);
    $(".imageApp .imageName").html(searchQuery)
}

$(".imageApp .searchBox .search").unbind().click(function(){
    imageApp()
});

$(".imageApp .searchBox .imageSearchBox").keyup(function (e) {
    if (e.keyCode == 13) {
        imageApp()
    }
});