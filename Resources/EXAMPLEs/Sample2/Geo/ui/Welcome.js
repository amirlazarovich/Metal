metal.ns('geo.ui.Welcome');

/**
 * @class geo.ui.Welcome
 */
geo.ui.Welcome = metal.extend(metal.ui.Window, {

    id: 'welcome',

    properties: {
        title: 'Welcome',
        backgroundImage:'Geo/images/windows/welcome.png',
        height:178,
        width:204,
        top:32,
        right:40,
        anchorPoint:{x:1,y:0},
        opacity:0,
        fullscreen: false
    },

    constructor: function(config) {
        metal.overrideClass(this, config);
        metal.debug.info('Welcome::' + this.id, 'constructor');

        // Call parent constructor
        geo.ui.Welcome.superclass.constructor.call(this);
    },
    initComponents: function() {
        metal.debug.info('Welcome::' + this.id, 'initComponents');
       
        var me = this;
        var btnClose;

        btnClose = Ti.UI.createButton({
            title:'Close',
            font:{fontSize:12,fontWeight:'bold',fontFamily:'Helvetica Neue'},
            width: 100,
            height: 20,
            bottom: 20,
            color:'#fff',
            backgroundColor:'transparent',
            backgroundImage: 'Geo/images/buttons/drk_off.png',
            backgroundSelectedImage: 'Geo/images/buttons/drk_on.png'
        });

        btnClose.addEventListener('click', function() {
            metal.debug.info('Welcome', 'User clicked on close button');
            var t = Titanium.UI.create2DMatrix();
            t= t.rotate(-90);
            me.animate({transform:t,opacity:0,duration:800}, function() {
                me.close();
            });
        });
        
        this.add(btnClose);

    },
    initEvents: function() {
        metal.debug.info('Welcome::' + this.id, 'initEvents');
        geo.ui.Welcome.superclass.initEvents.call(this);
    }
});
