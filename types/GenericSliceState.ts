import { Dictionary, EntityState } from "@reduxjs/toolkit";
import { QueryOptions } from "odata-query";
import { IDObject } from "./IDObject";

export type GenericSliceState<T extends IDObject> = EntityState<T> & {
  filter: Partial<QueryOptions<T>>;
  loading: "idle" | "pending" | "rejected";
  error?: any;
};
