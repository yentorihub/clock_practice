function setTime() {
  const time = new Date();
  const year = time.getFullYear();
  const month = (time.getMonth() + 1).toString().padStart(2, "0");
  const dates = time.getDate().toString().padStart(2, "0");
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const timeH1 = document.querySelector(".time");

  timeH1.innerText = `${year}년${month}월${dates}일
    ${hours}:${minutes}:${seconds}`;
}

setInterval(setTime, 1000);
