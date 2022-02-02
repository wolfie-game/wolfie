export type LoadStatus = 'success' | 'pending' | 'failed'
export type Nullable<T> = T | null

export interface BaseActionType {
  type: string
}

export interface ItemActionType<T> extends BaseActionType {
  item: Nullable<T>
}
