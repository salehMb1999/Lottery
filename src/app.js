const $ = document;
const studentsWrapper = $.getElementById("studentsWrapper");

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

students.forEach((student) => {
  studentsWrapper.insertAdjacentHTML(
    "beforeend",
    `<div class="rounded-xl bg-yellow-500 p-3 text-xl font-bold text-white">
    ${student.name}
  </div>`,
  );
});

const selectStudentFunc = () => {
  let random = Math.floor(Math.random() * 31);
  if(random == 0) {
    random++
    let randomStudent = students.find((student) => {
        return student.id == random;
    });
    console.log(random);
  console.log(randomStudent);
} else if(random == 31) {
    random--
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
selectStudentFunc();
