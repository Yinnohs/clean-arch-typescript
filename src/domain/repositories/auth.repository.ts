import { UserEntity } from '../entities/user.entity'
import { RegisterUserDto } from '../dtos/auth/register-user.dto'

export abstract class AuthRepository {
    // can be interfaces

    // TODO: create the login
    abstract login(): Promise<UserEntity>
    abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>
}
