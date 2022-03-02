/**
 * Membuat fungsi menghitung umur.
 * Dibuat menggunakan cara Arrow Function.
 *
 * @param {integer} bod (tanggal lahir)
 * @returns {integer} age (umur)
 */
const getAge = (bod) => {
  const year = 2022;
  const age = year - bod;

  return age;
};

// Memanggil fungsi getAge
console.log(getAge(1997));
console.log(getAge(2000));
