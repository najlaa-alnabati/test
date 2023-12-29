
let currentPositionIndexLayer1 = 0;
let currentPositionIndexLayer2 = 0;
let currentPositionIndexLayer3 = 0;
let currentPositionIndexLayer4 = 0;
let currentPositionIndexLayer5 = 0;

const fixedTextsLayer1 = ['المبادرات والمشاريع'];

const fixedTextsLayer2 = ['مجالات العمل'];

const fixedTextsLayer3 = ['محورية الضيف'];

const fixedTextsLayer4 = ['مثابة رحلة الضيف'];

const fixedTextsLayer5 = ['المحاور'];


const rectangleTextsLayer1 = [
  ...fixedTextsLayer1,
  'فرص',
  'تحديات',
  'خبرات',
  'تقنيات'
];

const rectangleTextsLayer2 = [
  ...fixedTextsLayer2,
  'الإدارية',
  'الاقتصادية',
  'النظامية'
];

const rectangleTextsLayer3 = [
  ...fixedTextsLayer3,
  'توقعات',
  'رغبات',
  'احتياجات'
];

const rectangleTextsLayer4 = [
  ...fixedTextsLayer4,
  'الفكرة',
  'بلد الضيف',
  'المنافذ',
  'بين المدن',
  'مكة المكرمة',
  'المسجد الحرام',
  'المشاعر المقدسة',
  'المدينة المنورة',
  'المسجد النبوي',
  'الذكرى'
];


const rectangleTextsLayer5 = [
  ...fixedTextsLayer5,
  'الشرعي',
  'البشر',
  'الاقتصاد',
  'العمران',
  'البيئية',
  'الأمن',
  'إدارة المنظمومة'
];


function switchPositionsLayer1() {
  const rectanglesLayer1 = document.querySelectorAll('.layer-1 .slice-rect');

  rectanglesLayer1.forEach((rectangle, index) => {
    if (!fixedTextsLayer1.includes(rectangle.textContent)) {
      const newIndex = (index - fixedTextsLayer1.length + currentPositionIndexLayer1) % (rectangleTextsLayer1.length - fixedTextsLayer1.length) + fixedTextsLayer1.length;
      rectangle.textContent = rectangleTextsLayer1[newIndex];
    }
  });

  const textBox = document.getElementById('myTextField');
  textBox.value = rectangleTextsLayer1[(currentPositionIndexLayer1 + fixedTextsLayer1.length - 1) % (rectangleTextsLayer1.length - fixedTextsLayer1.length) + fixedTextsLayer1.length];

  currentPositionIndexLayer1 = (currentPositionIndexLayer1 + 1) % (rectangleTextsLayer1.length - fixedTextsLayer1.length);
}   

function switchPositionsLayer2() {
  const rectanglesLayer2 = document.querySelectorAll('.layer-2 .slice-rect');

  rectanglesLayer2.forEach((rectangle, index) => {
    if (!fixedTextsLayer2.includes(rectangle.textContent)) {
      rectangle.textContent = rectangleTextsLayer2[(index - fixedTextsLayer2.length + currentPositionIndexLayer2) % (rectangleTextsLayer2.length - fixedTextsLayer2.length) + fixedTextsLayer2.length];
    }
  });

  const textBox = document.getElementById('myTextField2');
  textBox.value = rectangleTextsLayer2[currentPositionIndexLayer2 % (rectangleTextsLayer2.length - fixedTextsLayer2.length) + fixedTextsLayer2.length];

  currentPositionIndexLayer2 = (currentPositionIndexLayer2 + 1) % (rectangleTextsLayer2.length - fixedTextsLayer2.length) + fixedTextsLayer2.length;
}

function switchPositionsLayer3() {
  const rectanglesLayer3 = document.querySelectorAll('.layer-3 .slice-rect');

  rectanglesLayer3.forEach((rectangle, index) => {
    if (!fixedTextsLayer3.includes(rectangle.textContent)) {
      rectangle.textContent = rectangleTextsLayer3[(index - fixedTextsLayer3.length + currentPositionIndexLayer3) % (rectangleTextsLayer3.length - fixedTextsLayer3.length) + fixedTextsLayer3.length];
    }
  });

  const textBox = document.getElementById('myTextField3');
  textBox.value = rectangleTextsLayer3[currentPositionIndexLayer3 % (rectangleTextsLayer3.length - fixedTextsLayer3.length) + fixedTextsLayer3.length];

  currentPositionIndexLayer3 = (currentPositionIndexLayer3 + 1) % (rectangleTextsLayer3.length - fixedTextsLayer3.length) + fixedTextsLayer3.length;
}




