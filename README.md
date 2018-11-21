# Kinaxis

This version of the graph is virtually the same as the other, except from the fact it is using node modules only to get the web app up and running.

Note: Be sure to backup the node_modules folder before running 'npm install' since, the Kinaxis and CanvasJS modules were not published to NPM.

There are two custom modules in the node_modules folder. Add the other ones by doing:

>> npm install

That should take a while, expect about 130 dependencies or so.

Note: At this point, copy the kinaxis and canvasjs folder inside the node_modules directory.

Once that is done, serve the JSON resource via HTTP by doing:

>> grunt serve

Then run the build by doing:

>> grunt build

Note: You must access the index.htm directly once the build is done. Meaning you should simply open it in your browser using the file protocol.
