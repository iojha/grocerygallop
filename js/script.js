//listen for return press, when user presses enter, function will run


//--------------------------------CHATBOX FUNCTIONS ------------------------------------------//

document.getElementById("sendtext").addEventListener("keyup",function(event) {
    if (event.keyCode ==13) {
        SendText();
        document.getElementById("sendtext").value='';
    }
});

var knownCommands = [];

var answers = [];

function SendText() {
    //get from text input
    var inputText = String(document.getElementById("sendtext").value);
    document.getElementById("sendtext").value='';
    buyCookies(sceneNumber, inputText);
    buyProduce(sceneNumber, inputText);
    buyMilk(sceneNumber, inputText);
    buyBread(sceneNumber, inputText);
    Checkout(currency, sceneNumber,inputText);
    //call next function 2
    StepOne(knownCommands, inputText);
}

function StepOne(commands, str) {
    
    //Check for known commands 2a
    CheckKnownCom(str);
    
    var text = ConvertString(str);
    
}

function CheckKnownCom(str) {
    var result = knownCommands.indexOf(str);
    if (result >= 0) {
        var a = knownCommands.indexOf(str);
        document.getElementById("textreceiver").innerHTML = "<p>" + answers[a] + "</p>";
        return;
    } else {
        document.getElementById("textreceiver").innerHTML = "<p>Sorry, I don't understand that command.</p>";
    }
}

function ConvertString(str) {
    //define vars
    var text="";//orNaN
    var i;
    var n;
    
    for(i=0; i < str.length;i++){
        n = str.charCodeAt(i);
        text += n;
    }
    return text;
}


//View all commands

function printCommands() {
    var commands;
    for(var i=0;i < knownCommands.length;i++) {
        commands += "<br>" + knownCommands[i];
    }
    document.getElementById("textreceiver").innerHTML = commands;
}


function hideChatInput() {
    document.getElementById("chatInput").style.display = 'none';
}
    
function showChatInput() {
    document.getElementById("chatInput").style.display = 'block';
}




//----------------------------------- MAINSTAGE FUNCTIONS -------------------------------------------//

var list = [
    {name: "Girl Scout Cookies", price: 10},
    {name: "Argula", price: 5},
    {name: "Weed", price: 40},
    {name: "Kale", price: 5},
    {name: "Johnny Frank's", price: 6},
    {name: "Soy Milk", price: 5},
    {name: "Maestro Matt's", price: 5},
    {name: "Gluten-Free Bread", price: 6},
    {name: "French Bread", price: 5},
    {name: "Wheat Bread", price: 4}
];

var dollar;

var itemIndex; 
    
var cart = [];
    
var currency = 100;

var total = 0;

