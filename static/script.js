const images = document.getElementsByClassName("carousel")

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        const current = images[i].dataset.pos;
        
        if (current == 1) {
            for (let j = 0; j < images.length; j++) {
                if (images[j].dataset.pos == 0) {
                    images[j].dataset.pos = 2;
                } else if (images[j].dataset.pos == 2) {
                    images[j].dataset.pos = 1;
                }
            }
        } else if (current == 2) {
            for (let j = 0; j < images.length; j++) {
                if (images[j].dataset.pos == 1) {
                    images[j].dataset.pos = 2;
                } else if (images[j].dataset.pos == 0) {
                    images[j].dataset.pos = 1;
                }
            }
        }
        
        images[i].dataset.pos = 0;
    });
}