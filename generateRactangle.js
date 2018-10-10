let type = process.argv[2];
let width = +process.argv[3];
let height = +process.argv[4];

const generateRactangle = function(type, width, height){
  let line;

  //generate ractangle for filled
  if(type == "filled"){
    for(let i = 0; i < height; i++){
     line = "";
      for(let j = 0; j < width; j++){
        line += "*";
      }
      console.log(line);
    }
  }
  //generate ractangle for empty
  if(type == "empty"){
    for(let i = 0; i < height; i++){
      line = "";
      for(let j = 0; j < width; j++){
        if(i == 0 || i == height-1){
          line += "*";
        }
        else{
          if(j == 0 || j == width -1){
            line += "*";
          }
          else{
            line += " ";
          }
        }
      }
      console.log(line);
    }
  }
 //genetare ractangle for alternatives 
 if(type == "alternative"){
    for(let i = 1; i <= height; i++){
     line = "";
      for(let j = 1; j <= width; j++){
        if(i % 2 == 0){
          line += "-";
        }
        else{
          line += "*";
        }
      }
      console.log(line);
    }
  }

}

generateRactangle(type, width, height);
