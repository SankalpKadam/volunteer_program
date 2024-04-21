import { con_object } from "../database.js";
function saveMessage(req, res) {
    try {
        const query = "INSERT INTO chat (text, senderid, userid, timestamp) VALUES (?, ?, ?, ?)";
        
        const currentDateObject = new Date();
        const currentYear = currentDateObject.getFullYear();
        const currentMonth = String(currentDateObject.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
        const currentDay = String(currentDateObject.getDate()).padStart(2, '0'); // Using 0 padding to have dates like 01,02..31
        const currentHours = String(currentDateObject.getHours()).padStart(2, '0');// Using 0 padding to have dates like 00,01..23
        const currentMinutes = String(currentDateObject.getMinutes()).padStart(2, '0');// Using 0 padding to have dates like 01,02..59
        const currentSeconds = String(currentDateObject.getSeconds()).padStart(2, '0');// Using 0 padding to have dates like 01,02..59

        const timestamp = `${currentYear}-${currentMonth}-${currentDay} ${currentHours}:${currentMinutes}:${currentSeconds}`;
        con_object.query(query, [req.body.message, req.body.sender_id, req.body.receiver_id, timestamp], (err, rows) => {
            if (err) {
                console.error('Error sending message', err);
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

function getMessages(req, res) {
    try {
        const query = "SELECT * FROM chat where (userid = ? and senderid = ?) or (userid = ? and senderid = ?) ORDER BY timestamp";
        con_object.query(query, [req.query.userid, req.query.senderid,req.query.senderid,req.query.userid], (err, rows) => {
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