TURTED_client
=============

# Update: Rewrite based on socket.io 

A client to communicate with a TURTED server

The example consists of two files, "index.html" and "push.html"

# NOTE
TURTED is not primarily intended for pure chat applications (you can use plain socket.io or anything similar for that)

The goal is to have the client listen for events coming from the application server (php, ...)

To achive that, you can send events from the appliaction server (php, ...) with an HTTP POST to the TURTED server (node.js) and it will forward the event to your users.

In this example, the "push.html" simulates the "application server" by sending the POST request to the TURTED server. The event will then be redirected to the clients.

# This example

This assumes that you are running a local node server according to https://github.com/TURTED/TURTED_node/tree/master/examples
by running `node server.js`

Open index.html in one tab/browser and push.html in another
For extended fun, open index.html in MANY tabs

## index.html
This example shows how to "ident" on the server (logging in with a username) and how to react on messages that are sent from push.html

## push.html
You can configure your "payload" here and then push the event to the TURTED server so it can be forwarded to the clients
