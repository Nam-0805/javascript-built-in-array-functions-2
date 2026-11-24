const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  if (carCollection.includes(carBrand)) {
    return `${carBrand} already exists in position ${carCollection.indexOf(carBrand)+1} in of the car collection.`;
  }
  else {
    // return `new car collection is : ${carCollection.push(carBrand)} .`; มันจะส่งมาแค่ค่าจำนวนใหม่ที่มันเพิ่มเข้าไป คือ 5
    carCollection.push(carBrand);
    return `new car collection is : ${carCollection}.`; //ต้อง return array ที่ใส่ push ด้วย
  } 
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.