import {instance} from "../common/api.ts";

export const episodes = {
    getEpisodes(){
        return instance.get('episode')
    }
}