var allScenes = 
		[{
		storyNumber: 0,  
        sceneTitle: "Grocery Entrance",
        sceneImage: "img/groceryfront.jpg",
		backgroundImage: "img/Girl-Scout.jpg", //id for image is "mainimage"
            intro: "As you approach the grocery store with shopping list in hand, you hear a young but persistent voice demand your attention.  Surveying the area around the entryway, you see a girl scout in her familiar, merit badge riddled uniform hawking cookies at a table.  Nobody can turn down thin mints.  She asks,'Would you like to buy some cookies?!?! Please type 'yes' or 'no'.",
		chatBoxInput: ['yes',
                         'no',
                         'help'], 
		chatBoxOutput: ["Thank you very much! Your purchase will help bring Polar Bears to Vail! You know they’re an endangered species in the northern climates. I think Colorado has much to offer! I love Polar Bears. I watched a show about them on National Geographic.",
               
                          "That makes me very sad. Please stop by on your next grocery trip.",
                          
"Did you know that it costs $15 a year to feed a Polar Bear? If your budget is tight, would you mind donating to our Polar Bear fund? Your donation would help me get the Polar Bear badge… See!",
                        
"Your choices for this scence are 'yes' or 'no.'"
], //id "textreceiver"
        buttonText: "Next" },
        {
		storyNumber: 1,  
        sceneTitle: "Produce",
        sceneImage: "img/Produce.jpg",
		backgroundImage: "img/producechoices.jpg", //id for image is "mainimage"
            intro: "You've made it past the adorable Girl Scouts! You've started your Grocery Gallup, and you're leafing your way towards the kale. You usually buy Kale since you read about it in Boulder Weekly magazine. You approach the produce section only to find a dizzying array of gourds and greens.  There are more types of vegetables and fruits than you can count!  You approach the section that looks like it contains the leafy greens.  However, the labels have been mixed up!  You can’t tell which is which, and you specifically need organic Kale, so choose carefully. Please type '1', '2', or '3'.",
		chatBoxInput: ["1","2","3","help"], 
		chatBoxOutput: ["Hmmmm okay.  I think that is kale.  I’m not really sure though.  Just feed it to your kids and let’s see how it turns out.", "Duuuuuuuuuuuuude.", "Yummy!  Your kids will love that.  You’ve selected the kale.  We really need to get our label machine fixed."],
            buttonText: "Next" , //id "textreceiver"
         },
        {
		storyNumber: 2,  
        sceneTitle: "Dairy",
        sceneImage: "img/Dairy.jpg",
		backgroundImage: "img/dairychoice.jpg", //id for image is "mainimage"
            intro: "You still have a few more items on your list. What’s next? Milk. You haven't bought regular milk since the mid 1990s. You are on your way to find the most responsibly sourced, freshest soy milk on the market. With Jeni’s Ice Cream recent outbreak of Listeria monocytogenes top of mind, quality is paramount! Choose the name of the soy milk to learn more about it, or enter the number of the soy milk to buy it. Please type '1', '2', or '3'.",
		chatBoxInput: ["1","2","3", "johnny", "active", "maestro", "help"], 
		chatBoxOutput: ["Are you sure that's soy milk?  Suit yourself.", "Good choice.  Always go local.","Moon milk?  So not local brah.","Jonny Franks’ Soy Milk originates from the fattest cows in the world. Located in what’s known as the armpit of America, Johnny's farm boosts the healthiest grass feed cows in all of the state of New Jersey. It all starts with a strong devotion to quality. This milk won the Milker’s Choice Award of 2015." , "Active Dan’s Soy Milk can only be found in three grocery stores worldwide. Many refer to it as a delicacy for its natural flavor and nutty top notes. Dan’s milk is unique because of the intimate relationship his farm has established with local nonprofits. 10% of each soy milk purchase is donated to one of ten nonprofits in Colorado." , "Maestro Matt’s Soy Milk is inspired by an iconic figure in Greek Mythology who uses his powers to control technology-enabled devices. This brand uses creative methods to market their product and remains most popular with the elderly (age 65+). Maestro Matt’s soy milk is packaged and shipped from the moon. ALL PURCHASES ARE FINAL!", "Your choices for this scene are '1', '2', '3', 'johnny', 'active', and 'maestro'"], //id "textreceiver"
         buttonText: "Next" ,
        },
        {
		storyNumber: 3,
        sceneTitle: "Bakery",
        sceneImage: "img/Bakery.jpg",
		backgroundImage: "img/GettingHitOn.jpg", //id for image is "mainimage"
            intro: "Suzy, you need to maintain your status as a Boulder foodie. Therefore, you must purchase some delicious fresh baked bread. You make your way to the bakery aisle. As you near the Bakery section, you accidentally make eye contact with an unsavory gentlemen. You are distracted by his comb-over, dirty mustache and his wandering eye towards your yoga pants.Unsettled, and still searching for gluten free bread, you try to quickly disengage from this man.<br>SKEEZYMAN 'Hey, honey, what are you doing in the bread aisle? Are you on a roll? [Laughter]. Seriously,though, can I get your number?' Please type 'yes' or 'no'.",
		chatBoxInput: ["yes","no"], 
		chatBoxOutput: ["Man takes your phone number(and your number). Game Over", "Good call. Let's get some bread and get out of here"], //id "textreceiver"
         buttonText: "Next" 
        },
        {
		storyNumber: 4, 
        sceneTitle: "Bakery",
        sceneImage: "img/Bakery.jpg",
		backgroundImage: "img/bakerychoice.jpg", //id for image is "mainimage"
            intro: "Your eldest child has celiac disease and you always feel bloated after eating wheat, so you probably want to consider this while making your choice. You make your way to the bakery aisle. Please type '1', '2', or '3'.",
		chatBoxInput: ["1","2","3","help"], 
		chatBoxOutput: ["Perfect! Gluten-free is really the key to a healthy lifestyle, even though you probably don't know what it is.", "Umm... I'm feeling bloated just looking at this. Try again.","Why would anyone eat wheat? Ugh."], //id "textreceiver"
         buttonText: "Next" 
        },
         {
        storyNumber: 5, 
        sceneTitle: "Checkout",
        sceneImage: "img/busycheckout.jpg",
		backgroundImage: "img/checkout_1.jpg", //id for image is "mainimage"
             intro: "You make your way to checkout, gallop on, Suzy! You're almost there! The checkout aisle is chalk full of people, as you get in line, now would be a good time to make sure you have all of your grocery store items.  Type 'checkout' when you're ready to pay.",
		chatBoxInput: ["checkout"],
		chatBoxOutput: ["Click the button below to play again."], //id "textreceiver"
    buttonText: "Play Again"
         },
                 {
        storyNumber: 6, 
        sceneTitle: "Checkout",
        sceneImage: "img/busycheckout.jpg",
		backgroundImage: "img/checkout_1.jpg", //id for image is "mainimage"
             intro: "",
                     
         		chatBoxInput: ["1", "2"],
		chatBoxOutput: ["You've won!", "You lost!"], //id "textreceiver"            
    buttonText: "Play Again"
         },
        
        ];


