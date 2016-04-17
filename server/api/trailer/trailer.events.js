/**
 * Trailer model events
 */

'use strict';

import {EventEmitter} from 'events';
import Trailer from './trailer.model';
var TrailerEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TrailerEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Trailer.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TrailerEvents.emit(event + ':' + doc._id, doc);
    TrailerEvents.emit(event, doc);
  }
}

export default TrailerEvents;
