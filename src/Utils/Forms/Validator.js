class Validator {
    constructor(types, type) {
        this.field = types[type]
    }

    valueIsEmpty (value) {
        return value === ''
    }
    
    regexFail (value) {
        return this.field && !this.field.regex.test(value)
    }

    validate(fn, value) {

        if(this.valueIsEmpty(value)) {
            fn('Preencha o campo.')
            return false
        }

        if(this.regexFail(value)) {
            fn(this.field.message)
            return false
        }
        
        fn(null)
        return true
   }
}

export default Validator