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

export class Price {
    /**
    * The amount in minor units
    */
    'amount': number;
    /**
    * The currency of the price
    */
    'currency': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Price.attributeTypeMap;
    }

    public constructor() {
    }
}

