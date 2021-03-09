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



})