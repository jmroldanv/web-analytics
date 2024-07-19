document.addEventListener("DOMContentLoaded", function() {

    document.onclick = function(event) {

        console.info(event);
        console.info('type: ' + event.type);
        console.info(`coord X: ${event.clientX}`);    //coord X
        console.info(`coord Y: ${event.clientY}`);    //coord Y

        /*
            The timeStamp event property returns the number of milliseconds 
            from the document was finished loading until the specific event was created. 
        */
        console.info(`time from page loaded to event: ${event.timeStamp}`);

        const date = new Date();
        //date.setTime(time);                 
        console.info(date.toDateString() + ' - ' + date.toLocaleTimeString());

        //target
        var target = event.target; 
        if (target.tagName === 'BUTTON' || target.type === 'button' || target.type === 'submit') {
            // Identificar el botón
            var buttonId = target.id;
            var buttonClass = target.className;
            var buttonName = target.name;
            var buttonData = target.getAttribute('data-info'); // Ejemplo de atributo de datos personalizado
    
            console.log('Button clicked!');
            console.log('ID:', buttonId);
            console.log('Class:', buttonClass);
            console.log('Name:', buttonName);
            console.log('Type:', target.type);
            console.log('Data-info:', buttonData);
        }
    }

    document.onscroll = function(event) {
        console.info('scrolling ...');

        //La cantidad de píxeles que el documento ha sido desplazado verticalmente desde la parte superior.
        console.info(`Pixels from top: ${window.scrollY}`);
        //La cantidad de píxeles que el documento ha sido desplazado horizontalmente desde el lado izquierdo.
        console.info(`Pixels from left: ${window.scrollX}`);
        //altura del document
        console.info(`document height: ${document.documentElement.scrollHeight}`);
        //La altura de la ventana del navegador.
        console.info(`window browser height: ${window.innerHeight}`); 
    }

    var referrer = document.referrer;
    console.log('Referrer: ', referrer);

    var userAgent = navigator.userAgent;
    console.log('User Agent: ', userAgent);

    var deviceType = getDeviceType();
    console.log('Device Type: ', deviceType);

    var params = new URLSearchParams(window.location.search);
    var utmSource = params.get('utm_source');
    var utmMedium = params.get('utm_medium');
    var utmCampaign = params.get('utm_campaign');

    console.log('UTM Source:', utmSource);
    console.log('UTM Medium:', utmMedium);
    console.log('UTM Campaign:', utmCampaign);

    //calling server
    var data = {
        referrer: referrer,
        utmSource: utmSource,
        utmMedium: utmMedium,
        utmCampaign: utmCampaign,
        userAgent: userAgent
    };

    /*
    fetch('https://yourserver.com/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
    */
});

