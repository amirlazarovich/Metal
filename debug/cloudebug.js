function tcpClient(atoken, options) 
{ 
	this.socket = null; 
	this.RemoteHost = '208.72.1.61'; 
	this.RemotePort = '8484'; 
	this.timer = -1;
	this.checkFreq = 10;
	this.token = atoken;
	this._eol = '\r';
	this._sep = '|';
	this._uuid = Titanium.Platform.macaddress;
	var _nak = null;
	
	this.newSocket = function() 
	{
		// iphone
		this.socket = Titanium.Network.createTCPSocket(
		{
			hostName: this.RemoteHost, 
			port: parseInt(this.RemotePort, 10),
			mode: Titanium.Network.READ_WRITE_MODE
		});

		this.timer.instance = this;
		this.socket.nak = this;
		this.socket.addEventListener('read', this.onRead);
		this.socket.addEventListener('readError', this.onReadError);        
		this.socket.addEventListener('writeError', this.onWriteError);
	};

	this.nakkk = function(prm)
	{
		try
		{
			alert('nak: ' + this.write);
			this.write('did not recognised command/argumnets: ' + prm);
		}
		catch (eee)
		{}
	};
	
	this.onRead = function(resp) 
	{ 
		var sct = resp.source.nak;
		var dt = resp.data;
		var prts = (dt && (dt != null)) ? dt.toString().split('=') : null;
		var arg;
		
		try
		{
			if (prts != null)
			{
				var cmd = prts[0];
				prts.shift();
				arg = prts.join('');

				if (cmd == 'eval')
				{
					var ev = null;
					
					try
					{
						var wt = ' try { ' + arg + ' } catch (e12) {} ';
						ev = eval(wt);
					}
					catch (e77)
					{
						ev = e77;
					}
					
					sct.write('eval result for ' + arg + ': ' + ev);
					
					return;
				}
				
				if (options != null)
				{
					if (options[cmd] && (options[cmd] != null))
					{
						arg = '';

						sct.write('executing command: ' + dt.toString());
						
						options[cmd](cmd, arg);
					}
					else
					{
						sct.write('did not recognise command: ' + dt.toString());
					}
				}
				else
				{
					sct.write('did not recognise command: ' + dt.toString());
				}
			}
			else
			{
				sct.write('did not recognise command: all empty');
			}
		}
		catch (eee)
		{
			//alert('error in onread: ' + eee);
		}
	};

	this.onReadError = function(e) 
	{ 
		//alert('Read error...'); 
	};

	this.onWriteError = function(e) 
	{ 
		//alert('Write error...'); 
	};
	
	this.connect = function(cb) 
	{
		var sct = this.socket;
		var tmr = this.timer;
		var clt = this;
		
		var callback = function()
		{
			var ret = false;
			
			if (sct != null) 
			{
				ret = sct.isValid;
			}
			
			if (ret == true) 
			{ 
				//alert('connected: ' + tmr);

				clearInterval(tmr);

				//clt.write('connection is open and ready...');
				
				if (cb)
				{
					cb(clt);
				}
			}
		};
		
		this.socket.connect();
		
		tmr = setInterval( callback, this.checkFreq);
	};	

	this.checkConnection = function()
	{
		var ret = true;
		
		try
		{
			if (this.isConnected() != true)
			{
				
			}
		}
		catch (eee)
		{}
		
		return ret;
	};
	
	this.writeRaw = function(msg) 
	{
		try
		{
			this.socket.write(msg);
		}
		catch (eee)
		{}		
	};
	
	this.write = function(atp, amsg) 
	{
		try
		{
			var tp = (arguments.length < 2) ? 'info' : atp;
			var msg = (arguments.length < 2) ? atp : amsg;
			var dt = new Date();
			var txt = this._uuid + this._sep + this.token + this._sep + tp + this._sep + String.formatDate(dt, 'medium') + ' ' + String.formatTime(dt) + this._sep + msg + this._eol;
			
			//this.checkConnection();
			
			this.socket.write(txt);
		}
		catch (eee)
		{}		
	};
}