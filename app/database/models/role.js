"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      /*   Role.hasMany(models.User, {
        foreignKey: "id_role",
        as: "users",
      }) */
    }
  }
  Role.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Role",
    }
  )
  return Role
}
