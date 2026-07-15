'use client';

import { ReactNode, createContext, useContext } from 'react';
import type { Vehicle, Repair, Refueling } from './types';

interface DbContextType {
  vehicles: Vehicle[];
  repairs: Repair[];
  refuelings: Refueling[];
  addVehicle: (vehicle: Vehicle) => void;
  updateVehicle: (vehicle: Vehicle) => void;
  deleteVehicle: (id: string) => void;
}

const DbContext = createContext<DbContextType | undefined>(undefined);

export function DbProvider({ children }: { children: ReactNode }) {
  const value: DbContextType = {
    vehicles: [],
    repairs: [],
    refuelings: [],
    addVehicle: () => {},
    updateVehicle: () => {},
    deleteVehicle: () => {},
  };

  return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
}

export function useDb() {
  const context = useContext(DbContext);
  if (!context) {
    throw new Error('useDb must be used within DbProvider');
  }
  return context;
}
