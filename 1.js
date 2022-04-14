// function checktxt(){
//     var txt=document.getElementById("username");
//     if(txt.value==""){
//         document.getElementById("usernamelert").innerHTML="<span style='color:red;'> error1 </span>";
//         txt.style.borderColor="red";
//     }
//     else{
//         document.getElementById("usernamelert").innerHTML="<span style='color:green;'> ok </span>";
//         txt.style.borderColor="green";
//     }
// }

var loadingpage = document.getElementById ('loading-container');
window.addEventlistener("load",function () {
    loadingpage.remove();
})