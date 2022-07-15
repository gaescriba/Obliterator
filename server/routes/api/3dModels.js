const router = require('express').Router()

const upload = require('../../utils/multerFIles')

const Cloudinary = require('../../utils/cloudinary')

const Modelos = require('../../models/3dModels')





//Subir Modelos
router.post('/',upload.single('archivo'), async (req,res) => {
    
try{

  
    const result = await Cloudinary.uploader.upload(req.file.path,{
        resource_type: "image",  
        
        
      })



let modelos = new Modelos({
    
    model_name: req.body.model_name,
    model_url:result.secure_url,
    price:req.body.price


})

res.json(modelos)
}catch(err){

res.send(err)


}


})


// preguntar modelos

//router.get('/', async (req,res) => {
  //  const modelos = await Modelos.findAll()
    //res.json(modelos)
//})

router.put('/:model_name',async(req,res)=>{





})


router.delete('/:model_name', async(req, res)=>{

    const modelos = await Modelos.findAll(req.params.id)

    if(!modelos){
        return res.status(404).send('El modelo con ese id no esta o no se puede eliminar')
    }

    res.status(200).send('modelo  borrado')

})


module.exports = router
