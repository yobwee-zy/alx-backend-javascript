export default function getStudentIdsSum(lt) {
  return lt.reduce((counter, currentObj) => counter + currentObj.id, 0);
}
