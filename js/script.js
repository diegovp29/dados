function tirarDado() {
    const button = document.querySelector('button');
    const dado = document.getElementById('dado');

    button.addEventListener('click', () => {
        const randomFace = Math.floor(Math.random() * 6) + 1;

        // os ángulos de rotación para cada cara
        const rotations = {
            1: 'rotateX(0deg) rotateY(0deg)',
            2: 'rotateX(90deg) rotateY(0deg)',
            3: 'rotateX(0deg) rotateY(-90deg)',
            4: 'rotateX(0deg) rotateY(90deg)',
            5: 'rotateX(-90deg) rotateY(0deg)',
            6: 'rotateX(0deg) rotateY(180deg)'
        };

        let currentRotationX = Math.floor(Math.random() * 360); 
        let currentRotationY = Math.floor(Math.random() * 360);

        let rotationInterval = setInterval(() => {
            currentRotationX += Math.floor(Math.random() * 20) + 10; // aumenta a rotación en X
            currentRotationY += Math.floor(Math.random() * 20) + 10; // aumenta a rotación en Y

            dado.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
        }, 100);

        // deter a rotación do dado
        setTimeout(() => {
            clearInterval(rotationInterval);

            dado.style.transition = 'transform 1.5s cubic-bezier(0.25, 1, 0.25, 1)';
            dado.style.transform = rotations[randomFace];
        }, 1500);
    });
}