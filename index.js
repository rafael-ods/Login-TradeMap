window.addEventListener('load', (event) => {
    function toggleButton () {
    
        if (username && password) {
            document.querySelector("#login").disabled = false
            return
        }
    
        document.querySelector("#login").disabled = true
    }
 });
 