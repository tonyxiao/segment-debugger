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

## Start Implementing

1:21pm
Researching what frameworks / tools to use

1:36pm
Decided to use react-redux-starter-kit. The number of starters out there is a little crazy,
let's just pick one and go with it. 

2:15pm
A bit hungry, going for lunch

2:45pm
Back from lunch / watercooler chat.

4:32pm
It's been 3 hours already. I feel I should have been done by now. 
Realizing that I'm spending way more time on the nitty gritty details of application architecture
rather than on the actual business logic of implementing this debugger. Let's review the goals again

We’re going to evaluate you on the following dimensions:
* getting something that works end-to-end that sends data to 'segment/testing' using our real server-side library
* because this will take arbitrary text, we’d like to see you validate your inputs and handle error cases (use your judgment on how to handle!)
* we’d like to see a simple/clear API design between the frontend and the backend
* bonus points for figuring out how to send to multiple different kinds of server-side libraries

Using fancy libraries and maximizing for long term developer productivity is NOT one of the dimensions that's
deemed important by the business. 

In fact, if the goal of the project is to evaluate code I write, having a ton of code I did not write from the boilerplate
is only going to make it more difficult to evaluate. 

Take a step back, what's the simplest way to accomplish business objectives?

4:45pm
Let's go for another coffee.

4:57pm
Ok back in the seat. TJ hesitate to point people in any direction at all because
whatever direction we point you in is always gonna lead you down a rabbit hole.
Apparently Calvin has wrote about this - https://segment.com/blog/the-deep-roots-of-js-fatigue/

5:10pm
Ok decision time. Let's aim to have an end-to-end working ASAP and think
about cleanup / validation / architecture later. Fastest way to end-to-end is not 
to cause any more churn and go down the current (albeit non-optimal route)

7:17pm
Ok actually got something done for once. Able to send request from client through our own server 
to segment's server end to end...

7:18pm
Time for a little beer break :) 

7:30pm 
Back to work

8:15pm
Get some dinner

9:03pm
Back to work again 

12:30am
Basically end to end, but let's try to test some edge cases. What if we pass invalid writekey?

1:08am
Logging some more issues
https://github.com/segmentio/analytics-node/issues/59

1:30am
