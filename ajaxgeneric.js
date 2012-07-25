function getXMLHttp()
{
  var xmlHttp;

  try
  {
    //Firefox, Opera 8.0+, Safari
    xmlHttp = new XMLHttpRequest();
  }
  catch(e)
  {
    //Internet Explorer
    try
    {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(e)
    {
      try
      {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch(e)
      {
        alert("Your browser does not support AJAX!");
        return false;
      }
    }
  }
  return xmlHttp;
}
function MakeRequest(url,querystring, _JQueryLocation, returntype)
{
  var xmlHttp = getXMLHttp();

  xmlHttp.onreadystatechange = function()
  {
    if(xmlHttp.readyState == 4)
    {       
      HandleResponse(xmlHttp.responseText,_JQueryLocation, returntype);
    } 
  }
  xmlHttp.open("GET", url+querystring, true); 
  xmlHttp.send(null);
}

function HandleResponse(response,_JQueryLocation, returntype)
{
  if (response != 'no result found') {
    if (returntype =='val') { 
        $(_JQueryLocation).val(response); 
    } else if (returntype == 'dsc'){
            if (response > 0) {
                $(_JQueryLocation).show(); 
                var foo;
                foo = 'DSC Rate: ' + response + ' %';
                $(_JQueryLocation).html(foo); 
            } else {
                $(_JQueryLocation).hide();             
            }      
    } else if (returntype == 'html'){
        $(_JQueryLocation).html(response);         
    }    
  }
}

