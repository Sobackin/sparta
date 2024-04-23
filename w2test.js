function solution(strings, n){
    var answer =[];

    for (var i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    }
    strings.sort();

    for (var l = 0; l<strings.length; l++){
        strings[l] = strings[l].replace(strings[l][0],"");
        answer.push(strings[l]);
    }

    return answer;
}
solution(["sun", "bed", "car"], 1);
solution(["abce", "abcd", "cdx"], 2);

