function myFunction(){

    class Car{
        constructor(name,year){
            this.name=name;
            this.year=year;
        }
    }
    const Car1=new Car("Audi",2020);
    const Car2=new Car("BMW",2011);

    document.getElementById("ptag").innerHTML=Car1.name+" "+Car2.name;
}



