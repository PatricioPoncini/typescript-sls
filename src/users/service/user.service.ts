import { UserRepository } from "../entity/user.repository";
import {inject, injectable} from "inversify";
import {injectionToken} from "../../types/constants";

@injectable()
export class UserService {
    constructor(
        @inject(injectionToken.USER_REPO)
        private readonly userRepository: UserRepository
    ) {}

    public findAll() {
        return this.userRepository.findAllMock()
    }

    public findById(id: string) {
        return this.userRepository.findByIdMock(id)
    }
}