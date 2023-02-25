$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,     
        }
    }
})

// Always Show One Accordion
$('#accordionExample').on('show.bs.collapse', function () {
    $(this).data('isShowing', true);
});

$('#accordionExample').on('hide.bs.collapse', function (event) {
    if (!$(this).data('isShowing')) {
    event.preventDefault();
  }
  
  $(this).data('isShowing', false);
});
// Always Show One Accordion


// Tab Change On Click
$('.tab-section-link').click(function() {
  var cur = $('.tab-section-link').index($(this));
  $('.tab-section-display').removeClass('active');
  $('.tab-section-display').eq(cur).addClass('active');
});


$('.second-tab-section-link').click(function() {
  var cur = $('.second-tab-section-link').index($(this));
  $('.second-tab-section-display').removeClass('active');
  $('.second-tab-section-display').eq(cur).addClass('active');
});


$('.third-tab-section-link').click(function() {
  var cur = $('.third-tab-section-link').index($(this));
  $('.third-tab-section-display').removeClass('active');
  $('.third-tab-section-display').eq(cur).addClass('active');
});
// Tab Change On Click


// Navbar Fullscreen
var mywindow = $('body'), navbarCollap = $('.navbar-collapse');
        navbarCollap.on('show.bs.collapse', function(x) {
            mywindow.css({visibility: 'hidden'});
            $('body').attr("scroll","no").attr("style", "overflow: hidden");
        });
        navbarCollap.on('hide.bs.collapse', function(x) {
            mywindow.css({visibility: 'visible'});
            $('body').attr("scroll","yes").attr("style", "");
        });
// Navbar Fullscreen




// Get A Quote Conditional Form
$('.select-your-preferred-grey-space-specification, .roughly-how-much-much-grey-space-do-you-need-to-store, .select-your-preferred-rack-specification, .roughly-how-many-racks-do-you-need-to-store, .select-your-preferred-pallet-specification, .roughly-how-many-pallets-do-you-need-to-store, .select-your-preferred-basket-specification, .roughly-how-many-basket-do-you-need-to-store').hide();


$('#expected-space').change(function () {
    var selected = $('#expected-space option:selected').text();
    $('.select-your-preferred-grey-space-specification, .roughly-how-much-much-grey-space-do-you-need-to-store').toggle(selected == "Grey Space");
});
$('#expected-space').change(function () {
    var selected = $('#expected-space option:selected').text();
    $('.select-your-preferred-rack-specification, .roughly-how-many-racks-do-you-need-to-store').toggle(selected == "Rack");
});
$('#expected-space').change(function () {
    var selected = $('#expected-space option:selected').text();
    $('.select-your-preferred-pallet-specification, .roughly-how-many-pallets-do-you-need-to-store').toggle(selected == "Pallet");
});
$('#expected-space').change(function () {
    var selected = $('#expected-space option:selected').text();
    $('.select-your-preferred-basket-specification, .roughly-how-many-basket-do-you-need-to-store').toggle(selected == "Basket");
});
// Get A Quote Conditional Form


// Get A Quote Conditional Form Warehouse
$('.warehouse-one, .warehouse-two, .warehouse-three').hide();

$('#select-warehouse').change(function () {
    var selected = $('#select-warehouse option:selected').text();
    $('.warehouse-one').toggle(selected == "Warehouse - 1");
});
$('#select-warehouse').change(function () {
    var selected = $('#select-warehouse option:selected').text();
    $('.warehouse-two').toggle(selected == "Warehouse - 2");
});
$('#select-warehouse').change(function () {
    var selected = $('#select-warehouse option:selected').text();
    $('.warehouse-three').toggle(selected == "Warehouse - 3");
});
