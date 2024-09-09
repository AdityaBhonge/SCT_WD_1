document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { 
            navbar.classList.add('scroll-changed');
        } else {
            navbar.classList.remove('scroll-changed');
        }
    });

    window.openSidebar = function() {
        document.getElementById('sidebar').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
    };

    window.closeSidebar = function() {
        document.getElementById('sidebar').style.width = '0';
        document.getElementById('main').style.marginLeft= '0';
    };
});
