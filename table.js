const Tform = document.getElementById("tForm");
const tBody = document.querySelector("tbody");
function handleSubmit(event)
{
  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  let age = event.target.age.value;

  console.log(name,email,age);

  tBody.innerHTML +=
   `
   <tr>
  <td>${name}</td>
  <td>${email}</td>
  <td>${age}</td>
  </tr>
  `
  ;
  

}

Tform.addEventListener("submit",handleSubmit);
