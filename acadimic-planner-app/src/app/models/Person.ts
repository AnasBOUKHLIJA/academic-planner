import { Country } from "./Country";
import { LegalIdType } from "./LegalIdType";
import { Profile } from "./Profile";

export class Person {
    id: Number;
    username: String;
    password: String;
    gender: String;
    email: String;
    firstName: String;
    lastName: String;
    birthDate: String;
    legalIdNumber: String;
    legalIdType: LegalIdType;
    citizenship: Country;
    profile: Profile;
}
