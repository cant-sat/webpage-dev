if (location.protocol === 'http:' && window.location.pathname != "/live" && window.location.pathname != "/live.html") {
    window.location.href = "https://"+ window.location.hostname + window.location.pathname;
}
else if (location.protocol === 'https:' && window.location.pathname == "/live" && window.location.pathname == "/live.html") {
    window.location.href = "http://"+ window.location.hostname + window.location.pathname;
}


fetch('template.html')
    .then(response => response.text())
    .then(data => {
        // Inject the base HTML into the current page
        
        var contentData = document.body.innerHTML;
        document.body.innerHTML = data;

        document.getElementById('content-placeholder').innerHTML = contentData;

        // Load and inject the specific content into the content-placeholder
        // fetch(window.location.pathname)
        //     .then(response => response.text())
        //     .then(contentData => {
        //         document.getElementById('content-placeholder').innerHTML = contentData;
        //     });
    });
