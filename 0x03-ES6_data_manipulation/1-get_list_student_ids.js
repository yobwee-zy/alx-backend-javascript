export default function getListStudentIds(lt) {
  if (Array.isArray(lt)) {
    return lt.map((obj) => obj.id);
  }

  return [];
}
