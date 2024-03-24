import React from "react";
import { store } from "../state/AppContext";

export default function useAppContet() {
  const { state, dispatch } = React.useContext(store);
  return { state, dispatch };
}