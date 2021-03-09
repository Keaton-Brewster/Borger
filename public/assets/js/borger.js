document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM ready');

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
        console.log(borgerName)

        fetch(`/api/add-borger/${borgerName}`, {
            method: 'POST'
        }).then(() => {
            location.reload();
        })
    })




})