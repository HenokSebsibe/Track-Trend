import "dotnet/config";

export const config = {
    //Decodo Auth Api
    token: process.env.DECODO_AUTH_TOKEN,
    geo:"United States",
    //GEMINI AI
    apikey:process.env.GEMINI_API_KEY,
    model:"gemini-2.5-flash",
    //GitHub
    github:{
        baseurl:"https://github.com",
        maxRepos:25,
    }
}


export function validateconfig(){
    if(!config.decodo.token){
        console.error("Decodo Auth Token is missing in the configuration.");
        process.exit(1);
        if(!config.gemini.apikey){
            console.error("GEMINI API Key is missing in the configuration.");
            process.exit(1);
        }
    }
    console.log("Configuration is valid.");
}