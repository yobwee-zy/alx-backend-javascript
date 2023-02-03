export default function getStudentsByLocation(lt, city) {
  return lt.filter((obj) => obj.location === city);
}
