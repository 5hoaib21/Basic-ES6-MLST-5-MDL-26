const firstName = 'kamrujjaman'
const lastName = 'suvo'



const aboutMe = `My name ${firstName} ${lastName}`
console.log(aboutMe);
const fullName = `${firstName} ${lastName}`;

function getCardHTML(){
  const div = `
  <div class="card">
  <h2>${fullName}</h2>
  </div>
  `;
}