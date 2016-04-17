'use strict';

import mongoose from 'mongoose';

var TrailerSchema = new mongoose.Schema({
  title: String,
  Description: String,
  director: [String],
  cast: [String],
  writer: [String],
  studio: String,
  duration: String,
  genre: [String],
  release: { type: Date },
  postedOn: { type: Date, default: Date.now},
  views: Number,
  posterUrl: String,
  trailerUrl: String,
  imdbUrl: String,
  officialUrl: String,
  likes: Number,
  fbShare: Number,
  twShare: Number,
  gpShare: Number,
  commentCount: Number,
  comments: [{
    csName: String,
    csComment: String
  }]
});

export default mongoose.model('Trailer', TrailerSchema);
