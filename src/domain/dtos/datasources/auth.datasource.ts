import { UserEntity } from '../../entities/user.entity'
import { RegisterUserDto } from '../auth/register-user.dto'

export abstract class AuthDatasource {
    // TODO: create the login
    abstract login(): Promise<UserEntity>
    abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>
}
