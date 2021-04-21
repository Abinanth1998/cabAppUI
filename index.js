function login() {
	event.preventDefault();
	// alert("login")
	let username=document.querySelector("#username").value;
	let password=document.querySelector("#password").value;
	let phone=document.querySelector("#phone").value;
	alert("username: "+username)
	if(username!=null && password!=null && phone.length==10) {
		alert("Logined Sucess");
		window.location.href="cabRupees.html"
	} else {
		alert("please check the username and password")
	}
}