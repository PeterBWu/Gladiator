const connection = require('./../config/connections.js');

module.exports = {

    // getLeaderboard
    getLeaderboard: (req, res) => {
        console.log("getleaderboard runs");
        const query = `SELECT * FROM leaderboard ORDER BY leader_id DESC;`;
        connection.query(query, (err, leaderboard) => {
            if (err) {
                return res.status(404).send(err);
            }
            res.json(leaderboard);
        });
    },


    // add new character into leaderboard. 
    newChampion: (req, res) => {
        const champ = req.body;
        console.log(champ)
        const query = `INSERT INTO leaderboard (leader_id, leader_name, leader_portrait, leader_atk, leader_hp) VALUES (?,?,?,?,?)`;
        const sql = connection.query(query, [champ.leader_id, champ.leader_name, champ.leader_portrait, champ.leader_atk, champ.leader_hp], (err, response) => {
            if (err) {
                return res.status(404).send(err);
            }
            console.log(sql)
            res.send(response);
        })



    }
}