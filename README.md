# Docker Node Example

This is a `node` alternative to the `flask` app created for MLH Localhost Intro
to Docker workshops at Kano. Available at [https://github.com/AminuSufi585/docker-node-example][1]

## Running the Example

To run this example, you need to build the Docker Image first. To do so, run
the following command:

```
$ docker build -t aminukano/node-example .
```

After you've built the image, you can run it as follows:

```
$ docker run -d -p 8888:5000 aminukano/node-example
```

The website should now be accessible at [http://localhost:5000/][2].

## License

This code was released under the MIT License, Copyright (c) 2018 Aminu Kano
fb.com/ameenukano585.

[1]: https://github.com/AminuSufi585/docker-node-example
[2]: http://localhost:5000