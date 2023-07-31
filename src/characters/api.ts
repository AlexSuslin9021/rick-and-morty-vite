import {instance} from "../common/api.ts";

export const charactersApi={
    getCharacters(){
      return   instance.get('character')
    }
}