// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function showClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero if needed
  const pad = (num) => num.toString().padStart(2, '0');

  // ---------- 24 Hour Format ----------
  const time24 = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  // ---------- 12 Hour Format ----------
  let period = hours >= 12 ? 'PM' : 'AM';
  let hours12 = hours % 12 || 12;
  const time12 = `${pad(hours12)}:${pad(minutes)}:${pad(seconds)} ${period}`;

  console.clear(); // optional, keeps console clean
  console.log("24 Hour:", time24);
  console.log("12 Hour:", time12);

  setTimeout(showClock, 1000);
}

showClock();
