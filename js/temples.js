//Storing the resource URL into a const variable. 
const localJson = 'json/temples.json';

//Fetch method to feed the required argument (requestURL).
fetch(localJson)
//.then method that returns a Promise which response will work with as an argument ot an anonymous function.
  .then(function (response) {
    return response.json();
  })
  //.then method setup to work with the converted response data in JS object format.
  .then(function (jsonObject) {
    console.table(jsonObject);

    //Store results of the converted response. 
    const temples = jsonObject['temples'];
    
    //Loop to go through every record and process them into their own cards one at a time.
    for (let i = 0; i < temples.length; i++ ) {  
        
//Variables to build HTML (build element) for card, h2, birth date, birthplace, and image.       
let templeJson = document.createElement('section');
let h2 = document.createElement('h2');
let address = document.createElement('h3');
let address1 = document.createElement('p');
let state = document.createElement('p');
let phone = document.createElement('h3');
let phone1 = document.createElement('p');
let email = document.createElement('h3');
let email1 = document.createElement('p');
let services = document.createElement('h3');
let services1 = document.createElement('p');
let services2 = document.createElement('p');
let services3 = document.createElement('p');
let services4 = document.createElement('p');
let ordinance = document.createElement('h3');
let ordinance1 = document.createElement('p');
let sessions = document.createElement('h3');
let sessions1 = document.createElement('p');
let history = document.createElement('h3');
let history1 = document.createElement('p');
let history2 = document.createElement('p');
let history3 = document.createElement('p');
let h3 = document.createElement('h3');
let hr = document.createElement('hr');
let hr1 = document.createElement('hr');
let hr2 = document.createElement('hr');
let hr3 = document.createElement('hr');
let hr4 = document.createElement('hr');
let hr5 = document.createElement('hr');
let hr6 = document.createElement('hr');
let hr7 = document.createElement('hr');
let hr8 = document.createElement('hr');
let closures1 = document.createElement('p');
let closures2 = document.createElement('p');
let closures3 = document.createElement('p');
let templeImage = document.createElement('img');


//Outputting the content to the user through the for loop. 
h2.textContent = temples[i].name;
address.textContent = "Address: "
address1.textContent = temples[i].address;
state.textContent = temples[i].state;
phone.textContent = "Phone Number: ";
phone1.textContent = temples[i].phone;
email.textContent = "Email: ";
email1.textContent = temples[i].email;
ordinance.textContent = "Baptism Ordinance: ";
ordinance1.textContent = temples[i].ordinance;
sessions.textContent = "Session Schedule: ";
sessions1.textContent = temples[i].sessions;
services.textContent = "Services: ";
services1.textContent = temples[i].services[0];
services2.textContent = temples[i].services[1];
services3.textContent = temples[i].services[2];
services4.textContent = temples[i].services[3];
history.textContent = "History: ";
history1.textContent = temples[i].history[0];
history2.textContent = temples[i].history[1];
history3.textContent = temples[i].history[2];
h3.textContent = "Closures: ";
closures1.textContent = temples[i].closures[0];
closures2.textContent = temples[i].closures[1];
closures3.textContent = temples[i].closures[2];
templeImage.setAttribute('src', "images/" + temples[i].photo);
templeImage.setAttribute('alt', temples[i].name);


// Adds node to the end of the list of children of specified parent node (card).
templeJson.appendChild(h2);
templeJson.appendChild(templeImage);
templeJson.appendChild(hr2);
templeJson.appendChild(address);
templeJson.appendChild(address1);
templeJson.appendChild(state);
templeJson.appendChild(hr3);
templeJson.appendChild(phone);
templeJson.appendChild(phone1);
templeJson.appendChild(hr4);
templeJson.appendChild(email);
templeJson.appendChild(email1);
templeJson.appendChild(hr5);
templeJson.appendChild(ordinance);
templeJson.appendChild(ordinance1);
templeJson.appendChild(hr6);
templeJson.appendChild(sessions);
templeJson.appendChild(sessions1);
templeJson.appendChild(hr1);
templeJson.appendChild(services);
templeJson.appendChild(services1);
templeJson.appendChild(services2);
templeJson.appendChild(services3);
templeJson.appendChild(services4);
templeJson.appendChild(hr);
templeJson.appendChild(history);
templeJson.appendChild(history1);
templeJson.appendChild(history2);
templeJson.appendChild(history3);
templeJson.appendChild(hr8);
templeJson.appendChild(h3);
templeJson.appendChild(closures1);
templeJson.appendChild(closures2);
templeJson.appendChild(closures3);
templeJson.appendChild(hr7);



// Places div.card (each card) at the end of the list (one after the other) during the for loop.
document.querySelector('div.templeJson').appendChild(templeJson);
    }
});
