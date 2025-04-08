const cards = [
    { name: "クワッス", image: "pokepoke_pichan.design/クワッスAR.jpg" },
    { name: "ホゲータ", image: "pokepoke_pichan.design/ホゲータAR.jpg" },
    { name: "ニャオハ", image: "pokepoke_pichan.design/ニャオハAR.jpg" },
    { name: "パモ", image: "pokepoke_pichan.design/パモAR.jpg" },
    { name: "ピカチュウ", image: "pokepoke_pichan.design/ピカチュウAR.jpg" }
  ];
  
  document.getElementById('pack').addEventListener('click', () => {
    const result = cards[Math.floor(Math.random() * cards.length)];
    const cardEl = document.getElementById('card');
    
    // 画像を表示
    const imgElement = document.createElement('img');
    imgElement.src = result.image;
    imgElement.classList.add('card-img');
    
    // テキストを更新
    cardEl.textContent = `あなたの引いたカードは「${result.name}」！`;
    cardEl.className = "card";
    
    if (result.name.includes("レア")) {
      cardEl.classList.add("rare");
    }
    
    // 画像を追加
    cardEl.appendChild(imgElement);
    cardEl.style.display = "block";

   // fadeIn効果を使ってカードを表示
   $(cardEl).fadeIn(500); // 500msでフェードイン
});