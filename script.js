let txtInput = document.querySelector("#txtInput");
let btnCount = document.querySelector("#btnCount");
let txtOutput = document.querySelector("#txtOutput");

btnCount.addEventListener("click", function(){
    let text = txtInput.value;
    
    let trimmedText = text.trim();
    let count = trimmedText.length;
    
    txtOutput.innerText = count;
    
    console.log(`Original: "${text}"`);
    console.log(`Trimmed: "${trimmedText}"`);
    console.log(`Character count: ${count}`);
});