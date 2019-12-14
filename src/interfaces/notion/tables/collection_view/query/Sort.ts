import { UUID } from "../../../common"
import { PropertyKey, PropertyType } from "../common"

export type SortDirection = "ascending" | "descending"

export interface Sort {
  id: UUID
  direction: SortDirection
  property: PropertyKey
  type: PropertyType
}