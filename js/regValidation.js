var mySubmit = function (flag) {
    return flag;
}

$(document).ready(function () {

    $("form").submit(function (e) {
        var checkUserOK = true;
        var checkPswOK = true;
        var checkPswReOK = true;
        var checkBoxOK = true;

        var user = $("[name='mobile']").val();
        var psw = $("[name='password']").val();
        var pswRe = $("[name='passwordRepeat']").val();
        var ischeckBox = $("[name='remenberme']").prop('checked');

        if (isNull(user) || (!checkEmail(user) && !checkMobile(user))) {
            checkUserOK = false;

            $('.form-warn-font:eq(0)').css('display', 'block');
            $('.form-input input:eq(0)').css('background-color', '#ffe3e3');

        } else {
            checkUserOK = true;

            $('.form-warn-font:eq(0)').css('display', 'none');
            $('.form-input input:eq(0)').css('background-color', '#ffffff');
        }

        if (isNull(psw)) {
            checkPswOK = false;

            $('.form-warn-font:eq(1)').css('display', 'block');
            $('.form-input input:eq(1)').css('background-color', '#ffe3e3');
            console.log("check user psw ok");

        } else {
            checkPswOK = true;

            $('.form-warn-font:eq(1)').css('display', 'none');
            $('.form-input input:eq(1)').css('background-color', '#ffffff');
        }
        if (pswRe !== psw) {
            checkPswReOK = false;

            $('.form-warn-font:eq(2)').css('display', 'block');
            $('.form-input input:eq(2)').css('background-color', '#ffe3e3');

        } else {
            checkPswReOK = true;

            $('.form-warn-font:eq(2)').css('display', 'none');
            $('.form-input input:eq(2)').css('background-color', '#ffffff');
        }
        if (!ischeckBox) {
            checkBoxOK = false;
            $('.form-warn-font:eq(3)').css('display', 'block');
            $('.form-input input:eq(3)').css('background-color', '#ffe3e3');
//            console.log(ischeckBox);
        } else {
            checkBoxOK = true;
            $('.form-warn-font:eq(3)').css('display', 'none');
            $('.form-input input:eq(3)').css('background-color', '#ffffff');
        }

        if (checkUserOK && checkPswOK && checkPswReOK && checkBoxOK) {
            return mySubmit(true);
        } else {
            $('.loginBoxInner').css('background-color', '#fff5f5');
            return mySubmit(false);
        }
    });
});
