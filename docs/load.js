fetch('template.html')
    .then(response => response.text())
    .then(data => {
        // Inject the base HTML into the current page
        document.body.innerHTML = data;

        

        // Load and inject the specific content into the content-placeholder
        fetch(window.location.pathname)
            .then(response => response.text())
            .then(contentData => {
                document.getElementById('content').innerHTML = contentData;
            });
    });