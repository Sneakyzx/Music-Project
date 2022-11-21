function signup() {
    // e.preventDefault();
    console.log('dangky');
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        email: email,
        password: password,
    };
    var json = JSON.stringify(user);
    console.log(json);
    localStorage.setItem(email, json);
    messageSuccess.classList.remove('message-hidden')
    messageSuccess.style.color='rgb(76, 218, 76)';
    signupinput.classList.add('m-20');
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    setTimeout(()=>{
        signupCtn.style.display='none';
        signinCtn.style.display='block';
    },500)

    // alert("Đăng ký thành công");
}

function signin() {
    // e.preventDefault();
    console.log('dangnhap');
    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("password1").value;
    var user1 = localStorage.getItem(email1);
    var data = JSON.parse(user1);
    if (!user1) {
        signininput.classList.add('m-20');
        messageError.classList.remove('message-hidden')
    } else
     if (email1 == data.email && password1 == data.password) {
        messageError.classList.remove('message-hidden')

        messageError.innerHTML='Logged in successfully';
        messageError.style.color='rgb(76, 218, 76)';
        document.getElementById("email1").value="";
    document.getElementById("password1").value="";
        setTimeout(()=>{

            signupinCtn.style.display = 'none';
            headerSignupin.style.display='none';
            headerUsername.style.display='block';
            headerUsernameText.textContent=email1;
            logout.style.display='block';

        },1000)
    } 
}
