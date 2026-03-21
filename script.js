// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navItems = document.getElementById('nav-items');

hamburger.addEventListener('click', () => {
    navItems.classList.toggle('active');
});

// Experience tabs
const expItems = document.querySelectorAll('.experience-items div');
const expContents = document.querySelectorAll('#exp-contents-right > div');

expItems.forEach(item => {
    item.addEventListener('click', () => {
        // remove active class from all tabs & hide contents
        expItems.forEach(i => i.classList.remove('active'));
        expContents.forEach(c => c.style.display = 'none');

        // activate clicked tab & show content
        item.classList.add('active');
        document.getElementById(item.id + '-content').style.display = 'block';
    });
});

// Awards tabs
const awardItems = document.querySelectorAll('.awards-items div');
const awardContents = document.querySelectorAll('#awards-contents-right > div');

awardItems.forEach(item => {
    item.addEventListener('click', () => {
        // remove active class from all tabs & hide contents
        awardItems.forEach(i => i.classList.remove('active'));
        awardContents.forEach(c => c.style.display = 'none');

        // activate clicked tab & show content
        item.classList.add('active');
        document.getElementById(item.id + '-content').style.display = 'block';
    });
});