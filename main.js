let my_arr = [
  (students = [
    {
      member_id: 1,
      group_id: 3,
      name: "Elvin",
      surname: "Bagirov",
      hobbies: "observing celestial objects",
      score: 99.8,
    },
    {
      member_id: 2,
      group_id: 2,
      name: "Mirqafar",
      surname: "Seyidov",
      hobbies: "Read books",
      score: 89,
    },
    {
      member_id: 3,
      group_id: 3,
      name: "Nuray",
      surname: "Abbasova",
      hobbies: "writing code",
      score: 91,
    },
    {
      member_id: 4,
      group_id: 2,
      name: "Nuray",
      surname: "Cəfərova",
      hobbies: "Play tennis",
      score: 80,
    },
    {
      member_id: 5,
      group_id: 1,
      name: "Yusif",
      surname: "Alcəfərov",
      hobbies: "counting money",
      score: 89,
    },
    {
      member_id: 6,
      group_id: 1,
      name: "Ayşə",
      surname: "Əhmədova",
      hobbies: "writing code",
      score: 91,
    },
  ]),
  (groups = [
    {
      group_id: 1,
      name: "Səhər",
    },
    {
      group_id: 2,
      name: "Gunorta",
    },
    {
      group_id: 3,
      name: "Axsham",
    },
  ]),
];

let orta = 0;
const aver = my_arr[0].map((student) => (orta += student.score));
orta = Math.round(orta / my_arr[0].length);
console.log(`Tələbələrin ümumi ortalaması: ${orta}`);



let result = "";
function xeberdar_et(data) {
for (i = 0; i < data.length; i++) {data[i].score < 90 ? result +="\n\n" + data[i].name + " " + data[i].surname + " " + data[i].score :'\n';}
}
xeberdar_et(my_arr[0]);
console.log(`\nOrtalaması 90 dan aşağı olan tələbələr ${result}\n\n Zəhmət olmasa yaxşı hazırlaşın !!!`);
