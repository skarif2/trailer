'use strict';

import mongoose from 'mongoose';

var TrailerSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Trailer', TrailerSchema);
