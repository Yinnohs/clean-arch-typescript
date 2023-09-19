import {
    AuthDatasource,
    AuthRepository,
    RegisterUserDto,
    UserEntity,
} from '../../domain'

export class AuthRepositoryImpl implements AuthRepository {
    constructor(private readonly datasoure: AuthDatasource) {}

    login(): Promise<UserEntity> {
        throw new Error('Method not implemented.')
    }
    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.datasoure.register(registerUserDto)
    }
}
