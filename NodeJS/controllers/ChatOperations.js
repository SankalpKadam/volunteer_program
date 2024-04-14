import con from "../database";
async function saveMessage(req, res) {
    try {
        const stmt = db.prepare("INSERT INTO messages (userId, content) VALUES (?, ?)");
        stmt.run(1, "Hello, how are you?");
        stmt.run(2, "Hi there!");
        stmt.run(1, "I'm good, thanks!");
        stmt.finalize();
        con.query(query, (err, rows) => {
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
    }
}

async function getMessages(req, res) {
    try {
        const query = "SELECT * FROM chat ORDER BY timestamp";
        con.query(query, (err, rows) => {
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
    }
}


export default saveMessage;
export { getMessages };