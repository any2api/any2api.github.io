**⚠️ Legacy, not maintained anymore. Check [any2api.org](http://any2api.org) for recent developments. ⚠️**

----

# Command-Line Interface (CLI)

First, you need to [install any2api-cli](getstarted.md) to make the `any2api` command available on your machine. Alternatively, you can use a [Docker container](getstarted.md#alternative-run-any2api-cli-inside-docker-container) or [Vagrant VM](getstarted.md#alternative-run-any2api-cli-using-vagrant) to run any2api-cli in an isolated environment. Either way `any2api` expects a *command* and (optionally) an arbitrary number of *options:*

    any2api [options...] <command>

The available options and commands are shown in the following.



## Commands

* <code>install &lt;type&gt; &lt;modules...&gt;</code> Install given module(s) of the specified type (<em>scanner</em>, <em>invoker</em>, <em>generator</em>). A module is specified by its name (public npm module name), a directory path, or a URL.
* <code>update &lt;type&gt; &lt;modules...&gt;</code> Update given module(s) of the specified type (<em>scanner</em>, <em>invoker</em>, <em>generator</em>). A module is specified by its name.
* <code>uninstall &lt;type&gt; &lt;modules...&gt;</code> Uninstall given module(s) of the specified type (<em>scanner</em>, <em>invoker</em>, <em>generator</em>). A module is specified by its name.
* <code>scan &lt;executables...&gt;</code> Scan given executable(s) to produce an API spec. An executable is specified by a file path, a directory path, or a URL.
* <code>gen &lt;apispec&gt;</code> Generate an API implementation for the given API spec. The API spec is specified by a file path or a directory path (containing an <code>apispec.json</code> file).



## Options

* <code>-h, --help</code> Show usage information.
* <code>-V, --version</code> Show version number.
* <code>-o, --output &lt;dir&gt;</code> Set output directory for the artifacts produced by a command (e.g., generated API spec, generated API implementation).
* <code>-S, --scanner &lt;name&gt;</code> Select scanner by name to analyze given executable(s) with the <code>scan</code> command.
* <code>-r, --retrieve &lt;protocol&gt;</code> Select protocol (e.g., <em>http</em>, <em>git</em>, <em>bazaar</em>) to retrieve executables specified by URL.
* <code>-c, --copy</code> Copy executable(s) to output directory, even in case they are already stored in the local filesystem.
* <code>-G, --generator &lt;name&gt;</code> Select generator by name to build an API implementation with the <code>gen</code> command.
* <code>-s, --skip-prepare</code> Skip preparing executables (e.g., downloading and packaging dependencies) when building an API implementation.
* <code>-i, --interface &lt;interface&gt;</code> Select kind of interface (e.g., <em>rest</em>).
* <code>-t, --impl-type &lt;type&gt;</code> Select type of API implementation (e.g., <em>node</em>).
* <code>--impl-title &lt;title&gt;</code> Set title for API implementation.



## Examples

Install all available scanner modules:

    any2api install scanner all

Install specific invoker module:

    any2api install invoker any2api-invoker-python

Update all available invoker modules:

    any2api update invoker all

See [Getting started](getstarted.md) for more examples.
