$(".sidebar-menu-btn").click(function () {
    $(this).toggleClass("active");
});
$('.banner-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1
});
$('#myTable').DataTable();
$("#myTable_length > label").addClass("d-flex align-items-center gap-2");
$("#myTable_length > label > select").addClass("form-select bg-primary text-capitalize py-1 text-white border-light my-2");
$("#myTable_length > label > select").attr("style", "min-width: 70px;");
$("#myTable_filter > label").addClass("d-flex align-items-center gap-2 mt-2");
$("#myTable_filter > label > input").addClass("form-control text-success border-primary border-2");

$("#sidebarCloseBtn").click(function(){
    $(".content-sidebar-left-rties").toggleClass("active");
    $(".content-body-rties").toggleClass("active");
    $(this).toggleClass("active");
});
$(".surfLink").click(function(){
    $(this).addClass("d-none");
    $(this).siblings("p").addClass("d-none");
    $(this).siblings("a").removeClass("d-none");
    let link = "https://" + $(this).attr("data-link-of-surf");
    $(this).siblings("a").attr("href", link);
    console.log(link);
});
$(".hideTask").click(function(){
    $(this).parent().parent().parent().parent().remove();
})