var sceneNumber = -1;
var currentChatInput = [];
var currentChatOutput = [];

function changeScene(){
    showChatBox();
    showMyLocation();
    hideNextButton();
    if(allScenes.length>sceneNumber) {
        sceneNumber++;
    }
	addButtonText(sceneNumber);
    showChatInput();
}

function showChatBox(){
    document.getElementById('intro').style.display = 'none';
    document.getElementById('test').style.display = 'block';
}

function showMyLocation () {
    document.getElementById('mylocation').style.display= 'block';
}

function addButtonText(sceneNumber) {
    document.getElementById("start").innerHTML = allScenes[sceneNumber].buttonText;
    addBackground(sceneNumber);
}

function addBackground(sceneNumber) {
    var backImage = allScenes[sceneNumber].backgroundImage;
    document.getElementById('mainimage').src = backImage;
    addIntro(sceneNumber);
}


function addIntro(sceneNumber) {
    document.getElementById("textreceiver").innerHTML = allScenes[sceneNumber].intro;
    addChatBoxInput(sceneNumber);
}


function addChatBoxInput(sceneNumber) {
    knownCommands = allScenes[sceneNumber].chatBoxInput;
    addChatBoxOutput(sceneNumber);
}


function addChatBoxOutput(sceneNumber) {
    answers = allScenes[sceneNumber].chatBoxOutput;
    RandomizerApply(sceneNumber);
    addSceneTitle(sceneNumber);
}

function addSceneTitle(sceneNumber) {
    var sceneheader = allScenes[sceneNumber].sceneTitle;
    document.getElementById('scenetitle').innerHTML = sceneheader;
    changeSceneImage(sceneNumber);
}

function changeSceneImage(sceneNumber) {
    var sceneimage = allScenes[sceneNumber].sceneImage;
    document.getElementById('sceneLocation').src = sceneimage;
}

function hideNextButton() {
    document.getElementById("start").style.display = 'none';
}
    
function showNextButton() {
    document.getElementById("start").style.display = 'block';
}



//------------------------------- SHOPPING CART FUNCTIONS -----------------------------------------//





function buyCookies(sceneNumber,inputText) {
    if(sceneNumber==0 && inputText=="yes") {
        ChangeCurrency(0);
        ChangeTotal(list[0].price);
        AddToCart(0);
        hideChatInput();
    } else {
        hideChatInput();
    }
}

 

function buyProduce(sceneNumber,inputText) {
    if(sceneNumber==1 && inputText=="1") {
        ChangeCurrency(0);
        ChangeTotal(list[1].price);
        AddToCart(1);
        hideChatInput();
    } else if (sceneNumber==1 && inputText=="2") {
        ChangeCurrency(0);
        ChangeTotal(list[2].price);
        AddToCart(2);
        hideChatInput();
    } else if (sceneNumber==1 && inputText=="3") {
        ChangeCurrency(0);
        ChangeTotal(list[3].price);
        AddToCart(3);
        hideChatInput();
    }
    
    showNextButton();
}

function buyMilk(sceneNumber,inputText) {
    if(sceneNumber==2 && inputText=="1") {
        ChangeCurrency(0);
        ChangeTotal(list[4].price);
        AddToCart(4);
        hideChatInput();
    } else if (sceneNumber==2 && inputText=="2") {
        ChangeCurrency(0);
        ChangeTotal(list[5].price);
        AddToCart(5);
        hideChatInput();
    } else if (sceneNumber==2 && inputText=="3") {
        ChangeCurrency(0);
        ChangeTotal(list[6].price);
        AddToCart(6);
        hideChatInput();
    }
    
    showNextButton();
}

function avoidCreeper(sceneNumber,inputText) {
    if(sceneNumber==3 && inputText=="yes") {
        hideNextButton();
        hideChatInput();
    } else {
        showNextButton();
    }
}

