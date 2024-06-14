// send mail
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    
    // serviceI id & template id in client
    const serviceID = "service_crwknqs";
    const templateID = "template_ab7g13x";
  
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
      })
      .catch((err) => console.log(err));
  }
  
