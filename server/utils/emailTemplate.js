exports.eMessage = async (name, email, subject, message) => {
  const html = `
      <!DOCTYPE html>
       <html lang ="en">
       <head>
           <title> Contact Us Form</title>
       </head>
       <body>
          <h2>someone wats to get in touch with you</h2>

         <div>
             Name: ${name}
             Email: ${email}
            Subject: ${subject}
            Message: ${message}
        </div>
  </body>
  </html>
  `;

  return html;
};
