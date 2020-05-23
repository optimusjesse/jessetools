# JESSE TOOLS

Personal wrappers around common - repetitive - things I do. As a learner, I find myself repeating a lot of things for each new project I create. Things like connecting to mongo, 
setting up mongo models, using handlebars e.t.c. 

Why I'm creating this is because half the time, I need to google the correct syntax to do mongoose connect and options to pass, or copy paste content from other model files e.t.c.
This tool helps me with that, now all I need to do is:
```
const jesseTools = require('jessetools');
jesseTools.mongoConnect('MONGODB_URI', (mongooseObject) => {
  //I can ddo anything extra here if I so wish
});
```
I no longer need to worry about the syntax or any of that. Similarly, to define mongo models, I don't need to worry about remembering schemaConfig syntax, all I need to do is:
```
jesseTools.mongoModel('users', (mongooseSchema) => {
  name: String, email: String, meta: mongooseSchema.Types.Mixed
}, (mongooseSchema, schemaConfig, schemaObject) => {
  //I can do anything extra here
})
```

For handlebars, which I use mostly for templating, I don't need to remember the chain of doing compile, and rendering .. all I now need to do is
```
jesseTools.hb('./path/to/my/template', {some:'data'});
```