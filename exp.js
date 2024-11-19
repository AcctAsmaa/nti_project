function toggleEmojiList() {
    var emojiList = document.getElementById("emojiList");
    emojiList.style.display = emojiList.style.display === "block" ? "none" : "block";
  }
  
  function addEmoji(emoji) {
    var inputField = document.querySelector("textarea");
    inputField.value += emoji;
    
    document.getElementById("emojiList").style.display = "none";
  }
  