if (Ti.Platform.osname === 'android') {
    ilog('AndroidAdapter', 'Android detected! including adatper');
    Ti.include(
       '/Metal/adapter/android/AndroidAbstractView.js'
    );    
}
