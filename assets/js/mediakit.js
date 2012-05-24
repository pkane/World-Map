// JavaScript Document
	function mapRegion(region) {
		if (region === 'usa') {
			document.getElementById(region).style.backgroundPosition='-10px 7px';	
		}
		else if (region === 'canada') {
			document.getElementById(region).style.backgroundPosition='-303px -27px';	
		}
		else if (region === 'mexico') {
			document.getElementById(region).style.backgroundPosition='-724px -21px';	
		}	
		else if (region === 'centralamerica') {
			document.getElementById(region).style.backgroundPosition='-901px -28px';	
		}		
		else if (region === 'southamerica') {
			document.getElementById(region).style.backgroundPosition='-1138px -23px';	
		}		
		else if (region === 'caribbean') {
			document.getElementById(region).style.backgroundPosition='-1369px -27px';	
		}	
		else if (region === 'westerneurope') {
			document.getElementById(region).style.backgroundPosition='5px -253px';	
		}	
		else if (region === 'easterneurope') {
			document.getElementById(region).style.backgroundPosition='-947px -586px';	
		}			
		else if (region === 'northerneurope') {
			document.getElementById(region).style.backgroundPosition='-1226px -352px';	
		}		
		else if (region === 'uk') {
			document.getElementById(region).style.backgroundPosition='-283px -266px';	
		}		
		else if (region === 'southernafrica') {
			document.getElementById(region).style.backgroundPosition='-528px -267px';	
		}	
		else if (region === 'northernafrica') {
			document.getElementById(region).style.backgroundPosition='-769px -173px';	
		}
		else if (region === 'middleeast') {
			document.getElementById(region).style.backgroundPosition='-1010px -362px';	
		}		
		else if (region === 'southeastasia') {
			document.getElementById(region).style.backgroundPosition='-24px -477px';	
		}		
		else if (region === 'northernasia') {
			document.getElementById(region).style.backgroundPosition='-291px -414px';	
		}	
		else if (region === 'australia') {
			document.getElementById(region).style.backgroundPosition='-662px -495px';	
		}			
			document.getElementById(region).style.zIndex='1000';
			document.getElementById(region).style.opacity='1';			
	}
	function mapRegionOff(region) {
			document.getElementById(region).style.background='';	
			document.getElementById(region).style.zIndex='0';
			document.getElementById(region).style.opacity='0';						
	}
	