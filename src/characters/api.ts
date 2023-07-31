import {instance} from "../common/api.ts";

export const charactersApi={
    getCharacters(){
      return   instance.get('character')
    },
    getCharactersPage(id:number){
        return   instance.get(`character/?page=${id}`)
    }
}