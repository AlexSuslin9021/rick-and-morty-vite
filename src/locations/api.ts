import {instance} from "../common/api.ts";

export const locatiosApi={
    getLocations(){
       return   instance.get('location')
    }
}