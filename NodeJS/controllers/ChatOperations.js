import {con_object} from "../database.js";
import moment from "moment/moment.js";
async function saveMessage(req, res) {
    try {
        const query = "INSERT INTO chat (text, senderid, userid, timestamp) VALUES (?, ?, ?, ?)";
        const timestamp = moment().format("YYYY-MM-DD HH:MM:SS");
        con_object.query(query,[req.body.message,req.body.sender_id,req.body.receiver_id,timestamp], (err, rows) => {
            if (err) {
                console.error('Error fetching messages from MySQL database:', err);
                res.status(500).json({ error: 'Error sending the message' });
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
        const query = "SELECT * FROM chat where senderid = ? or userid = ? ORDER BY timestamp";
        con_object.query(query,[req.query.id,req.query.id], (err, rows) => {
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