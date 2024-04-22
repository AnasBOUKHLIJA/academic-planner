import { Response } from "./Response";

export class BaseResponse {
    response: Response;

    page                : number = 0;
    pageSize            : number = 10;

    strings             : string[];
    longs               : number[];
    doubles             : number[];
    dates               : Date[];
    booleans            : boolean[];

    strArg1: string;
    strArg2: string;
    strArg3: string;
    strArg4: string;
    strArg5: string;
    strArg6: string;
    strArg7: string;
    strArg8: string;
    strArg9: string;
    strArg10: string;

    intArg1: number;
    intArg2: number;
    intArg3: number;
    intArg4: number;

    lngArg1: number;
    lngArg2: number;
    lngArg3: number;
    lngArg4: number;

    nbrArg1: number;
    nbrArg2: number;
    nbrArg3: number;

    dteArg1: Date;
    dteArg2: Date;

    blnArg1  : boolean;
    blnArg2  : boolean;
    blnArg3  : boolean;
    blnArg4  : boolean;
    blnArg5  : boolean;
    blnArg6  : boolean;
    blnArg7  : boolean;
    blnArg8  : boolean;
    blnArg9  : boolean;
    blnArg10 : boolean;
    

    id: number;

    constructor(){
        this.response = new Response
    }
}

