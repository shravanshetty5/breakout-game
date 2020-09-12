const showRulesBtn = document.getElementById('rules-btn');
const closeRulesBtn = document.getElementById('close-btn');
const rulesContainer = document.getElementById('rules');

showRulesBtn.addEventListener('click', () => {
  rulesContainer.classList.add('show');
});
closeRulesBtn.addEventListener('click', () => {
  rulesContainer.classList.remove('show');
});
