/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
 const users = [
  {
    name : "Khamid Ma'ruf",
    age : 19,
    major : "Pendidikan Guru Seklah Dasar", 
  },
  {
    name : "Khoeruman Azam",
    age : 19,
    major : "Teknik Mesin", 

  },
  {
    name : "Badrul Akhyar",
    age : 20,
    major : "Teknik Infrmatika",

  },
  {
    name : "Dhimas Lukman",
    age : 21,
    major : "Teknik Pertanian", 

  },
  {
    name : "Dede Agus",
    age : 19,
    major : "Sistem Informasi", 

  }
];
console.log(users.name, users.age, users.major);



/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
 const all = ()=> {
  for (const users of Object){     
  }
}
console.log(users);


/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */


const store = (name, age, major) => {
  users.push("Riyan", 18, "Multimedia");
}


/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
function update(index, user) {}

const update =(index,users)=>{
 users.index(name, age, major);
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
function destroy(index) {}
const destroy=(index)=>{
  users.splice("Dede Agus", 19,"Sistem Informasi")
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
