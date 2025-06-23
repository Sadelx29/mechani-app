export interface Client {
  id?: number;
  name: string;
  phone: string;
  email: string;
  isSynced: boolean;
}

export interface Vehicle {
  id?: number;
  clientId: number;
  brand: string;
  model: string;
  year: string;
  plate: string;
  color: string;
  notes?: string;
  isSynced: boolean;
}
