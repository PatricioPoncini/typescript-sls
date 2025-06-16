import "reflect-metadata";
import {Container} from "inversify";
import {UserRepository} from "../users/entity/user.repository";
import {UserService} from "../users/service/user.service";
import {injectionToken} from "../types/constants";

const container = new Container();

container.bind<UserRepository>(injectionToken.USER_REPO).to(UserRepository);
container.bind<UserService>(UserService).to(UserService);

export {container};