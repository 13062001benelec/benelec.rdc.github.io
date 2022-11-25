
		var cl = document.getElementById('cl');
		cl.addEventListener('click', function(){
		alert('Lien non disponible');
		});
		
		var eccc = document.querySelector('.btn');
		eccc.addEventListener('click', function(){
		alert('Erreur de traitement');
		});
		
		
		
		
		
		
		
		var ecc = document.querySelector('.forM');
		
		ecc.addEventListener('input', function(){
		if(ecc.value){
		alert('champ non actif');
		ecc.value ='';
		}
		});
		var ec = document.querySelector('.forM1');
		ec.addEventListener('input', function(){
		if(ec.value){
		alert('champ non actif');
		ec.value ='';
		}
		});