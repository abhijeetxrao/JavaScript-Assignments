// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

fs.readFile("folder.txt","utf-8",(err,data)=>{
  if(err){
    throw err;
  }
  else{
    const cleaned = data.replace(/\s+/g," ").trim();
    fs.writeFile("folder.txt",cleaned,(err)=>{
      if(err) throw err;
      console.log("File updated successfully");
    })
  }
})