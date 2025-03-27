// const bcrypt = require('bcrypt');

// const enteredPassword = 'Admin@123456';  
// const storedHashedPassword = '$2b$10$KCstLUQKqG7Js6f8bYX9/eq8TnmHbKlOZC2lyBiC75muAux/VDk5a';

// async function checkPassword(){
//     const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);
//     console.log("password match", isMatch)
// }

// checkPassword(); 

// const bcrypt = require('bcrypt');

// const enteredPassword = 'Password123';
// const storedHash = '$2b$10$WZanMFP5SMo.yJOR17YLiOhmibyBFKjb5jyTq1gwTp1gN9Y1OiEby';

// bcrypt.compare(enteredPassword, storedHash, (err, result) => {
//     if (err) {
//         console.error('Error comparing passwords:', err);
//     } else {
//         console.log('Password Match:', result);
//     }
// });

// const bcrypt = require('bcrypt');

// const enteredPassword = "Admin1234";
// const storedHash = "$2b$10$Y4Ugs9Xlvc.kI4Un3/36peWflJ0fhUw9Kc9FsdwX3K0pdPcNP.1Fq"; // Your stored hash

// (async () => {
//     const isMatch = await bcrypt.compare(enteredPassword, storedHash);
//     console.log("Manual Hash Check:", isMatch ? "✅ Matches" : "❌ Does NOT Match");
// })();



const bcrypt = require('bcrypt');

(async () => {
    const newHash = await bcrypt.hash("Admin1234", 10);
    console.log("New hashed password", newHash)
})();