function Tinh(){
    document.getElementById("notify").innerHTML = "";
    var x = parseInt(document.getElementById("FirstNumber").value);
    var y = parseInt(document.getElementById("SecondNumber").value);
    var all_input = document.getElementsByClassName("form-check-input");
    var isChecked = false;
    for (var i=0; i<all_input.length;++i){
        if (all_input[i].checked == true){
            isChecked = true;
            if(isNaN(x) != '' && isNaN(y) != ''){
                document.getElementById("notify").innerHTML = "Bạn chưa nhập số thứ 1 và số thứ 2";
            } else if(isNaN(x) != ''){
                document.getElementById("notify").innerHTML = "Bạn chưa nhập số thứ 1";
            } else if(isNaN(y) != ''){
                document.getElementById("notify").innerHTML = "Bạn chưa nhập số thứ 2";
            }/*else if (isNaN(x)){
						document.getElementById("notify").innerHTML = "Bạn nhập không phải là số";
					}else if (isNaN(y))
						document.getElementById("notify").innerHTML = "Bạn nhập không phải là số";
					}*/else{
                switch (all_input[i].id){
                    case "inlineCong":
                        document.getElementById("result").value = x + y;
                        break;
                    case "inlineTru":
                        document.getElementById("result").value = x - y;
                        break;
                    case "inlineNhan":
                        document.getElementById("result").value = x * y;
                        break;
                    case "inlineChia":
                        document.getElementById("result").value = x / y;
                        break;
                }
            }
        }
    }
    if(!isChecked){
        document.getElementById("notify").innerHTML = "Vui lòng chọn phép tính";
    }
}