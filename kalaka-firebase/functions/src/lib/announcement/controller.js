
const { Expo } = require('expo-server-sdk');
const admin = require('firebase-admin');

function postAnnouncement(req, res) {
    const message = req.body.message
    let success = true;
   
    let somePushTokens = [];

    let db = admin.firestore();

    db.collection('heroe').where("active", "==", true).get().then((snapshot) => {
      snapshot.forEach((doc) => {
        somePushTokens.push(doc.id)
      });
      sendNot(somePushTokens, message)
      return true
    }).catch((err) => {
      console.log('Error getting documents', err);
    });
    return res.status(success ? 200 : 404)
    .json({
        success,
        data:{
            message
        }
    })
  }
function sendNot(somePushTokens, message, data) {
    console.log(somePushTokens);
    
    // Create a new Expo SDK client 
    let expo = new Expo();
    
    let messages = [];

    for (let pushToken of somePushTokens) {
        // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]
      
        // Check that all your push tokens appear to be valid Expo push tokens
        if (!Expo.isExpoPushToken(pushToken)) {
          console.error(`Push token ${pushToken} is not a valid Expo push token`);
          continue;
        }
      
        // Construct a message (see https://docs.expo.io/versions/latest/guides/push-notifications.html)
        messages.push({
          to: pushToken,
          sound: 'default',
          body: message,
          data: { withSome: 'data' },
        })
      }


    // The Expo push notification service accepts batches of notifications so
    // that you don't need to send 1000 requests to send 1000 notifications. We
    // recommend you batch your notifications to reduce the number of requests
    // and to compress them (notifications with similar content will get
    // compressed).
    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];
    (async () => {
    // Send the chunks to the Expo push notification service. There are
    // different strategies you could use. A simple one is to send one chunk at a
    // time, which nicely spreads the load out over time:
    for (let chunk of chunks) {
        try {
        let ticketChunk =  expo.sendPushNotificationsAsync(chunk);
        console.log(ticketChunk);
        tickets.push(...ticketChunk);
        // NOTE: If a ticket contains an error code in ticket.details.error, you
        // must handle it appropriately. The error codes are listed in the Expo
        // documentation:
        // https://docs.expo.io/versions/latest/guides/push-notifications#response-format
        } catch (error) {
        console.error(error);
        }
    }
    })();
}

module.exports = {
    postAnnouncement
}