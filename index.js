const Handlebars = require("handlebars");
const fs = require('fs');
const mg = require('mongoose');

function connectMongo(url, callback) {
  const mgConnectOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
  mg.connect(url, mgConnectOptions);
  if (callback) {
    callback(mg);
  }
}

function setupMongoModel(model, configFunc, callback) {
  const modelName = model;
  const { Schema } = mg;
  const schemaConfig = configFunc(Schema); //cb returns the schema config
  const schemaObject = new Schema(schemaConfig);
  if(callback) {
    callback(Schema, schemaConfig, schemaObject);
  }
  return mg.model(modelName, schemaObject);
}

function handlebarsRenderer(templatePath, data) {
  const templateData = fs.readFileSync(templatePath, { encoding: 'utf8' });
  const template = Handlebars.compile(templateData);
  return template(data);
}


module.exports = {
  hb: handlebarsRenderer,
  mongoConnect: connectMongo,
  mongoModel: setupMongoModel
}