function switchPositionsLayer4() {
  const rectanglesLayer4 = document.querySelectorAll('.layer-4 .slice-rect');

  rectanglesLayer4.forEach((rectangle, index) => {
    if (!fixedTextsLayer4.includes(rectangle.textContent)) {
      const newIndex = (index - fixedTextsLayer4.length + currentPositionIndexLayer4) % (rectangleTextsLayer4.length - fixedTextsLayer4.length) + fixedTextsLayer4.length;
      rectangle.textContent = rectangleTextsLayer4[newIndex];
    }
  });

  const textBox = document.getElementById('myTextField4');
  textBox.value = rectangleTextsLayer4[(currentPositionIndexLayer4 + fixedTextsLayer4.length - 1) % (rectangleTextsLayer4.length - fixedTextsLayer4.length) + fixedTextsLayer4.length];

  const selectedText = rectangleTextsLayer4[(currentPositionIndexLayer4 + fixedTextsLayer4.length - 1) % (rectangleTextsLayer4.length - fixedTextsLayer4.length) + fixedTextsLayer4.length];

  const imageContainer = document.getElementById('imageContainer');
  const imageElement1 = document.getElementById('imageElement1');

  const imageContainer2 = document.getElementById('imageContainer2');
  const imageElement2 = document.getElementById('imageElement2');

  const imageContainer3 = document.getElementById('imageContainer3');
  const imageElement3 = document.getElementById('imageElement3');

  const imageContainer4 = document.getElementById('imageContainer4');
  const imageElement4 = document.getElementById('imageElement4');

  const imageContainer5 = document.getElementById('imageContainer5');
  const imageElement5 = document.getElementById('imageElement5');

  const imageContainer6 = document.getElementById('imageContainer6');
  const imageElement6 = document.getElementById('imageElement6');

  const imageContainer7 = document.getElementById('imageContainer7');
  const imageElement7 = document.getElementById('imageElement7');

  const imageContainer8 = document.getElementById('imageContainer8');
  const imageElement8 = document.getElementById('imageElement8');

  const imageContainer9 = document.getElementById('imageContainer9');
  const imageElement9 = document.getElementById('imageElement9');

  const imageContainer10 = document.getElementById('imageContainer10');
  const imageElement10 = document.getElementById('imageElement10');



  if (selectedText === 'بلد الضيف') {
    imageContainer.style.display = 'block'; // Show the image container
    imageElement1.src = 'map.png'; // Set the image source
    textForEarth.style.display = 'block'; // Show text for Earth image
  } else {
    imageContainer.style.display = 'none'; // Hide the image container
    textForEarth.style.display = 'none'; // Show text for Earth image
  }

  if (selectedText === 'المنافذ') {
    imageContainer2.style.display = 'block'; // Show the image container
    imageElement2.src = 'airport1.png'; // Set the image source
    textForAirport.style.display = 'block'; // Show text for Earth image
  } else {
    imageContainer2.style.display = 'none'; // Hide the image container
    textForAirport.style.display = 'none'; // Show text for Earth image
  }

  if (selectedText === 'بين المدن') {
    imageContainer3.style.display = 'block'; // Show the image container
    imageElement3.src = 'buses.png'; // Set the image source
    textForBuses.style.display = 'block'; // Show text for Earth image
  } else {
    imageContainer3.style.display = 'none'; // Hide the image container
    textForBuses.style.display = 'none'; // Show text for Earth image
  }

  if (selectedText === 'مكة المكرمة') {
    imageContainer4.style.display = 'block'; // Show the image container
    imageElement4.src = 'mecca2.png'; // Set the image source
    textForMecca.style.display = 'block'; // Show text for Earth image
  } else {
    imageContainer4.style.display = 'none'; // Hide the image container
    textForMecca.style.display = 'none'; // Show text for Earth image
  }


  if (selectedText === 'المسجد الحرام') {
    imageContainer5.style.display = 'block'; // Show the image container
    imageElement5.src = 'kabah2.png'; // Set the image source
    textForKabah.style.display = 'block'; // Show text for Earth image
  } else {
    imageContainer5.style.display = 'none'; // Hide the image container
    textForKabah.style.display = 'none'; // Show text for Earth image
  }

  if (selectedText === 'المشاعر المقدسة') {
    imageContainer6.style.display = 'block'; // Show the image container
    imageElement6.src = 'holy_sites.png'; // Set the image source
    textForHolysites.style.display = 'block'; // Show text for Earth image
  } else {
    imageContainer6.style.display = 'none'; // Hide the image container
    textForHolysites.style.display = 'none'; // Show text for Earth image
  }

  if (selectedText === 'المدينة المنورة') {
    imageContainer7.style.display = 'block'; // Show the image container
    imageElement7.src = 'madinah.png'; // Set the image source
    textForMadinah.style.display = 'block';
  } else {
    imageContainer7.style.display = 'none'; // Hide the image container
    textForMadinah.style.display = 'none';
  }

  if (selectedText === 'المسجد النبوي') {
    imageContainer8.style.display = 'block'; // Show the image container
    imageElement8.src = 'almasjid_alnabawi.png'; // Set the image source
    textForAlmasjidalnabawi.style.display = 'block';
  } else {
    imageContainer8.style.display = 'none'; // Hide the image container
    textForAlmasjidalnabawi.style.display = 'none';
  }

  if (selectedText === 'الفكرة') {
    imageContainer9.style.display = 'block'; // Show the image container
    imageElement9.src = 'preparing.png'; // Set the image source
    textForIdea.style.display = 'block'; // Show text for Earth image
  } else {
    imageContainer9.style.display = 'none'; // Hide the image container
    textForIdea.style.display = 'none';
  }

  if (selectedText === 'الذكرى') {
    imageContainer10.style.display = 'block'; // Show the image container
    imageElement10.src = 'memory4.png'; // Set the image source
    textForMemory.style.display = 'block'; // Show text for Earth image
  } else {
    imageContainer10.style.display = 'none'; // Hide the image container
    textForMemory.style.display = 'none';
  }

  currentPositionIndexLayer4 = (currentPositionIndexLayer4 + 1) % (rectangleTextsLayer4.length - fixedTextsLayer4.length);

}



