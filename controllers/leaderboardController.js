const connection= require('./../config/connections.js');

module.exports={
    newChampion: (req, res) => {
        const champ = req.body;
        const query = `INSERT INTO leaderboard (leader_name, leader_portrait, leader_atk, leader_hp) VALUES (?,?,?,?)`;
        const sql = connection.query(query, [champ.leader_name, champ.leader_portrait, champ.leader_atk, champ.leader_hp], (err, response) => {
            if (err) {
                return res.status(404).send(err);
            }
            res.send(response);
        })
    },
    
    lastEntries:(req, res)=>{
        const challengers = parseInt(req.params.count)
        const query = `SELECT * FROM leaderboard ORDER BY leader_id DESC LIMIT ?;`;
        connection.query(query, challengers, (err, response)=>{
            if(err){
                return res.status(404).send(err);
            }
            
            res.json(response)
        })
    }
    
};



// getLeaderboard: (req, res)=>{
//     let query = `SELECT * FROM leaderboard ORDER BY PRIMARY KEY DESC LIMIT 10`;
//     connection.query(query, (err, leaderboard)=>{
//         if(err){
//             return res.status(404).send(err);
//         }
//         res.json(leaderboard);
//     });
// },

    // currentChamp:(req, res)=>{
    //     const query = `SELECT * FROM leaderboard ORDER BY PRIMARY KEY DESC LIMIT 1;`;
    //     connection.query(query, champ, (err, response))={
    //         if(err){
    //             return res.status(404).send(err);
    //         }
    //     }
    // },

    // randomChamps:(req, res)=>{
        // const query = `SELECT fields FROM leaderboard ORDER BY RAND() LIMIT 2;`;
        // connection.query(query, champ, (err, response))={
        //     if(err){
        //         return res.status(404).send(err);
        //     }
        // }
    // },

            // // currentChamp
        // query = `SELECT * FROM leaderboard ORDER BY PRIMARY KEY DESC LIMIT 1; `
        // connection.query(query, (err, leaderboard)=>{
        //     if(err){
        //     return res.status(404).send(err);
        //     }
        // });