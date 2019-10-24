const connection= require('./../config/connections');

module.exports={

    // random portrait
    getRandomPortrait: (req, res)=>{
        const query = `SELECT port_img FROM portraits ORDER BY RAND() LIMIT 4`;
        connection.query(query, (err, portraits)=>{
            if(err){
                return res.status(404).send(err);
            }
            const port=portraits[0];
            res.json(port);
        });
    }


        // specific portrait
        // getPortrait: (req, res)=>{
        //     const port_id=req.params;
        //     const query = `SELECT * FROM portraits WHERE ?`;
        //     console.log(req.params);
        //     connection.query(query, {port_id: port_id}, (err, portraits)=>{
        //         if(err){
        //             return res.status(404).send(err);
        //         }
        //         const port=portraits[0];
        //         res.json(port);
        //     });
        // }
};