function pullQueryString() {
	var error = window.location.search;
	if (error.substring(0, 1) == "?") {
		error = error.substring(1);
	}
	return error;
}

function WriteOneLink(URLprefix,URLsuffix,TelNo,FAicon,LinkDesc) {
	return "<a class='list-group-item' target='_blank' href='" + URLprefix + TelNo + URLsuffix + "><i class='fa fa-" + FAicon + " fa-fw' aria-hidden='true'></i>&nbsp; " + LinkDesc + "</a>"
}

function WriteLinks(IDtoWrite) {
	WLlinks = WriteOneLink("https://www.facebook.com/search/top/?q=","",document.getElementById('TelNo').value,"facebook","Facebook")
	WLlinks + WLlinks = WriteOneLink("https://www.google.co.uk/#q=","",document.getElementById('TelNo').value,"google","Google")
	WLlinks + WLlinks = WriteOneLink("https://contacts.google.com/u/0/preview/search/","",document.getElementById('TelNo').value,"address-book-o","Google Contacts")
	WLlinks + WLlinks = WriteOneLink("https://portal.aql.com/telecoms/network_lookup.php?number=","&nlSubmit=submit",document.getElementById('TelNo').value,"sitemap","Current supplier")
	document.getElementById(IDtoWrite).innerHTML = WLlinks;
}
