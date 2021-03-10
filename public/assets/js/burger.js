document.addEventListener('DOMContentLoaded', () => {

    const consumeButtons = document.querySelectorAll('.consume');

    consumeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const id = e.target.getAttribute('data-id')

            fetch(`/api/consume/${id}`, {
                method: "PUT"
            }).then(() => {
                location.reload();
            })
        })
    })

    const addBurgerButton = document.getElementById('add-burger');

    addBurgerButton.addEventListener('click', (e) => {
        e.preventDefault();

        const burgerName = document.getElementById('burger-to-add').value.trim();

        if (!burgerName) {
            alert("You cannot leave the name empty!")
            return;
        }

        fetch(`/api/add-borger`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                borger: burgerName
            })
        }).then(() => {
            location.reload();
        })
    })




})