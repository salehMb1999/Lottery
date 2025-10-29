const $ = document;
const studentsWrapper = $.getElementById("studentsWrapper");

const btnElem = $.getElementById("btnElem");
const students = [
  {
    id: 1,
    name: "آزادبر",
  },
  {
    id: 2,
    name: "آزاده",
  },
  {
    id: 3,
    name: "احمدی",
  },
  {
    id: 4,
    name: "اخباراتی",
  },
  {
    id: 5,
    name: "اسلامی",
  },
  {
    id: 6,
    name: "برزگر",
  },
  {
    id: 7,
    name: "جانپرور",
  },
  {
    id: 8,
    name: "حیدرخواه",
  },
  {
    id: 9,
    name: "خادمی",
  },
  {
    id: 10,
    name: "خلیلیان",
  },
  {
    id: 11,
    name: "خیری",
  },
  {
    id: 12,
    name: "دلیر",
  },
  {
    id: 13,
    name: "رضازاده",
  },
  {
    id: 14,
    name: "روحی",
  },
  {
    id: 15,
    name: "زینالی",
  },
  {
    id: 16,
    name: "سواحلی",
  },
  {
    id: 17,
    name: "شعبان زاده",
  },
  {
    id: 18,
    name: "شعبانیان",
  },
  {
    id: 19,
    name: "علی خوانلو",
  },
  {
    id: 20,
    name: "قرح بخش",
  },
  {
    id: 21,
    name: "کهن قنبریان",
  },
  {
    id: 22,
    name: "محبوب",
  },
  {
    id: 23,
    name: "محمدی",
  },
  {
    id: 24,
    name: "معطر",
  },
  {
    id: 25,
    name: "مهدزاد",
  },
  {
    id: 26,
    name: "میرزایی",
  },
  {
    id: 27,
    name: "نظرانداز",
  },
  // {
  //   id: 28,
  //   name: "قاسمیان",
  // },
  // {
  //   id: 29,
  //   name: "مرمری",
  // },
  // {
  //   id: 30,
  //   name: "موحدی",
  // },
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
  } else if (random == 28) {
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
  random = Math.floor(Math.random() * 28);
  let myInterval = setInterval(() => {
    let audio = new Audio("../s.mp3");
    audio.play();
    let preRandom = Math.floor(Math.random() * 26) + 1;
    let preRandom1 = Math.floor(Math.random() * 26) + 1;
    let preRandom2 = Math.floor(Math.random() * 26) + 1;
    let preRandom3 = Math.floor(Math.random() * 26) + 1;
    let preRandom4 = Math.floor(Math.random() * 26) + 1;
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
