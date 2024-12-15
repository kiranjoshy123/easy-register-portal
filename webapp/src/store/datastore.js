// store.js
import { create } from "zustand";
import dummyfunds from "./funds_dummy_data";
import { calculateMonthlyMarketValue } from "../utilities/fund";

const useDataStore = create((set) => ({
  funds: dummyfunds,
  monthlyMarketValues: calculateMonthlyMarketValue(dummyfunds),
  setFunds: (newFunds) => set({ funds: newFunds }),
  setMonthlyMarketValues: (marketValues) =>
    set({ monthlyMarketValues: marketValues }),
}));

export default useDataStore;
