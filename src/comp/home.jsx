import React, { useState } from "react";
import "./comp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faCircleUser,
  faHeart,
  faLanguage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import a7 from "../assets/a7.png";
import brand from '../assets/brand.png'
import a10 from "../assets/a10.jpg";
import a8 from "../assets/a8.jpg";
import a3 from "../assets/a3.jpg";

const home = () => {
  const [color, setC] = useState(true);
  function changeColor() {
    if (color) {
      setC(false);
      document.body.style.background ="linear-gradient(to right,rgb(15, 15, 15),#003333)";
      document.querySelector("#para2").style.color = "black";
      document.querySelector("#para").style.backgroundColor = "white";
      document.querySelector("#one1").style.color = "white";
      document.querySelector("#two1").style.color = "white";
      document.querySelector("#m1").style.backgroundColor = "rgb(2, 2, 2)";
      document.querySelector("#m11").style.color = "rgb(255, 255, 255)";
      document.querySelector("#two").style.border = "2px solid rgb(5, 127, 39)";
      document.querySelector("#m11").style.backgroundColor = "rgb(6, 91, 30)";
      document.querySelector("#m12").style.color = "rgb(255, 255, 255)";
      document.querySelector("#m13").style.color = "rgb(255, 255, 255)";
      document.querySelector("#p11").style.color = "rgb(255, 255, 255)";
      document.querySelector("#p11").style.backgroundColor = "rgb(6, 91, 30)";
      document.querySelector("#p12").style.color = "rgb(255, 255, 255)";
      document.querySelector("#p13").style.color = "rgb(255, 255, 255)";
      document.querySelector("#person2").style.color = "rgb(255, 255, 255)";
      document.querySelector("#five1").style.color = "rgb(255, 255, 255)";
      document.querySelector("#m1").style.border = "3px solid white";
      document.querySelector("#seven1").style.border = "3px solid white";
      document.querySelector("#five").style.border = " 2px solid rgb(5, 127, 39)";
      document.querySelector("#nine").style.border = " 2px solid rgb(5, 127, 39)";
      document.querySelector("#five").style.color = "rgb(196, 57, 2)";
      document.querySelector("#nine").style.color = "rgb(196, 57, 2)";
      document.querySelector("#phone").style.color = "rgb(2, 255, 40)";
      document.querySelector("#phone-1").style.color = "white";
      document.querySelector("#ph1").style.color = "white";
      document.querySelector("#seven4").style.color = "white";
      document.querySelector("#six").style.borderBottom ="3px solid rgb(255, 255, 255)";
      document.querySelector("#eight").style.borderBottom ="3px solid rgb(255, 255, 255)";
      document.querySelector("#ph2").style.color = "white";
      document.querySelector("#f1").style.color = "white";
      document.querySelector("#f2").style.color = "white";
      document.querySelector("#f3").style.color = "white";
      document.querySelector("#f4").style.color = "white";
      document.querySelector("#f5").style.color = "white";
      document.querySelector("#f6").style.color = "white";
      document.querySelector("#f7").style.color = "white";
      document.querySelector("#f8").style.color = "white";
      document.querySelector("#f9").style.color = "white";
      document.querySelector("#nine1").style.color = "white";
      document.querySelector("#nine2").style.color = "white";
      document.querySelector("#nine3").style.color = "white";
      document.querySelector("#nine4").style.color = "white";
      document.querySelector("#nine5").style.color = "white";
      document.querySelector("#m2").style.border = "3px solid white";
      document.querySelector("#four").style.borderBottom ="3px solid rgb(255, 255, 255)";
      document.querySelector("#m2").style.backgroundColor = "rgb(2, 2, 2)";
      document.querySelector("#nav").style.backgroundColor = "rgb(2, 2, 2)";
    } else {
      setC(!false);
      document.body.style.background="linear-gradient(to right, #92def4,#b2f9b9)";
      document.querySelector("#para2").style.color = "white";
      document.querySelector("#phone-1").style.color = "black";
      document.querySelector("#five1").style.color = "rgb(0, 0, 0)";
      document.querySelector("#ph1").style.color = "black";
      document.querySelector("#ph2").style.color = "black";
      document.querySelector("#para").style.backgroundColor ="rgba(0, 0, 0, 0.829)";
      document.querySelector("#one1").style.color = "black";
      document.querySelector("#nine").style.color = "black";
      document.querySelector("#nine").style.border = " 2px solid darkred";
      document.querySelector("#six").style.borderBottom ="3px solid rgb(0, 0, 0)";
      document.querySelector("#eight").style.borderBottom ="3px solid rgb(0, 0, 0)";
      document.querySelector("#person2").style.color = "black";
      document.querySelector("#nine1").style.color = "black";
      document.querySelector("#nine2").style.color = "black";
      document.querySelector("#nine3").style.color = "black";
      document.querySelector("#nine4").style.color = "black";
      document.querySelector("#nine5").style.color = "black";
      document.querySelector("#seven4").style.color = "black";
      document.querySelector("#phone").style.color = "rgba(10, 79, 10, 0.785)";
      document.querySelector("#two1").style.color = "black";
      document.querySelector("#two").style.border = " 2px solid darkred";
      document.querySelector("#five").style.border = " 2px solid darkred";
      document.querySelector("#five").style.color = "black";
      document.querySelector("#nav").style.backgroundColor = "rgb(116, 246, 65)";
      document.querySelector("#m1").style.backgroundColor = "white";
      document.querySelector("#m1").style.border = " 3px solid black";
      document.querySelector("#m2").style.border = "3px solid black";
      document.querySelector("#four").style.borderBottom ="3px solid rgb(0, 0, 0)";
      document.querySelector("#m11").style.color = "rgb(0, 0, 0)";
      document.querySelector("#m11").style.backgroundColor ="rgb(183, 241, 154)";
      document.querySelector("#m12").style.color = "rgb(0, 0, 0)";
      document.querySelector("#m13").style.color = "rgb(0, 0, 0)";
      document.querySelector("#m2").style.backgroundColor = "white";
      document.querySelector("#p11").style.color = "rgb(0, 0, 0)";
      document.querySelector("#p11").style.backgroundColor ="rgb(183, 241, 154)";
      document.querySelector("#p12").style.color = "rgb(0, 0, 0)";
      document.querySelector("#p13").style.color = "rgb(0, 0, 0)";
      document.querySelector("#f1").style.color = "black";
      document.querySelector("#seven1").style.border = "3px solid black";
      document.querySelector("#f2").style.color = "black";
      document.querySelector("#f3").style.color = "black";
      document.querySelector("#f4").style.color = "black";
      document.querySelector("#f5").style.color = "black";
      document.querySelector("#f6").style.color = "black";
      document.querySelector("#f7").style.color = "black";
      document.querySelector("#f8").style.color = "black";
      document.querySelector("#f9").style.color = "black";
    }
  }
  const[click,setClick]=useState(true);
  function myLang() {
    if(click){
      setClick(false);
    document.querySelector("#one1").innerHTML = `Solution to Hair Problems,Our hair oil is the perfect solution for hair fall,dull,split ends and dry hair.`;
    document.querySelector("#two1").innerHTML =`Our Hair Oil is a combination of the quality of modern science and the tradition of Indian Ayurveda.It makes your hair healthy from the inside and gives it a beautiful look from the outside,just like your grandmother's home remedies.`
    document.querySelector("#five1").innerHTML = `1. Nourishes the hair roots.`;
    document.querySelector("#f1").innerHTML = `2. Makes the hair stronger.`;
    document.querySelector("#f2").innerHTML = `3. Reduces hair fall.`;
    document.querySelector("#f3").innerHTML = `4. Increases hair growth.`;
    document.querySelector("#f4").innerHTML = `5. Controls dandruff.`;
    document.querySelector("#f5").innerHTML = `6. Prevents split ends.`;
    document.querySelector("#f6").innerHTML = `7. Increases hair shine.`;
    document.querySelector("#f7").innerHTML = `8. Improves the thickness of the hair.`;
    document.querySelector("#f8").innerHTML = `9. Increases blood circulation in the scalp.`;
    document.querySelector("#f9").innerHTML = `10. Lengthens the hair in a natural way.`;
    document.querySelector("#seven4").innerHTML =`When used regularly, this oil promotes hair growth, makes hair thicker and stronger. It also reduces stress, which improves sleep and provides mental peace.`;
    document.querySelector("#nine1").innerHTML = `1. 100% Ayurvedic Formula.`;
    document.querySelector("#nine2").innerHTML = `2. No harmful chemicals.`;
    document.querySelector("#nine3").innerHTML = `3. Suitable for all hair types.`;
    document.querySelector("#nine4").innerHTML = `4. For both men and women.`;
    document.querySelector("#nine5").innerHTML = `5. Travel friendly packing.`;

    }
    else{
      setClick(!false);
      document.querySelector("#one1").innerHTML = `बालों की समस्याओं का समाधान झड़ते, बेजान, दोमुंहे और रुखे बालों के लिए हमारा तेल एक बेहतरीन समाधान है।`;
    document.querySelector("#two1").innerHTML =`हमारा हेयर ऑयल आधुनिक विज्ञान की गुणवत्ता और भारतीय आयुर्वेद की
            परंपरा का मेल है। यह आपके बालों को अंदर से स्वस्थ बनाता है और उन्हें
            बाहर से सुंदर रूप देता है। ठीक वैसे जैसे आपकी दादी-नानी के घरेलू
            नुस्खों में होता था।`
    document.querySelector("#five1").innerHTML = `1. बालों की जड़ों को पोषण देता है।`;
    document.querySelector("#f1").innerHTML = `2. बालों को मजबूत बनाता है।`;
    document.querySelector("#f2").innerHTML = `3. बालों का झड़ना कम करता है।`;
    document.querySelector("#f3").innerHTML = `4. बालों की ग्रोथ को बढ़ाता है।`;
    document.querySelector("#f4").innerHTML = `5. डैंड्रफ को नियंत्रित करता है।`;
    document.querySelector("#f5").innerHTML = `6. दोमुंहे बालों को रोकता है।`;
    document.querySelector("#f6").innerHTML = `7. बालों की चमक बढ़ाता है।`;
    document.querySelector("#f7").innerHTML = `8. बालों की मोटाई में सुधार करता है।`;
    document.querySelector("#f8").innerHTML = `9. स्कैल्प में ब्लड सर्कुलेशन बढ़ाता है।`;
    document.querySelector("#f9").innerHTML = `10. बालों को प्राकृतिक तरीके से लंबा करता है।`;
    document.querySelector("#seven4").innerHTML = `नियमित रूप से उपयोग करने पर यह तेल बालों की ग्रोथ बढ़ाता है, बालों
            को घना और मजबूत बनाता है। साथ ही यह तनाव को भी कम करता है, जिससे
            नींद में सुधार होता है और मानसिक शांति मिलती है।`;
    document.querySelector("#nine1").innerHTML = `1. 100% आयुर्वेदिक फॉर्मूला।`;
    document.querySelector("#nine2").innerHTML = `2. कोई हानिकारक रसायन नहीं।`;
    document.querySelector("#nine3").innerHTML = `3. सभी बालों के प्रकार के लिए उपयुक्त।`;
    document.querySelector("#nine4").innerHTML = `4. पुरुषों और महिलाओं दोनों के लिए।`;
    document.querySelector("#nine5").innerHTML = `5. यात्रा में ले जाने योग्य पैकिंग।`;

    }
  }
  const[red,setR]=useState(true);
  function col1(){
    if(red){
      setR(false);
      let o=document.querySelector("#d1").style;
      o.color="red";
      o.transition="500ms";
      o.transform= "scaleZ(-1)";
    }
    else{
      setR(!false);
      let b=document.querySelector("#d1").style;
      b.color = "white";
      b.transition="100ms";
      b.transform="scaleZ(-1)";
    }
  }
  function col2(){
    if(red){
      setR(false);
      let m = document.querySelector("#d2").style;
      m.color = "red";
      m.transition = "500ms";
      m.transform = "scaleZ(-1)";
  }
  else{
    setR(!false);
    let v = document.querySelector("#d2").style;
    v.color = "white";
    v.transition = "100ms";
    v.transform = "scaleZ(-1)";
  }
}
  function person1(){
    alert(
      `At Gupta Brothers, we take pride in offering a premium-quality hair oil made from carefully selected natural ingredients that nourish your scalp and promote healthy, strong hair. Our commitment to customer satisfaction goes beyond just quality—we make ordering easy and personal. Simply give us a call, and we will process your order directly with care and attention.

गुप्ता ब्रदर्स में आपका स्वागत है- आपके बालों की प्राकृतिक देखभाल का भरोसेमंद नाम! गुप्ता ब्रदर्स शुद्ध और प्राकृतिक सामग्री से तैयार बेहतरीन हेयर ऑयल पेश करता है, जो आपके बालों की जड़ों को पोषण देता है और बालों को मजबूत व घना बनाता है। हमारे लिए ग्राहक की संतुष्टि सबसे महत्वपूर्ण है, इसलिए हम ऑर्डर प्रक्रिया को आसान और व्यक्तिगत बनाते हैं। बस हमें कॉल करें और आपका ऑर्डर तुरंत लिया जाएगा।`
    );
  }
  return (
    <div>
      <div className="brand">
        <img src={brand} alt="company logo"></img>
      </div>
      <div id="NAV">
        <div id="nav">
          <ul>
            <li id="person">
              <FontAwesomeIcon
                id="person2"
                icon={faCircleUser}
                onClick={person1}
              />
            </li>
            <li id="phone-1">
              <FontAwesomeIcon id="phone" icon={faPhone} />{" "}
              <p id="phone-id">7667365135</p>
            </li>
            <li id="list3">
              <FontAwesomeIcon
                id="ph1"
                icon={faCircleHalfStroke}
                onClick={changeColor}
              />
            </li>
            <li id="select">
              <FontAwesomeIcon id="ph2" onClick={myLang} icon={faLanguage} />
            </li>
          </ul>
        </div>

        <div id="para">
          <pre id="para2">
            This Hair Oil is a natural herbal formula that helps reduce hair
            fall and promotes healthy hair growth | Made with traditional
            ingredients used by tribal communities, this oil nourishes the scalp
            and strengthens hair roots | <b>"Gupta Brothers"</b> brings
            you the goodness of nature in every drop                     यह हेयर ऑयल एक
            प्राकृतिक हर्बल फॉर्मूला है जो बालों के झड़ने को कम करता है और
            स्वस्थ बालों की वृद्धि को बढ़ावा देता है | यह तेल आदिवासी समुदायों
            द्वारा उपयोग की जाने वाली पारंपरिक सामग्रियों से बना है | जो स्कैल्प
            को पोषण देता है और बालों की जड़ों को मजबूत करता है |{" "}
            <b>गुप्ता ब्रदर्स</b> आपके लिए हर बूंद में प्रकृति की
            अच्छाई लाए हैं|
          </pre>
        </div>
      </div>
      <div>
        <div className="change"></div>
        <div id="one">
          <p id="one1">
            बालों की समस्याओं का समाधान झड़ते, बेजान, दोमुंहे और रुखे बालों के
            लिए हमारा तेल एक बेहतरीन समाधान है।
          </p>
        </div>
        <motion.div
          id="m1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <FontAwesomeIcon id="d1" onClick={col1} icon={faHeart} />
          <img src={a8} alt="hair oil 100ml"></img>
          <pre id="m11">
            <del>₹598</del> ₹299/-
          </pre>
          <p id="m12">Upto 50% off</p>
          <p id="m13">For order, Call- 7667365135</p>
        </motion.div>
        <motion.div
          id="m2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <FontAwesomeIcon id="d2" onClick={col2} icon={faHeart} />
          <img src={a3} alt="hair oil 100ml"></img>
          <pre id="p11">
            <del>₹818</del> ₹499/-
          </pre>
          <p id="p12">Upto 61% off</p>
          <p id="p13">For order, Call- 7667365135</p>
        </motion.div>
        <motion.div
          id="two"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <p id="two1">
            हमारा हेयर ऑयल आधुनिक विज्ञान की गुणवत्ता और भारतीय आयुर्वेद की
            परंपरा का मेल है। यह आपके बालों को अंदर से स्वस्थ बनाता है और उन्हें
            बाहर से सुंदर रूप देता है। ठीक वैसे जैसे आपकी दादी-नानी के घरेलू
            नुस्खों में होता था।
          </p>
        </motion.div>
        <motion.div
          id="three"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img src={a7} alt="image of quality"></img>
        </motion.div>
        <div id="four"></div>
        <motion.div
          id="five"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3 id="high">हेयर ऑयल के फायदे (Benefits of Hair Oil)</h3>
          <div id="ego">
            <p id="five1">1. बालों की जड़ों को पोषण देता है।</p>
            <p id="f1">2. बालों को मजबूत बनाता है।</p>
            <p id="f2">3. बालों का झड़ना कम करता है।</p>
            <p id="f3">4. बालों की ग्रोथ को बढ़ाता है।</p>
            <p id="f4">5. डैंड्रफ को नियंत्रित करता है।</p>
            <p id="f5">6. दोमुंहे बालों को रोकता है।</p>
            <p id="f6">7. बालों की चमक बढ़ाता है।</p>
            <p id="f7">8. बालों की मोटाई में सुधार करता है।</p>
            <p id="f8">9. स्कैल्प में ब्लड सर्कुलेशन बढ़ाता है।</p>
            <p id="f9">10. बालों को प्राकृतिक तरीके से लंबा करता है।</p>
          </div>
        </motion.div>
        <div id="six"></div>
        <motion.div
          id="seven"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img id="seven1" src={a10}></img>
          <p id="seven4">
            नियमित रूप से उपयोग करने पर यह तेल बालों की ग्रोथ बढ़ाता है, बालों
            को घना और मजबूत बनाता है। साथ ही यह तनाव को भी कम करता है, जिससे
            नींद में सुधार होता है और मानसिक शांति मिलती है।
          </p>
        </motion.div>
        <div id="eight"></div>
        <motion.div
          id="nine"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h3>विशेषताएँ (Features)</h3>
          <p id="nine1">1. 100% आयुर्वेदिक फॉर्मूला।</p>
          <p id="nine2">2. कोई हानिकारक रसायन नहीं।</p>
          <p id="nine3">3. सभी बालों के प्रकार के लिए उपयुक्त।</p>
          <p id="nine4">4. पुरुषों और महिलाओं दोनों के लिए।</p>
          <p id="nine5">5. यात्रा में ले जाने योग्य पैकिंग।</p>
        </motion.div>
        <div id="ten">
          <p>For any query,Call-7667365135</p>
        </div>
      </div>
    </div>
  );
};

export default home;
