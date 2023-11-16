function clickbutton(target) {
    let result = document.getElementById("result")/*id属性で要素を取得、documentに対してのみ使用可能*/
    let target_value = target.innerHTML;
    if (target_value == "AC") {
        result.innerHTML = "0"/*左辺にinnerHTMLを置くと""を代入できる*/
    } else if (target_value == "=") {
        result.innerHTML = eval(result.innerHTML)/*evalは""で囲った中の文字列を計算してくれる*/
    } else if (target_value == "+" && result.innerHTML.slice(-1) == "+") {/*sliceは文字列や配列からデータの一部分を取り出せる*/
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "+";
    } else if (target_value == "+" && result.innerHTML.slice(-1) == "-") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "-";
    } else if (target_value == "+" && result.innerHTML.slice(-1) == "*") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "*";
    } else if (target_value == "+" && result.innerHTML.slice(-1) == "/") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "/";
    } else if (target_value == "-" && result.innerHTML.slice(-1) == "-") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "-";
    } else if (target_value == "-" && result.innerHTML.slice(-1) == "+") {
        let answer = result.innerHTML.slice(0, -1)
        result.innerHTML = answer + "+"
    } else if (target_value == "-" && result.innerHTML.slice(-1) == "*") {
        let answer = result.innerHTML.slice(0, -1)
        result.innerHTML = answer + "*"
    } else if (target_value == "-" && result.innerHTML.slice(-1) == "/") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "/";
    } else if (target_value == "-" && result.innerHTML.slice(-1) == ".") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + ".";
    } else if (target_value == "*" && result.innerHTML.slice(-1) == "*") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "*";
    } else if (target_value == "*" && result.innerHTML.slice(-1) == "+") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "+";
    } else if (target_value == "*" && result.innerHTML.slice(-1) == "-") {
        let answer = result.innerHTML.slice(0, -1);;
        result.innerHTML = answer + "-";
    } else if (target_value == "*" && result.innerHTML.slice(-1) == "/") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "/";
    } else if (target_value == "*" && result.innerHTML.slice(-1) == ".") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + ".";
    } else if (target_value == "/" && result.innerHTML.slice(-1) == "/") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "/";
    } else if (target_value == "/" && result.innerHTML.slice(-1) == "+") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "+";
    } else if (target_value == "/" && result.innerHTML.slice(-1) == "-") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "-";
    } else if (target_value == "/" && result.innerHTML.slice(-1) == "*") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "*";
    } else if (target_value == "/" && result.innerHTML.slice(-1) == ".") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + ".";
    } else if (target_value == "." && result.innerHTML.slice(-1) == ".") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + ".";
    } else if (target_value == "." && result.innerHTML.slice(-1) == "+") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "+";
    } else if (target_value == "." && result.innerHTML.slice(-1) == "-") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "-";
    } else if (target_value == "." && result.innerHTML.slice(-1) == "*") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "*";
    } else if (target_value == "." && result.innerHTML.slice(-1) == "/") {
        let answer = result.innerHTML.slice(0, -1);
        result.innerHTML = answer + "/";
    } else if(target_value == "."){
        if(!result.innerHTML.toString().includes(".")){
        result.innerHTML += ".";
    }
         }
else
{
    if (result.innerHTML == "0")
    {
        result.innerHTML = target_value
    } else if (result.innerHTML == "00") {
        result.innerHTML = target_value
    } else {
        result.innerHTML += target_value
    }
}
}
