---
pcx_content_type: navigation
title: Known limitations 
sidebar:
  order: 3
  group:
    hideIndex: false
---

Workers tracing is currently in open beta. This page documents current limitations and any features on our roadmap. To provide more feedback and feature requests please [reach out to us](link).

### Support for more spans and attributes 
We are adding more automatic instrumentation for every part of the Workers platform. While we first want to give you visibility into the duration of every operation w ithin your request, we also want to add more detailed attributes which are crucial to debugging your app. You can find a complete list of what is already instrumented [here](link). Your feedback on what’s missing will be extremely valuable [here](link).

### Trace context propagation 
One of the most critical aspects of distributed tracing is ensuring trace context flows seamlessly across service boundaries and automatically linking spans together to create complete, end-to-end visibility. When fully implemented, our automatic trace context propagation will follow W3C standards to ensure compatibility across your existing tools and services. 

### Support for custom spans and attributes: 
While automatic instrumentation covers the platform interactions, we know you need visibility into your own application logic too. We're working on the ability to create custom spans around your use case and other application-specific operations that matter most to your debugging workflow.
