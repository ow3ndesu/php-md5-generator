const btn = document.querySelector('.btn');
const text = document.querySelector('h1');
const md5 = document.querySelector('small');
const ct = document.querySelector('.circle');

ct.addEventListener('click', ctc)

function randomize() {
    return text.innerText = chance.cf()
}

btn.addEventListener('click', () => {
    let password = baffle('.password').start();
    let md5baff = baffle('.md5').start();

    password.text(currentText => {
        return randomize();
    }).reveal(1500);

    if (password.elements[0].value) {
        // const url = './api/passwords/md5Generator.php?text=' + password.elements[0].value;
        // fetch(url)
        // .then(response => response.json())
        // .then(data => {
        //     setTimeout(() => {
        //         md5baff.stop();
        //         md5.innerText = data.md5;
        //     }, 300);
        // })
        // .catch(error => console.error(error))
        
        const url = './api/routes/passwordRoutes.php';
        const data = {
            action: 'md5Generator',
            text: password.elements[0].value
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                md5baff.stop();
                md5.innerText = data.md5;
            }, 1500);
        })
        .catch(error => console.error(error))
    }

    document.getSelection().removeAllRanges();
})


function fireWhenReady(func) {
    document.addEventListener('DOMContentLoaded', func);
}

//Main functionality
function ctc() {
    let selection = window.getSelection();
    let target = document.getElementsByTagName('h1');

    if (selection.rangeCount > 0) {
        selection.removeAllRanges();
    }
    for (let i = 0; i < target.length; i++) {
        let range = document.createRange();
        range.selectNode(target[i]);
        selection.addRange(range);
    }
    document.execCommand("copy");
    flash();

}

function flash() {
    let h2 = document.querySelector("h2");
    h2.classList.add("show");
    setTimeout(() => {
        h2.classList.remove("show");
    }, 2000);
}

// fireWhenReady(randomize);