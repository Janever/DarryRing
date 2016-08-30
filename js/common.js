

$(function() {

    //返回按钮
    $('header .back').on('click',function() {
        //console.log(location.href);
        location.href = history.go(-1).toString();
        console.log(location.href);
    })


    //模态框
    $('header .list').on('click',function() {
        $('.mask').show();
        $('#slide').css('left','0');

    })

    $('#slide .close img').on('click',function() {
        $('#slide').css('left','-70%');
        $('.mask').hide();
    })
    $('.mask').on('click',function() {
        $('#slide').css('left','-70%');
        $('.mask').hide();
    })

})
