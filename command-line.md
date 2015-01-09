---
layout: page
title: Command-Line
weight: 15
---

First, you need to [install any2api-cli](/getting-started) to make the `any2api` command available on your machine. Alternatively, you can use a [Docker container](/getting-started#any2api-cli-docker) or [Vagrant VM](/getting-started#any2api-cli-vagrant) to run any2api-cli in an isolated environment. Either way `any2api` expects a *command* and (optionally) an arbitrary number of *options:*

    any2api [options...] <command>

The available options and commands are shown in the following.



## Commands

<dl>
  <dt><code>install &lt;type&gt; &lt;modules...&gt;</code></dt>
  <dd>Install given module(s) of the specified type (<em>scanner</em>, <em>invoker</em>, <em>generator</em>). A module is specified by its name (public npm module name), a directory path, or a URL.</dd>

  <dt><code>update &lt;type&gt; &lt;modules...&gt;</code></dt>
  <dd>Update given module(s) of the specified type (<em>scanner</em>, <em>invoker</em>, <em>generator</em>). A module is specified by its name.</dd>

  <dt><code>uninstall &lt;type&gt; &lt;modules...&gt;</code></dt>
  <dd>Uninstall given module(s) of the specified type (<em>scanner</em>, <em>invoker</em>, <em>generator</em>). A module is specified by its name.</dd>

  <dt><code>scan &lt;executables...&gt;</code></dt>
  <dd>Scan given executable(s) to produce an API spec. An executable is specified by a file path, a directory path, or a URL.</dd>

  <dt><code>gen &lt;apispec&gt;</code></dt>
  <dd>Generate an API implementation for the given API spec. The API spec is specified by a file path (<code>apispec.json</code>) or a directory path (containing the <code>apispec.json</code> file).</dd>
</dl>



## Options

<dl>
  <dt><code>-h, --help</code></dt>
  <dd>Show usage information.</dd>

  <dt><code>-V, --version</code></dt>
  <dd>Show version number.</dd>

  <dt><code>-o, --output &lt;dir&gt;</code></dt>
  <dd>Set output directory for the artifacts produced by a command (e.g., generated API spec, generated API implementation).</dd>

  <dt><code>-S, --scanner &lt;name&gt;</code></dt>
  <dd>Select scanner by name to analyze given executable(s) with the <code>scan</code> command.</dd>

  <dt><code>-r, --retrieve &lt;protocol&gt;</code></dt>
  <dd>Select protocol (e.g., <em>http</em>, <em>git</em>, <em>bazaar</em>) to retrieve executables specified by URL.</dd>

  <dt><code>-c, --copy</code></dt>
  <dd>Copy executable(s) to output directory, even in case they are already stored in the local filesystem.</dd>

  <dt><code>-G, --generator &lt;name&gt;</code></dt>
  <dd>Select generator by name to build an API implementation with the <code>gen</code> command.</dd>

  <dt><code>-s, --skip-prepare</code></dt>
  <dd>Skip preparing executables (e.g., downloading and packaging dependencies) when building an API implementation.</dd>

  <dt><code>-i, --interface &lt;interface&gt;</code></dt>
  <dd>Select type of interface (e.g., <em>rest</em>).</dd>

  <dt><code>-t, --impl-type &lt;type&gt;</code></dt>
  <dd>Select type of API implementation (e.g., <em>node</em>).</dd>

  <dt><code>--impl-title &lt;title&gt;</code></dt>
  <dd>Set title for API implementation.</dd>
</dl>



## Examples

Install all available scanner modules:

    any2api install scanner all

Install specific invoker module:

    any2api install invoker any2api-invoker-python

Update all available invoker modules:

    any2api update invoker all

See [Getting started](/getting-started) for more examples.
