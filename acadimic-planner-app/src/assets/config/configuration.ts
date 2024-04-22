export const PHONE_PATTERN: string = "^(\\\+\\\d{12}|00\\\d{12}|0\\\d{9})$";
export const EMAIL_PATTERN: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\.[a-zA-Z]{2,4}$";

export class Configuration {

    serverUrl       : string;
    applicationUrl  : string;
    toastDuration   : string;
    portfolio       : string; 
    firstName       : string;
    lastName        : string;
    thumbnail       : string;
    description     : string;
    title           : string;
    resume          : string;
    icon            : string;
    github          : string;
    linkedin        : string;
    instagram       : string;

}