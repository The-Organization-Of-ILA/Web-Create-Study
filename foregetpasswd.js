function check()
{
    var newpassword = document.getElementById("newpassword").value;
    var repeatpassword = document.getElementById("repeatpassword").value;
    if(newpassword!=repeatpassword)
    {
        window.alert("两次输入密码不一致，请重新输入");
    }
    else;
}