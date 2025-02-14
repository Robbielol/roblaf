require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const fs = require("fs");
const path = require("path");
const axios = require("axios");


const app = express();
app.use(express.json());

app.post("/api/add-email", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Email is required");
  }
  var validEmail = true;
  console.log("Adding email...");

  const filePath = path.basename("src/Data/JSON/emails.json");
  // Read existing emails
  let emailJson = [];
  try{
    if (fs.existsSync(filePath)) {
      console.log("File Path Exists...");
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

//Get Porjects from Github
app.put("/api/get-project-data", async (req, res) => {
  console.log("Updating client data...")
  let client = req.body.client;
  try {
    //Gets all projects from github
    const response = await axios.get(`https://api.github.com/users/robbielol/repos`, {
      headers:
      { 
        'Accept': 'application/vnd.github.v3+json',
        'Authorization' : 'token' +process.env.GITHUB_TOKEN //ENV
      }
    });
    //Compare to repo list to client.
    //Match names
    const matchingRepo = response.data.find(repo => repo.name.trim().toLowerCase() === client.clientName.trim().toLowerCase());
    //Add missing fields.
    if (matchingRepo) {
      const createdDate = 
      console.log("Repository found, updating data...");
      client["language"] = matchingRepo.language || "Unknown";
      client["description"] = matchingRepo.description || "No description";
      client["createdDate"] = Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}).format(new Date(matchingRepo.created_at)) || "Unknown";
    } else {
      console.log("No matching repo found for:", `"${client.clientName}"`);
    }

    return res.status(200).json(client); // Send updated client object

  } catch (error) {
    console.error("Error fetching repositories:", error.message);
    return res.status(error.response?.status || 500).json({ error: "Failed to fetch repositories." });
  }
});

//WRITE JSON TO FILE
app.post("/api/write-to-file", async (req, res) => {
  const { filePath, data } = req.body; // Extract file path and data from request
  if (!filePath || !data) {
      return res.status(400).json({ error: "Missing filePath or data in request body" });
  }
  //
  // Resolve the absolute path to prevent security risks
  const absolutePath = path.resolve(filePath);
  
  // Write data to file
  fs.writeFile(absolutePath, JSON.stringify(data, null, 2), (err) => {
      if (err) {
          console.error('Error writing file:', err);
          return res.status(500).json({ error: 'Failed to write file' });
      }
      res.status(200).json({ message: `File written successfully at ${absolutePath}` });
  });
})

app.listen(5000, () => {
  console.log("Server running on port 5000");
});