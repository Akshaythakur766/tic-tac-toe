let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let para= document.getElementsByClassName("para")[0];
let turn1 = true;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box)=>{ 
    box.addEventListener("click",()=>{
          console.log('button was clicked');
          if(turn1){
              box.innerText="X";
              turn1=false;
          }
          else{
            box.innerText="O";
            turn1=true;
          }
          box.disabled=true;
          checkwinner();
    });
});
reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText=" ";
        box.disabled=false;
        para.innerText="";
        });
        console.log("button clicked")
}); 
const checkwinner=()=>{
    for(let pattern of winpatterns){
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pvalue1=boxes[pattern[0]].innerText;
        let pvalue2=boxes[pattern[1]].innerText;
        let pvalue3=boxes[pattern[2]].innerText;

        if(pvalue1 !=""&& pvalue2 !=""&& pvalue3 !=""){
            if(pvalue1===pvalue2&& pvalue2===pvalue3){
                console.log("winner");
             para.innerText=`Player ${pvalue1}  wins `;
            }
        }
    }};