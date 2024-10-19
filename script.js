const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = " Your Growth";
  }, 0);
  setTimeout(() => {
    text.textContent = " WebDevelopment";
  }, 4000);
  setTimeout(() => {
    text.textContent = " Hackathon";
  }, 8000);
  setTimeout(() => {
    text.textContent = " Freelance";
  }, 12000);
};

textLoad();

setInterval(textLoad, 16000);

function all(){
    document.querySelector(".main-four").style.display = "none";
    document.querySelector(".main-five").style.display = "none";
    document.querySelector(".main-one").style.display = "";
    document.querySelector(".main-two").style.display = "";
    document.querySelector(".main-three").style.display = "";
    document.querySelector(".all-Mentors").style.display = "";    
}

document.querySelector(".logo").addEventListener("click", function(){
    all();
});
document.querySelector(".home").addEventListener("click", function(){
    all();
});

function allMentors(){
    document.querySelector(".main-four").style.display = "";
    document.querySelector(".main-one").style.display = "none";
    document.querySelector(".main-two").style.display = "none";
    document.querySelector(".main-three").style.display = "none";
    document.querySelector(".all-Mentors").style.display = "none";
}
const Mentors = document.querySelectorAll(".ALL-MENTORS2, .ALL-MENTORS1");
Mentors.forEach(function(mento) {
    mento.addEventListener("click", allMentors);
});



function bookSlot(){
    document.querySelector(".main-five").style.display = "";
    document.querySelector(".main-four").style.display = "none";
    document.querySelector(".main-one").style.display = "none";
    document.querySelector(".main-two").style.display = "none";
    document.querySelector(".main-three").style.display = "none";
    document.querySelector(".all-Mentors").style.display = "none";
}
const allCards = document.querySelectorAll("[class^='card'], [class^='all-card']");
allCards.forEach(function(card) {
    card.addEventListener("click", bookSlot);
});

  document.querySelector(".main-four").style.display = "none";
  document.querySelector(".main-five").style.display = "none";

















///////////////////////////////////// book slot ///////////////////////////////////

let bookedSlots = [];

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const slotKey = `${date} ${time}`;

  if (bookedSlots.includes(slotKey)) {
    showMessage("This slot is already booked! Please select another one.");
  } else {
    bookedSlots.push(slotKey);
    showMessage(`Slot booked successfully for ${name} on ${date} at ${time}.`);
    sendBookingEmail(name, phone, email, date, time);
    setReminder(name, email, date, time);
    displayBookedSlots();
    clearForm();
  }
});

function sendBookingEmail(name, phone, email, date, time) {
  const templateParams = {
    to_name: name,
    from_name: "Booking Service",
    booking_date: date,
    booking_time: time,
    phone: phone,
    from_email: email,
  };

  var serviceID = "service_gftsl6d";
  var templateID = "template_xsfvmyv";

  emailjs.send(serviceID, templateID, templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email Sent Successfully!");
    },
    (err) => {
      console.log("FAILED...", err);
    }
  );
}

function setReminder(name, email, date, time) {
  const reminderTime = new Date(date + " " + time);
  reminderTime.setMinutes(reminderTime.getMinutes() - 30);

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
        from_email: email,
      };

      emailjs.send(serviceID, templateID, templateParams).then(
        (response) => {
          console.log("Reminder sent!", response.status, response.text);
          alert("Your Mentor will contact you in 30 min");
        },
        (err) => {
          console.log("Failed to send reminder...", err);
        }
      );
    }, timeToReminder);
  }
}

function displayBookedSlots() {
  const bookedSlotsList = document.getElementById("bookedSlotsList");
  bookedSlotsList.innerHTML = "";

  bookedSlots.forEach((slot) => {
    const li = document.createElement("li");
    li.textContent = slot;
    bookedSlotsList.appendChild(li);
  });
}

function showMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}

function clearForm() {
  document.getElementById("bookingForm").reset();
  document.getElementById("message").textContent = "";
  document.getElementById("time").value = "";
}



/* ///////////////////////////////////////////////////////////////  MESSAGE //////////////////////////////////////////////////////////////// */

        const circle = document.getElementById('circle');
        const popup = document.getElementById('popup');

        circle.addEventListener('click', function () {
            popup.classList.toggle('show');
        });

        const chatBox = document.getElementById('chat-box');
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');

        sendBtn.addEventListener('click', function () {
            const message = chatInput.value.trim();

            if (message !== '') {
                appendMessage('user', message);

                chatInput.value = '';

                setTimeout(function () {
                    appendMessage('admin', 'Thanks for your message. We’ll be with you shortly.');
                }, 1000);
            }
        });


        function appendMessage(userType, message) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', userType);
            messageDiv.textContent = message;
            chatBox.appendChild(messageDiv);

            chatBox.scrollTop = chatBox.scrollHeight;
        }

        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendBtn.click();
            }
        });

/* ///////////////////////////////////////////////////////////////  MESSAGE //////////////////////////////////////////////////////////////// */



document.querySelector(".main-four").style.display = "none";
document.querySelector(".main-five").style.display = "none";
document.querySelector(".main-one").style.display = "none";
document.querySelector(".main-two").style.display = "";
document.querySelector(".main-three").style.display = "none";
document.querySelector(".all-Mentors").style.display = "none";    