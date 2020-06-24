# 12FACTOR APP :

In the modern era, software is commonly delivered as a service: called web apps, or software-as-a-service. The twelve-factor app is a methodology for building software-as-a-service apps that:

* Use declarative formats for setup automation, to minimize time and cost for new developers joining the project;
* Have a clean contract with the underlying operating system, offering maximum portability between execution environments;
* Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration;
* Minimize divergence between development and production, enabling continuous deployment for maximum agility;
* And can scale up without significant changes to tooling, architecture, or development practices.

The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services (database, queue, memory cache, etc).

### The Twelve Factors
1. **Codebase:** One codebase tracked in revision control, many deploys
1. **Dependencies:** Explicitly declare and isolate dependencies
1. **Config:** Store config in the environment
1. **Backing services:** Treat backing services as attached resources
1. **Build, release, run:** Strictly separate build and run stages
1. **Processes:** Execute the app as one or more stateless processes
1. **Port binding:** Export services via port binding
1. **Concurrency:** Scale out via the process model
1. **Disposability:** Maximize robustness with fast startup and graceful shutdown
1. **Dev/prod parity:** Keep development, staging, and production as similar as possible
1. **Logs:** Treat logs as event streams
1. **Admin processes:** Run admin/management tasks as one-off processes
