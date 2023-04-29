const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, nombre, apikey, limit, page = '1' } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        limit,
        page
    })
};

const usuariosPut = (req, res = response) => {
    const { id }= req.params;

    res.status(400).json({
        msg: 'put API',
        id
    })
};

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API',
        nombre,
        edad
    })
};

const usuariosDelete = (req, res = response) => {
    const { id }= req.params;

    res.json({
        msg: 'delete API',
        id
    })
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    })
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}