import {
    AuthDatasource,
    RegisterUserDto,
    UserEntity,
    customError,
} from '../../domain/'

export class AuthDatasourceImpl extends AuthDatasource {
    login(): Promise<UserEntity> {
        throw new Error('Method not implemented.')
    }
    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password } = registerUserDto
        try {
        } catch (error) {
            console.log(error)

            if (error instanceof customError) {
                throw error
            }

            throw customError.internalServerError()
        }
    }
}
