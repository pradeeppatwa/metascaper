module.exports = async function (context, req) {
    const ogs = require("open-graph-scraper");
    const options = { url: `https://${req.query.url}` };
    const data = await ogs(options, (error, results, response) => {
      return results; // This contains all of the Open Graph results
    });
    console.log(data);
  
    context.res = {
      body: data,
    };
  };