var express = require('express');
var router = express.Router();



const mongoose = require('mongoose');

const path = require('path');

var nodemailer = require('nodemailer')








//mongoose schema//////////////////
// user schema //
const userSchema = new mongoose.Schema({
  prenom: { type:String, required:true},
  nom: { type:String,  required:true},
  email: { type:String,  required:true,  unique:true, },
  adresse:{ type:String,  required:true },
  telephone: { type:String,  required:true},
  password:{ type:String,  required:true },
  image: { type:String,},
  rights: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    client: {
      type: Boolean,
      default: true,
    },
    isVisitor: {
      type: Boolean,
      default: false,
    },
  },

});
const User = mongoose.model('User', userSchema)

// contatc shema // 
// const ContactSchema = new mongoose.Schema({
//   sujet: { type:String,  required:true},
//    email: { type:String,  required:true},
//   message:{ type:String,  required:true }
// });
// const Contact = mongoose.model('Contact', ContactSchema)

//////////////////////////////////////////////////////////////////////////////////////





/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET  plats. */
router.get('/plats', function(req, res, next) {
  res.render('plats', { title: 'Plats' });
});
/* GET preparations. */
router.get('/preparations', function(req, res, next) {
  res.render('preparations', { title: 'Préparations' });
});

/* GET réservation. */
router.get('/reservation', function(req, res, next) {
  res.render('reservation', { title: 'Réservation' });
});

/* GET réservation. */
router.get('/apropos', function(req, res, next) {
  res.render('apropos', { title: 'A propos' });
});

/* GET cgv page. */
router.get('/cgv', function(req, res, next) {
  res.render('cgv', { title: 'Conditions générale de vente' });
});

/* GET Livraison page. */
router.get('/livraison', function(req, res, next) {
  res.render('livraison', { title: 'Livraison' });
});


// COMPTE EMETTEUR EMAIL (hebergeur)
let transporter = nodemailer.createTransport({
  host: "delices-mauriciens.fr",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER, //  user
    pass: process.env.MAIL_PWD, //  password
  },
});

/* Post contact-send page */
router.post('/contact_send', async (req, res, next) => {

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: `${req.body.sujet}`,
    text: `${req.body.message}`,
    replyTo: `${req.body.email}`
  }
  transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
      console.error('there was an error: ', err);
    } else {
      console.log('here is the res: ', res)
    }
  });

  res.render('contact_send', {
    title: 'Contact_Send'
  });
});



module.exports = router;