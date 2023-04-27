const firebaseConfig = {
  apiKey: "AIzaSyAkivapPzYd4HDBCAOF0-bdS3Wmf7qXu7A",
  authDomain: "fe-final-project-72a77.firebaseapp.com",
  databaseURL: "https://fe-final-project-72a77-default-rtdb.firebaseio.com",
  projectId: "fe-final-project-72a77",
  storageBucket: "fe-final-project-72a77.appspot.com",
  messagingSenderId: "489210633993",
  appId: "1:489210633993:web:572812226c97213378bdd8"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database().ref();

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const event = document.getElementById("event").value;

  const validnum = /^08\d{8}$/;
  if(!validnum.test(number)){
    alert("Number must begin with '08'");
    return;
  }
  if(!email.includes("@")){
    alert("Must include '@' in your email");
    return;
  }
  if(name.length<3){
    alert("Minimum consist of 3 characters");
    return;
  }

  let newContact = database.push();
  newContact.set({
    email: email,
    name: name,
    number: number,
    event: event
  });
});



