import { UserRepository } from "../entity/user.repository";
import {inject, injectable} from "inversify";

@injectable()
export class UserService {
    constructor(
        @inject('USER_REPO') // TODO: usar un enum o const
        private readonly userRepository: UserRepository
    ) {}

    public findAll() {
        return this.userRepository.findAllMock()
    }

    public findById(id: string) {
        return this.userRepository.findByIdMock(id)
    }
}