import { Target } from "@decodo/sdk-ts";
import { getDecodoClient } from "./client";

export async function scrapeGitHubTrending(language="javascript"){
   console.log("Scraping GitHub Trending for language:", language);
 const url =
  language === "all" ? `${config.GitHub.baseURL}/trending` 
 : `${config.GitHub.baseURL}/trending/${language}`;
 console.log("Fetching:${url}");

    try {
        const client = getDecodoClient();
        const result = await client.webScrapingApi.scrape({
            target: Target.Universal,
            url: url,
            geo:decodo.geo,
});
  console.log("result of scraping", result);
    const html =result.results?.[0]?.content || "";

    }  

    catch (error) {}
}
