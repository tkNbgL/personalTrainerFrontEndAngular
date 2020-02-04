export class UserInformation {
    constructor(
        public user_information_id: number,
        public height: number,
        public weight: number,
        public date_of_birth: Date,
        public gender: boolean,
    ){}
}
