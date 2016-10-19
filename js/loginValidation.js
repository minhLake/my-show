var mySubmit = function (flag) {
    return flag;
}

$(document).ready(function () {
    $("form").submit(function (e) {
        var checkUserOK = true;
        var checkPswOK = true;
        var user = $("[name='emailOrMobile']").val();
        var psw = $("[name='password']").val();
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

        } else {
            checkPswOK = true;

            $('.form-warn-font:eq(0)').css('display', 'none');
            $('.form-input input:eq(0)').css('background-color', '#ffffff');
        }
        if (checkUserOK && checkPswOK) {
            return mySubmit(true);
        } else {
            $('.loginBoxInner').css('background-color', '#fff5f5');
            return mySubmit(false);
        }
    });
});
