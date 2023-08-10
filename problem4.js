function findAddress(obj) {
  const property1 = obj.street || "__";
  const property2 = obj.house || "__";
  const property3 = obj.society || "__";

  const result = property1 + "," + property2 + "," + property3;
  return result;
}

const obj = { street: 10, house: "15A", society: "Earth Perfect" };
const address = findAddress(obj);
