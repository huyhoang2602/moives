const Movie = require('../models/movies');

const movieController = {
    movieGetAll: async (req,res) => {
        try{
            const allmovie = await Movie.findAll();
            return res.status(200).json(allmovie);
        }catch(err){
            return res.status(403).json(err);
        }    
    },
}
module.exports = movieController;