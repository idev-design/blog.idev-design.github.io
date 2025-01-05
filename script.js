// Add smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a "Back to Top" button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '&uarr;';
backToTopButton.setAttribute('id', 'back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide "Back to Top" button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Add styles for the "Back to Top" button
const style = document.createElement('style');
style.innerHTML = `
    #back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #3498db;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
    }
`;
document.head.appendChild(style);
