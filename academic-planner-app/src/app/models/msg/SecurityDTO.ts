import { Profile } from "../Profile";

export class SecurityDTO {

    id:  number;
    firstname:  string;
    lastName:   string;
    username:   string;
    password:   string;
    profile:    Profile;
    gender:     boolean;
    email:      string;
    thumbnail:  string;
    birthDate:  Date;
    token:      string;
    otp:        number;

}