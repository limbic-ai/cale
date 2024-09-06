/**
 * Cale API
 *  # About cale.app provides a scheduling API that helps developers to integrate scheduling features into their applications. 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class RRuleSet {
    'exdates': Array<Date>;
    /**
    * A list of RRULE to **exclude** from the set
    */
    'exrules': Array<string>;
    'rdates': Array<Date>;
    /**
    * A list of RRULE to **include** in the set
    */
    'rrules': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exdates",
            "baseName": "exdates",
            "type": "Array<Date>",
            "format": "date-time"
        },
        {
            "name": "exrules",
            "baseName": "exrules",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "rdates",
            "baseName": "rdates",
            "type": "Array<Date>",
            "format": "date-time"
        },
        {
            "name": "rrules",
            "baseName": "rrules",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RRuleSet.attributeTypeMap;
    }

    public constructor() {
    }
}

