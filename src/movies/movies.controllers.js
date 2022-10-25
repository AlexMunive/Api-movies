const { response } = require('express')
const  uuid = require('uuid')
// const { UUID } = require('sequelize')
const Movies=require('../models/movies.models')

const getAllMovies = async()=> {
const data = await Movies.findAll()       //* findAll vota una rreglo
 return data
}

// getAllMovies()
//      .then((response)=>console.log(response))
//      .catch((err)=>console.log(err))


const createMovies=async(data)=>{
     const newMovies= await Movies.create({
        id: uuid.v4(),
        name: data.name,
        genre: data.genre,
        duration: data.duration,
        releaseDate: data.releaseDate
     })
     return newMovies
}

// createMovies({
//     name: 'las torutguitas del poder',
//     genre: 'Action, aventure',
//     duration: 180,
//     releaseDate: '2022/10/05'
// })
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

const getMoviesById= async(id)=>{
    const data = await Movies.findOne({                 //* te retorna un solo objeto
      where: {
          id                                            //* id : id
      }
    });  
    return data
}
// getMoviesById('84ad55c3-5e7a-4820-9419-21d32da25c42')
//     .then(response => console.log(response))
//     .catch(err => console.log(err))



const editMovie = async(id,data)=>{
    const response= await Movies.update(data,{
        where: {
            id:id
        },
    });
    return response
} 

// editMovie('84ad55c3-5e7a-4820-9419-21d32da25c42',{
//     name: "los pavistos del cono sur",
// })
//      .then(response => console.log(response))   
//      .catch(err => console.log(err))

const deleteMovie = async(id)=>{
    const data = await Movies.destroy({
        where:{
            id
        }
    })
    return data   //* si el where no encuentra nada, retorna null
}



module.exports={
    getAllMovies,
    createMovies,
    getMoviesById,
    editMovie,
    deleteMovie
}