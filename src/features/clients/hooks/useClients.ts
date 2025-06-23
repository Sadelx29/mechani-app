import { useEffect, useState } from "react";
import { Client } from "../clientTypes";
import { fetchClients } from "../services/clientService";

export function useClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients()
      .then(setClients)
      .finally(() => setLoading(false));
  }, []);

  return { clients, loading };
}
