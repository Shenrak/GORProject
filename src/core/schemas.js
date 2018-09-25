import { schema } from "normalizr"

export const character = new schema.Entity("characters")

export const characters = new schema.Array(character)

// export const field = new schema.Entity("fields", {}, { idAttribute: "name" })
// export const arrayOfFields = new schema.Array(field)
