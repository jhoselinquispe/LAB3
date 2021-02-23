class ServicesController{
    constructor()
    index(req, res){
        res.status(200).json({ serveResponse: "Hola Mundo"});
    }

}
export default ServicesController;