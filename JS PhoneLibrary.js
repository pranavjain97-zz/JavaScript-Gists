var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
    console.log("Number: "+ person.phoneNumber); 
    console.log("Email: "+person.email);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var found=0;
    contactsLength=contacts.length; 
    for(var i=0;i<contactsLength;i++)
       { if(contacts[i].lastName==lastName) 
          { found=1; 
          break;
          }
       }
       if(found)
       printPerson(contacts[i]); 
        else 
         console.log("Not found"); 
}

 

//ADDING CONTACTS AUTOMATICALLY TO THE ARRAY
//NEW METHOD
function add(firstName,lastName,phoneNumber,email) {
contacts[contacts.length] = { 
     firstName: firstName, 
     lastName:lastName, 
     phoneNumber:phoneNumber, 
     email:email 
     
}; 

};

var fname=prompt("Enter your Firstname"); 
var lname=prompt("Enter your lastName"); 
var number=prompt("Enter your Phonenumber"); 
var email1=prompt("Enter your Email"); 
add(fname,lname,number,email1);

       search("Jain");
