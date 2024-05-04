import {config} from 'dotenv'
config()
export const SECRET_KEY = process.env.SECRET_KEY || '$2b$10$ka87I5mFLWjggfCEVj1uc.4u5xkzFepZ5.V68UL5kahwKzaFTAIdW' 
export const API_URL = process.env.API_URL || 'http://localhost:3000' 
export const API_PORT = process.env.API_PORT || '3000' 
export const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/inventory_db' 
export const DB_USER = process.env.DB_USER || 'root' 
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root' 