const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
require("dotenv").config();

const { handleMessage } = require("./commands/lara.js");

const app = express().use(bodyParser.json());

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

// استقبال الرسائل من ماسنجر
app.post("/webhook", (req, res) => {
  let body = req.body;

  if (body.object === "page") {
    body.entry.forEach(entry => {
      let event = entry.messaging[0];
      let sender = event.sender.id;

      if (event.message && event.message.text) {
        handleMessage({ body: event.message.text }, sender);
      }
    });

    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
});

// التحقق من Webhook
app.get("/webhook", (req, res) => {
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});

app.listen(3000, () => console.log("Lara Messenger Bot Running"));
