window.sessionStorage
function signclick(){
    window.location.replace("index.html");
}
function demo(){
  var un1 = document.getElementById('login').value;
  var ps1 = document.getElementById('pwd').value;
  var id1;
  var des = "man";
  var obj1 = {email:un1,password:ps1,designation:des};
  fetch("http://localhost:8080/expReimbursement/webapi/index/adlogin",{
      body: JSON.stringify(obj1),
      headers:{
          "Content-Type": "application/json",
      },
      method:"POST"
  })
  .then((response)=>response.json())
  .then((json)=>disp(json))
  .then((json)=>ses(json))
  .catch(err=>console.log('Request failed'));
  function disp(res){
      if(res.status === "true"){
          id1 = res.status;
          window.location.href = "dashadmin/dashindex.html";
          
          sessionStorage.setItem("id",res.id);
          sessionStorage.setItem("firstname",res.firstName);
          sessionStorage.setItem("lastname",res.lastName);
          sessionStorage.setItem("email",res.email);
          sessionStorage.setItem("phno",res.phno);
          

        
      }
      else{
          alert("incorrect password");
      }
  } 
}
// function dashload(){
//     var ls = sessionStorage.getItem("sessionid");
//     var obj2 = {sessid:ls};
//   fetch("http://localhost:8080/expReimbursement/webapi/index/idsess",{
//       body: JSON.stringify(obj2),
//       headers:{
//           "Content-Type": "application/json",
//       },
//       method:"POST"
//   })
//   .then((response1)=>response1.json())
//   .then((json1)=>ses(json1))
//   .catch(_err1=>console.log('Request failed'));
//   window.sessionStorage
//   sessionStorage.setItem("vid",response1.id);
//   alert(response1.id);
//   function ses(res1){
//     console.log(res1);
//     window.sessionStorage
//     sessionStorage.setItem("vid",res1.id);
//   }


// }
