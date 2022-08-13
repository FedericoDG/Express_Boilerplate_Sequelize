const {
  User,
  Role,
  Order,
  Detail,
  Product,
  Payment,
} = require("../database/models")

const users = {}

users.create = (newuser) => User.create(newuser)

users.getAll = () =>
  User.findAll({
    attributes: [
      "id",
      "name",
      "email",
      "phone",
      "address",
      "createdAt",
      "updatedAt",
    ],
    include: [
      {
        model: Role,
        as: "role",
        attributes: ["id", "name"],
      },
      {
        model: Order,
        as: "orders",
        attributes: ["id", "total", "status", "createdAt", "updatedAt"],
        include: [
          {
            model: Detail,
            as: "products",
            include: {
              model: Product,
              as: "product",
              attributes: ["id", "name", "price_delivery"],
            },
            attributes: ["quantity"],
          },
          {
            model: Payment,
            as: "payments",
            attributes: ["id", "type"],
          },
        ],
      },
    ],
  })

users.getById = (id) => {
  return User.findOne({
    where: { id },
    attributes: [
      "id",
      "name",
      "email",
      "phone",
      "address",
      "createdAt",
      "updatedAt",
    ],
    include: [
      {
        model: Role,
        as: "role",
        attributes: ["id", "name"],
      },
      {
        model: Order,
        as: "orders",
        attributes: ["id", "total", "status", "createdAt", "updatedAt"],
        include: [
          {
            model: Detail,
            as: "products",
            include: {
              model: Product,
              as: "product",
              attributes: ["id", "name", "price_delivery"],
            },
            attributes: ["quantity"],
          },
          {
            model: Payment,
            as: "payments",
            attributes: ["id", "type"],
          },
        ],
      },
    ],
  })
}

users.getOne = (key, value) => User.findOne({ where: { [key]: value } })

users.update = (id, user) => User.update({ ...user }, { where: { id } })

users.delete = (id) => User.destroy({ where: { id } })

module.exports = users
