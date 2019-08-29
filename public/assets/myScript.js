// const db = require("../../models/db");
// const database = require("../../util/database");


const check =() => {
    const temp = document.getElementById('deword').value;
    const hiddenDewoord = document.getElementById('hiddenDeword').value = temp;
    console.log(hiddenDewoord);
    
}
// document.getElementById("word").addEventListener("focus", function() {
//     alert("Hello World!");
// });



// const check = () => {
//   const deword = docunment.getElementById("deword").value;
//   const result = db.execute("SELECT * FROM words WHERE words.deword = ?", [
//     deword
//   ]);

//   if (result) {
//     alert(`Your record is already saved.`);
//     console.log("sdfsfsfsfsf");
//   }
// };




