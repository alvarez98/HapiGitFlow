'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define('Feedback', {
    uuid: DataTypes.STRING,
    uuidUser: DataTypes.STRING,
    uuidEvent: DataTypes.STRING,
    score: DataTypes.INTEGER,
    feedback: DataTypes.STRING
  }, {});
  Feedback.associate = function(models) {
    // associations can be defined here
  };
  return Feedback;
};