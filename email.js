function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "placeholder",
        Password : "placeholder",
        To : 'placeholder',
        From : document.getElementById("email").value,
        Subject : "New Contact Form",
        Body : "Name: "+ document.getElementById("name").value + 
        "<br> Email: " + document.getElementById("email").value +
        "<br> Phone: " + document.getElementById("phone").value +
        "<br> Message: " + document.getElementById("message").value 
    }).then(
      message => alert("Message Sent!")
    );
}