const codeContainer = document.querySelector(".code-container");
const infoTxt = document.querySelector(".text-container p");
var runBtn = document.querySelector(".run-btn");
const nextBtn = document.querySelector(".next-btn");
const consoleContainer = document.querySelector(".console-container");
const prevBtn = document.querySelector(".prev-btn");

levelPassed = false;
currLevel = 0;
levels = ['Here is where the code will appear <a class="run-btn">RUN</a>','a = <input class="inp1" type="text" spellcheck="false"/><br> b = <input type="text" spellcheck="false" class="inp2"> <a class="run-btn">RUN</a>','a = 1 <br> <input class="inp1" type="text" spellcheck="false"/> <br> <input type="text" spellcheck="false" class="inp2"> <a class="run-btn">RUN</a>'];
infos = ['Hi, Welcome to Snakelet, a beginner Python Tutorial in which you will learn the basics of Python and programming in general. Press RUN to check your answer and Next to continue to the next level.', 'In most programming languages we store information as variables. Variables are names that we choose for some data to use it in our code. For example, a = 5. That would mean every time I use a in my code the computer thinks of it as five. To make a variable with text in it you have to put it in quotes. For example, b = "hi". Now every time I use b in my code the computer thinks of it as "hi". <br> <br> Now it\'s your turn: set the variable a equal to 1 and the variable b equal to Hello.', 'Variables are cool but they are useless if you cant see what they store. Python lets you display data using print. For example, print("Hello World!"). Will display Hello World. Printing variables is as easy as just putting variables into print. For example, print(a). <br><br><br> Now it\'s your turn: print the variable a and print Hello']

prevBtn.addEventListener("click", ()=> {if(currLevel > 0){currLevel -= 1; nextLevel();}});
nextBtn.addEventListener("click",()=>{if(levelPassed){nextLevel()}});
runBtn.addEventListener("click", ()=>{run()});

function run() {
    var inp1 = document.querySelector(".inp1");
    var inp2 = document.querySelector(".inp2");
    switch(currLevel){
        case 0:
            nextBtn.classList.add("active");
            levelPassed = true;
            currLevel += 1;
            break;

        case 1:

            if(inp1.value == '1' && inp2.value == '"Hello"'){
                nextBtn.classList.add("active");
                levelPassed = true;
                currLevel += 1;
                consoleContainer.innerHTML = "Congrats! That is correct!";
            }

            else {
                consoleContainer.innerHTML = "Not Quite. Read the instructions again and try again.";
            }
            break;
        case 2:
            if(inp1.value == 'print(a)' && inp2.value == 'print("Hello")' || inp1.value == 'print("Hello")' && inp2.value == 'print(a)'){
                nextBtn.classList.add("active");
                levelPassed = true;
                currLevel += 1;
                consoleContainer.innerHTML = "1 <br> Hello <br> Congrats! That is correct!";
            }
        
    }
}

function nextLevel() {
    levelPassed = false;
    nextBtn.classList.remove("active");
    codeContainer.innerHTML = levels[currLevel];
    infoTxt.innerHTML = infos[currLevel];
    consoleContainer.innerHTML = "";
    runBtn = document.querySelector(".run-btn");
    runBtn.addEventListener("click", ()=>{run()});
    
}

nextLevel()