---
layout: post
title: Generating Plugin-like APIs
---

The any2api framework focused on generating APIs in the sense of providing proper API endpoints such as serving a Web API through HTTP. We are currently working on extending this approach to support plugin-like APIs such as [Terraform modules](https://terraform.io/docs/modules), [Ruby gems](https://rubygems.org) or [OpenTOSCA plugins](https://github.com/OpenTOSCA). The goal is to generate APIs that are not running as dedicated processes (serving API endpoints), but can be used and integrated as any kind of plugin. As an example, an existing Chef cookbook could be wrapped as Terraform module or Ruby gem. This is to further simplify the usage and integration of any executable in the context of an arbitrary orchestration technique such as a Ruby script or a Terraform template.
