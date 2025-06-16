import {findAllMock} from "../mock/find.all.mock";
import {injectable} from "inversify";

@injectable()
export class UserRepository {
    public findAllMock(): typeof findAllMock {
        return findAllMock
    }

    public findByIdMock(userId: string): typeof findAllMock[0] {
        return findAllMock.find(({id}) => id === +userId);
    }
}