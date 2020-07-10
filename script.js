function pullQueryString() {
	var error = window.location.search;
	if (error.substring(0, 1) == "?") {
		error = error.substring(1);
	}
	return error;
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function WriteOneLink(URLprefix,URLsuffix,TelNo,FAicon,LinkDesc) {
	return "<a class='list-group-item' target='_blank' href='" + URLprefix + TelNo + URLsuffix + "'><i class='fa fa-" + FAicon + " fa-fw' aria-hidden='true'></i>&nbsp; " + LinkDesc + "</a>";
}

function WriteLinks(IDtoWrite,LocalLinks) {
	var PhoneNum = document.getElementById('PhoneNum').value;
	WLlinks = WriteOneLink("https://www.facebook.com/search/top/?q=","",PhoneNum,"facebook","Facebook");
	WLlinks = WLlinks + WriteOneLink("https://www.google.co.uk/#q=","",PhoneNum + ' OR "' + PhoneNum.substring(0, 5) + " " + PhoneNum.substring(PhoneNum.length - 6) + '"',"google","Google");
	WLlinks = WLlinks + WriteOneLink("https://contacts.google.com/search/","",PhoneNum.substring(PhoneNum.length - 10),"address-book-o","Google Contacts");
	WLlinks = WLlinks + WriteOneLink("https://go.xero.com/Search/GlobalSearch/ViewAllResults?query=","&filter=all",PhoneNum.substring(PhoneNum.length - 6),"dot-circle-o","Xero (just last 6 digits)");
	WLlinks = WLlinks + WriteOneLink("https://notjustpcs.zendesk.com/agent/search/1?type=ticket&q=",,PhoneNum,"ticket","ZenDesk");
	WLlinks = WLlinks + WriteOneLink("https://portal.aql.com/telecoms/network_lookup.php?number=","&nlSubmit=submit",PhoneNum,"sitemap","Current supplier");
	WLlinks = WLlinks + WriteOneLink("https://www.ukphoneinfo.com/area-code/","",PhoneNum.substring(0, 5),"map-pin","Area code lookup");
	WLlinks = WLlinks + WriteOneLink("tel:","",PhoneNum,"phone","Call number");
	WLlinks = WLlinks + WriteOneLink("https://web.whatsapp.com/send?phone=44","",PhoneNum.substring(PhoneNum.length - 10),"whatsapp","Send WhatsApp message (UK numbers only)");
//	WLlinks = WLlinks + WriteOneLink("https://api.whatsapp.com/send?phone=44","",PhoneNum.substring(PhoneNum.length - 10),"whatsapp","Send WhatsApp message (UK numbers only)");
	WLlinks = WLlinks + WriteOneLink("http://pt.notjustpcs.co.uk/?","",PhoneNum,"link","Link to this page");
//	if (LocalLinks = 1) {
//		WLlinks = WLlinks + WriteOneLink("http://njn/njpctools/","",PhoneNum,"archive","Internal NJPC Tools")
//	}
	document.getElementById(IDtoWrite).innerHTML = WLlinks;
}

function local_load(){
	WriteLinks('actions', 1);
}

function local_err(){
	WriteLinks('actions', 0);
}
