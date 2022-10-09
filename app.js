const fortuneResults = {    // money, work, healthの連想配列
  money: [    // money, work, healthはさらに、複数の要素をもっているので配列を設ける
      {    // その中でさらに連想配列
        stars: '★★★',
        detail: '最高の金運です！いつの間にかお金が溜まっているかも・・・？',
      },
      {
        stars: '★★',
        detail: 'まずまず金運です！使いすぎには注意しましょう！',
      },
      {
        stars:'★',
        detail:'悪い傾向が見られます！財布の紐は絞めておくと吉です！',

      },
         ],

  work: [
    {
        stars:'★★★',
        detail:'最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？',
    },
    {
      stars:'★★',
      detail:'まずまず仕事運です！普段通り仕事が進むでしょう！',
    },
    {
      stars:'★',
      detail:'悪い傾向が見られます！自信過剰にならないように注意しましょう',
    },
  ],
  health: [
    {
        stars:'★★★',
        detail:'最高の健康運です！ランニングの距離を伸ばしても良いですね！',
    },
    {
      stars:'★★',
      detail:'まずまず健康運です！無理せず体を動かしましょう！',
    },
    {
      stars:'★',
      detail:'悪い傾向が見られます！ケガにご注意を・・・',
    },
  ],
}

$(function () {

  $('.js-fortune-start').on('click',function() {    // js-fortune-startがあるHTML要素をクリックされたら
    for (let i in fortuneResults) {
        const rand = Math.floor(Math.random() * 3);
        console.log(fortuneResults[i][rand]['stars']);    // fortuneResultsには、stars, detail はそれぞれ3つずつ要素があるので、0～2を指定する
        console.log(fortuneResults[i][rand]['detail']); // fortuneResultsの内容をランダムに表示
          $('.stars').text(fortuneResults[i][rand]['stars']);
          $('.detail').text(fortuneResults[i][rand]['detail']);
      }
            $('.result').show();
            $(this).toggleClass('js-fortune-start');    // 既存のクラスを削除
            $(this).toggleClass('js-fortune-restart');    // 新しいクラスを追加（クラス名は任意。このクラスをclickしたときのイベントを追加すること）
            $(this).text('もう一度占う！');    // HTML要素の値を変える
  });

  $(document).on('click',".js-fortune-start",function() {    // js-fortune-startがあるHTML要素をクリックされたら
            $('.result').hide();
            $(this).toggleClass('.js-fortune-restart');    // 既存のクラスを削除
            $(this).toggleClass('.js-fortune-start');    // 新しいクラスを追加（クラス名は任意。このクラスをclickしたときのイベントを追加すること）
            $(this).text('運勢を占う');    // HTML要素の値を変える
  })
})
