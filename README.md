TURTED_client
=============

#Update: Rewrite based on socket.io#

A client to communicate with a TURTED server

It consists of two files, "index.html" and "push.html"

#NOTE
TURTED is not primarily intended for pure chat applications (you can use plain socket.io or anything similar for that)

The goal is to have the client listen for events coming from the server (php, ...)

To achive that, you can send events from the appliaction server (php, ...) with an HTTP POST to the TURTED server (node.js) and it will forward the event to your users.

In this example, the "push.html" simulates the "application server" by sending the POST request to the TURTED server which then will be direct to the clients.

This example shows how to "ident" on the server (logging in with a username) and how to react on messages that are sent from push.html
