const $ = document;
const studentsWrapper = $.getElementById("studentsWrapper");

const btnElem = $.getElementById("btnElem");
const students = [
  {
    id: 1,
    name: "آبرون",
  },
  {
    id: 2,
    name: "آذین",
  },
  {
    id: 3,
    name: "اکبری",
  },
  {
    id: 4,
    name: "امیری نژاد",
  },
  {
    id: 5,
    name: "بیدریغ",
  },
  {
    id: 6,
    name: "پرمون",
  },
  {
    id: 7,
    name: "پرویزنژاد",
  },
  {
    id: 8,
    name: "پرهیزکار",
  },
  {
    id: 9,
    name: "پورعسگر",
  },
  {
    id: 10,
    name: "پورعینعلی",
  },
  {
    id: 11,
    name: "تقی زاده",
  },
  {
    id: 12,
    name: "جانفزا",
  },
  {
    id: 13,
    name: "جهانی",
  },
  {
    id: 14,
    name: "حسینی",
  },
  {
    id: 15,
    name: "حمیدی",
  },
  {
    id: 16,
    name: "ربیعی",
  },
  {
    id: 17,
    name: "رضوی",
  },
  {
    id: 18,
    name: "سهرابی",
  },
  {
    id: 19,
    name: "شب نما",
  },
  {
    id: 20,
    name: "صادقی",
  },
  {
    id: 21,
    name: "صفایی",
  },
  {
    id: 22,
    name: "صفری",
  },
  {
    id: 23,
    name: "ظریفی",
  },
  {
    id: 24,
    name: "علیزاده",
  },
  {
    id: 25,
    name: "غلام زاده",
  },
  {
    id: 26,
    name: "فرامین",
  },
  {
    id: 27,
    name: "فلاح",
  },
  {
    id: 28,
    name: "قاسمیان",
  },
  {
    id: 29,
    name: "مرمری",
  },
  {
    id: 30,
    name: "موحدی",
  },
];
const createStudents = () => {
  const studentElements = [];
  students.forEach((student) => {
    const newStudentElement = document.createElement("div");
    newStudentElement.id = student.id;
    newStudentElement.classList.add(
      "student",
      "transition",
      "ease-in-out",
      "duration-300",
      "rounded-xl",
      "hover:shadow-lg",
      "hover:shadow-yellow-500",
      "hover:bg-yellow-600",
      "bg-sky-800",
      "p-3",
      "text-xl",
      "font-bold",
      "text-white",
    );
    newStudentElement.innerHTML = student.name;

    studentsWrapper.append(newStudentElement);
    studentElements.push(newStudentElement);
  });

  return studentElements;
};
const selectStudentFunc = () => {
  if (random == 0) {
    random++;
    let randomStudent = students.find((student) => {
      return student.id == random;
    });
    console.log(random);
    console.log(randomStudent);
  } else if (random == 31) {
    random--;
    let randomStudent = students.find((student) => {
      return student.id == random;
    });
    console.log(random);
    console.log(randomStudent);
  } else {
    let randomStudent = students.find((student) => {
      return student.id == random;
    });
    console.log(random);
    console.log(randomStudent);
  }
};

let studentElements = createStudents();
let random;
const choosing = () => {
  random = Math.floor(Math.random() * 31);
  let myInterval = setInterval(() => {
<<<<<<< HEAD
    let audio = new Audio("../s.mp3");
=======
    let audio = new Audio("/../s.mp3");
>>>>>>> 81e567aed17020bfd5e7577af1488e6dde4c1d7f
    audio.play();
    let preRandom = Math.floor(Math.random() * 29) + 1;
    let preRandom1 = Math.floor(Math.random() * 29) + 1;
    let preRandom2 = Math.floor(Math.random() * 29) + 1;
    let preRandom3 = Math.floor(Math.random() * 29) + 1;
    let preRandom4 = Math.floor(Math.random() * 29) + 1;
    studentElements[preRandom].classList.add("selectedClass");
    studentElements[preRandom1].classList.add("selectedClass");
    studentElements[preRandom2].classList.add("selectedClass");
    studentElements[preRandom3].classList.add("selectedClass");
    studentElements[preRandom4].classList.add("selectedClass");

    setTimeout(() => {
      studentElements[preRandom].classList.remove("selectedClass");
      studentElements[preRandom1].classList.remove("selectedClass");
      studentElements[preRandom2].classList.remove("selectedClass");
      studentElements[preRandom3].classList.remove("selectedClass");
      studentElements[preRandom4].classList.remove("selectedClass");
    }, 150);
  }, 100);

  setTimeout(() => {
    clearInterval(myInterval);

    let randomStudent = selectStudentFunc();
    studentElements[random - 1].classList.add("selectedClass");
  }, 2000);
};
btnElem.addEventListener("click", choosing);
