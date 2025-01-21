require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

app.post("/api/add-email", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Email is required");
  }
  var validEmail = true;
  console.log("Adding email...");

  const filePath = path.join(__dirname, "emails.json");
  // Read existing emails
  let emailJson = [];
  try{
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      emailJson = JSON.parse(data);
    }
    
    //Check file contents for email
    if(emailJson != null){
      emailJson.map((item) => { 
        item.email;
        if (item.email == email){
          validEmail = false;
          return;
        }
      });
    }
    
    //Don't add email if exsists
    if(!validEmail){
      console.log("Email already exsists...");
      res.status(200).send("Email already exists");
      return;
    }
  
    // Add new email
    emailJson.push({ email });
    fs.writeFileSync(filePath, JSON.stringify(emailJson, null, 2));
    console.log("Email added...");
    res.status(200).send("Email added successfully");
  } catch (error) {
    console.error(error)
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});