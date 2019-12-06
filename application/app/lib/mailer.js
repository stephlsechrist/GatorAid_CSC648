var nodemailer = require('nodemailer');
var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');
var smtpTransport = require('nodemailer-smtp-transport');
var gmailConfig = require('../../config/config.json').gmail;
var nodemailer = nodemailer.createTransport(smtpTransport(gmailConfig));

module.exports = function() {
  var mailer={};
  mailer.sendForgotEmail= function(user) {
    var templateDir = path.join(__dirname, '..', 'email_templates', 'forgot_password');
    var welcomeMail = new EmailTemplate(templateDir);
    welcomeMail.render(user, function (err, result) {
      var email = {
        from: gmailConfig.auth.user,
        to: user.email,
        subject: 'Forgot Password',
        html: result.html,
        envelope: {
          from: 'Gator Aid Website '+gmailConfig.auth.user,
          to: user.email
        }
      };
      nodemailer.sendMail(email, function (error, res) {
        if (error) {
          console.log(error);
        } else {
          console.log(res)
        }
      });
    });
  }
 return mailer;
}
