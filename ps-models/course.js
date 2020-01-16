'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    uuid: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    learn: DataTypes.ARRAY(DataTypes.STRING),
    content: DataTypes.ARRAY(DataTypes.STRING),
    requirements: DataTypes.ARRAY(DataTypes.STRING),
    nameCourse: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};