const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  const open = navLinks?.classList.toggle('open') ?? false;
  menuBtn?.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navLinks?.classList.remove('open'));
});

const copyBtn = document.getElementById('copyBtn');
const contract = document.getElementById('contract');

copyBtn?.addEventListener('click', async () => {
  if (!contract) return;

  const value = contract.textContent?.trim() ?? '';
  if (!value) return;

  try {
    await navigator.clipboard.writeText(value);
    copyBtn.textContent = 'Copied!';
    window.setTimeout(() => {
      copyBtn.textContent = 'Copy';
    }, 1300);
  } catch {
    copyBtn.textContent = 'Copy failed';
    window.setTimeout(() => {
      copyBtn.textContent = 'Copy';
    }, 1300);
  }
});

const situations = [
  'You have $20 left. Payday is 6 days away. Transport costs $4 daily. What is the move?',
  'Your data finishes at 11:58 PM and your salary alert is still “processing.” What does a certified Sapa Survivor do?',
  'Your friend says “send me $50, I’ll return it tomorrow.” Your balance is $54.10. What is your answer?',
  'Rent is due. Your crush says “let’s go somewhere nice.” Sapa is watching. Choose your destiny.',
  'You open your banking app, close it, and open it again hoping the balance has changed. What stage of Sapa is this?',
  'Salary entered at 8:00 AM. By 10:17 AM, debit alerts have formed a committee. What happened?'
];

let last = 0;
const situationText = document.getElementById('situationText');
const newSituation = document.getElementById('newSituation');

newSituation?.addEventListener('click', () => {
  if (!situationText) return;

  let next;
  do {
    next = Math.floor(Math.random() * situations.length);
  } while (next === last && situations.length > 1);

  last = next;
  situationText.textContent = situations[next];
});
