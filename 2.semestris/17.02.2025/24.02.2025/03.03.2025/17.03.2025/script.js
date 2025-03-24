/*
let turpinat = true;
while( turpinat )
{
  let user = prompt("turpinat ? Y/N");
  if (user == "N");
  { 
    turpinat = false;
  }
}
console.log("end while");
*/

let turpinat = true;
let masivs = [];
while (turpinat)
{
let user = parsefloat(prompt("Enter positive number: "));
   if( user < 0)
   {
    turpinat = false;
   }
   else
   {
    masivs.push(user);
   }
}
console.log(masivs);