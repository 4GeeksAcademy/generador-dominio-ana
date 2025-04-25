
    let pronoun = ['holla','que tal']
    let adj = ['hoy es viernes','y el cuerpo lo sabe']
    let noun = ['vamosnos de fiesta','mañana es sabado']
    let extensions = ['.com','.es','.org']

    for (let p of pronoun){
        for (let a of adj){
            for (let n of noun){
                for (let e of extensions){
                    console.log(p + a + n + e)
                }
            }
                
        }
    }
