const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'jerry110160@gmail.com', // my mail
        pass: 'hhj050460'
    }
}));

var mailOptions = {
    from: 'jerry110160@gmail.com', // sender address 
    to: 'jhung@totalwine.com', // the same mail = want to send it to myself
    subject: 'Hello Jerry', // Subject line 
    text: 'Hello world', // plaintext body 
    html: '<b>Hello world</b>' // html body 
};



transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});