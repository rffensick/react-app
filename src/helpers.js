import { Map } from "immutable";

export function arrToMap(arr, dataRecord = Map) {
  return arr.reduce((acc, item) => 
    acc.set(item.id, new dataRecord(item)), new Map({}));
}

export function mapToArr(obj) {
  return obj.valueSeq().toArray()
}