const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong = await connection('ong').select('*');
        return response.json(ong);
    },
    
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();

        await connection('ong').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
};