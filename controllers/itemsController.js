const connection = require('./../config/connections');

module.exports = {

    // // get item
    // getItems: (req, res)=>{
    //     const {item}=req.params;
    //     const query = `SELECT * FROM items WHERE ?`;
    //     connection.query(query, {item_id: item}, (err, items)=>{
    //         if(err){
    //             return res.status(404).send(err);
    //         }
    //         const port=items[0];
    //         res.json(items);
    //     });
    // },

    // get item
    getItems: (req, res) => {
        const query = `SELECT * FROM items;`;
        connection.query(query, (err, items) => {
            if (err) {
                return res.status(404).send(err);
            }
            res.json(items);
        });
    },

}