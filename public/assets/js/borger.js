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

    const addBorgerButton = document.getElementById('add-borger');

    addBorgerButton.addEventListener('click', (e) => {
        e.preventDefault();

        const borgerName = document.getElementById('borger-to-add').value.trim();

        fetch(`/api/add-borger`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                borger: borgerName
            })
        }).then(() => {
            location.reload();
        })
    })




})