let dataUser = [
    {
        id: 1,
        name: 'Yosep Alexander',
        email: 'yosep@gmail.com'
    },
    {
        id: 2,
        name: 'Ilham Adi',
        email: 'ilham_adi@gmail.com'
    },
    {
        id: 3,
        name: 'Elga',
        email: 'elga@gmail.com'
    }
]

exports.getData = (req,res) =>{
    res.send({
        status: 'success',
        data: dataUser
    })
}

exports.getDetail = (req,res) => {
    const id = req.params.id

    const data = dataUser.find((data) => data.id == id)

    if(data){
        res.send({
            status: 'success',
            data
        })

    }else{
        res.send({
            status: 'failed',
            message: 'Data not found'
        })
    }
}

exports.addData = (req,res)=>{
    const { body } = req

    dataUser = [...dataUser, body]

    res.send({
        status: 'success',
        data: body
    })
}



exports.updateData = (req,res) => {
    const { id } = req.params
    const { body } = req

    const data = dataUser.find((data) => data.id == id)

    if(!data){
        return res.send({
            status: 'failed',
            message: `Data with id: ${id} not existed`
        })
    }

    const updateData = dataUser.map((data) => {
        return data.id == id ? body : data
    })

    dataUser = updateData

    res.send({
        status: 'success',
        message: 'Data user Successfully Updated',
        data: body
    })
}

exports.deleteData = (req,res) => {
    const { id } = req.params
    
    const newData = dataUser.filter((data) => data.id != id)

    dataUser = newData

    res.send({
        status: 'success',
        message: 'Data user Successfully Delete',
        data: newData
    })
}