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