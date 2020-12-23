const QuestionBox = document.querySelector('.question-box')
const A1 = document.getElementById('ans1')
const A2 = document.getElementById('ans2')
const A3 = document.getElementById('ans3')
const A4 = document.getElementById('ans4')
const submitBtn = document.querySelector('.submit-btn')

const Questions = {
  Question: `What is Harry's last name?`,
  Answer: {Correct:`Potter`,
  W1: 'Kewell',
  W2: 'Redknapp',
  W3: 'Houdini'}
  }
  

QuestionBox.textContent = Questions.Question
A1.textContent = Questions.Answer.Correct
A2.textContent = Questions.Answer.W1
A3.textContent = Questions.Answer.W2
A4.textContent = Questions.Answer.W3

  
Answer = document.querySelectorAll('.answer')
  for (a of Answer){
    a.addEventListener('click',function(){
      this.classList.toggle('selected')
      submitBtn.classList.toggle('hide')
})}

function checkAns (){
  console.log('Check Answer')
}

submitBtn.addEventListener('click', checkAns)