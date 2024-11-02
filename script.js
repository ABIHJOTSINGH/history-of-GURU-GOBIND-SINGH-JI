/* function toggleText(){
    const output=document.getElementById("output"); if (output.style.display=== "none") {
       output.style.display="block"; 
  } 
 }
*/
function toggleText() {
            const output = document.getElementById("output");
            if (output.style.display === "none" || output.style.display === "") {
                output.style.display = "block";
            } else {
                output.style.display = "none";
            }
        }