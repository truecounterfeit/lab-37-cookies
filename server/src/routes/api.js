'use strict';

// http://localhost/api/todo

const express = require('express');
const bodyParser = require('../lib/middleware/body-parser');
const requireDir = require('require-dir');
const bearerAuth = require('../lib/middleware/bearer-auth');

const models = requireDir(__dirname + '/../models/');

const apiRouter = module.exports = express.Router();

apiRouter.get('/api/:model', bearerAuth, (req,res,next) => {

  try {

    let model = getModel(req);

    model.find({})
      .then( records => res.send(records) )
      .catch(next);


  }
  catch(e) {
    next(e.message);
  }

});

apiRouter.get('/api/:model/:id', bearerAuth, (req,res,next) => {

  try {

    let model = getModel(req);
    let id = req.params.id;

    model.findOne({_id:id})
      .then( record => res.send(record) )
      .catch(next);

  }
  catch(e) {
    next(e.message);
  }

});


apiRouter.post('/api/:model', bodyParser, bearerAuth, (req,res,next) => {

  try {

    let model = getModel(req);

    let newRecord = new model(req.body);

    newRecord.save()
      .then(record => res.send(record) )
      .catch(err => next(err));

  }
  catch(e) {
    next(e.message);
  }

});


apiRouter.put('/api/:model/:id', bodyParser, bearerAuth, (req,res,next) => {

  try {

    let model = getModel(req);
    let id = req.params.id;

    model.findOne({_id:id})
      .then( record => {
        Object.assign(record, req.body);
        return record.save();
      })
      .then( record => {
        if( req.files && req.files.length && typeof record.attachFiles == 'function' ) {
          return record.attachFiles(req.files);
        }
      })
      .then( record => res.send(record) )
      .catch(next);

  }
  catch(e) {
    next(e.message);
  }

});


apiRouter.delete('/api/:model/:id', bearerAuth, (req,res,next) => {

  try {

    let model = getModel(req);
    let id = req.params.id;

    model.remove({_id:id})
      .then( () => res.send('Record Deleted') )
      .catch({statusCode:500,message:'I have no idea whats wrong'});

  }
  catch(e) {
    next(e.message);
  }

});

// UTIL FUNCTIONS //
let getModel = (req, next) => {

  if ( req.params.model && models[req.params.model] ) {
    return models[req.params.model];
  }

  throw new Error('Invalid Model Specified: ' + req.params.model);


};
