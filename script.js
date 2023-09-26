/*
Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.

    Objeto: Materializacion de la informacion o los datos con los que cuenta mi plantilla o clase.

//Mostrar un objeto similar a este
//En un objeto JSON utilizamo key, valor para entrar al arreglo JSON
let Ale = {
    nombre: "Ale",
    apellido: "Mendieta",
    edad: 26,
    email: "ale@mail.com",
    telefono: "12345678"
}

*/

//Creando mi primera clase
//Una clase general para todas las personas en un consultorio, paciente, doctor, empleados, acompañantes.
class persona {
    // 1. Propiedades o atributos de mi clase de manera general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    // 3. Defino mi constructor que tomará los atributos como "material"  para la instancia o creación de los objetos
    //Es una función especial que sirve para contruir o instanciar objetos (tiene la palabra reservada "constructor")
    //Los atributos que se pasan como parametros al constructor deben estar en el estrcito orden que se declararon
    constructor(nombre, apellido, edad, email, telefono){
        //Palabra reservada this apunta a un objeto en específico
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    // 2. Métodos o comportamientos (funciones)
    //Para definir los métodos de mi objeto, ya no utilizo la palabra function
    hablar(){ //Método hablar
        console.log("Hola, estoy hablando");
    }

    dormir(){//Método dormir
        console.log("Zzzzz");
    }

    mostrarInfo(){//Método mostrarInfo
        console.log("Nombre: ", this.nombre);//con this.nombre apunto a mi atributo nombre, para que me traiga lo que hay en ese atributo de objeto persona y lo concatene a "Nombre: "
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
    }
}


/*
//Instancia de objetos del tipo persona

Sintaxis:
    variable nombreObjeto = palabra reservada new nombreClase(parámetros o atributos)
*/

//le doy un nombre a mi objeto, para poder apuntar a dicho objeto y lo igualo a mi plantilla con sus respectivos atributos
let persona1 = new persona("Carlos", "López", 35, "carls@mail.com", "45623189"); // Esta información no se guarda en mi clase o plantilla, si no que se guarda en un objeto en específico y así puedo continuar utilizando mi plantilla para objetos posteriores

//Este es otro objeto creado con la misma plantilla y los mismos atributos
let persona2 = new persona("José", "Pérez", 25, "josep@mail.com", "123698500");

let persona3 = new persona("July", "Gómez", 35, "juls@mail.com", "5689713654");

//Imprimir el objeto completo
console.log(persona1);

//Iprimir el atributo apellido de un objeto o persona
//se debe apuntar al objeto y busco su apellido
console.log(persona1.apellido);
console.log(persona1.apellido, " ", persona1.nombre);//Impresión del apellido y nombre de la persona 1

//Invocar el método o comportamientos de mis objetos
persona1.dormir(); //la persona 1 duerme
persona2.mostrarInfo(); //Invoco o llamo a mi función o método mostrarInfo para que me imprima los datos del objeto persona2
persona3.hablar();//Invoco la función hablar para mi persona3



//Herencia, se utiliza la palabra reserveda "extends"
class paciente extends persona{ //La clase paciente tendrá los atributos y métodos de la clase padre persona
    
    // 1. Definición de atributos o propiedades
    doctorAtiende = ""; //nombre del doctor
    historialMedico = ""; // si o no historial
    alergias = ""; // alergias existentes

    // 3. Generar constructor
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){ //Le debo pasar todos los parámetros incluyendo los de la clase superior de la que hereda.
        super(nombre, apellido, edad, email, telefono); // "Super" e suna palabra reservada para indicar que los datos vienen de una clase superior
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;
    }

    // 2. Métodos
    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
        console.log("Doctor que atiende: ", this.doctorAtiende);
        console.log("Historial médico del paciente: ", this.historialMedico);
        console.log("Alergias: ", this.alergias);
    }

}

//Instancias de un paciente
let paciente1 = new paciente("Ricardo", "Cardenas", 54, "Reck@mail.com", "136975212", "Dr. Simi", "No tiene", "Penicilina");
console.log(paciente1);

paciente1.mostrarInfo();
paciente1.dormir();


//Diferencias entre un objeto literal y un objeto JSON

//Todas las claves y los valores van dentro de comillas
//Envío de información a servidores
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

//Tratar información y sacar datos específicos para DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}
    

/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicizializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.

    To Do:
        Atributos:
            -nombre
            -nota
        Métodos:
            -Constructor
            -evaluación (si aprueba o no)
            -Método impirmirInfo (nombre y la nota)
        Lógica del negocio_
            -If para evaluar la nota (si la nota es < 6 reprueba)
            -Recuperamos info con un prompt
            -Generamos 3 instancias para probar el código (caso1: nota = 6, caso2: nota < 6, caso3: nota > 6)       
*/

//Creación de la clase en 3 pasos:
class alumno{
    // 1. Atrubutos o propiedades
    nombre;
    nota;


    // 3. Constructor (Simpre va entre los atributos y los métodos)
    // El cosntructor personaliza (da identidad) la plantilla general con los atributos específicos de cada objeto. Es por eso que los apunta con "this".
    constructor(nombre, nota){
        this.nombre = nombre; // This generalmente se utiliza en el constructor, para asignar un dato a un objeto en específico.
        this.nota = nota;
    }
    

    // 2. Métodos
    //Los métodos aplican para todos los objetos creados con la lantilla, sin importar sus atributos específicos, por lo que no es necesario apuntarlos con "this".
    evaluacion(nota){
        if(nota >= 6){
            console.log("Aprobado. :D");
        }else{
            console.log("Reprobado. D:");
        }
    }

    imprimirInfo(){//Para imprimir la información sí necesito especificar con this, ya que tiene que imprimir a cada objeto de manera pesonalizada.
        console.log("Nombre del Alumno: ", this.nombre); 
        console.log("Nota del alumno: ", this.nota);
    }

}

//Instancias de alumnos
let alumno1 = new alumno("Felipe", 3);
let alumno2 = new alumno("Felipe2", 8);
let alumno3 = new alumno("Felipe3", 6);

//Invocando métodos
alumno1.evaluacion(alumno1.nota);//Reprobado
alumno2.evaluacion(alumno2.nota);//Aprobado
alumno3.evaluacion(alumno3.nota);//Aprobado

alumno1.imprimirInfo();
