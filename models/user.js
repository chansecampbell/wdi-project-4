var mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');
var validator     = require("validator");

var userSchema = mongoose.Schema({

    firstName: { type: String },
    lastName: { type: String },
    picture: { type: String },
    facebookId: { type: String },
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String },
    age: { type: Number },
    location: { type: String },
    journeys: [{type: mongoose.Schema.ObjectId, ref: 'Journey'}],
    countries: [{type: mongoose.Schema.ObjectId, ref: 'Country'}]
  });

userSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.passwordHash, null);
};

userSchema.virtual('password')
  .set(function(password){
    this._password    = password;
    this.passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  });

userSchema.virtual('passwordConfirmation')
  .set(function(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.path('passwordHash').validate(function(){
  if (this.isNew){
    if (!this._password){
      this.invalidate('password', 'Password is required');
    }
    if (this._password.length < 6){
      this.invalidate('password', 'Password must be longer than 6 characters.');
    }
    if (this._password !== this._passwordConfirmation){
      this.invalidate('passwordConfirmation', 'Passwords must match');
    }
  }
  });

userSchema.path('email')
  .validate(function(email){
    if (!validator.isEmail(email)){
      this.invalidate('email', 'must be a valid email address');
    }
  });

userSchema.set('toJSON', {
  transform: function(doc, ret, options){
      delete ret.passwordHash;
      return ret;
   }
  });

module.exports = mongoose.model("User", userSchema);
