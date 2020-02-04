import { UserInformation } from './user-information';

export class User {
    constructor(
        public id: number,
        public email: string,
        public password: string,
        public first_name: string,
        public last_name: string,
        public mobile_number: string,
        public user_information: UserInformation
    ){}
}
