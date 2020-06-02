constructor(){
  super({
    requiresPageReload: true
  });
}

enabled(){

	var injectScript2 = document.createElement("script");
	injectScript2.src = `tdp://${this.$token}/root/moduleraid.js`;
	injectScript2.type = "text/javascript";
	document.head.appendChild(injectScript2);

	var injectScript = document.createElement("script");
	injectScript.src = `tdp://${this.$token}/root/I18nModule.js`;
	injectScript.type = "module";
	document.head.appendChild(injectScript);

}

disabled(){
}
