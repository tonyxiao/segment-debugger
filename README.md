# Timeline of events

## Clarification: 9am - 1pm

## High-level System Architecture - 1:06pm

What’s going to need to happen on the client-side?
* Display an interface for raw user input (traits data, properties data)
* Allow switching library simulated and call type simulated
* Call server side endpoints to invoke server libraries as needed

What’s going to need to happen on the server-side?
* We need to execute code in different languages so that we can exercise different
Segment SDKs. Three approaches
1) Separate webservers in each of the different languages, implement the same HTTP API. 
Allow client to change hostname
2) Single server instance with all languages / SDK installed. Execute shell command to invoke different SDK
3) Single API web server that queues tracking tasks to be done. Write workers in different 
languages that can be delegated to by a queue manager. 

Given that this is a project used by the internal team, we want something super simple
to understand and maintain even if that means having duplicate code. So we'll go with
option (1).

How is data going to be passed between the client and the server?
* There's no need for anything complex like (e.g. real-time requirement). 
Simple request-response HTTP request will suffice here.

What order makes sense to build these?
* First build the client. Because we can build a completely client side app that
will allow simulation of all the events desired using Segment JS SDK. Once this 
works we know our UI works. That gives us a baseline to then build the server side.

## Setup client side foundation - 1:21pm

1:36pm
Decided to use react-redux-starter-kit. The number of starters out there is a little crazy,
let's just pick one and go with it. 