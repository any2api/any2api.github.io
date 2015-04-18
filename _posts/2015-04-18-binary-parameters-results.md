---
layout: post
title: Binary Parameters and Results Supported
---

There is a new data type supported when defining the `parameters_schema` and `results_schema` of an executable inside an [API spec](/apispec): it's called **binary**, so you are no longer limited to text and structured data such as JSON and XML.
This enables the usage of images, videos, and any other binary data as input and output for an executable.
Generated API implementations transparently map and convert binary data according to the mapping information specified in the API spec.
Internally, binary data is either represented natively as a collection of bytes (e.g., [buffer](https://nodejs.org/api/buffer.html) or byte stream) or as Base64-encoded string if a certain interface is tied to textual strings.
