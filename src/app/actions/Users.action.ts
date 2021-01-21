import {Users} from '../models/users';

export class AddUsers {
    static readonly type = '[Users] Add';

    constructor(public user: Users) {
    }
}

export class GetUsers {
    static readonly type = '[Users] Get';
}

export class UpdateUsers {
    static readonly type = '[Users] Update';

    constructor(public user: Users, public id: number) {
    }
}

export class DeleteUsers {
    static readonly type = '[Users] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedUsers {
    static readonly type = '[Users] Set';

    constructor(public user: Users) {
    }
}