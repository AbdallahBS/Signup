const nodemailer = require('nodemailer');


const signup = async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      let message = {
        from: '" Abdallah" <abenssalem32@gmail.com>', // sender address
        to: "user@example.com", // list of receivers
        subject: "signup",
        text: "signup succesfully",
        html: "<b>succesfully</b>", 
      }
      transporter.sendMail(message).then((info)=>{
        return res.status(201).json({msg :"you should recive an email",
                                    info : info.messageId,
                                    preview :nodemailer.getTestMessageUrl(info)});
      }).catch(error =>{
        return res.status(500).json({error});
      })
   // res.status(201).json("Signup succesfully");
}

module.exports = {
    signup,

}