const name = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const body = document.getElementById('body')
const btn = document.getElementById('sendBtn')

btn.addEventListener('click', function () {
  sendEmail(name.value, email.value, subject.value, body.value)
})

function sendEmail(name, email, subject, body) {
  Email.send({
    // Not working !!
    // Need to figure out what to use to replace process
    Host: `${process.env.ELASTIC_MAIL_SERVER}`,
    Username: `${process.env.ELASTIC_MAIL_USERNAME}`,
    Password: `${process.env.ELASTIC_MAIL_PASSWORD}`,
    To: `${email}`,
    From: `${process.env.ELASTIC_MAIL_USERNAME}`,
    Subject: `${subject} - from ${name}`,
    Body: `${body}`,
  }).then(function (message) {
    alert(message)
  })
}
