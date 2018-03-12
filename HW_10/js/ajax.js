const ajax = (function () {
    function send(settings) {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('error', function (e) {
            settings.error({
              errorText: xhr.responseText,
              code: xhr.status
            });
        });

        xhr.addEventListener('load', function (e) {
            settings.success(xhr.responseText, xhr.status);
        })

        xhr.addEventListener('timeout', function (e) {
            console.log('timeout');
        })

        xhr.open(settings.method, settings.url);

        xhr.data = settings.data;

        xhr.timeout = settings.timeout || 3000;

        xhr.send(settings.data);
    }
    return {
      send: send
    }
})();
