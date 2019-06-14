function toggleNav(num){
    if(num === 1){
        document.getElementById('sidebar-wrapper').classList.add('activation');
    } else {
        document.getElementById('sidebar-wrapper').classList.remove('activation');
    }
}



//hover

var TableSet= [true,true,true,true,true,true,true,true];

jQuery('#table_btn2').on('click', function() {
    if(TableSet[0]){
        for(i=2;i<10;i++){
            var name = '#table' + i;
            jQuery(name).removeClass('drag');
            TableSet[i-2] = true;
        }    
        jQuery('#table2').addClass('drag');
        TableSet[0] = false;
    }else {
        jQuery('#table2').removeClass('drag');
        TableSet[0] = true;
    }
});
jQuery('#table_btn3').on('click', function() {    
    if(TableSet[1]){
        for(i=2;i<10;i++){
            var name = '#table' + i;
            jQuery(name).removeClass('drag');
            TableSet[i-2] = true;
        }    
        jQuery('#table3').addClass('drag');
        TableSet[1] = false;
    }else {
        jQuery('#table3').removeClass('drag');
        TableSet[1] = true;
    }
});
jQuery('#table_btn4').on('click', function() {
    if(TableSet[2]){
        for(i=2;i<10;i++){
            var name = '#table' + i;
            jQuery(name).removeClass('drag');
            TableSet[i-2] = true;
        }    
        jQuery('#table4').addClass('drag');
        TableSet[2] = false;
    }else {
        jQuery('#table4').removeClass('drag');
        TableSet[2] = true;
    }
});
jQuery('#table_btn5').on('click', function() {
    if(TableSet[3]){
        for(i=2;i<10;i++){
            var name = '#table' + i;
            jQuery(name).removeClass('drag');
            TableSet[i-2] = true;
        }    
        jQuery('#table5').addClass('drag');
        TableSet[3] = false;
    }else {
        jQuery('#table5').removeClass('drag');
        TableSet[3] = true;
    }
});
jQuery('#table_btn6').on('click', function() {
    if(TableSet[4]){
        for(i=2;i<10;i++){
            var name = '#table' + i;
            jQuery(name).removeClass('drag');
            TableSet[i-2] = true;
        }    
        jQuery('#table6').addClass('drag');
        TableSet[4] = false;
    }else {
        jQuery('#table6').removeClass('drag');
        TableSet[4] = true;
    }
});
jQuery('#table_btn7').on('click', function() {
    if(TableSet[5]){
        for(i=2;i<10;i++){
            var name = '#table' + i;
            jQuery(name).removeClass('drag');
            TableSet[i-2] = true;
        }    
        jQuery('#table7').addClass('drag');
        TableSet[5] = false;
    }else {
        jQuery('#table7').removeClass('drag');
        TableSet[5] = true;
    }

});
jQuery('#table_btn8').on('click', function() {
    if(TableSet[6]){
        for(i=2;i<10;i++){
            var name = '#table' + i;
            jQuery(name).removeClass('drag');
            TableSet[i-2] = true;
        }    
        jQuery('#table8').addClass('drag');
        TableSet[6] = false;
    }else {
        jQuery('#table8').removeClass('drag');
        TableSet[6] = true;
    }
});
jQuery('#table_btn9').on('click', function() {
    if(TableSet[7]){
        for(i=2;i<10;i++){
            var name = '#table' + i;
            jQuery(name).removeClass('drag');
            TableSet[i-2] = true;
        }    
        jQuery('#table9').addClass('drag');
        TableSet[7] = false;
    }else {
        jQuery('#table9').removeClass('drag');
        TableSet[7] = true;
    }

});

//out    else jQuery('#table2').removeClass('drag');


// jQuery('#table_btn3').on('mouseleave', function() {
//     jQuery('#table3').removeClass('drag');
// });
// jQuery('#table_btn4').on('mouseleave', function() {
//     jQuery('#table4').removeClass('drag');
// });
// jQuery('#table_btn5').on('mouseleave', function() {
//     jQuery('#table5').removeClass('drag');
// });
// jQuery('#table_btn6').on('mouseleave', function() {
//     jQuery('#table6').removeClass('drag');
// });
// jQuery('#table_btn7').on('mouseleave', function() {
//     jQuery('#table7').removeClass('drag');
// });
// jQuery('#table_btn8').on('mouseleave', function() {
//     jQuery('#table8').removeClass('drag');
// });
// jQuery('#table_btn9').on('mouseleave', function() {
//     jQuery('#table9').removeClass('drag');
// });

// $(document).ready(function(){
//     $("#tag3").on("click",function(event){
//       var offset = $("#app-features").offset();
//       $("html body").animate({scrollTop:offset.top},2000);

//     });
// });