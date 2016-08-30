



$(function() {
    $('#login #register').on('click',function() {
        location.href = '../login/register.html';
        return false;
    })

    $('#login #btn').on('click',function() {

        var _this = $(this);
        var formData = $('#formData').serialize();
        var mobPhone = $('#login .mob-phone').val();

        if(_this.hasClass('disabled')) return false;

        // 发送请求
        $.ajax({
            type: 'post',
            url: '../js/login.php',
            data: formData,
            datatype: 'json',
            beforeSend: function() {
                var regPhone = /1\d{10}/;

                if(!regPhone.test(mobPhone)) {
                    $('#login .tip')
                        .show()
                        .text('手机号码格式不正确')
                        .fadeIn(500)
                        .delay(1000)
                        .fadeOut(500)

                    return false;
                }
                if($('#login .pwd').val().length<6) {
                    $('#login .tip')
                        .fadeIn(500)
                        .delay(1000)
                        .fadeOut(500)
                        .text('密码长度不能少于6位');
                    return false;
                }
                _this.addClass('disabled');

            },
            success: function(info) {
                if(info.code == 10000) {
                    console.log(info.msg);
                }
            },
            error: function(err,errmsg) {
                console.log(errmsg);
            },
            complete: function() {
                _this.removeClass('disabled');
            }
        });
        return false;
    })


    $('#login .cl-phone').click(function() {
        if($('#login .mob-phone').val() != '') {
            $('#login .mob-phone').val('');
        }
    })
    $('#login .cl-pwd').click(function() {
        if($('#login .pwd').val() != '') {
            $('#login .pwd').val('');
        }
    })
})

