# node-practice
write a node application for practice

(from the Node Beginner Book):

### The use cases
* The user should be able to use our application with a web browser
* The user should see a welcome page when requesting http://localhost:8888/start which displays a file upload form
* By choosing an image file to upload and submitting the form, this image should then be uploaded to http://localhost:8888/upload, where it is displayed once the upload is finished

### The application stack
* We want to serve web pages, therefore we need an HTTP server
* Our server will need to answer differently to requests, depending on which URL the request was asking for, thus we need some kind of router in order to map requests to request handlers
* To fullfill the requests that arrived at the server and have been routed using the router, we need actual request handlers
* The router probably should also treat any incoming POST data and give it to the request handlers in a convenient form, thus we need request data handling
* We not only want to handle requests for URLs, we also want to display content when these URLs are requested, which means we need some kind of view logic the request handlers can use in order to send content to the user’s browser
* Last but not least, the user will be able to upload images, so we are going to need some kind of upload handling which takes care of the details