const connection= require('./../config/connections');

module.exports={

    // random item
    getRandomItem: (req, res)=>{
        const {item}=req.params;
        const query = `SELECT * FROM items WHERE ? ORDER BY RAND() LIMIT 1`;
        connection.query(query, {item_id: item}, (err, items)=>{
            if(err){
                return res.status(404).send(err);
            }
            const port=items[0];
            res.json(port);
        });
    },


        // specific item
        getItem: (req, res)=>{
            const {item}=req.params;
            const query = `SELECT * FROM items WHERE ?`;
            connection.query(query, {item_id: item}, (err, items)=>{
                if(err){
                    return res.status(404).send(err);
                }
                const port=items[0];
                res.json(port);
            });
        },
        
    getRandomItems: (req, res)=>{
        const count=req.params.count;
        const query = `SELECT * FROM items ORDER BY RAND() LIMIT ?;`;
        connection.query(query, parseInt(count), (err, items)=>{
            if(err){
                return res.status(404).send(err);
            }
            res.json(items);
        });
    },


}