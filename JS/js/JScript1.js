//alert("dsfad");
//var date = new Date();
//alert(date.getDate().toString());
//document.write(date.toLocaleDateString());


//for (var countPeople = 0; countPeople < 10; countPeople++) {
//    document.writeln(countPeople);
//}


for (var i = 0; i < 10; i++) {
    try {
        var tem = Math.random();
        if (tem > 0.9)
            throw "big than 0.5"
        document.write(tem + "--" + Math.round(tem));
        document.write("<br\>");
        document.write("<hr\>");
    }
    catch (err) {
        alert(err);
    }

    
}