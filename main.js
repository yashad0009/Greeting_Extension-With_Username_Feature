var userName;
document.getElementById("sb").addEventListener("click", oS);
function oS()
{
	document.getElementById("settings").classList.toggle("settings-expand");
}
document.getElementById("ab").addEventListener("click", validate);
function validate()
{
	var data = document.getElementById("user").value;
	if (data == "")
	{
		alert("Please enter your Name");
	}
	else
	{
		alert("Perfect!!!");
		changeName();
	}
}
function saveName() 
{
    	localStorage.setItem("receivedName", userName);
}
function changeName() 
{
   	userName = document.getElementById("user").value;
   	saveName();
	getGreeting();
}
function getGreeting() 
{
	var date = new Date(); 
	var time = date.getHours()+":"+date.getMinutes();
	document.getElementById("msg1").innerHTML = time;
	if (time>="05:00" && time<"12:00") 
		document.getElementById("msg2").innerHTML = "Hello "+userName+", Good Morning!";
	else if (time>="12:00" && time<"17:00")
		document.getElementById("msg2").innerHTML = "Hello "+userName+", Good Afternoon!";
	else if (time>="17:00" && time<"24:00")
		document.getElementById("msg2").innerHTML = "Hello "+userName+", Good Evening!";
	else
		document.getElementById("msg2").innerHTML = "Hello "+userName+", it's time to have sleep. Good Night!";	
}