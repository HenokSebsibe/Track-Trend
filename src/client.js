import {DecodoClient} from "@decodo/sdk-ts";
import {config} from "../config";

let clientInstance = null;
export function getDecodoClient(){
    if(!clientInstance){
        clientInstance = new DecodoClient({
            webScrapingApi:{
                token:config.Decodo.token,
            },
        });
    }
    return clientInstance;
}