function buyBread(sceneNumber,inputText) {
    if(sceneNumber==4 && inputText=="1") {
        ChangeCurrency(0);
        ChangeTotal(list[7].price);
        AddToCart(7);
        hideChatInput();
    } else if (sceneNumber==4 && inputText=="2") {
        ChangeCurrency(0);
        ChangeTotal(list[8].price);
        AddToCart(8);
        hideChatInput();
    } else if (sceneNumber==4 && inputText=="3") {
        ChangeCurrency(0);
        ChangeTotal(list[9].price);
        AddToCart(9);
        hideChatInput();
    }
    
    showNextButton();
}


function Checkout(currency, sceneNumber, inputText) {
    
    showNextButton();
    CheckoutFinal(currency, sceneNumber);
}

function CheckoutFinal(currency, sceneNumber) {
    
    sceneNumber++; 
    
       if(sceneNumber == (allScenes.length-1) && currency >= 0) {
       var text1 = "You have enough money and you have completed your shopping list!  You've won grocery gallop.  You are a super shopper who has brought tremedous honor this his/her family.";
           bootbox.alert(text1);
           hideNextButton();
           playAgain();
    } else if (sceneNumber == (allScenes.length-1) && currency < 0) {
        var text2 ="You have made it to the checkout clerk...but TOO BAD!.  You don't have enough money!  You have failed the Grocery Gallop!  Try again.";
       // document.getElementById("textreceiver").innerHTML = text2;
        bootbox.alert(text2);
        hideNextButton();
        playAgain();
    }  
    
    var text = '';
    document.getElementById("textreceiver").innerHTML = text;
}


function ChangeCurrency(dollar){
    currency -= dollar;
    UpdateCurrency(currency);
}
      
function UpdateCurrency(currency){
    document.getElementById("currency").innerHTML = currency; 
}

function ChangeTotal(dollar) {
    total  += dollar;
    UpdateTotal();  
}

function UpdateTotal(total) {
    document.getElementById("myTotal").innerHTML = "$"+total;
}

function addRow(itemIndex) {
    var row = document.createElement('tr'); // create row node
    var col1 = document.createElement('td'); // create column node
    var col2 = document.createElement('td'); // create second column node
            
    row.appendChild(col1); // append first column to row
    row.appendChild(col2); // append second column to row
    
    col1.innerHTML = list[itemIndex].name; 
    col2.innerHTML = "$"+list[itemIndex].price; // put data in second column
    
    var table = document.getElementById("cart"); // find table to append to
    table.appendChild(row); // append row to table
}
          
    
function AddToCart(itemIndex){
    var dollar = list[itemIndex].price
    cart.push(list[itemIndex].name);
    addRow(itemIndex);
    ChangeCurrency(dollar);
    UpdateTotal(total);
}


function playAgain() {
   document.getElementById("playagain").style.display = 'block';
}


//-----------------------------------------RANDOMIZER -----------------------------------------------------//
var interactions =['A shelf falls on you','Your yoga pants rip', ,'You have a cart collison', , 'Someone just robbed you!', 'You just found a coupon for $20!', 'You just found a coupon for $10!'];
var currentInteraction = "";

function Randomizer(){

	for (var i = 0; i < interactions.length; i++){
		var randomIdx = Math.floor(Math.random() * interactions.length);
	}

	
	
	currentInteraction = interactions.splice(randomIdx, 1);	
	return currentInteraction;
}


//RANDOMIZER APPLY()

function RandomizerApply(sceneNumber){
Randomizer();
if (sceneNumber >0 && sceneNumber < allScenes.length-1) {
	if (currentInteraction == "A shelf falls on you") {
	bootbox.alert("A shelf just fell on you! You lose $30.");
	ChangeCurrency(30);
	} else if (currentInteraction == "Your yoga pants rip"){
	bootbox.alert("Oops, your yoga pants just ripped. You need to go get new ones and lose $30.");
	ChangeCurrency(30);
	} else if (currentInteraction == "You have a cart collison"){
	bootbox.alert("Oh no! You just collided with someone else with a full cart! You lose $20.");
	ChangeCurrency(20);
	} else if (currentInteraction == "Someone just robbed you!"){
	bootbox.alert("Someone just robbed you of $30. Sorry and hope you find a coupon to make up for it!");
	ChangeCurrency(30);
	} else if (currentInteraction == "You just found a coupon for $20!"){
	bootbox.alert("Hey, good job! You just found a coupon for $20!");
	ChangeCurrency(-20);
	} else if (currentInteraction == "You just found a coupon for $10!"){
	bootbox.alert("You just found a coupon for $10!");
	ChangeCurrency(-10);
	} else {
		console.log("-1");
		}
	}
}


