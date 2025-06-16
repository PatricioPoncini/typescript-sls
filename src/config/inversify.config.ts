import "reflect-metadata";
import {Container} from "inversify";
import {UserRepository} from "../users/entity/user.repository";
import {UserService} from "../users/service/user.service";

const container = new Container();

container.bind<UserRepository>('USER_REPO').to(UserRepository);
container.bind<UserService>(UserService).to(UserService);

export {container};