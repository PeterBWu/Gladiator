const connection= require('./../config/connections');

module.exports={

    // random portrait
    getRandomPortrait: (req, res)=>{
        const {portrait}=req.params;
        const query = `SELECT port_img FROM portraits WHERE ? ORDER BY RAND() LIMIT 1`;
        connection.query(query, {port_img: portrait}, (err, portraits)=>{
            if(err){
                return res.status(404).send(err);
            }
            const port=portraits[0];
            res.json(port);
        });
    },


        // specific portrait
        getPortrait: (req, res)=>{
            const {portrait}=req.params;
            const query = `SELECT port_img FROM portraits WHERE ?`;
            connection.query(query, {port_img: portrait}, (err, portraits)=>{
                if(err){
                    return res.status(404).send(err);
                }
                const port=portraits[0];
                res.json(port);
            });
        }
}