function toggleNav(num){
    if(num === 1){
        document.getElementById('sidebar-wrapper').classList.add('activation');
    } else {
        document.getElementById('sidebar-wrapper').classList.remove('activation');
    }
}


//hover
jQuery('#table_btn2').on('mouseenter', function() {
    jQuery('#table2').addClass('drag');
});
jQuery('#table_btn3').on('mouseenter', function() {
    jQuery('#table3').addClass('drag');
});
jQuery('#table_btn4').on('mouseenter', function() {
    jQuery('#table4').addClass('drag');
});
jQuery('#table_btn5').on('mouseenter', function() {
    jQuery('#table5').addClass('drag');
});
jQuery('#table_btn6').on('mouseenter', function() {
    jQuery('#table6').addClass('drag');
});
jQuery('#table_btn7').on('mouseenter', function() {
    jQuery('#table7').addClass('drag');
});
jQuery('#table_btn8').on('mouseenter', function() {
    jQuery('#table8').addClass('drag');
});
jQuery('#table_btn9').on('mouseenter', function() {
    jQuery('#table9').addClass('drag');
});

//out
jQuery('#table_btn2').on('mouseleave', function() {
    jQuery('#table2').removeClass('drag');
});
jQuery('#table_btn3').on('mouseleave', function() {
    jQuery('#table3').removeClass('drag');
});
jQuery('#table_btn4').on('mouseleave', function() {
    jQuery('#table4').removeClass('drag');
});
jQuery('#table_btn5').on('mouseleave', function() {
    jQuery('#table5').removeClass('drag');
});
jQuery('#table_btn6').on('mouseleave', function() {
    jQuery('#table6').removeClass('drag');
});
jQuery('#table_btn7').on('mouseleave', function() {
    jQuery('#table7').removeClass('drag');
});
jQuery('#table_btn8').on('mouseleave', function() {
    jQuery('#table8').removeClass('drag');
});
jQuery('#table_btn9').on('mouseleave', function() {
    jQuery('#table9').removeClass('drag');
});
