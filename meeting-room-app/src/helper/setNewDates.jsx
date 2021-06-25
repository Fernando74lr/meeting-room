
const getAll = async () => {
    const data = await db.collection('times').get();
    let docs = [];
    data.forEach(doc => {
        docs.push({...doc.data(), id: doc.id});
    })
    console.log(docs);
};

const times = [
    ['nine', {available: true, hour: "9:00", order: 1}],
    ['nine_half', {available: true, hour: "9:30", order: 2}],
    ['ten', {available: true, hour: "10:00", order: 3}],
    ['ten_half', {available: true, hour: "10:30", order: 4}],
    ['eleven', {available: true, hour: "11:00", order: 5}],
    ['eleven_half', {available: true, hour: "11:30", order: 6}],
    ['twelve', {available: true, hour: "12:00", order: 7}],
    ['twelve_half', {available: true, hour: "12:30", order: 8}],
    ['thirtheen', {available: true, hour: "13:00", order: 9}],
    ['thirteen_half', {available: true, hour: "13:30", order: 10}],
    ['fourteen', {available: true, hour: "14:00", order: 11}],
    ['fourteen_half', {available: true, hour: "14:30", order: 12}],
    ['fifteen', {available: true, hour: "15:00", order: 13}],
    ['fifteen_half', {available: true, hour: "15:30", order: 14}],
    ['sixteen', {available: true, hour: "16:00", order: 15}],
    ['sixteen_half', {available: true, hour: "16:30", order: 16}],
    ['seventeen', {available: true, hour: "17:00", order: 17}],
    ['seventeen_half', {available: true, hour: "17:30", order: 18}],
    ['eighteen', {available: true, hour: "18:00", order: 19}],
    ['eighteen_half', {available: true, hour: "18:30", order: 20}]
];

const until = (month) => {
    if ([1,3,5,7,8,10,12].includes(month)) return 31;
    if ([4,6,9,11].includes(month)) return 30;
    if (month == 2) return 28;
}

let today = 25;
let month = 6;
let year = 2021;
let date = '';

// This help create new datetimes to the DB.
const setNewDates = () => {
for (today; today <= until(6); today++) {
    console.log(date);
    for (let i = 0; i < times.length; i++) {
        date = `${today}-${month}-${year}`;
        db.collection(`dates/${date}/times`)
            .doc(times[i][0])
            .set(times[i][1]);
        }
    }
}