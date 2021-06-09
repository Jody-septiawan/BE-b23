const { user, product, order } = require('../../models')


exports.userProducts = async (req,res) => {
    try {
        const users = await user.findAll({
            include: {
                model: product,
                as: 'product',
                attributes: {
                    exclude: ['createdAt','updatedAt']
                }
            },
            attributes: {
              exclude: ['createdAt','updatedAt','password']
            }
          })

        res.send({
            status: 'success',
            message: 'User product Successfully Get',
            data: {
                users
            }
        })
    } catch (error) {
        console.log(error)
        res.status({
            status: 'failed',
            message: 'Server Error',
        })
    }
}

exports.addProduct = async (req,res) => {
    try {
        const { body } = req

        await product.create(body)

        res.send({
            status: 'success',
            message: 'Product Successfully Add'
        })

    } catch (error) {
        console.log(error)
        res.status({
            status: 'failed',
            message: 'Server Error',
        })
    }
}

exports.userOrders = async (req,res) => {
    // {
    //     model: Category,
    //     as: "categories",
    //     through: {
    //       model: CategoryProduct,
    //       as: "conjuction",
    //       attributes: []
    //     },
    //     attributes: {
    //       exclude: ["createdAt", "updatedAt"]
    //     }
    //   }
    try {
        const orders = await user.findAll({
            include: {
                model: product,
                as: 'product',
                through: {
                    model: order,
                    as: 'conjuction',
                    attributes: {
                        exclude: ['createdAt','updatedAt']
                    }
                },
                attributes: {
                    exclude: ['createdAt','updatedAt']
                }
            },
            attributes: {
              exclude: ['createdAt','updatedAt','password']
            }
          })

        res.send({
            status: 'success',
            message: 'User product Successfully Get',
            data: {
                orders
            }
        })
    } catch (error) {
        console.log(error)
        res.status({
            status: 'failed',
            message: 'Server Error',
        })
    }
}