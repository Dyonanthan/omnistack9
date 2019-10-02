const Spot = require('../models/Spot')
const User = require('../models/User')
module.exports = {
    async index(req, res){
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });
        
        return res.json(spots);
    },
    async store(req, res){
        const { filname } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = User.findById(user_id)
        if(!user){
            res.status(400).json({
                error: 'User does not exists'
            })
        }

        const spot = await Spot.create({
            User: user_id,
            thumbnail: filname,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })
        console.log(req.body);
        console.log(req.file)
        return res.json(spot)
    }
};