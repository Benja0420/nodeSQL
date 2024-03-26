import { pool } from "../config/database.js";

export const getUsers = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM users LIMIT 2');
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}