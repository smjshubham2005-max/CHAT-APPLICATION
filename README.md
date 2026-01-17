# Real-Time Chat Application

*COMPANY* : CODETECH IT SOLOUTIONS

*NAME* : SHUBHAM MAHESH JOSHI

*INTERN ID* : CTIS2688

*DOMAIN* : FULL STACK WEB DEVLOPMENT

*DURATION* : 4 WEEKS 

*MENTOR* : NEELA SANTOSH

As part of my internship, I was assigned Task 2, which involved developing a real-time chat application using WebSocket technology, specifically Socket.IO. The objective of this task was to understand how real-time communication works in web applications and to build a system where multiple users can communicate instantly through a browser interface.

The core idea behind this task was to go beyond static web pages and explore how data can be exchanged continuously between a client and a server without refreshing the page. In traditional web applications, communication usually happens only when a user sends a request and the server responds. However, in a real-time chat application, the server and clients remain connected, allowing messages to be sent and received instantly. This task helped me understand that difference clearly.

For the backend of the application, I used Node.js along with the Express framework. Express was used to create a simple server that serves the frontend files and handles incoming connections. To enable real-time communication, Socket.IO was integrated on top of the HTTP server. Socket.IO allows the server to listen for events such as a new user connecting or a message being sent, and then broadcast those events to all connected users in real time.

Whenever a user opens the application in the browser, a connection is established between the client and the server using Socket.IO. When a user sends a message, the message is emitted as an event from the client to the server. The server listens for this event and immediately broadcasts the message to all other connected clients. This ensures that every user sees the message instantly without reloading the page. A small system message is also displayed when a new user joins the chat, which helps make the interaction clearer and more user-friendly.

On the frontend side, the application was built using basic HTML, CSS, and JavaScript. The HTML provides the structure of the chat interface, including the message display area and the input field for sending messages. JavaScript is used to connect the frontend to the backend through Socket.IO and handle events such as sending and receiving messages. CSS was used to style the interface, keeping it clean and simple while ensuring that it is visually clear and easy to use.

The application interface displays all chat messages in a dedicated message area, and users can type messages into an input box and send them using a button. Once a message is sent, it appears immediately on all open instances of the application, demonstrating the real-time functionality of the system. The design was intentionally kept minimal to focus more on functionality and clarity rather than complex visual elements.

This task helped me gain practical exposure to real-time web technologies and understand how frontend and backend systems interact continuously. I learned how event-driven communication works, how Socket.IO manages client-server connections, and how real-time data flow differs from traditional request-response models. Additionally, the task improved my understanding of project structure, dependency management, and version control using Git.

Overall, Task 2 was a valuable learning experience that strengthened my understanding of real-time application development. It demonstrated how modern web applications handle live data exchange and gave me hands-on experience in building a functional, real-time chat system with proper frontend and backend integration.
