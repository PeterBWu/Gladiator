const connection= require('./../config/connections');

module.exports={
        // specific portrait
        getPortrait: (req, res)=>{
            const {portrait}=req.params;
            const query = `SELECT * FROM portraits`;
            connection.query(query, (err, portraits)=>{
                if(err){
                    return res.status(404).send(err);
                }
                const port=portraits;
                res.json(port);
            });
        }
}