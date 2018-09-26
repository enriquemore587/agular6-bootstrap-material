export class RegisterUser {
    constructor(
        public user_name: string = "",
        public password: string = "",
        public consulting_room_id: number = 0,
        public profile_id: number = 1,
        public type_user_id: number = 1,
        public level: number = 1
    ) { }
}