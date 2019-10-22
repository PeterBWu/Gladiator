const connection= require('./../config/connections.js');

module.exports={

    // call leaderboard, get last 10 entries on leaderboard
    getLeaderboard: (req, res)=>{
        const query = `SELECT * FROM leaderboard ORDER BY PRIMARY KEY DESC LIMIT 10`;
        connection.query(query, (err, leaderboard)=>{
            if(err){
                return res.status(404).send(err);
            }
            res.json(leaderboard);
        });
    },


    // add new character into leaderboard. needs to push down all people below
    newRank: (req, res)=>{
        const query = `INSERT INTO leaderboard (leader) VALUES(?)`;
        connection.query(query, leader, (err, response))={
            if(err){
                return res.status(404).send(err);
            }
        }
    }












};