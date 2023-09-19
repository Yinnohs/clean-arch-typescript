import { Validators } from '../../../config'
import { DtoRequestObject } from '../types/dto.types'

export class RegisterUserDto {
    private constructor(
        public name: string,
        public email: string,
        public password: string
    ) {}

    static create(object: DtoRequestObject): [string?, RegisterUserDto?] {
        const { name, email, password } = object

        if (!name) return ['Missing name', undefined]
        if (!email) return ['Missing Email', undefined]
        if (!Validators.email.test(email))
            return ['Email wrong format', undefined]
        if (!password) return ['Missing password', undefined]
        if (password.length < 8) return ['Password too short', undefined]
        return [undefined, new RegisterUserDto(name, email, password)]
    }
}
