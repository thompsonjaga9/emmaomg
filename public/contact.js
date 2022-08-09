// script.js
function sendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_jdr9aq4", "template_2j62v6r", params).then(function (res) {
        alert("success " + res.status);
    })
}