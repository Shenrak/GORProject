import { schema } from "normalizr"

export const product = new schema.Entity(
  "products",
  {},
  { idAttribute: "supplierRef" }
)
export const arrayOfProducts = new schema.Array(product)

export const field = new schema.Entity("fields", {}, { idAttribute: "name" })
export const arrayOfFields = new schema.Array(field)
