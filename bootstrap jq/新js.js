// 省
const selectElement省 = document.querySelector("#省");
const selectElement市 = document.querySelector("#市");
const selectElement区 = document.querySelector("#区");
console.log(selectElement省, selectElement区, selectElement市, "123jjj");

if (selectElement区 && selectElement市 && selectElement省) {
  // 三个元素都不是null或者undefined

  selectElement省.addEventListener("change", (event) => {
    console.log("selectElement省 event: ", event, event.target.value);
    if (
      //当监测到省不为0和不为Please choose an option的时候
      event.target.value &&
      event.target.value !== 0 &&
      event.target.value !== "Please choose an option"
    ) {
      //把市的变为取消disabled，就是变成可选择什么什么市
      selectElement市.disabled = false;
    } else {
      //否则市和区都不能选并且显示Please choose an option
      selectElement市.disabled = true;
      selectElement市.value = "Please choose an option";
      selectElement区.disabled = true;
      selectElement区.value = "Please choose an option";
    }
  });

  selectElement市.addEventListener("change", (event) => {
    console.log("selectElement市 event: ", event, event.target.value);
    if (
      //当监测到市不为0和不为Please choose an option的时候
      event.target.value &&
      event.target.value !== 0 &&
      event.target.value !== "Please choose an option"
    ) {
      //把区的变为取消disabled，就是变成可选择什么什么区
      selectElement区.disabled = false;
    } else {
      //否则区就不能选并且显示Please choose an option
      selectElement区.disabled = true;
      selectElement区.value = "Please choose an option";
    }
  });
}

const onClickContinue = () => {
  location = "./Home.html";     // 当前页面打开
//   window.open('./Home.html')   // 新窗口打开    

// mock画面
};
