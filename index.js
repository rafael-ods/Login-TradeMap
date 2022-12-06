function meuEscopo () {

    const fomrulario = document.querySelector('.fomulario')

    const user = [];

    const receberFormulario = (event) => {
        event.preventDefault();

        const username = document.getElementById('username')
        const password = document.getElementById('password')

        user.push({
            username: username.value,
            password: password.value,
        })

        console.log(user)
    };


    fomrulario.addEventListener('submit', receberFormulario)

};

meuEscopo();



