/**
 * Membuat fungsi menghitung umur.
 * Dibuat menggunakan cara Function Declaration.
 *
 * @param {integer} bod (tanggal lahir)
 * @returns {integer} age (umur)
 */
function getAge(bod) {
  const year = 2022;
  const age = year - bod;

  return age;
}

// Memanggil fungsi getAge
console.log(getAge(1997));
console.log(getAge(2000));
