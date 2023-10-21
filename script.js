var istatus=document.querySelector("h4");
var btn=document.querySelector("#add");

var flag=0;

btn.addEventListener("click", function(){
	if(flag==0){
		istatus.innerHTML="Friend";
	    istatus.style.color="green";
		btn.innerHTML="Remove";
		btn.style.backgroundColor="white";
		flag=1;
        
	}
	else{
		istatus.innerHTML="Unfriend";
		istatus.style.color="red";
		btn.innerHTML="Add Friend";
		btn.style.backgroundColor="skyblue";
		flag=0;
	}
	

})


