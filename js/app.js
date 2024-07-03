function startTheApp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("successfull, now you are in the app");
      resolve();
      reject();
    }, 2000);
  });
}

function openChallengePart(continuation) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (continuation === true) {
        console.log("continuation");
        resolve();
        reject();
      }
    }, 2000);
  });
}

function challenge(continuation) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        "this is your challenge: a^2x + a^2y - 8ax - 8ay + 12x + 12y"
      );
      if (continuation === true) {
        resolve();
        reject();
      }
    }, 2000);
  });
}

function solve1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("= x(a^2 - 8a + 12) + a^2y - 8ay + 12y");
      resolve();
      reject();
    }, 2000);
  });
}

function solve2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("= x(a^2 - 8a + 12) + y(a^2 - 8a + 12)");
      resolve();
      reject();
    }, 2000);
  });
}

function solve3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("= (x + y)(a^2 - 8a + 12)");
      resolve();
      reject();
    }, 3000);
  });
}

function unit() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        "(a^2 - 8a + 12) this part is unit you now what is this unit ?"
      );
      resolve();
      reject();
    }, 3000);
  });
}

function unit2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        "If this part is unity, we should find numbers whose sum = - 8 and whose product = 12"
      );
      resolve();
      reject();
    }, 3000);
  });
}

function unit3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("they numbers are - 2 & - 6");
      resolve();
      reject();
    }, 3000);
  });
}

function solve4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("the final answer = (y + x) (a - 2) (a - 6)");
      resolve();
      reject();
    }, 3000);
  });
}

startTheApp()
  .then(() => openChallengePart(true))
  .then(() => challenge(true))
  .then(() => solve1())
  .then(() => solve2())
  .then(() => solve3())
  .then(() => unit())
  .then(() => unit2())
  .then(() => unit3())
  .then(() => solve4())
  .catch();
