
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = " Your Growth"
    }, 0)
    setTimeout(() => {
        text.textContent = " WebDevelopment"
    }, 4000)
    setTimeout(() => {
        text.textContent = " Hackathon"
    }, 8000)
    setTimeout(() => {
        text.textContent = " Freelance"
    }, 12000)
}

textLoad();

setInterval(textLoad, 16000);

document.querySelector(".main-four").style.display = "none";
  document.querySelector(".main-five").style.display = "";

document.querySelector(".ALL-MENTORS2").addEventListener("click", function () {
    document.querySelector(".main-four").style.display = "";
  
    document.querySelector(".main-one").style.display = "none";
    document.querySelector(".main-two").style.display = "none";
    document.querySelector(".main-three").style.display = "none";
    document.querySelector(".all-Mentors").style.display = "none";
  });
document.querySelector(".ALL-MENTORS1").addEventListener("click", function () {
    document.querySelector(".main-four").style.display = "";
  
    document.querySelector(".main-one").style.display = "none";
    document.querySelector(".main-two").style.display = "none";
    document.querySelector(".main-three").style.display = "none";
    document.querySelector(".all-Mentors").style.display = "none";
  });


  document.querySelector(".main-one").style.display = "none";
  document.querySelector(".main-two").style.display = "none";
  document.querySelector(".main-three").style.display = "none";
  document.querySelector(".all-Mentors").style.display = "none";



  ///////////////////////////////////// book slot ///////////////////////////////////

 // Store booked slots
 let bookedSlots = [];

 document.getElementById('bookingForm').addEventListener('submit', function (e) {
     e.preventDefault();

     const date = document.getElementById('date').value;
     const time = document.getElementById('time').value;
     const name = document.getElementById('name').value;
     const phone = document.getElementById('phone').value;
     const email = document.getElementById('email').value;
     const slotKey = `${date} ${time}`; // Create a unique key for the date and time

     // Check if the slot is already booked
     if (bookedSlots.includes(slotKey)) {
         showMessage('This slot is already booked! Please select another one.');
     } else {
         // Book the slot
         bookedSlots.push(slotKey);
         showMessage(`Slot booked successfully for ${name} on ${date} at ${time}.`);
         sendBookingEmail(name, phone, email, date, time); // Send confirmation email
         setReminder(name, email, date, time); // Set reminder
         displayBookedSlots();
         clearForm();
     }
 });

 // Function to send booking confirmation email
 function sendBookingEmail(name, phone, email, date, time) {
     const templateParams = {
         to_name: name,
         from_name: "Booking Service",
         booking_date: date,
         booking_time: time,
         phone: phone,
         from_email: email
     };

     var serviceID = "service_gftsl6d";
     var templateID = "template_xsfvmyv";

     emailjs.send(serviceID, templateID, templateParams)
         .then((response) => {
             console.log('SUCCESS!', response.status, response.text);
             alert("Email Sent Successfully!");
         }, (err) => {
             console.log('FAILED...', err);
         });

 }

 // Function to set a reminder email 30 minutes before the booked time
 function setReminder(name, email, date, time) {
     const reminderTime = new Date(date + ' ' + time);
     reminderTime.setMinutes(reminderTime.getMinutes() - 30); // Set reminder for 30 minutes before

     const now = new Date();
     const timeToReminder = reminderTime - now;

     if (timeToReminder > 0) {
         setTimeout(() => {
             const templateParams = {
                 to_name: name,
                 from_name: "Booking Service",
                 booking_date: date,
                 booking_time: time,
                 phone: "N/A",
                 from_email: email
             };

             emailjs.send(serviceID, templateID, templateParams)
                 .then((response) => {
                     console.log('Reminder sent!', response.status, response.text);
                     alert("Your Mentor will contact you in 30 min");
                 }, (err) => {
                     console.log('Failed to send reminder...', err);
                 });
         }, timeToReminder);
     }
 }

 // Function to display booked slots in the list
 function displayBookedSlots() {
     const bookedSlotsList = document.getElementById('bookedSlotsList');
     bookedSlotsList.innerHTML = ''; // Clear the list before adding

     bookedSlots.forEach(slot => {
         const li = document.createElement('li');
         li.textContent = slot; // Display the booked slot
         bookedSlotsList.appendChild(li);
     });
 }

 function showMessage(message) {
     const messageDiv = document.getElementById('message');
     messageDiv.textContent = message;
 }

 function clearForm() {
     document.getElementById('bookingForm').reset();
     document.getElementById('message').textContent = '';
     document.getElementById('time').value = ""; // Reset time selection
 }