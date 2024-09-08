/* tslint:disable */
/* eslint-disable */
/**
 * Cale API
 *  # About cale.app provides a scheduling API that helps developers to integrate scheduling features into their applications. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const Status = {
    Active: 'active',
    Inactive: 'inactive'
} as const;
export type Status = typeof Status[keyof typeof Status];


export function instanceOfStatus(value: any): boolean {
    for (const key in Status) {
        if (Object.prototype.hasOwnProperty.call(Status, key)) {
            if (Status[key as keyof typeof Status] === value) {
                return true;
            }
        }
    }
    return false;
}

export function StatusFromJSON(json: any): Status {
    return StatusFromJSONTyped(json, false);
}

export function StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): Status {
    return json as Status;
}

export function StatusToJSON(value?: Status | null): any {
    return value as any;
}

