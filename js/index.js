(function() {

    "use strict";
  

    $("#servizi").click(function(e) {
      if(!$("#slider").hasClass("slider-active")) {
        $("#close-container").fadeIn("slow");
        $("#slider").addClass("slider-active");
      }
    })

    $("#close-container").click(function(e) {
      if($("#slider").hasClass("slider-active")) {
        $("#close-container").fadeOut("slow");
        $("#slider").removeClass("slider-active");
      }
    })




    const responses = [
      "मैं आपकी भाषा को समझ नहीं पा रहा हूं",
      "हमें एक अनुवादक की जरूरत है",
      "मुझे लगता है कि हम एक-दूसरे को बेहतर समझेंगे",
      "हम आपके लिए इंतज़ार कर रहे हैं",
      "वास्तव में?",
      "एक",
      "नहीं",
      "हम व्यक्तिगत रूप से मिल सकते हैं",
      "यहां हम नास्तिक हैं",
      "हम देवता हैं",
      "सीनोस आबादी जीते हैं",
      "हमारे होटल में रहें, आपको पछतावा नहीं होगा"
    ];
  
    const submit = document.querySelector(".chat-submit");
    const chatBox = document.querySelector(".chat-box");
    const chatInput = document.querySelector(".chat-input");
  
    // const aiThinking = false;
  
    function chatTemplate(aiOrPerson) {
      return (
        `
          <div class="ai-person-container">
            <div class="${aiOrPerson.class}">
              <p>${aiOrPerson.text}</p>
            </div>
           
          </div>
        `
      );
    }

    //<img src="img/1.jpg" style="border-radius: 50px 50px 50px 50px">
  
    submit.addEventListener("click", function(e) {
      appendChatBox(true);
    });
  
    document.addEventListener("keypress", function(e) {
      if (e.keyCode == "13") {
        appendChatBox(true);
      }
    })
  
    function appendChatBox(fromPerson) {
      console.log(fromPerson);
      if (fromPerson && !chatInput.value.trim()) {
        return;
      }
      const newChatDiv = chatTemplate({
        class: fromPerson ? "person" : "ai",
        text: fromPerson ? chatInput.value.trim() : aiResponse(),
        date: fromPerson ? new Date() : new Date(Date.now() + 2000)
      });
      if (!fromPerson) {
        // make it so it only responds once to multiple fast sentences
        setTimeout(function() {
          chatBox.innerHTML += newChatDiv;
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 2000)
      } else {
        chatBox.innerHTML += newChatDiv;
        chatBox.scrollTop = chatBox.scrollHeight;
      }
      if (fromPerson) {
        chatInput.value = "";
        appendChatBox(false);
      }
    }
  
    function aiResponse() {
      const responseIndex = getRandomInt(0, responses.length - 1);
      const response = responses[responseIndex];
      return response;
    }
  
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
  }())
  
  