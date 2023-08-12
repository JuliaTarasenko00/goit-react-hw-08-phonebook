import istockphoto from '../../img/istockphoto.jpg';
import mobile from '../../img/mobile.png';
import modern from '../../img/modern.png';
import smartphone from '../../img/smartphone.png';
import smartphoneA from '../../img/smartphoneA.png';
import student from '../../img/student.png';
import woman from '../../img/woman.png';

const RandomImg = () => {
  const img = [
    istockphoto,
    mobile,
    modern,
    smartphone,
    smartphoneA,
    student,
    woman,
  ];

  const random = Math.floor(Math.random() * img.length);
  const randomImage = img[random];
  return <img src={randomImage} alt="login" width="500" loading="lazy" />;
};

export default RandomImg;
