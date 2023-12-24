const uppercase=document.querySelector("#uppercase")
const lowercase=document.querySelector('#lowercase');
const symbol=document.querySelector('#symbols');
const number=document.querySelector('#number');

const dis_password=document.querySelector("#dis_password")
const generate=document.querySelector('#generate');
const copy=document.querySelector('#copy');
const plengh=document.querySelector('#plengh');

const upper= Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
const lower= Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
const symbs=['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/']
const nums=["1",'2','3','4','5','6','7','8','9','0']

dis_password.disabled = true;

generate.addEventListener("click",()=>{
  playClickSound()
   let len=plengh.value;
   // We can use this condition when we can not fill the length of the password
   if(len<=0){
    len=8
   }
   array=Create_array()
   let size=array.length;
   //if we can not select any checkbox then it is used
   if (size==0) {
     array=refill_array(array) 
   }
    size=array.length;

  dis_password.value=gen_output(len,size);
  copy_to_clipboard(dis_password);
})
 

function gen_output(len,size) {
   let output=""
  for (let index = 0; index <len ; index++) {
    let random=Math.floor(Math.random()*size)
    output+=array[random]; 
  }
  return output;
}

function Create_array() {
   let array=[];

   if (lowercase.checked==true) {
       array.push(...lower)
   }
   if (symbol.checked==true) {
       array.push(...symbs)
   }
   if (number.checked==true) {
       array.push(...nums)
   }
   if (uppercase.checked==true) {
      array.push(...upper)
   }
   return array;
}

//we can use this array when we can not check any of our our chechbox

function refill_array(array) {
  array.push(...lower)
  array.push(...nums)
  return array
}

function copy_to_clipboard(dis_password) {
   copy.addEventListener("click",()=>{
    playClickSound()
    navigator.clipboard.writeText(dis_password.value)
   })
}


// Play the sound
function playClickSound() {
  const audio = new Audio('click_sound.wav');
  audio.play();
}
