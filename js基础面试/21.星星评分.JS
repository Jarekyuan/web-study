// ***评分4.7  则四个全星，一个半星（四舍五入）
function starClasses() {
    // console.log(this);
    const { score } = this;
    const starScore = [];
    // 向starScore添加 1-5 个‘on’
    for (let i = 0; i < Math.floor(score); i++) {
        starScore.push("on");
    }
    // 向starScore添加 0/1 个‘half’
    if (score * 10 - Math.floor(score) * 10 >= 5) {
        starScore.push("half");
    }
    // 向starScore添加 1-5 个‘off’
    while (starScore.length < 5) {
        starScore.push("off");
    }

    return starScore;
}

/*&.on {
    bg-image('./images/stars/star48_on');
  }
  &.half {
    bg-image('./images/stars/star48_half');
  }
  &.off {
    bg-image('./images/stars/star48_off');
  } */