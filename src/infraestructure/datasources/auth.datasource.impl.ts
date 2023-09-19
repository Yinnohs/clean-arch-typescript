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
            // 1.- verify if the user exist
            // 2.- hash  password
            // 3.- store on the datbase

            return Promise.resolve(
                new UserEntity('1', name, email, password, ['ADMIN'])
            )
        } catch (error) {
            console.log(error)

            if (error instanceof customError) {
                throw error
            }

            throw customError.internalServerError()
        }
    }
}
