const connection= require('./../config/connections.js');

module.exports={

// getLeaderboard
    getLeaderboard: (req, res)=>{
        console.log("getleaderboard runs");
        const query = `SELECT * FROM leaderboard ORDER BY leader_id DESC;`;
        connection.query(query, (err, leaderboard)=>{
            if(err){
                return res.status(404).send(err);
            }
            res.json(leaderboard);
        });
    },


    // add new character into leaderboard. 
    newChampion: (req, res)=>{
        const query = `INSERT INTO leaderboard (leader) VALUES(?)`;
        connection.query(query, leader, (err, response))={
            if(err){
                return res.status(404).send(err);
            }
        }
    },


};