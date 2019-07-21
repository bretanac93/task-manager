const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true },
);

UserSchema.pre('save', function (next) {
  try {
    const user = this;
    if (user.isModified('password')) {
      return next();
    }
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
});

UserSchema.methods.comparePassword = function (pass, next) {
  try {
    const match = bcrypt.compareSync(pass, this.password);
    next(null, match);
  } catch (error) {
    next(error);
  }
};

module.exports = model('User', UserSchema);
