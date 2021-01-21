import {Applications} from '../models/applications';

export class AddUsers {
    static readonly type = '[Users] Add';

    constructor(public applications: Applications) {
    }
}

export class GetUsers {
    static readonly type = '[Applications] Get';
}

export class UpdateUsers {
    static readonly type = '[Applications] Update';

    constructor(public applications: Applications, public id: number) {
    }
}

export class DeleteUsers {
    static readonly type = '[Applications] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedUsers {
    static readonly type = '[Applications] Set';

    constructor(public applications: Applications) {
    }
}