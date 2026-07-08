import { validatescraping } from './scraping.js'
async function main(){
    console.log("Github Trend Prediction")

    //validate the config
    validateconfig();
  
    // scraping
    console.log("_", repeat(50));
    await scrapeGitHubTrending("javascript");
    //analyze with gemini

    //display the rsult of the analysis

    //call to action

}
main().catch((err) => {
    console.error("Error",error,message);
    process.exit(1);
});