# How a REQUEST get served

**Overview**
HTTP is a protocol which allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance text, layout description, images, videos, scripts, and more.

**Components of HTTP-based systems**
![Client-server-chain](https://user-images.githubusercontent.com/60124711/72879388-c31f1d00-3d22-11ea-8f60-fdae51fe0804.png)

**1.Client: the user-agent**
The user-agent is any tool that acts on the behalf of the user. This role is primarily performed by the Web browser; other possibilities are programs used by engineers and Web developers to debug their applications.
The browser is always the entity initiating the request. It is never the server (though some mechanisms have been added over the years to simulate server-initiated messages).

**2.The Web server**
On the opposite side of the communication channel, is the server, which serves the document as requested by the client. A server appears as only a single machine virtually: this is because it may actually be a collection of servers, sharing the load (load balancing) or a complex piece of software interrogating other computers (like cache, a DB server, or e-commerce servers), totally or partially generating the document on demand.

**3.Proxies**
Between the Web browser and the server, numerous computers and machines relay the HTTP messages. Due to the layered structure of the Web stack, most of these operate at the transport, network or physical levels, becoming transparent at the HTTP layer and potentially making a significant impact on performance. Those operating at the application layers are generally called proxies. These can be transparent, forwarding on the requests they receive without altering them in any way, or non-transparent, in which case they will change the request in some way before passing it along to the server. Proxies may perform numerous functions:

* caching (the cache can be public or private, like the browser cache)
* filtering (like an antivirus scan or parental controls)
* load balancing (to allow multiple servers to serve the different requests)
* authentication (to control access to different resources)
* logging (allowing the storage of historical information)

# HTTP flow

When a client wants to communicate with a server, either the final server or an intermediate proxy, it performs the following steps:
1. **Open a TCP connection:** The TCP connection is used to send a request, or several, and receive an answer. The client may open a new connection, reuse an existing connection, or open several TCP connections to the servers.
1. **Send an HTTP message:** HTTP messages (before HTTP/2) are human-readable. With HTTP/2, these simple messages are encapsulated in frames, making them impossible to read directly, but the principle remains the same. 
For example:
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
1. **Read the response sent by the server, such as:**
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html
1. **Close or reuse the connection for further requests.**
If HTTP pipelining is activated, several requests can be sent without waiting for the first response to be fully received.

# HTTP Messages

HTTP messages, as defined in HTTP/1.1 and earlier, are human-readable. In HTTP/2, these messages are embedded into a binary structure, a frame, allowing optimizations like compression of headers and multiplexing

## Requests
An example HTTP request:

![HTTP_Request](https://user-images.githubusercontent.com/60124711/72881000-f3b48600-3d25-11ea-9597-ddc5a4a6939e.png)

**Requests consists of the following elements:**

* An HTTP method, usually a verb like GET, POST or a noun like OPTIONS or HEAD that defines the operation the client wants to perform. Typically, a client wants to fetch a resource (using GET) or post the value of an HTML form (using POST), though more operations may be needed in other cases.
* The path of the resource to fetch; the URL of the resource stripped from elements that are obvious from the context, for example without the protocol (http://), the domain (here, developer.mozilla.org), or the TCP port (here, 80).
* The version of the HTTP protocol.
* Optional headers that convey additional information for the servers.
* Or a body, for some methods like POST, similar to those in responses, which contain the resource sent.

## Responses
An example response:
![HTTP_Response](https://user-images.githubusercontent.com/60124711/72881236-6291df00-3d26-11ea-99fe-093dce1fe18c.png)
**Responses consist of the following elements:**

* The version of the HTTP protocol they follow.
* A status code, indicating if the request was successful, or not, and why.
* A status message, a non-authoritative short description of the status code.
* HTTP headers, like those for requests.
* Optionally, a body containing the fetched resource
