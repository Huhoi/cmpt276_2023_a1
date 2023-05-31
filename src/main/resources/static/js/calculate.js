
var grades=[]

var max = 0
var a_plus = 0
var a = 0
var a_minus = 0
var b_plus = 0
var b = 0
var b_minus = 0
var c_plus = 0
var c = 0
var c_minus = 0
var d = 0
var f = 0
var valid = 0

var input = document.getElementById('button')
input.addEventListener('click', function(evt){
    evt.preventDefault()
    
    var result = document.getElementById("newgrade").value

    if(parseFloat(result) > parseFloat(document.getElementById("max").value)){
        window.alert("Pick a number from " + parseFloat(document.getElementById("f").value).toFixed(2) + " to " +parseFloat(document.getElementById("max").value).toFixed(2) )
    }
    else if(parseFloat(result) < parseFloat(document.getElementById("f").value)){
        window.alert("Pick a number from " + parseFloat(document.getElementById("f").value).toFixed(2) + " to " +parseFloat(document.getElementById("max").value).toFixed(2))
    }


    grades.push(result)
    result = document.getElementById("newgrade").value = ''
    updateHistogram()
    
})

function updateHistogram(){
        max = 0
        a_plus = 0
        a = 0
        a_minus = 0
        b_plus = 0
        b = 0
        b_minus = 0
        c_plus = 0
        c = 0
        c_minus = 0
        d = 0
        f = 0

        for(let i = 0; i < grades.length; i++){
            if(parseFloat(grades[i]) > parseFloat(document.getElementById("max").value)){
                max +=1
            }
            else if(parseFloat(grades[i]) > parseFloat(document.getElementById("a_plus").value)){
                a_plus +=1
            }
            else if(parseFloat(grades[i]) >= parseFloat(document.getElementById("a").value)){
                a +=1
            }
            else if(parseFloat(grades[i]) >= parseFloat(document.getElementById("a_minus").value)){
                a_minus +=1
            }
            else if(parseFloat(grades[i]) >= parseFloat(document.getElementById("b_plus").value)){
                b_plus +=1
            }
            else if(parseFloat(grades[i]) >= parseFloat(document.getElementById("b").value)){
                b +=1
            }
            else if(parseFloat(grades[i]) >= parseFloat(document.getElementById("b_minus").value)){
                b_minus +=1
            }
            else if(parseFloat(grades[i]) >= parseFloat(document.getElementById("c_plus").value)){
                c_plus +=1
            }
            else if(parseFloat(grades[i]) >= parseFloat(document.getElementById("c").value)){
                c +=1
            }
            else if(parseFloat(grades[i]) >= parseFloat(document.getElementById("c_minus").value)){
                c_minus +=1
            }
            else if(parseFloat(grades[i]) >= parseFloat(document.getElementById("d").value)){
                d +=1
            }
            else if(parseFloat(grades[i]) >= parseFloat(document.getElementById("f").value)){
                f +=1
            }   
        }

        document.getElementById("grades").rows[0].cells[1].innerHTML = '|'+ a_plus+'| '
        document.getElementById("grades").rows[1].cells[1].innerHTML = '|'+ a+'| '
        document.getElementById("grades").rows[2].cells[1].innerHTML = '|'+ a_minus+'| '
        document.getElementById("grades").rows[3].cells[1].innerHTML = '|'+ b_plus+'| '
        document.getElementById("grades").rows[4].cells[1].innerHTML = '|'+ b+'| '
        document.getElementById("grades").rows[5].cells[1].innerHTML = '|'+ b_minus+'| '
        document.getElementById("grades").rows[6].cells[1].innerHTML = '|'+ c_plus+'| '
        document.getElementById("grades").rows[7].cells[1].innerHTML = '|'+ c+'| '
        document.getElementById("grades").rows[8].cells[1].innerHTML = '|'+ c_minus+'| '
        document.getElementById("grades").rows[9].cells[1].innerHTML = '|'+ d+'| '
        document.getElementById("grades").rows[10].cells[1].innerHTML = '|'+ f+'| '

        for(let i = 0; i < a_plus; i++){
            document.getElementById("grades").rows[0].cells[1].innerHTML += '&#9726'
        }
        for(let i = 0; i < a; i++){
            document.getElementById("grades").rows[1].cells[1].innerHTML += '&#9726'
        }
        for(let i = 0; i < a_minus; i++){
            document.getElementById("grades").rows[2].cells[1].innerHTML += '&#9726'
        }
        for(let i = 0; i < b_plus; i++){
            document.getElementById("grades").rows[3].cells[1].innerHTML += '&#9726'
        }
        for(let i = 0; i < b; i++){
            document.getElementById("grades").rows[4].cells[1].innerHTML += '&#9726'
        }
        for(let i = 0; i < b_minus; i++){
            document.getElementById("grades").rows[5].cells[1].innerHTML += '&#9726'
        }
        for(let i = 0; i < c_plus; i++){
            document.getElementById("grades").rows[6].cells[1].innerHTML += '&#9726'
        }
        for(let i = 0; i < c; i++){
            document.getElementById("grades").rows[7].cells[1].innerHTML += '&#9726'
        }
        for(let i = 0; i < c_minus; i++){
            document.getElementById("grades").rows[8].cells[1].innerHTML += '&#9726'
        }
        for(let i = 0; i < d; i++){
            document.getElementById("grades").rows[9].cells[1].innerHTML += '&#9726'
        }
        for(let i = 0; i < f; i++){
            document.getElementById("grades").rows[10].cells[1].innerHTML += '&#9726'
        }

}

