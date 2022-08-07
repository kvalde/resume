export default function handler(req, res) {
  const axios = require('axios');
  require('dotenv').config()

  const options = {
    method: 'POST',
    url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.MAIL_SERVICE_KEY,
      'X-RapidAPI-Host': process.env.MAIL_SERVICE_HOST,
    },
    data: `{"personalizations":[{"to":[{"email":"kapeliushnyivolodymyr@gmail.com"}],"subject":"Email from website from ${req.body.name}"}],"from":{"email":"${req.body.email}"},"content":[{"type":"text/plain","value":"${req.body.message}"}]}`,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response);
      res.status(200).json({ message: 'Sent email successfully' });
    })
    .catch(function (error) {
      console.error(error);
      return res.status(400).send({
        message: 'There was an error processing your request'
     });
    });
}
