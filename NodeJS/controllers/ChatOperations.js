import {con_object} from "../database.js";
async function saveMessage(req, res) {
    try {
        const query = "INSERT INTO chat (text, senderid, userid, timestamp) VALUES (?, ?, ?, ?)";
        con_object.query(query,[req.body.message,req.body.sender_id,req.body.receiver_id, req.body.timestamp], (err, rows) => {
            if (err) {
                console.error('Error fetching messages from MySQL database:', err);
                res.status(500).json({ error: 'Error fetching messages' });
                return;
            }
            res.json(rows);
        });
    }
    catch (err) {
        console.log("Error in reading", err.message);
        res.json("Error")
    }
}

async function getMessages(req, res) {
    try {
        const query = "SELECT * FROM chat where userid = ? ORDER BY timestamp";
        console.log(req.body.id);
        con_object.query(query,[req.body.id], (err, rows) => {
            if (err) {
                console.error('Error fetching messages from MySQL database:', err);
                res.status(500).json({ error: 'Error fetching messages' });
                return;
            }
            console.log(rows);
            res.json(rows);
        });
    }
    catch (err) {
        console.log("Error in reading", err.message);
        res.json("Error")

    }
}


export default saveMessage;
export { getMessages };