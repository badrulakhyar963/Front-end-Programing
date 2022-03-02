/**
 * Membuat object menggunakan {}.
 * Menyimpan nilai dengan format key : value
 */
const user = {
  name: "Aufa Billah",
  age: 22,
  major: "Informatics",
};

/**
 * Looping object menggunakan for-in.
 * Mengakses nilai menggunakan cara bracket.
 */
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
