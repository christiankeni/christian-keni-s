const subtitles = [
  "Software Developer",
  "UI/UX Designer",
  "Frontend Specialist"
];

let index = 0;
let charIndex = 0;

const typingText = document.getElementById("typingText");

function type(){
  if(charIndex < subtitles[index].length){
    typingText.textContent += subtitles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 900);
  }
}

function erase(){
  if(charIndex > 0){
    typingText.textContent = subtitles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    index = (index + 1) % subtitles.length;
    setTimeout(type, 300);
  }
}

type();
