function getDeviceType() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detectar dispositivos móviles
    if (/android/i.test(userAgent)) {
        return 'Android';
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS';
    }

    // Detectar Windows Phone
    if (/windows phone/i.test(userAgent)) {
        return 'Windows Phone';
    }

    // Detectar tabletas
    if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
        return 'Tablet';
    }

    // Detectar dispositivos móviles generales
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|Opera Mini|Fennec|Windows Phone|Cricket/.test(userAgent)) {
        return 'Mobile';
    }

    // Asumir que es un PC de escritorio
    return 'Desktop';
}
