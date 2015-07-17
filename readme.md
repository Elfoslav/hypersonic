![image](https://github.com/gearz-lab/gearz/blob/master/assets/gearz.png)

Gearz is a platform for developing data-centric business applications.

**Stack:**

 - [React.js](https://facebook.github.io/react/)
 - [Express.js](http://expressjs.com/)
 - [Node.js](https://nodejs.org/)
 - [RethinkDB](http://rethinkdb.com/)

**Project status**

Gearz is under development. 1.0 release is planned for 2016 Q3. For more details, please refer to the [roadmap](https://github.com/gearz-lab/gearz/milestones).
 
About
---

Gearz is not a library, nor a framework. It is a platform. The most important thing to understand is that Gearz is not 
suited for any type of applications, it is a platform for creating *data-centric business applications*. So, what is this?
It's any application which the primary goal is to allow the user to manipulate entities. It allows users to input
data, search and compile the information into charts and reports. It's a management system. The entities that the users manipulate depend on the
application niche. If we're talking about a CRM, for instance, there will probably be entities for Customer, Organization, Lead and Sale.
The universe of entities that the user can manipulate is called the `Application Domain`.
  
Fortunately, virtually every *data-centric business application* share most of it's DNA, 
regardless of the application domain. It doesn't matter which entities the application handles, there's
always a plethora of common problems that have to be tackled:
 
 - Authentication.
 - Authorization / Access Control.
 - API and integration.
 - Auditing / Change Tracking.
 - Dynamic SCRUD forms (search, create, read, update and delete).
 - Custom entities and forms.
 - Charts.
 - Reports.
   
Gearz aims to provide you with the tools you need to create a successful application without having to deal with all these
hurdles.
 
Why do we need another platform?
---

There are some amazing platforms on the market already. Some examples are:

 - [SalesForce1](https://developer.salesforce.com/platform/overview)
 - [Visual Studio LightSwitch](https://msdn.microsoft.com/en-us/library/lightswitch.aspx)

We truly respect these platforms. However, an interesting thing about technology is that, once a more modern and powerful 
underlying technology arrives, it creates room for improvement. Some times, corporates are not dynamic enough to reshape
 on time. That enables new ideas and projects to rise. Besides, Gearz is free, even for commercial use, and it's based 
 solely on free-to-use components.
 
Gearz is based on a modern stack. Designed for creating dynamic, real-time and responsive apps:

Node.js is [showing an unprecedented growth](http://apmblog.dynatrace.com/2015/04/09/node-js-is-hitting-the-big-time-in-enterprise-markets/)
. It's amazing how powerful is the community behind [NPM](https://www.npmjs.com/). We all love the security of static-typed languages, but experience is 
showing that, for dynamic applications, with the need for dynamic schemas, maybe a dynamic language like JavaScript is a better
fit.

Facebook's React.js is amazing. It fits perfectly for creating reactive and responsive client-side components. One of
the reasons it excels is the ability to render the app both in the server and in the client, which is called "isomorphic" behavior.
As a bonus, it's learning curve is incredibly low.
 
RethingDB is perfect for variable schema applications. It's reliable, really easy to shard and replicate and it
 supports server-side joins. As a bonus, it's possible to subscribe for data change, which makes it a perfect fit for
 real-time applications.




 
