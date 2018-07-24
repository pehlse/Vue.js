<template>
<div class="calculator">
    <Display value="1000"/>
    <Button label="AC" triple @onClick="clearMemory"/>
    <Button label="/" operation @onClick="setOperation"/>
    <Button label="7" @onClick="addDigit"/>
    <Button label="8" @onClick="addDigit"/>
    <Button label="9" @onClick="addDigit"/>
    <Button label="*" operation @onClick="setOperation"/>
    <Button label="4" @onClick="addDigit"/>
    <Button label="5" @onClick="addDigit"/>
    <Button label="6" @onClick="addDigit"/>
    <Button label="-" operation @onClick="setOperation"/>
    <Button label="1" @onClick="addDigit"/>
    <Button label="2" @onClick="addDigit"/>
    <Button label="3" @onClick="addDigit"/>
    <Button label="+" operation @onClick="setOperation"/>
    <Button label="0" double @onClick="addDigit"/>
    <Button label="." @onClick="addDigit"/>
    <Button label="=" operation @onClick="setOperation"/>
</div>
    
</template>

<script>
import Display from "../components/Display"
import Button from "../components/Button"

export default {
    data: function(){

    },
    components:{Button, Display},
    methods:{
        clearMemory(){
           
        },
        setOperation(operation){
            
        },
        addDigit(n){
            
        }
    }
}
</script>
    
<style>
.calculator{
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
