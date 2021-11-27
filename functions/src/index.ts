import * as functions from "firebase-functions";
// import { initializeApp } from "firebase-admin";

// import { WebhookClient } from "dialogflow-fulfillment";
import dialogflow from "@google-cloud/dialogflow";
import { WebhookClient } from "dialogflow-fulfillment";
import { v4 } from "uuid";

import { secret } from "./secret";

/*
initializeApp({
  credential: secret,
  databaseURL: "https://recipi-next.firebaseio.com",
});*/

const configuration = {
  credentials: {
    private_key: secret.private_key,
    client_email: secret.client_email,
  },
};

const languageCode = "en-US";

export const chatbot = functions
  .region("europe-west3")
  .https.onCall(async (data, ctx) => {
    const sessionId = v4();
    const projectId = "recipi-next";

    const sessionClient = new dialogflow.SessionsClient(configuration);
    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      sessionId
    );

    console.log(data);

    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: data,
          // The language used by the client (en-US)
          languageCode,
        },
      },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;

    return result;
  });

export const dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request, response) => {
    const agent = new WebhookClient({ request, response });
    const intentMap = new Map();

    intentMap.set("Default Fallback Intent", () => {
      agent.add("Sorry, I do not understand!");
    });

    agent.handleRequest(intentMap);
  }
);
