document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.querySelectorAll('.hearts span');

    hearts.forEach((heart, index) => {
        let direction = 1;
        let position = 0;

        function animate() {
            position += direction * 0.5;
            if (position > 15 || position < 0) {
                direction *= -1;
            }
            heart.style.transform = `translateY(${-position}px)`;
            requestAnimationFrame(animate);
        }

        setTimeout(() => {
            animate();
        }, index * 300);
    });
});
