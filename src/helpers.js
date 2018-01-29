import { Map, OrderedMap } from "immutable";

export function arrToMap(arr, dataRecord = Map) {
  return arr.reduce((acc, item) => {
    return acc.set(item.id, new dataRecord(item))
  }, new OrderedMap({}));
    
}

export function mapToArr(obj) {
  return obj.valueSeq().toArray()
}
