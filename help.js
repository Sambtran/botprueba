function rand(lista){
    var rand
    do{
        var rand = Math.round(Math.random()*lista.length)-1
        }while(rand<0)
        return rand
}