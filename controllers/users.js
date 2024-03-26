import { pool } from "../config/database.js";



//get all users

export const getUsers = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM users');
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get user by id

export const getUserById = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//create user

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const [result] = await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
        res.status(201).json({ id: result.insertId, name, email, password });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
