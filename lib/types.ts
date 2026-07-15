export interface Vehicle {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  vin?: string;
  mileage: number;
  registrationPlate?: string;
  createdAt: number;
  updatedAt: number;
}

export interface Repair {
  id: string;
  vehicleId: string;
  date: number;
  description: string;
  cost: number;
  mileage?: number;
  createdAt: number;
  updatedAt: number;
}

export interface Refueling {
  id: string;
  vehicleId: string;
  date: number;
  liters: number;
  pricePerLiter: number;
  totalPrice?: number;
  mileage: number;
  createdAt: number;
  updatedAt: number;
}
