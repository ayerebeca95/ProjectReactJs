const listadeestudiantes = (tipodeusuario) => {
    const estudiantes= ["pedro", "juan", "alan"]
    return new Promise((resolve, reject)=>{
        if (tipodeusuario === "profesor") {
            resolve(estudiantes)
        }else {
            reject("no tiene un permiso")
        }
    })
}

console.log(listadeestudiantes("profesor"));