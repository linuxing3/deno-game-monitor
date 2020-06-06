import { WebView } from "https://deno.land/x/webview/mod.ts";
import denjucks from "https://deno.land/x/denjucks/mod.js";
// Fetching Bitcoin Price Index data from CoinDesk
fetch("https://api.coindesk.com/v1/bpi/historical/close.json")
.then(resp => resp.json())
.then(data => {
    
    let bpiData = data;
    // Rendering the Denjucks template from the index.html file, including in
    // data for the Bitcoin Price Index when rendering the template
    let renderedTemplate = denjucks.render("index.html", {
        bpiData: JSON.stringify(bpiData.bpi),
    });
    
    let html = "data:text/html," + renderedTemplate;
    
    // Creating the webview with the rendered template
    let webview = new WebView({
        title: "Deno Cryptocurrency Webview",
        url: html,
        width: 800,
        height: 600,
        resizable: true,
        debug: true,
        frameless: false
    });
    
    // Running the webview
    webview.run();
    
}).catch(err => {
    
    // Creating some HTML markup to display the error message
    let html = `
        data:text/html,
        <html>
            <head></head>
            <body>
                <h1>Error</h1>
                <p>${err}</p>
            </body>
        </html>
        `
    ;
    
    // Creating a webview with the error if something failed while running the
    // application
    let webview = new WebView({
        title: "Deno Cryptocurrency Webview",
        url: html,
        width: 500,
        height: 400,
        resizable: true,
        debug: true,
        frameless: false
    });
    
    // Running the webview with the error message
    webview.run();
});