class Calculator{
    constructor(previousbuttons,currentbuttons)
    {
        this.previousbuttons=previousbuttons
        this.currentbuttons=currentbuttons
        this.clear()
    }

    clear() {
       this.currentOperand=' '
       this.previousOperand=' '
       this.operation=undefined
    } 
    
    delete(){
         this.currentOperand=this.currentOperand.toString().slice(0,-1)
    }

    appendnumber(number)
    {     
        if(number==='.'&& this.currentOperand.includes('.'))return
        this.currentOperand=this.currentOperand.toString()+ number.toString()
    }

    chooseoperation(operation){
        if(this.currentOperand === '')return
        if(this.previousOperand !==''){
            this.compute()
        }
        this.operation=operation
        this.previousOperand=this.currentOperand
        this.currentOperand=' '

    }

    compute(){
        let computation
        const prev=parseFloat(this.previousOperand)
        const current=parseFloat(this.currentOperand)
        if(isNaN(prev)|| isNaN(current))return
        switch(this.operation){
            case '+':
                computation=prev + current
                break
            case '-':
                    computation=prev - current
                    break
            case '*':
                computation=prev * current
                break
            case '/':
                computation=prev / current
                break
            default:
                return     
        }

        this.currentOperand=computation
        this.operation=undefined
        this.previousOperand=' '
    }

    updatedisplay(){
           this.currentbuttons.innerText=this.currentOperand
        
           this.previousbuttons.innerText=this.previousOperand
           
    }
}
    






const numberbuttons=document.querySelectorAll('[data-numbers]')
const operationbuttons=document.querySelectorAll('[data-operations]')
const equalsbuttons=document.querySelector('[data-equals]')
const clearbuttons=document.querySelector('[data-all-clear]')
const previousbuttons=document.querySelector('[data-previous-operand]')
const currentbuttons=document.querySelector('[data-current-operand]')
const deletebuttons=document.querySelector('[data-delete]')


const calculator= new Calculator(previousbuttons,currentbuttons)


numberbuttons.forEach(button=>{
    button.addEventListener('click',() => {
        calculator.appendnumber(button.innerText)
        calculator.updatedisplay()
    })
})

operationbuttons.forEach(button=>{
    button.addEventListener('click',() => {
        calculator.chooseoperation(button.innerText)
        calculator.updatedisplay()
    })
})

equalsbuttons.addEventListener('click',button =>
{
    calculator.compute()
    calculator.updatedisplay()
}
)

clearbuttons.addEventListener('click',button=>{
    calculator.clear()
    calculator.updatedisplay()
})


deletebuttons.addEventListener('click',button=>{
    calculator.delete()
    calculator.updatedisplay()
})
    













