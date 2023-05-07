const types = {
    email: {
        regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        message: 'Email inválido.'
    },
    number: {
        regex: /^\d+$/,
        message: 'Digite apenas números.'
    }
}

export default types