function switchPositionsLayer5() {
  const rectanglesLayer5 = document.querySelectorAll('.layer-5 .slice-rect');

  rectanglesLayer5.forEach((rectangle, index) => {
    if (!fixedTextsLayer5.includes(rectangle.textContent)) {
      const newIndex = (index - fixedTextsLayer5.length + currentPositionIndexLayer5) % (rectangleTextsLayer5.length - fixedTextsLayer5.length) + fixedTextsLayer5.length;
      rectangle.textContent = rectangleTextsLayer5[newIndex];
    }
  });

  const textBox = document.getElementById('myTextField5');
  textBox.value = rectangleTextsLayer5[(currentPositionIndexLayer5 + fixedTextsLayer5.length - 1) % (rectangleTextsLayer5.length - fixedTextsLayer5.length) + fixedTextsLayer5.length];

  currentPositionIndexLayer5 = (currentPositionIndexLayer5 + 1) % (rectangleTextsLayer5.length - fixedTextsLayer5.length);
}







const arrowLayer1 = document.getElementById('arrowLayer1');
arrowLayer1.addEventListener('click', switchPositionsLayer1);

const arrowLayer2 = document.getElementById('arrowLayer2');
arrowLayer2.addEventListener('click', switchPositionsLayer2);

const arrowLayer3 = document.getElementById('arrowLayer3');
arrowLayer3.addEventListener('click', switchPositionsLayer3);


const arrowLayer4 = document.getElementById('arrowLayer4');
arrowLayer4.addEventListener('click', switchPositionsLayer4);


const arrowLayer5 = document.getElementById('arrowLayer5');
arrowLayer5.addEventListener('click', switchPositionsLayer5);






switchPositionsLayer1(); // Initially set the positions and text for layer 1
switchPositionsLayer2();
switchPositionsLayer3();
switchPositionsLayer4();
switchPositionsLayer5();
