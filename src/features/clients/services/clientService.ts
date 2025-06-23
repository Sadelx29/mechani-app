import db from "../../../database/db";
import { Client } from "../clientTypes";
const dbInstance = await db;



export const insertClient = async (client: Client): Promise<void> => {
  (await db)
    .runAsync(
      `INSERT INTO clients (name, phone, email, isSynced) VALUES (?, ?, ?, ?)`,
      [client.name, client.phone, client.email, client.isSynced ? 1 : 0]
    )
    .catch((error) => {
      console.error("Error inserting client:", error);
      throw error;
    });
};

export const fetchClients = async (): Promise<Client[]> => {
  try {
    const rows = await dbInstance.getAllAsync<Client>(
      `SELECT * FROM clients WHERE isSynced = 0`
    );
    return rows;
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw error;
  }
 
};
