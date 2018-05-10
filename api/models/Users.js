const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'First Name is required.']
  },
  lastName: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Last Name is required.']
  },
  annualSalary: {
    type: Number,
    required: [true, 'Annual Salary is required.']
  },
  superRate: {
    type: Number,
    required: [true, 'Super Rate is required.']
  },
  paymentStartDate: {
    type: Date,
    required: [true, 'Payment Start Date is required.']
  },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;