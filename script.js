document.querySelectorAll('.quadrant').forEach(quadrant => {
    quadrant.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        document.querySelectorAll('.content-section').forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});