function lowerBoundCheck(){
        max_bound = parseFloat(document.getElementById("max").value)

        a_plus_bound = parseFloat(document.getElementById("a_plus").value)
        a_bound = parseFloat(document.getElementById("a").value)
        a_minus_bound = parseFloat(document.getElementById("a_minus").value)

        b_plus_bound = parseFloat(document.getElementById("b_plus").value)
        b_bound = parseFloat(document.getElementById("b").value)
        b_minus_bound = parseFloat(document.getElementById("b_minus").value)

        c_plus_bound = parseFloat(document.getElementById("c_plus").value)
        c_bound = parseFloat(document.getElementById("c").value)
        c_minus_bound = parseFloat(document.getElementById("c_minus").value)

        d_bound = parseFloat(document.getElementById("d").value)
        f_bound = parseFloat(document.getElementById("f").value)

        if(f_bound < 0){
            valid = 0
        }
        
        else if(max_bound > a_plus_bound && 
            a_plus_bound > a_bound &&  
            a_bound > a_minus_bound &&
            a_minus_bound > b_plus_bound &&
            b_plus_bound > b_bound &&
            b_bound > b_minus_bound &&
            b_minus_bound > c_plus_bound &&
            c_plus_bound > c_bound &&
            c_bound > c_minus_bound &&
            c_minus_bound > d_bound && 
            d_bound > f_bound){
                valid = 1
            }
        else{
            valid = 0
        }


        if(valid === 0){
            window.alert("Lower Bound Error")
            document.getElementById("max").value = (100).toFixed(2)
    
            document.getElementById("a_plus").value = (95).toFixed(2)
            document.getElementById("a").value = (90).toFixed(2)
            document.getElementById("a_minus").value = (85).toFixed(2)
    
            document.getElementById("b_plus").value = (80).toFixed(2)
            document.getElementById("b").value = (75).toFixed(2)
            document.getElementById("b_minus").value = (70).toFixed(2)
    
            document.getElementById("c_plus").value = (65).toFixed(2)
            document.getElementById("c").value = (60).toFixed(2)
            document.getElementById("c_minus").value = (55).toFixed(2)
    
            document.getElementById("d").value = (50.00).toFixed(2)
            document.getElementById("f").value = (0.00).toFixed(2)
            updateHistogram()
        }
    
    

    
}


updateHistogram()


