export default {
  typescript: true,
  notUseSpecifiers: true,
  filterComponents: (files) =>
    files.filter(filepath => /([^d]\.tsx?)$/.test(filepath))
}
