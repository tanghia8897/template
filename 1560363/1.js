function vailor(){
    var idmaso = document.getElementById('idmaso').value;
    var idhoten = document.getElementById('idhoten').value;
    var iddiachi = document.getElementById('iddiachi').value;
    var ngay = document.getElementById('idNgay').value;
    var nam = document.getElementById('idNam').value;
    var email = document.getElementById('email');

    // Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (idmaso == "" ){
        document.getElementById("errorMS").innerHTML = "Lổi rồi bạn !";
        document.getElementById('idmaso').focus();
    }
    else
        document.getElementById("errorMS").innerHTML = "";
    if (idhoten == '')
    {
        document.getElementById("errorHT").innerHTML = "Lổi rồi bạn !";
        document.getElementById('idmaso').focus();
    }
    else 
        document.getElementById("errorHT").innerHTML = "";
    if(iddiachi == '')
    {
        document.getElementById("errorDC").innerHTML = "Lổi rồi bạn !";
        document.getElementById('idmaso').focus();
    }else 
        document.getElementById("errorDC").innerHTML = "";
    if(ngay == '' || ngay < 0 || ngay > 30)
    {
        alert('Nhập sai ngày rồi kìa bạn!');
    }
    if(nam == '' || nam < 0 || nam > 9999)
    {
        alert('Nhập sai năm rồi kìa bạn!');
    }

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email.value)) { 
            document.getElementById("errorEM").innerHTML = "Hãy nhập địa chỉ email hợp lệ!";
            document.getElementById('idmaso').focus();
             return false; 
    }else 
        document.getElementById("errorEM").innerHTML = "";
    
    return false;
}

function listbox_moveacross(sourID,desID){
    sour = document.getElementById(sourID);
    des = document.getElementById(desID);
    for (var i = 0; i < sour.options.length; i++) {
        if(sour.options[i].selected == true)
        {
            var option = sour.options[i];
            var newOption = document.createElement("option");
            newOption.value = option.value;
            newOption.text = option.text;
            newOption.selected = true;
            try {
                     des.add(newOption);
                     sour.remove(i);
             }catch(error) {
                     des.add(newOption);
                     sour.remove(i);
             }
            i--;
        }
    }
}
function listboxkk(sourID,desID){
    src1 = document.getElementById(sourID);
    dest = document.getElementById(desID);
    for (var i = 0; i < dest.options.length; i++) {
        if(dest.options[i].selected == true)
        {
            var option = dest.options[i];
            var newOption = document.createElement('option');
            newOption.value = option.value;
            newOption.text = option.text;
            newOption.selected = true;
            try{
                src1.add(newOption);
                dest.remove(i);
            }
            catch(error){
                src1.add(newOption);
                dest.remove(i);
            }
            i--;
        }
    }
}

function MessageBox_ShowAll(){
            var src = document.getElementById('destID');
            var listShow = "";
            
            for(var count=0; count < src.options.length; count++) {
                listShow += src.options[count].text + " "+ "\n";
            }
            alert(listShow);
        }