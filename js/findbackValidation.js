var mySubmit = function (flag) {
    return flag;
}

$(document).ready(function () {
    $("form").submit(function (e) {
        var checkUserOK = true;
        var user = $("[name='emailOrMobile']").val();

        if (isNull(user) || (!checkEmail(user) && !checkMobile(user))) {
            checkUserOK = false;

            $('.form-warn-font:eq(0)').css('display', 'block');
            $('.form-input input:eq(0)').css('background-color', '#ffe3e3');
            console.log("check user null ok");

        } else {
            checkUserOK = true;

            $('.form-warn-font:eq(0)').css('display', 'none');
            $('.form-input input:eq(0)').css('background-color', '#ffffff');
        }

        if (checkUserOK) {
            return mySubmit(true);
        } else {
            $('.loginBoxInner').css('background-color', '#fff5f5');
            return mySubmit(false);
        }
    });
});
